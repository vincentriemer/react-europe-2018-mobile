import React from "react";
import PropTypes from "prop-types";
import {
  TabRouter,
  TabNavigator,
  StackNavigator,
  createNavigator,
  createNavigationContainer,
  DrawerNavigator,
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
} from "react-native";
import { Constants } from "expo";
import { TabViewAnimated } from "react-native-tab-view";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import ResourceSavingContainer from "react-native-resource-saving-container";
import hoistStatics from "hoist-non-react-statics";

import { Colors, FontSizes, Layout } from "./constants";
import Screens from "./screens";
import TabBarBottom from "./components/TabBarBottom";
import { SemiBoldText, BoldText } from "./components/StyledText";
import _ from "lodash";
import Schedule from "./data/schedule.json";
import moment from "moment";

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
  swipeEnabled: true,
  animationEnabled: true,
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

const DrawerRouteConfig = {
  Home: { screen: Screens.Home },
  Schedule: { screen: ScheduleNavigation },
  Speakers: { screen: SpeakersNavigation },
  Crew: { screen: CrewNavigation },
  Sponsors: { screen: SponsorNavigation },
};

const DrawerNavigation = DrawerNavigator(DrawerRouteConfig);

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
  },
  {
    ...DefaultStackConfig,
    headerMode: "none",
  }
);
