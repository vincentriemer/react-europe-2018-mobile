import React from 'react';
import { Image, SectionList, StyleSheet, View, Text } from 'react-native';
import FadeIn from 'react-native-fade-in-image';
import { WebBrowser } from 'expo';
import { ScrollView, RectButton } from 'react-native-gesture-handler';

import { Colors } from '../constants';
import MenuButton from '../components/MenuButton';
import { BoldText, SemiBoldText, RegularText } from '../components/StyledText';

import _ from 'lodash';

import SponsorData from '../data/sponsors.json';
const SponsorsByLevel = _.map(
  _.groupBy(SponsorData, data => data.level),
  (value, key) => {
    return { data: value, title: key };
  }
);

function getLogoURL(sponsor) {
  return `http://nodevember.org${sponsor.logo}`;
}

class SponsorRow extends React.Component {
  render() {
    const { item: sponsor } = this.props;

    return (
      <RectButton
        onPress={this._handlePress}
        style={{ flex: 1, backgroundColor: '#fff' }}
      >
        <View style={styles.row}>
          <View style={styles.rowAvatarContainer}>
            <FadeIn>
              <Image
                source={{ uri: getLogoURL(sponsor) }}
                style={{ width: 50, height: 50, borderRadius: 25, resizeMode: "contain" }}
              />
            </FadeIn>
          </View>
          <View style={styles.rowData}>
            <BoldText>{sponsor.company}</BoldText>
            <RegularText>{sponsor.description}</RegularText>
          </View>
        </View>
      </RectButton>
    );
  }

  _handlePress = () => {
    WebBrowser.openBrowserAsync(this.props.item.url);
  };
}

export default class Sponsors extends React.Component {
  static navigationOptions = {
    title: 'Sponsor',
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
        renderScrollComponent={props => <ScrollView {...props} />}
        stickySectionHeadersEnabled={true}
        sections={SponsorsByLevel}
        renderSectionHeader={this._renderSectionHeader}
        renderItem={this._renderItem}
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
    return <SponsorRow item={item} />;
  };
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
    flexDirection: 'row',
  },
  rowAvatarContainer: {
    paddingVertical: 5,
    paddingRight: 10,
    paddingLeft: 0,
  },
  rowData: {
    flex: 1,
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
