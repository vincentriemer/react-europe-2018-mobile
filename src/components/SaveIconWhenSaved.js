import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { withSaveState } from '../utils/storage';
import { Icons, Colors } from '../constants';

@withSaveState
export default class SaveIconWhenSaved extends React.Component {
  render() {
    if (!this.props.saved) {
      return null;
    }

    return (
      <Ionicons
        name={Icons.favoriteActive}
        color={Colors.green}
        size={15}
        style={[
          { backgroundColor: 'transparent', marginRight: 5, marginTop: 1 },
          this.props.style,
        ]}
      />
    );
  }
}
