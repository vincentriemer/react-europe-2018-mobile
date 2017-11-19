import React from 'react';
import { Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants';

export default class SaveButton extends React.Component {
  render() {
    return (
      <BorderlessButton
        onPress={this.props.savePress}
        style={{
          alignSelf: 'flex-start',
        }}
        hitSlop={{ left: 15, top: 15, right: 15, bottom: 15 }}
      >
        {this.props.active ? (
          <Ionicons
            name={Platform.os === 'ios' ? 'ios-heart' : 'md-heart'}
            size={28}
            color={Colors.green}
          />
        ) : (
          <Ionicons
            name={
              Platform.os === 'ios' ? 'ios-heart-outline' : 'md-heart-outline'
            }
            size={28}
            color="#000"
          />
        )}
      </BorderlessButton>
    );
  }
}
