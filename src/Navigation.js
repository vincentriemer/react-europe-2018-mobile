import React from 'react';
import PropTypes from 'prop-types';
import {
  TabRouter,
  TabNavigator,
  StackNavigator,
  SceneView,
} from 'react-navigation';
import {
  Platform,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import { Constants } from 'expo';
import { TabViewAnimated } from 'react-native-tab-view';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import hoistStatics from 'hoist-non-react-statics';

import { Colors, Layout } from './constants';
import Screens from './screens';
import TabBarBottom from './components/TabBarBottom';
import { SemiBoldText, BoldText } from './components/StyledText';

const ScheduleNavigation = TabNavigator(
  {
    Sunday: {
      screen: Screens.ScheduleDay({ day: 'Sunday', date: '26' }),
    },
    Monday: {
      screen: Screens.ScheduleDay({ day: 'Monday', date: '27' }),
    },
    Tuesday: {
      screen: Screens.ScheduleDay({ day: 'Tuesday', date: '28' }),
    },
  },
  {
    swipeEnabled: false,
    animationEnabled: false,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: { backgroundColor: '#333' },
      activeTintColor: '#fff',
    },
  }
);

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
    toggleDrawer: PropTypes.func,
  };

  return hoistStatics(ConnectedDrawerButton, WrappedComponent);
}

const SpeakersNavigation = StackNavigator({
  SpeakerList: {
    screen: Screens.Speakers,
  },
});

const CrewNavigation = StackNavigator({
  CrewList: {
    screen: Screens.Crew,
  },
});

const SponsorNavigation = StackNavigator({
  SponsorList: {
    screen: Screens.Sponsors,
  },
});

const DRAWER_WIDTH = Math.min(Math.max(Layout.window.width - 80, 280), 350);
class DrawerNavigation extends React.Component {
  static router = TabRouter({
    Home: { screen: Screens.Home },
    Schedule: { screen: ScheduleNavigation },
    Speakers: { screen: SpeakersNavigation },
    Crew: { screen: CrewNavigation },
    Sponsors: { screen: SponsorNavigation },
  });

  _isDrawerOpen = false;

  static childContextTypes = {
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func,
    toggleDrawer: PropTypes.func,
  };

  getChildContext() {
    const openDrawer = options => this._drawerRef.openDrawer(options);
    const closeDrawer = options => this._drawerRef.closeDrawer(options);
    const toggleDrawer = options =>
      this._isDrawerOpen ? closeDrawer(options) : openDrawer(options);
    return {
      openDrawer,
      closeDrawer,
      toggleDrawer,
    };
  }

  _renderScene = ({ route }: any) => {
    const { screenProps } = this.props;
    const ScreenComponent = DrawerNavigation.router.getComponentForRouteName(
      route.routeName
    );
    return (
      <View style={{ flex: 1, overflow: 'hidden' }}>
        <ScreenComponent />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <DrawerLayout
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
          hideStatusBar={Platform.OS === 'android' ? true : false}
          edgeWidth={80}
          drawerPosition={DrawerLayout.positions.Left}
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
                  Platform.OS === 'android' ? Constants.statusBarHeight : 0,
              }}
            >
              <TabViewAnimated
                navigationState={this.props.navigation.state}
                animationEnabled={false}
                renderScene={this._renderScene}
                onIndexChange={() => {}}
                swipeEnabled={false}
                lazy
              />
            </View>
            <View
              key="status-bar-underlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height:
                  Platform.OS === 'android' ? Constants.statusBarHeight : 0,
                backgroundColor: Colors.green,
              }}
            />
          </View>
        </DrawerLayout>

        <StatusBar barStyle="light-content" />
      </View>
    );
  }

  _renderNavigationView = () => {
    return (
      <View style={styles.drawerContainer}>
        <View style={styles.drawerHeader}>
          <Image
            source={require('./assets/hero.png')}
            style={{
              height: 120 + Layout.notchHeight,
              width: DRAWER_WIDTH,
              resizeMode: 'cover',
            }}
          />
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: 'rgba(23, 127, 100, 0.57)' },
            ]}
          />
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: Layout.notchHeight,
              },
            ]}
          >
            <Image
              source={require('./assets/logo.png')}
              style={{
                width: 200,
                height: 50,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
        <View style={styles.drawerButtons}>
          {/* make sure the buttons here are in the same order as in route config */}
          {this._renderButtons([
            { route: 'Home', title: 'Home' },
            { route: 'Schedule', title: 'Schedule' },
            { route: 'Speakers', title: 'Speakers' },
            { route: 'Crew', title: 'Crew' },
            { route: 'Sponsors', title: 'Sponsors' },
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
        onPress={() => this._navigateToScreen(config.route)}
        selected={selectedIndex === i}
      >
        {config.title}
      </DrawerButton>
    ));
  };

  _navigateToScreen = screen => {
    this.props.navigation.navigate(screen);

    requestIdleCallback(() => {
      this._drawerRef.closeDrawer();
    });
  };
}

class DrawerButton extends React.Component {
  render() {
    return (
      <BorderlessButton onPress={this.props.onPress} activeOpacity={0.2}>
        <View
          style={{
            backgroundColor: this.props.selected
              ? 'rgba(255,255,255,0.1)'
              : 'transparent',
            height: 50,
            width: DRAWER_WIDTH,
            justifyContent: 'center',
            paddingHorizontal: 5,
          }}
        >
          <SemiBoldText style={styles.drawerButtonText}>
            {this.props.children.toUpperCase()}
          </SemiBoldText>
        </View>
      </BorderlessButton>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerButtonText: {
    color: '#fff',
    fontSize: 17,
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
  },
  {
    headerMode: 'none',
  }
);
