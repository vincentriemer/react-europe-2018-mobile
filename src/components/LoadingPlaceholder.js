import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import { Colors } from '../constants';

export default class LoadingPlaceholder extends React.Component {
  state = {
    isReady: Platform.OS === 'ios' ? true : false,
  };

  componentDidMount() {
    if (!this.state.isReady) {
      setTimeout(() => {
        this.setState({ isReady: true });
      }, 500);
    }
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator color={Colors.green} size="large" />
        </View>
      );
    } else {
      return this.props.children;
    }
  }
}
