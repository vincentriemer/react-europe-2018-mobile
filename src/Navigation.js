import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import { Text, StyleSheet, StatusBar, View } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import hoistStatics from 'hoist-non-react-statics';

import { Layout } from './constants';
import Screens from './screens';

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
          drawerBackgroundColor="#ddd"
          renderNavigationView={this._renderNavigationView}
        >
          <InnerNavigation />
        </DrawerLayout>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }

  _renderNavigationView = () => {
    return (
      <View style={styles.drawerNavigationContainer}>
        <Text>Hello!</Text>
      </View>
    );
  };
}

const InnerNavigation = StackNavigator({
  Home: { screen: Screens.Home },
});

export default StackNavigator(
  {
    Primary: { screen: DrawerNavigation },
    Modal: { screen: View /* Placeholder */ },
  },
  {
    headerMode: 'none',
  }
);
