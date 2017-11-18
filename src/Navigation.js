import React from 'react';
import PropTypes from 'prop-types';
import {
  TabRouter,
  TabNavigator,
  StackNavigator,
  SceneView,
} from 'react-navigation';
import { Image, Text, StyleSheet, StatusBar, View } from 'react-native';
import { TabViewAnimated } from 'react-native-tab-view';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import hoistStatics from 'hoist-non-react-statics';

import { Layout } from './constants';
import Screens from './screens';
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

const DRAWER_WIDTH = Math.min(Math.max(Layout.window.width - 100, 200), 350);
class DrawerNavigation extends React.Component {
  static router = TabRouter({
    Home: { screen: Screens.Home },
    Schedule: { screen: ScheduleNavigation },
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
          hideStatusBar={true}
          drawerPosition={DrawerLayout.positions.Left}
          drawerType="front"
          drawerBackgroundColor="#333333"
          renderNavigationView={this._renderNavigationView}
        >
          <TabViewAnimated
            navigationState={this.props.navigation.state}
            animationEnabled={false}
            renderScene={this._renderScene}
            onIndexChange={() => {}}
            swipeEnabled={false}
            lazy
          />
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
          <DrawerButton onPress={() => this._navigateToScreen('Home')}>
            Home
          </DrawerButton>
          <DrawerButton onPress={() => this._navigateToScreen('Schedule')}>
            Schedule
          </DrawerButton>
          <DrawerButton onPress={() => this._navigateToScreen('Home')}>
            Events
          </DrawerButton>
          <DrawerButton onPress={() => this._navigateToScreen('Home')}>
            Speakers
          </DrawerButton>
          <DrawerButton onPress={() => this._navigateToScreen('Home')}>
            Crew
          </DrawerButton>
          <DrawerButton onPress={() => this._navigateToScreen('Home')}>
            Sponsors
          </DrawerButton>
        </View>
      </View>
    );
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
    paddingTop: 10,
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
