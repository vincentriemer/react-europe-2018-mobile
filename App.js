import React from 'react';
import { Font } from 'expo';
import LandingScreen from './src/components/LandingScreen';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./src/assets/OpenSans-Bold.ttf'),
      'orbitron-bold': require('./src/assets/Orbitron-Bold.ttf'),
    });
    this.setState({
      fontLoaded: true,
    });
  }

  render() {
    return this.state.fontLoaded && <LandingScreen />;
  }
}
