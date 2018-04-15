import React from "react";
import PropTypes from "prop-types";
import {
  TabRouter,
  TabNavigator,
  StackNavigator,
  createNavigator,
  createNavigationContainer
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
  AsyncStorage
} from "react-native";
import { Constants, BarCodeScanner, Permissions } from "expo";
import { TabViewAnimated } from "react-native-tab-view";
import {
  DrawerLayoutAndroid,
  BorderlessButton,
  RectButton
} from "react-native-gesture-handler";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";
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

const DrawerComponent =
  Platform.OS === "android" ? DrawerLayoutAndroid : DrawerLayout;
const client = new Client({
  url: GQL.uri
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
      date: moment(day.date).format("D")
    })
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
    activeTintColor: "#fff"
  }
});

export function connectDrawerButton(WrappedComponent) {
  const ConnectedDrawerButton = (props, context) => {
    return (
      <WrappedComponent
        {...props}
        openDrawer={context.openDrawer}
        closeDrawer={context.closeDrawer}
        toggleDrawer={context.toggleDrawer}
      />
    );
  };

  ConnectedDrawerButton.contextTypes = {
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func,
    toggleDrawer: PropTypes.func
  };

  return hoistStatics(ConnectedDrawerButton, WrappedComponent);
}

const DefaultStackConfig = {
  cardStyle: {
    backgroundColor: "#fafafa"
  }
};

const SpeakersNavigation = StackNavigator(
  {
    SpeakerList: {
      screen: Screens.Speakers
    }
  },
  DefaultStackConfig
);

const CrewNavigation = StackNavigator(
  {
    CrewList: {
      screen: Screens.Crew
    }
  },
  DefaultStackConfig
);

const SponsorNavigation = StackNavigator(
  {
    SponsorList: {
      screen: Screens.Sponsors
    }
  },
  DefaultStackConfig
);

const DrawerRouteConfig = {
  Home: { screen: Screens.Home },
  Schedule: { screen: ScheduleNavigation },
  Speakers: { screen: SpeakersNavigation },
  Crew: { screen: CrewNavigation },
  Sponsors: { screen: SponsorNavigation },
  Profile: { screen: Screens.Profile },
  Contacts: { screen: Screens.Contacts }
};

const DrawerRouter = TabRouter(DrawerRouteConfig);

class DrawerScene extends React.PureComponent {
  state = {
    visible: true,
    me: null
  };

  setVisible = visible => {
    this.setState({ visible });
  };

  render() {
    const { route, screenProps } = this.props;
    const childNavigation = this.props.childNavigationProps[route.key];
    const ScreenComponent = DrawerRouter.getComponentForRouteName(
      route.routeName
    );

    return (
      <ResourceSavingContainer
        style={{ flex: 1, overflow: "hidden" }}
        visible={Platform.OS === "android" ? this.state.visible : true}
      >
        <SceneView
          screenProps={screenProps}
          component={ScreenComponent}
          navigation={childNavigation}
        />
      </ResourceSavingContainer>
    );
  }
}

const DRAWER_WIDTH = Math.min(Math.max(Layout.window.width - 80, 280), 350);
@withCachedChildNavigation
class DrawerView extends React.Component {
  _isDrawerOpen = false;
  _scenes = {};

  static childContextTypes = {
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func,
    toggleDrawer: PropTypes.func
  };

  getChildContext() {
    const openDrawer = options => this._drawerRef.openDrawer(options);
    const closeDrawer = options => this._drawerRef.closeDrawer(options);
    const toggleDrawer = options =>
      this._isDrawerOpen ? closeDrawer(options) : openDrawer(options);

    return {
      openDrawer,
      closeDrawer,
      toggleDrawer
    };
  }

  componentDidMount() {
    if (Platform.OS === "ios") {
      return;
    }

    BackHandler.addEventListener("hardwareBackPress", this._onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this._onBackPress);
  }

