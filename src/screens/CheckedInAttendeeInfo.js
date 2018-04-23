import React from "react";
import {
  Animated,
  Linking,
  Platform,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
  View,
  AsyncStorage
} from "react-native";
import { Asset, LinearGradient, WebBrowser, Video } from "expo";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { NavigationActions } from "react-navigation";
import FadeIn from "react-native-fade-in-image";
import { View as AnimatableView } from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

import AnimatedScrollView from "../components/AnimatedScrollView";
import NavigationBar from "../components/NavigationBar";
import Tickets from "../components/Tickets";
import MenuButton from "../components/MenuButton";
import VideoBackground from "../components/VideoBackground";
import { BoldText, SemiBoldText } from "../components/StyledText";
import { connectDrawerButton } from "../Navigation";
import { Colors, FontSizes, Layout } from "../constants";
import { Speakers, Talks } from "../data";
import { Gravatar, GravatarApi } from "react-native-gravatar";

import {
  Button,
  Card,
  CardContent,
  Title,
  Paragraph
} from "react-native-paper";
import Markdown from "react-native-simple-markdown";
export const Schedule = require("../data/schedule.json");
const Event = Schedule.events[0];

class CheckedInAttendeeInfo extends React.Component {
  state = {
    scrollY: new Animated.Value(0)
  };

  render() {
    const { scrollY } = this.state;
    const headerOpacity = scrollY.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

    return (
      <View style={{ flex: 1 }}>
        <AnimatedScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 20 + Layout.notchHeight / 2 }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: scrollY } }
              }
            ],
            { useNativeDriver: true }
          )}
        >
          <View
            style={{
              backgroundColor: "#4d5fab",
              padding: 10,
              paddingTop: Layout.headerHeight - 10,
              justifyContent: "center",
              alignItems: "center"
            }}
          />

          <DeferredCheckedInAttendeeInfoContent />
          <OverscrollView />
        </AnimatedScrollView>
      </View>
    );
  }
}

class CheckinCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { checkins } = this.props;
    console.log("props", this.props);
    console.log("checkins", checkins);
    return <Text>Date: {checkins[0].createdAt}</Text>;
  }
}

@withNavigation
class DeferredCheckedInAttendeeInfoContent extends React.Component {
  state = {
    tickets: [],
    ready: Platform.OS === "android" ? false : true
  };
  async getTickets() {
    try {
      const value = await AsyncStorage.getItem("@MySuperStore:tickets");
      this.setState({ tickets: JSON.parse(value) });
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  constructor(props) {
    super(props);
    this.getTickets();
  }

  componentDidMount() {
    if (this.state.ready) {
      return;
    }

    setTimeout(() => {
      this.setState({ ready: true });
      AsyncStorage.removeItem("@MySuperStore:lastCheckedInRef");
    }, 200);
  }

  render() {
    const params = this.props.navigation.state.params || {};
    const checkedInAttendee = params.checkedInAttendee;
    console.log("params", params);
    if (!this.state.ready) {
      return null;
    }

    return (
      <AnimatableView animation="fadeIn" useNativeDriver duration={800}>
        <Gravatar
          options={{
            email: checkedInAttendee.email,
            parameters: { size: "200", d: "mm" },
            secure: true
          }}
          style={styles.roundedProfileImage}
        />

        <Card>
          <CardContent>
            <Title>
              {checkedInAttendee.firstName + " " + checkedInAttendee.lastName}{" "}
            </Title>
            <Title>Ticket Name: {checkedInAttendee.ticket.name} </Title>
            <Title>Ticket Ref: {checkedInAttendee.ref} </Title>
            <Markdown styles={markdownStyles}>
              {checkedInAttendee.checkinMessage}
            </Markdown>
          </CardContent>
        </Card>
        <Button
          raised
          onPress={() => {
            AsyncStorage.removeItem("@MySuperStore:lastCheckedInRef").then(() =>
              this.props.navigation.goBack()
            );
          }}
        >
          Close
        </Button>
        {checkedInAttendee.checkins && checkedInAttendee.checkins.length > 0 ? (
          <View>
            <Title>Previous Checkin</Title>
            <CheckinCard checkins={checkedInAttendee.checkins} />
          </View>
        ) : null}
      </AnimatableView>
    );
  }
}

const OverscrollView = () => (
  <View
    style={{
      position: "absolute",
      top: -400,
      height: 400,
      left: 0,
      right: 0,
      backgroundColor: Colors.blue
    }}
  />
);

const ClipBorderRadius = ({ children, style }) => {
  return (
    <View
      style={[
        { borderRadius: BORDER_RADIUS, overflow: "hidden", marginTop: 10 },
        style
      ]}
    >
      {children}
    </View>
  );
};

const BORDER_RADIUS = 3;

const markdownStyles = {
  text: {}
};

const styles = StyleSheet.create({
  roundedProfileImage: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 50
  },
  headerContent: {
    alignItems: "center",
    marginTop: 5,
    paddingVertical: 10
  },
  headerVideoLayer: {
    ...StyleSheet.absoluteFillObject
  },
  headerVideoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.blue,
    opacity: 0.8
  },
  headerText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    lineHeight: 17 * 1.5
  },
  headerSmallText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 7,
    lineHeight: 7 * 1.5
  },
  bigButton: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 15,
    height: 50,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
    flexDirection: "row"
  },
  bigButtonText: {
    fontSize: FontSizes.normalButton,
    color: "#fff",
    textAlign: "center"
  },
  seeAllTalks: {
    fontSize: FontSizes.normalButton,
    color: Colors.blue
  }
});

export default CheckedInAttendeeInfo;
