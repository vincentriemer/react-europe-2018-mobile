import React from 'react';
import { Asset, AppLoading, Font, Updates } from 'expo';
import { Platform, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { loadSavedTalksAsync } from './src/utils/storage';
import { SafeAreaView } from 'react-navigation';
import { ScheduleQuery } from './src/data/schedulequery';

if (Platform.OS === 'android') {
  SafeAreaView.setStatusBarHeight(0);
}

import Navigation from './src/Navigation';

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  componentDidMount() {
    // Updates.addListener(({ type }) => {
    //   if (type === Updates.EventType.DOWNLOAD_FINISHED) {
    //     // update available, prompt user then call the following when they want
    //     // to apply update:
    //     // Updates.reload()
    //   }
    // });
  }

  _loadResourcesAsync = () => {
    return Promise.all([this._loadAssetsAsync(), this._loadDataAsync()]);
  };

  _loadDataAsync = () => {
    return loadSavedTalksAsync();
  };

  _loadAssetsAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'open-sans-bold': require('./src/assets/OpenSans-Bold.ttf'),
        'open-sans': require('./src/assets/OpenSans-Regular.ttf'),
        'open-sans-semibold': require('./src/assets/OpenSans-SemiBold.ttf'),
        ...Ionicons.font,
      }),
      Asset.fromModule(require('./src/assets/logo.png')).downloadAsync(),
      Asset.fromModule(
        require('react-navigation/src/views/assets/back-icon.png')
      ).downloadAsync(),
    ]);
  };

  render() {
    if (!this.state.appIsReady) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={console.error}
          onFinish={() => {
            this.setState({ appIsReady: true });
          }}
        />
      );
    }

    return <Navigation />;
  }
}
