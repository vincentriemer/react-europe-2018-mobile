import React from "react";
import PropTypes from "prop-types";
import {
  TabRouter,
  TabNavigator,
  StackNavigator,
  createNavigator,
  createNavigationContainer,
  DrawerNavigator,
  SafeAreaView,
  withNavigation,
  NavigationActions,
} from "react-navigation";
import withCachedChildNavigation from "react-navigation/src/withCachedChildNavigation";
import SceneView from "react-navigation/src/views/SceneView";
import {
  BackHandler,
  Platform,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
  Button,
  Alert,
  AsyncStorage,
} from "react-native";
import { Constants, BarCodeScanner, Permissions } from "expo";
import { TabViewAnimated } from "react-native-tab-view";
import {
  BorderlessButton,
  RectButton,
  ScrollView,
} from "react-native-gesture-handler";
import ResourceSavingContainer from "react-native-resource-saving-container";
import hoistStatics from "hoist-non-react-statics";

import { Colors, FontSizes, Layout, GQL } from "./constants";
import Screens from "./screens";
import TabBarBottom from "./components/TabBarBottom";
import { SemiBoldText, BoldText } from "./components/StyledText";
import _ from "lodash";
import Schedule from "./data/schedule.json";
import moment from "moment";
import { Provider, Client, Connect, query } from "urql";

const DRAWER_WIDTH = Math.min(Math.max(Layout.window.width - 80, 280), 350);

// const DrawerComponent =
//   Platform.OS === "android" ? DrawerLayoutAndroid : DrawerLayout;

const client = new Client({
  url: GQL.uri,
});

const qrQuery = `
query events($slug: String!, $uuid: String!){
  events(slug: $slug) {
	me(uuid: $uuid){
      mobileMessage
	  answers {
		id
        value
        question {
          id
		  title
        }
	  }
	  firstName
	  lastName
	  email
	  ref
	  shareInfo
      uuid
      id
checkinLists {
        id
        name
        mainEvent
      }
	}
  }
}
`;

const qrContactQuery = `
query events($slug: String!, $uuid: String!, $q: String!){
  events(slug: $slug) {
    attendees(uuid: $uuid, q: $q){
      lastName
      firstName
      id
      email
      answers {
        id
        question{
          id
          title
        }
        value
      }
    }
  }
}
`;
const FullSchedule = Schedule.events[0].groupedSchedule;
let navSchedule = {};
_.each(FullSchedule, (day, i) => {
  navSchedule[day.title] = {
    screen: Screens.ScheduleDay({
      day: day.title,
      date: moment(day.date).format("D"),
    }),
  };
});

const ScheduleNavigation = TabNavigator(navSchedule, {
  lazy: true,
  swipeEnabled: false,
  animationEnabled: false,
  tabBarComponent: TabBarBottom,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: { backgroundColor: "#333" },
    activeTintColor: "#fff",
  },
});

export function connectDrawerButton(WrappedComponent) {
  const ConnectedDrawerButton = (props, context) => {
    return (
      <WrappedComponent
        {...props}
        openDrawer={() => props.navigation.navigate("DrawerOpen")}
        closeDrawer={() => props.navigation.navigate("DrawerClose")}
        toggleDrawer={() => props.navigation.navigate("DrawerToggle")}
      />
    );
  };

  return hoistStatics(ConnectedDrawerButton, WrappedComponent);
}

const DefaultStackConfig = {
  cardStyle: {
    backgroundColor: "#fafafa",
  },
};

const SpeakersNavigation = StackNavigator(
  {
    SpeakerList: {
      screen: Screens.Speakers,
    },
  },
  DefaultStackConfig
);

const CrewNavigation = StackNavigator(
  {
    CrewList: {
      screen: Screens.Crew,
    },
  },
  DefaultStackConfig
);

const SponsorNavigation = StackNavigator(
  {
    SponsorList: {
      screen: Screens.Sponsors,
    },
  },
  DefaultStackConfig
);

