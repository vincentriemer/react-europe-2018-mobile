import React from 'react';
import { AppLoading, Font, Constants } from 'expo';
import { Platform, View, StatusBar } from 'react-native';
import glamorous, { ThemeProvider } from 'glamorous-native';
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

const StatusBarPlaceholder = glamorous.view(
  {
    height: Constants.statusBarHeight,
  },
  (_, { colors }) => ({
    backgroundColor: colors.main,
  })
);

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  _loadFontsAsync = async () => {
    return Font.loadAsync({
      'open-sans-bold': require('./src/assets/OpenSans-Bold.ttf'),
      'open-sans': require('./src/assets/OpenSans-Regular.ttf'),
      'open-sans-semibold': require('./src/assets/OpenSans-SemiBold.ttf'),
      'orbitron-bold': require('./src/assets/Orbitron-Bold.ttf'),
    });
  }

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._loadFontsAsync}
          onError={console.error}
          onFinish={() => { this.setState({ fontLoaded: true })}}
        />
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <View
          style={{
            paddingTop:
              Platform.OS === 'android' ? Constants.statusBarHeight : 0,
            flex: 1,
          }}
        >
          <Navigation />
          {Platform.OS === 'android' ? (
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: Constants.statusBarHeight,
              }}
            />
          ) : null}
        </View>
      </ThemeProvider>
    );
  }
}
