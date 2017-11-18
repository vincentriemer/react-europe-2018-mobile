import React from 'react';
import { Image, SectionList, StyleSheet, View, Text } from 'react-native';

import { Colors } from '../constants';
import MenuButton from '../components/MenuButton';
import { RegularText } from '../components/StyledText';

import KeynotersData from '../data/keynotes.json';
import SpeakersData from '../data/speakers.json';
const SpeakerData = [
  { data: KeynotersData, title: 'Keynotes' },
  { data: SpeakersData, title: 'Speakers' },
];

function getAvatarURL(speaker) {
  if (speaker.avatar.includes('gravatar')) {
    return speaker.avatar;
  } else {
    return `http://nodevember.org${speaker.avatar}`;
  }
}

class SpeakerRow extends React.Component {
  render() {
    const { item: speaker } = this.props;

    return (
      <View style={styles.row}>
        <View style={styles.rowAvatarContainer}>
          <Image
            source={{ uri: getAvatarURL(speaker) }}
            style={{ width: 50, height: 50, borderRadius: 20 }}
          />
        </View>
        <View style={styles.rowData}>
          <Text>{speaker.name}</Text>
          <Text>{speaker.organization}</Text>
          <Text>{speaker.title}</Text>
        </View>
      </View>
    );
  }
}

export default class Speakers extends React.Component {
  static navigationOptions = {
    title: 'Speakers',
    headerStyle: { backgroundColor: Colors.green },
    headerTintColor: 'white',
    headerLeft: <MenuButton />,
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
  };

  render() {
    return (
      <SectionList
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        sections={SpeakerData}
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
    return <SpeakerRow item={item} />;
  };
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
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