const DrawerButton = props => (
  <RectButton
    onPress={props.onPress}
    style={{
      backgroundColor: props.selected ? "rgba(255,255,255,0.1)" : "#333333",
    }}
  >
    <View
      style={{
        height: 50,
        width: DRAWER_WIDTH,
        justifyContent: "center",
        paddingHorizontal: 5,
      }}
    >
      <SemiBoldText style={styles.drawerButtonText}>
        {props.children.toUpperCase()}
      </SemiBoldText>
    </View>
  </RectButton>
);

const DrawerView = ({ items, activeItemKey, onItemPress, navigation }) => (
  <View style={styles.drawerContainer}>
    <View style={styles.drawerHeader}>
      <Image
        source={require("./assets/hero.png")}
        style={{
          height: 140 + Layout.notchHeight,
          width: DRAWER_WIDTH,
          resizeMode: "cover",
        }}
      />
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(23, 127, 100, 0.57)" },
        ]}
      />
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            alignItems: "center",
            justifyContent: "center",
            paddingTop: Layout.notchHeight + 20,
          },
        ]}
      >
        <Image
          source={require("./assets/logo.png")}
          style={{
            width: 200,
            height: 50,
            resizeMode: "contain",
          }}
        />
      </View>
    </View>
    <View style={styles.drawerButtons}>
      {items.map(route => (
        <DrawerButton
          key={route.key}
          selected={route.key === activeItemKey}
          onPress={() => navigation.navigate(route.routeName)}
        >
          {route.routeName}
        </DrawerButton>
      ))}
    </View>
  </View>
);

const DrawerRouteConfig = {
  Home: { screen: Screens.Home },
  Schedule: { screen: ScheduleNavigation },
  Speakers: { screen: SpeakersNavigation },
  Crew: { screen: CrewNavigation },
  Sponsors: { screen: SponsorNavigation },
  Profile: { screen: Screens.Profile },
  Contacts: { screen: Screens.Contacts },
};

const DrawerNavigation = DrawerNavigator(DrawerRouteConfig, {
  contentComponent: DrawerView,
  drawerWidth: DRAWER_WIDTH,
  drawerBackgroundColor: "#333333",
});

class QRScannerModalNavigation extends React.Component {
  state = {
    hasCameraPermission: null,
    isFocused: false,
  };

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted",
    });
  };
  componentDidMount() {
    this._requestCameraPermission();
  }

  willFocusSubscription = undefined;
  willBlurSubscription = undefined;

  componentDidMount() {
    this._requestCameraPermission();

    this.willFocusSubscription = this.props.navigation.addListener(
      "willFocus",
      this._handleFocus
    );
    this.willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      this._handleBlur
    );
  }

  componentWillUnmount() {
    this.willFocusSubscription && this.willFocusSubscription.remove();
    this.willBlurSubscription && this.willBlurSubscription.remove();
  }

  _handleFocus = () => {
    this.setState({ isFocused: true });
  };

  _handleBlur = () => {
    this.setState({ isFocused: false });
  };

  isReading = false;

  _handleBarCodeRead = data => {
    if (this.isReading) return;
    this.isReading = true;

    let variables = { slug: GQL.slug, uuid: data.data };
    let navigation = this.props.navigation;
    client.executeQuery(query(qrQuery, variables), true).then(function(value) {
      let me = value.data.events[0].me;
      AsyncStorage.getItem("@MySuperStore:tickets").then(value => {
        let tickets = null;
        let newTickets = [];
        let found = false;
        if (value === null) {
          tickets = [me];
        } else {
          let existingTickets = JSON.parse(value);
          existingTickets.map((ticket, i) => {
            if (ticket.ref === me.ref) {
              found = true;
              newTickets.push(me);
            } else {
              newTickets.push(ticket);
            }
          });
          if (!found) {
            newTickets.push(me);
          }
          tickets = newTickets;
        }
        let stringifiedTickets = JSON.stringify(tickets);
        AsyncStorage.setItem("@MySuperStore:tickets", stringifiedTickets)
          //AsyncStorage.removeItem('@MySuperStore:tickets')
          .then(value => {
            navigation.navigate("Profile");
          });
      });
      // expected output: Array [1, 2, 3]
    });
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>Scan your ticket QR code!</Text>
        {this.state.isFocused && (
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "stretch",
            }}
          />
        )}
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

