import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import moment from "moment-timezone";

import { BoldText, RegularText, SemiBoldText } from "./StyledText";
import TalkCard from "./TalkCard";
import { Colors, FontSizes } from "../constants";
import { findRandomTalk, findNextTalksAfterDate } from "../data";
import _ from "lodash";
import {
  convertUtcDateToEventTimezoneDaytime,
  conferenceHasEnded
} from "../utils";

export default class TalksUpNext extends React.Component {
  constructor(props) {
    super(props);

    let nextTalks =
      conferenceHasEnded() || findNextTalksAfterDate().length === 0
        ? findRandomTalk()
        : findNextTalksAfterDate();

    nextTalks = nextTalks.filter(t => !!t);
        
    let dateTime;
    let time;
    if (nextTalks && nextTalks.length > 0 && !_.isUndefined(nextTalks[0])) {
      dateTime = nextTalks[0].startDate;
      time = nextTalks[0].startDate;
    }

    this.state = {
      nextTalks,
      dateTime,
      time
    };
  }

  render() {
    const { nextTalks } = this.state;

    return (
      <View style={[{ marginHorizontal: 10 }, this.props.style]}>
        <SemiBoldText style={{ fontSize: FontSizes.title }}>
          {conferenceHasEnded() ? "A great talk from 2018" : "Coming up next"}
        </SemiBoldText>
        {this._renderDateTime()}
        {nextTalks.map(talk => (
          <TalkCard
            key={talk.title}
            talk={talk}
            style={{ marginTop: 10, marginBottom: 10 }}
          />
        ))}
      </View>
    );
  }

  _renderDateTime() {
    if (conferenceHasEnded()) {
      return null;
    }

    const { dateTime, time } = this.state;

    if (dateTime) {
      return (
        <RegularText style={styles.time}>
          {convertUtcDateToEventTimezoneDaytime(dateTime)}
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
    fontSize: FontSizes.subtitle
  }
});
