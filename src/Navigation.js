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
import {
  BorderlessButton,
  RectButton,
  ScrollView,
} from "react-native-gesture-handler";
import ResourceSavingContainer from "react-native-resource-saving-container";
import hoistStatics from "hoist-non-react-statics";

import { Colors, FontSizes, Layout } from "./constants";
import Screens from "./screens";
import TabBarBottom from "./components/TabBarBottom";
import { SemiBoldText, BoldText } from "./components/StyledText";
import _ from "lodash";
import Schedule from "./data/schedule.json";
import moment from "moment";

const DRAWER_WIDTH = Math.min(Math.max(Layout.window.width - 80, 280), 350);

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
};

const DrawerNavigation = DrawerNavigator(DrawerRouteConfig, {
  contentComponent: DrawerView,
  drawerWidth: DRAWER_WIDTH,
  drawerBackgroundColor: "#333333",
});

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
