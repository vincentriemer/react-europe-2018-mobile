import React from 'react';
import { Text, SectionList, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { BoldText } from '../components/StyledText';
import MenuButton from '../components/MenuButton';

import FullSchedule from '../data/schedule.json';
import _ from 'lodash';

console.log('hi');

export default function ScheduleDay(options) {
  const schedule = _.find(FullSchedule, schedule => schedule.title === options.day);
  const slotsByTime = schedule.slots.map((slot, i) => {
    return { data: [slot], title: slot.time, key: i.toString() };
  });

  class ScheduleDayComponent extends React.Component {
    static navigationOptions = {
      title: `${options.day} Schedule`,
      headerStyle: { backgroundColor: '#187f65' },
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
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          sections={slotsByTime}
          keyExtractor={(item, index) => index}
        />
      );
    }

    _renderSectionHeader = ({ section }) => {
      return (
        <View
          style={{
            padding: 5,
            backgroundColor: '#eee',
            borderWidth: 1,
            borderColor: '#eee',
          }}
        >
          <Text>{section.title}</Text>
        </View>
      );
    };

    _renderItem = ({ item }) => {
      return (
        <View
          style={{
            padding: 20,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#eee',
          }}
        >
          <Text>{JSON.stringify(item)}</Text>
        </View>
      );
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
