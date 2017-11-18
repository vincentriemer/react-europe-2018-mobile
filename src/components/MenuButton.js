import React from 'react';
import { Platform } from 'react-native';
import { connectDrawerButton } from '../Navigation';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

@connectDrawerButton
export default class MenuButton extends React.Component {
  render() {
    return (
      <BorderlessButton
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
        <Ionicons
          name={Platform.OS === 'ios' ? 'ios-menu-outline' : 'md-menu'}
          size={28}
          color="#fff"
        />
      </BorderlessButton>
    );
  }
}
