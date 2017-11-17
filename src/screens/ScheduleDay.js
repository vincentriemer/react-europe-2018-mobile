import React from 'react';
import { View } from 'react-native';
import MenuButton from '../components/MenuButton';

export default class ScheduleDay extends React.Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: '#187f65' },
    headerTintColor: 'white',
    headerLeft: <MenuButton />,
  };

  render() {
    return <View />;
  }
}
