import React from 'react';
import { Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Icons } from '../constants';
import { toggleSaved, withSaveState } from '../utils/storage';

@withSaveState
export default class SaveButton extends React.Component {
  render() {
    const { saved } = this.props;

    return (
      <BorderlessButton
        onPress={this._handlePress}
        style={{
          alignSelf: 'flex-start',
          backgroundColor: 'transparent',
        }}
        hitSlop={{ left: 15, top: 15, right: 15, bottom: 15 }}
      >
        <Ionicons
          name={saved ? Icons.favoriteActive : Icons.favorite}
          size={25}
          color="#fff"
          style={{ backgroundColor: 'transparent' }}
        />
      </BorderlessButton>
    );
  }

  _handlePress = () => {
    toggleSaved(this.props.talk);
  }
}
