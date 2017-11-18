import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Layout } from '../constants';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <View style={styles.navigationBarContainer}>
        <View style={styles.navigationBarLeftButton}>
          {this.props.renderLeftButton && this.props.renderLeftButton()}
        </View>

        <View style={styles.navigationBarTitleContainer}>
          {this.props.renderTitle && this.props.renderTitle()}
        </View>

        <View style={styles.navigationBarRightButton}>
          {this.props.renderRightButton && this.props.renderRightButton()}
        </View>
      </View>
    );
  }
}

// Didn't want to investigate why I needed to offset this a bit, surely there is a good reason
const MADE_UP_NUMBER = 7;

const styles = StyleSheet.create({
  navigationBarContainer: {
    backgroundColor: 'transparent',
    height: Layout.headerHeight,
    position: 'absolute',
    paddingTop:
      Platform.OS === 'ios' ? Constants.statusBarHeight : MADE_UP_NUMBER,
    top: 0,
    left: 0,
    right: 0,
  },
  navigationBarTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-start',
  },
  navigationBarLeftButton: {},
  navigationBarRightButton: {},
});
