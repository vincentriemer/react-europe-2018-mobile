import React from 'react';
import { Asset, AppLoading, Font, Updates } from 'expo';
import { Alert, Platform, View, YellowBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { loadSavedTalksAsync } from './src/utils/storage';
import { SafeAreaView } from 'react-navigation';
import { ScheduleQuery } from './src/data/schedulequery';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader",
]);

const theme = {
  ...DefaultTheme,
  fonts: {
    thin: "open-sans",
    light: "open-sans",
    regular: "open-sans-semibold",
    medium: "open-sans-bold"
  }
};

if (Platform.OS === 'android') {
  SafeAreaView.setStatusBarHeight(0);
}

import Navigation from './src/Navigation';

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  componentDidMount() {
    Updates.addListener(({ type }) => {
      if (type === Updates.EventType.DOWNLOAD_FINISHED) {
        if (this.state.appIsReady) {
          this._promptForReload();
        } else {
          this._shouldPromptForReload = true;
        }
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.appIsReady && this.state.appIsReady) {
      if (this._shouldPromptForReload) {
        this._shouldPromptForReload = false;
        setTimeout(this._promptForReload, 1000);
      }
    }
  }

  _promptForReload = () => {
    Alert.alert(
      'A schedule update is available',
      'You need to restart the app to get the new schedule.',
      [
        { text: 'Restart the app now', onPress: () => Updates.reload() },
        { text: "I'll do it later", onPress: () => {} },
      ]
    );
  };

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

    return <PaperProvider theme={theme}><Navigation /></PaperProvider>;
  }
}
