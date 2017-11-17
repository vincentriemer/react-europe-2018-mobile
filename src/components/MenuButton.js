import React from 'react';
import { connectDrawerButton } from '../Navigation';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

@connectDrawerButton
export default class MenuButton extends React.Component {
  render() {
    return (
      <RectButton
        onPress={this.props.openDrawer}
        style={{
          marginBottom: 2,
          marginRight: 5,
          paddingHorizontal: 10,
          paddingVertical: 5,
          alignSelf: 'flex-start',
        }}
        hitSlop={{ left: 15, top: 15, right: 15, bottom: 15 }}
      >
        <Feather name="menu" size={28} color="#fff" />
      </RectButton>
    );
  }
}
