import React from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';

import { BoldText, RegularText, SemiBoldText } from './StyledText';
import TalkCard from './TalkCard';
import { Colors } from '../constants';
import { findNextTalksAfterDate } from '../data';

export default class TalksUpNext extends React.Component {
  constructor(props) {
    super(props);

    let nextTalks = findNextTalksAfterDate();
    let dateTime;
    let time;
    if (nextTalks) {
      dateTime = nextTalks[0].dateTime;
      time = nextTalks[0].time;
    }

    this.state = {
      nextTalks,
      dateTime,
      time,
    };
  }

  render() {
    const { nextTalks } = this.state;

    return (
      <View style={[{ marginHorizontal: 10 }, this.props.style]}>
        <SemiBoldText style={{ fontSize: 20 }}>Coming up next</SemiBoldText>
        {this._renderDateTime()}
        {nextTalks.map(talk => (
          <TalkCard key={talk.title} talk={talk} style={{ marginTop: 10, marginBottom: 10 }} />
        ))}
      </View>
    );
  }

  _renderDateTime() {
    const { dateTime, time } = this.state;

    if (dateTime) {
      return (
        <RegularText style={styles.time}>
          {dateTime.format('dddd, MMM Do')}, {time}
        </RegularText>
      );
    } else {
      // handle after conf thing
    }
  }
}

const styles = StyleSheet.create({
  time: {
    color: Colors.faint,
    fontSize: 16,
  },
});