@withNavigation
class QRContactScannerModalNavigation extends React.Component {
  state = {
    hasCameraPermission: null,
    isFocused: false,
  };

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted",
    });
  };

  willFocusSubscription = undefined;
  willBlurSubscription = undefined;

  componentDidMount() {
    this._requestCameraPermission();

    this.willFocusSubscription = this.props.navigation.addListener(
      "willFocus",
      this._handleFocus
    );
    this.willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      this._handleBlur
    );
  }

  componentWillUnmount() {
    this.willFocusSubscription && this.willFocusSubscription.remove();
    this.willBlurSubscription && this.willBlurSubscription.remove();
  }

  _handleFocus = () => {
    this.setState({ isFocused: true });
  };

  _handleBlur = () => {
    this.setState({ isFocused: false });
  };

  _handleContactBarCodeRead = data => {
    let navigation = this.props.navigation;
    AsyncStorage.getItem("@MySuperStore:tickets").then(value => {
      let tickets = JSON.parse(value);
      let uuid = "";
      let contactRef = data.data;
      tickets.map(ticket => {
        ticket.checkinLists.map(ch => {
          if (ch.mainEvent) {
            uuid = ticket.uuid;
          }
        });
      });
      let variables = { slug: GQL.slug, uuid: uuid, q: contactRef };
      client
        .executeQuery(query(qrContactQuery, variables), true)
        .then(function(scannedContact) {
          let contact = scannedContact.data.events[0].attendees[0];
          console.log("new contact", contact);
          AsyncStorage.getItem("@MySuperStore:contacts").then(
            storedContacts => {
              let contacts = null;
              let newContacts = [];
              let found = false;
              if (storedContacts === null && contact && contact.firstName) {
                contacts = [contact];
              } else {
                let existingContacts = JSON.parse(storedContacts);
                console.log(
                  "how many existing contacts",
                  existingContacts.length
                );
                existingContacts.map((existingContact, i) => {
                  console.log("existing contact", existingContact);
                  if (existingContact.id === contact.id) {
                    found = true;
                    newContacts.push(contact);
                  } else {
                    newContacts.push(existingContact);
                  }
                });
                if (!found) {
                  newContacts.push(contact);
                }
                contacts = newContacts;
              }
              let stringifiedContacts = JSON.stringify(contacts);
              AsyncStorage.setItem(
                "@MySuperStore:contacts",
                stringifiedContacts
              )
                //AsyncStorage.removeItem('@MySuperStore:tickets')
                .then(value => {
                  navigation.replace("Contacts");
                });
            }
          );
        });
    });
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>Scan a badge's QR code!</Text>
        {this.state.isFocused && (
          <BarCodeScanner
            key="barcode"
            onBarCodeRead={this._handleContactBarCodeRead}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "stretch",
            }}
          />
        )}
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerButtonText: {
    color: "#fff",
    fontSize: FontSizes.normalButton,
    padding: 10,
  },
  drawerButtons: {
    paddingTop: 0,
  },
  drawerNavigationContainer: {},
});

export default StackNavigator(
  {
    Primary: { screen: DrawerNavigation },
    Details: { screen: Screens.Details },
    QRScanner: { screen: QRScannerModalNavigation },
    QRContactScanner: { screen: QRContactScannerModalNavigation },
    TicketInstructions: { screen: Screens.TicketInstructions },
  },
  {
    ...DefaultStackConfig,
    headerMode: "none",
    mode: "modal",
  }
);
