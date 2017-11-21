import React from 'react';
import { Image, Platform, StyleSheet, Text, ScrollView, View } from 'react-native';
import { Constants, Video } from 'expo';
import _ from 'lodash';

import { Colors, Layout } from '../constants';
import { RegularText, BoldText, SemiBoldText } from '../components/StyledText';

const Speakers = [
  ...require('../data/speakers.json'),
  ...require('../data/keynotes.json'),
];
const Schedule = require('../data/schedule.json');
const Talks = _.chain(Schedule)
  .map(day => day.slots.map(slot => (slot.day = day.title)))
  .flatten()
  .filter(slot => slot.talk || slot.keynote)
  .value();

function getAvatarURL(speaker) {
  if (speaker.avatar.includes('gravatar')) {
    return speaker.avatar;
  } else {
    return `http://nodevember.org${speaker.avatar}`;
  }
}

export default class Details extends React.Component {
  render() {
    let params = this.props.navigation.state.params || {};
    let speaker;
    let event;
    if (params.scheduleSlot) {
      event = params.scheduleSlot;
      speaker = findSpeakerData(event.speaker);
    } else if (params.speaker) {
      speaker = params.speaker;
      event = findTalkData(speaker.name);
    }

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        {Platform.OS === 'ios' ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 200,
              backgroundColor: Colors.green,
            }}
          />
        ) : null}
        <ScrollView style={{ flex: 1, backgroundColor: 'transparent' }}>
          <View style={styles.headerContainer}>
            <View style={styles.headerContent}>
              <Image
                source={{ uri: getAvatarURL(speaker) }}
                style={styles.avatar}
              />
              <SemiBoldText style={styles.headerText}>
                {speaker.name}
              </SemiBoldText>
              {speaker.organization ? (
                <RegularText style={styles.headerText}>
                  {speaker.organization}
                </RegularText>
              ) : null}
            </View>
          </View>
          <View style={styles.content}>
            <SemiBoldText>
              {event.day} {event.time}
            </SemiBoldText>
            <SemiBoldText>{event.room}</SemiBoldText>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  content: {
    backgroundColor: '#fff',
    minHeight: 200,
  },
  headerContainer: {
    height: 250,
    backgroundColor: Colors.green,
  },
  headerContent: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: Constants.statusBarHeight + Layout.notchHeight + 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 17,
  },
});

// {
//   "talk" : true,
//   "keynote": true,
//   "room": "132 Commodore Ballroom (600)",
//   "summary": "",
//   "time" : "9:15 - 10:15 am",
//   "title" : "Keynote - What is Community Engineering?",
//   "speaker": "Kim Crayton"
// },
function findTalkData(speakerName) {
  return _.find(Talks, talk => talk.speaker === speakerName);
}

// {
//   "name": "Beat Zenerino",
//   "avatar": "https://secure.gravatar.com/avatar/b9ce3be1bb652e74a77e00ddecd0d731?s=500",
//   "location": "Unknown",
//   "bio": "A native of Zurich, Switzerland, Beat (pronounced Bay-ot) has been active professionally in electronics and software since the late 80’s.\r\nDuring his career he’s consulted for many Fortune 500 companies such as Boeing, Raytheon and General Dynamics. As a simulation engineer for Foresight systems he’s helped develop system models and simulations for next generation jet fighter and software defined radios.\r\nAs director of engineering at Griffin Technology, he’s lead an award winning engineering team. During his tenure he oversaw the development of the multi-million dollar iTrip FM transmitter.\r\nBeat is accomplished in Assembly, C, C++, Java, Python, Javascript and Ruby. Achievements in software development include:\r\n- Assembly and C for 8 to 32 bit micro-controllers\r\n- C and C++ for WDM device drivers\r\n- C++ for Mac OS X device drivers\r\n- C for Linux device drivers\r\n- C, C++, Java and Objective-C for Windows and Mac OS X applications\r\n- Objective-C for iOS applications\r\n- Java for Android applications\r\n- Perl, Python for scripts\r\n- C, C++ and Python for AI, machine learning and robotics\r\n- VHDL for hardware simulations\r\n- Ruby for Rails applications\r\n- Javascript for front-end web and node.js development",
//   "talk_format": "Talk (~30-45 minutes)",
//   "twitter": "zenibeat",
//   "organization": "Bitvana LLC",
//   "title": "Driven! Events, State Machines and Node",
//   "abstract": "Event driven state machines are a very powerful tool. You may remember them from your CS classes but often not with fun memories. It doesn't have to be that way. I will show how straightforward state machines are, how they bring struture to reactive systems, and how easy they are to implement in JS.",
//   "description": "Event driven state machines are very powerful, but often not well understood and thus underused. They have been around forever and have much research and math behind them. Unfortunately, all the research have made them to appear more complicated than they really are. In this talk I will demonstrate how simple they are and how easy to understand. State machines basically have two construct, a state and a transition, that's it. From there you can build very complex systems. I will also show how state machines apply to real world problems like connecting a cell modem to a network in an embedded system, or online shopping. Finally, I will demonstrate how they can be implemented in Javascript utilizing a mix of functional and imperative programming.",
//   "audience_level": "All",
//   "tags": [
//     "nodejs",
//     "state machines",
//     "reactive"
//   ],
//   "state": "accepted",
//   "confirmed": true
// },

function findSpeakerData(speakerName) {
  return _.find(Speakers, speaker => speaker.name === speakerName);
}
