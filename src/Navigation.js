import React from 'react';
import PropTypes from 'prop-types';
import {
  TabRouter,
  TabNavigator,
  StackNavigator,
  SceneView,
} from 'react-navigation';
import { Text, StyleSheet, StatusBar, View } from 'react-native';
import { TabViewAnimated } from 'react-native-tab-view';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import hoistStatics from 'hoist-non-react-statics';

import { Layout } from './constants';
import Screens from './screens';

const ScheduleDayStack = StackNavigator({
  Day: {
    screen: Screens.ScheduleDay,
  }
})

const ScheduleNavigation = TabNavigator({
  Sunday: {
    screen: ScheduleDayStack,
  },
  Monday: {
    screen: ScheduleDayStack,
  },
  Tuesday: {
    screen: ScheduleDayStack,
  },
});

const DRAWER_WIDTH = Math.min(Math.max(Layout.window.width - 100, 200), 350);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerNavigationContainer: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
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
    toggleDrawer: PropTypes.func,
  };

  return hoistStatics(ConnectedDrawerButton, WrappedComponent);
}

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
    console.log(this.props);
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
          drawerBackgroundColor="#ddd"
          renderNavigationView={this._renderNavigationView}
        >
          <TabViewAnimated
            navigationState={this.props.navigation.state}
            animationEnabled={false}
            renderScene={this._renderScene}
            onIndexChange={() => {}}
            swipeEnabled={false}
          />
        </DrawerLayout>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }

  _renderNavigationView = () => {
    return (
      <View style={styles.drawerNavigationContainer}>
        <Text onPress={() => this._navigateToScreen('Home')}>Home</Text>
        <View style={{ marginTop: 10 }} />
        <Text onPress={() => this._navigateToScreen('Schedule')}>Schedule</Text>
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

export default StackNavigator(
  {
    Primary: { screen: DrawerNavigation },
    Modal: { screen: View /* Placeholder */ },
  },
  {
    headerMode: 'none',
  }
);