  _onBackPress = () => {
    if (this._drawerIsOpen) {
      this._drawerRef.closeDrawer();
      return true;
    }

    return false;
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.state !== this.props.navigation.state) {
      const currentRoute = this.props.navigation.state.routes[
        this.props.navigation.state.index
      ];
      const nextRoute =
        nextProps.navigation.state.routes[nextProps.navigation.state.index];

      if (currentRoute.key !== nextRoute.key) {
        this._updateVisibility(currentRoute, nextRoute);
      }
    }
  }

  _renderScene = ({ route }) => {
    return (
      <DrawerScene
        ref={view => {
          this._scenes[route.key] = view;
        }}
        {...this.props}
        route={route}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <DrawerComponent
          ref={view => {
            this._drawerRef = view;
          }}
          onDrawerOpen={() => {
            this._drawerIsOpen = true;
          }}
          onDrawerClose={() => {
            this._drawerIsOpen = false;
          }}
          drawerWidth={DRAWER_WIDTH}
          keyboardDismissMode="on-drag"
          edgeWidth={60}
          drawerPosition={DrawerComponent.positions.Left}
          drawerType="front"
          drawerBackgroundColor="#333333"
          renderNavigationView={this._renderNavigationView}
        >
          <View style={{ flex: 1 }} key="container">
            <View
              key="tab-view-container"
              style={{
                flex: 1,
                paddingTop:
                  Platform.OS === "android" ? Constants.statusBarHeight : 0
              }}
            >
              <TabViewAnimated
                navigationState={this.props.navigation.state}
                animationEnabled={false}
                renderScene={this._renderScene}
                onIndexChange={this._navigateToScreen}
                swipeEnabled={false}
                lazy
              />
            </View>
            <View
              key="status-bar-underlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height:
                  Platform.OS === "android" ? Constants.statusBarHeight : 0,
                backgroundColor: Colors.blue
              }}
            />
          </View>
        </DrawerComponent>

        <StatusBar barStyle="light-content" />
      </View>
    );
  }

  _renderNavigationView = () => {
    return (
      <View style={styles.drawerContainer}>
        <View style={styles.drawerHeader}>
          <Image
            source={require("./assets/hero.png")}
            style={{
              height: 140 + Layout.notchHeight,
              width: DRAWER_WIDTH,
              resizeMode: "cover"
            }}
          />
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: "rgba(23, 127, 100, 0.57)" }
            ]}
          />
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                alignItems: "center",
                justifyContent: "center",
                paddingTop: Layout.notchHeight + 20
              }
            ]}
          >
            <Image
              source={require("./assets/logo.png")}
              style={{
                width: 200,
                height: 50,
                resizeMode: "contain"
              }}
            />
          </View>
        </View>
        <View style={styles.drawerButtons}>
          {/* make sure the buttons here are in the same order as in route config */}
          {this._renderButtons([
            { route: "Home", title: "Home" },
            { route: "Schedule", title: "Schedule" },
            { route: "Speakers", title: "Speakers" },
            { route: "Crew", title: "Crew" },
            { route: "Sponsors", title: "Sponsors" },
            { route: "Profile", title: "Profile" },
            { route: "Contacts", title: "Contacts" }
          ])}
        </View>
      </View>
    );
  };

  _renderButtons = buttonConfig => {
    const selectedIndex = this.props.navigation.state.index;

    return buttonConfig.map((config, i) => (
      <DrawerButton
        key={i}
        onPress={() => this._navigateToScreen(i)}
        selected={selectedIndex === i}
      >
        {config.title}
      </DrawerButton>
    ));
  };

  _updateVisibility = (currentRoute, nextRoute) => {
    const currentScene = this._scenes[currentRoute.key];
    const nextScene = this._scenes[nextRoute.key];

    if (nextScene) {
      nextScene.setVisible(true);
    }
    if (currentScene) {
      currentScene.setVisible(false);
    }
  };

  _navigateToScreen = index => {
    this._drawerRef.closeDrawer();
    const nextRoute = this.props.navigation.state.routes[index];
    this.props.navigation.navigate(nextRoute.routeName);
  };
}

const DrawerNavigation = createNavigationContainer(
  createNavigator(DrawerRouter, DrawerRouteConfig, {})(props => (
    <DrawerView {...props} />
  ))
);

class DrawerButton extends React.Component {
  state = {
    me: null
  };
  componentDidMount() {
    AsyncStorage.getItem("@MySuperStore:tickets").then(value => {
      const mytickets = value;
    });
  }
  render() {
    return (
      <RectButton
        onPress={this.props.onPress}
        style={{
          backgroundColor: this.props.selected
            ? "rgba(255,255,255,0.1)"
            : "#333333"
        }}
      >
        <View
          style={{
            height: 50,
            width: DRAWER_WIDTH,
            justifyContent: "center",
            paddingHorizontal: 5
          }}
        >
          <SemiBoldText style={styles.drawerButtonText}>
            {this.props.children.toUpperCase()}
          </SemiBoldText>
        </View>
      </RectButton>
    );
  }
}

class QRScannerModalNavigation extends React.Component {
  state = {
    hasCameraPermission: null
  };
  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };
  componentDidMount() {
    this._requestCameraPermission();
  }
  _handleBarCodeRead = data => {
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
        <BarCodeScanner
          onBarCodeRead={this._handleBarCodeRead}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "stretch"
          }}
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

class QRContactScannerModalNavigation extends React.Component {
  state = {
    hasCameraPermission: null
  };
  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };
  componentDidMount() {
    this._requestCameraPermission();
  }
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
                  navigation.navigate("Contacts");
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
        <BarCodeScanner
          onBarCodeRead={this._handleContactBarCodeRead}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "stretch"
          }}
        />
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
    flex: 1
  },
  drawerButtonText: {
    color: "#fff",
    fontSize: FontSizes.normalButton,
    padding: 10
  },
  drawerButtons: {
    paddingTop: 0
  },
  drawerNavigationContainer: {}
});

export default StackNavigator(
  {
    Primary: { screen: DrawerNavigation },
    Details: { screen: Screens.Details },
    TicketInstructions: { screen: Screens.TicketInstructions },
    QRScanner: { screen: QRScannerModalNavigation },
    QRContactScanner: { screen: QRContactScannerModalNavigation }
  },
  {
    ...DefaultStackConfig,
    headerMode: "none",
    mode: "modal"
  }
);
