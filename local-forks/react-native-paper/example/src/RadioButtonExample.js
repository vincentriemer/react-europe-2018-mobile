/* @flow */

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Paragraph,
  RadioButton,
  Colors,
  TouchableRipple,
  withTheme,
} from 'react-native-paper';
import type { Theme } from 'react-native-paper/types';

type Props = {
  theme: Theme,
};

type State = {
  checked: 'normal' | 'custom',
};

class RadioButtonExample extends React.Component<Props, State> {
  static title = 'Radio button';

  state = {
    checked: 'normal',
  };

  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props;
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: background,
          },
        ]}
      >
        <TouchableRipple onPress={() => this.setState({ checked: 'normal' })}>
          <View style={styles.row}>
            <Paragraph>Normal</Paragraph>
            <View pointerEvents="none">
              <RadioButton
                value="normal"
                checked={this.state.checked === 'normal'}
              />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => this.setState({ checked: 'custom' })}>
          <View style={styles.row}>
            <Paragraph>Custom</Paragraph>
            <View pointerEvents="none">
              <RadioButton
                value="custom"
                color={Colors.blue500}
                checked={this.state.checked === 'custom'}
              />
            </View>
          </View>
        </TouchableRipple>
        <View style={styles.row}>
          <Paragraph>Checked (Disabled)</Paragraph>
          <RadioButton value="first" checked disabled />
        </View>
        <View style={styles.row}>
          <Paragraph>Unchecked (Disabled)</Paragraph>
          <RadioButton value="second" checked={false} disabled />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default withTheme(RadioButtonExample);
