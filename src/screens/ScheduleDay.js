import React from 'react';
import { Text, SectionList, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import _ from 'lodash';

import { RegularText, SemiBoldText, BoldText } from '../components/StyledText';
import { Colors } from '../constants';
import MenuButton from '../components/MenuButton';

import FullSchedule from '../data/schedule.json';

class ScheduleRow extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <RectButton
        onPress={this._handlePress}
        style={{ flex: 1, backgroundColor: '#fff' }}
      >
        <View style={styles.row}>
          <BoldText>{item.title}</BoldText>
          {item.speaker ? <SemiBoldText>{item.speaker}</SemiBoldText> : null}
          <RegularText>{item.room}</RegularText>
        </View>
      </RectButton>
    );
  }

  _handlePress = () => {
    // do nothing for now
    alert('pressed!')
  };
}

export default function ScheduleDay(options) {
  const schedule = _.find(
    FullSchedule,
    schedule => schedule.title === options.day
  );
  const slotsByTime = schedule.slots.map((slot, i) => {
    return { data: [slot], title: slot.time };
  });

  class ScheduleDayComponent extends React.Component {
    static navigationOptions = {
      title: `${options.day} Schedule`,
      headerStyle: { backgroundColor: Colors.green },
      headerTintColor: 'white',
      headerLeft: <MenuButton />,
      tabBarLabel: options.day,
      tabBarIcon: ({ tintColor }) => (
        <BoldText style={{ fontSize: 20, color: tintColor }}>
          {options.date}
        </BoldText>
      ),
    };

    render() {
      return (
        <SectionList
          renderScrollComponent={props => <ScrollView {...props} />}
          stickySectionHeadersEnabled={true}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          sections={slotsByTime}
          keyExtractor={(item, index) => index}
        />
      );
    }

    _renderSectionHeader = ({ section }) => {
      return (
        <View style={styles.sectionHeader}>
          <RegularText>{section.title}</RegularText>
        </View>
      );
    };

    _renderItem = ({ item }) => {
      return <ScheduleRow item={item} />;
    };
  }

  return StackNavigator(
    {
      Day: {
        screen: ScheduleDayComponent,
      },
    },
    {
      navigationOptions: {
        headerTitleStyle: {
          fontFamily: 'open-sans-bold',
        },
      },
    }
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingTop: 7,
    paddingBottom: 5,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#eee',
  },
});
