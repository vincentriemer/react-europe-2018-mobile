import React from 'react';
import { Asset, AppLoading, Font, Constants } from 'expo';
import { Platform, View, StatusBar } from 'react-native';
import Navigation from './src/Navigation';
import Home from './src/screens/Home';

const theme = {
  font: {
    primary: 'open-sans-bold',
  },
  colors: {
    main: '#187f65',
  },
};

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  _loadAssetsAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'open-sans-bold': require('./src/assets/OpenSans-Bold.ttf'),
        'open-sans': require('./src/assets/OpenSans-Regular.ttf'),
        'open-sans-semibold': require('./src/assets/OpenSans-SemiBold.ttf'),
        'orbitron-bold': require('./src/assets/Orbitron-Bold.ttf'),
      }),
      Asset.fromModule(require('./src/assets/video.mp4')).downloadAsync(),
      Asset.fromModule(require('./src/assets/logo.png')).downloadAsync(),
    ]);
  };

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={console.error}
          onFinish={() => {
            this.setState({ fontLoaded: true });
          }}
        />
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    );
  }
}
