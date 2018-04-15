import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import FadeIn from "react-native-fade-in-image";
import { withNavigation } from "react-navigation";

import SaveIconWhenSaved from "./SaveIconWhenSaved";
import { BoldText, RegularText, SemiBoldText } from "./StyledText";
import { conferenceHasEnded, getSpeakerAvatarURL } from "../utils";
import { Colors, FontSizes } from "../constants";

@withNavigation
export default class TalkCard extends React.Component {
  render() {
    const { talk } = this.props;
    const speakers = talk.speakers;

    if (!speakers || speakers.length === 0) {
      return this._renderPlaceholderForNextYear();
    }

    return (
      <RectButton
        onPress={this._handlePress}
        style={[styles.button, this.props.style]}
        activeOpacity={0.05}
      >
        {speakers.map(speaker => (
          <View style={styles.headerRow} key={speaker.id}>
            <View style={styles.headerRowAvatarContainer}>
              <FadeIn>
                <Image
                  source={{ uri: speaker.avatarUrl }}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
              </FadeIn>
            </View>
            <View style={styles.headerRowInfoContainer}>
              <BoldText style={styles.speakerName} numberOfLines={1}>
                {speaker.name}
              </BoldText>
              {speaker.twitter ? (
                <SemiBoldText style={styles.organizationName} numberOfLines={1}>
                  @{speaker.twitter}
                </SemiBoldText>
              ) : null}
            </View>
          </View>
        ))}
        <View style={styles.talkInfoRow}>
          <RegularText style={styles.talkTitle}>
            <SaveIconWhenSaved talk={talk} />
            {talk.title}
          </RegularText>
          {conferenceHasEnded() ? null : (
            <RegularText style={styles.talkLocation}>{talk.room}</RegularText>
          )}
        </View>
      </RectButton>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate("Details", { talk: this.props.talk });
  };

  _renderPlaceholderForNextYear = () => {
    return (
      <View style={[styles.button, this.props.style]}>
        <RegularText style={styles.nextYear}>See you in 2019!</RegularText>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
  },
  headerRowAvatarContainer: {
    paddingRight: 10,
  },
  headerRowInfoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 5,
  },
  speakerName: {
    fontSize: FontSizes.bodyTitle,
  },
  organizationName: {
    color: Colors.faint,
    fontSize: FontSizes.bodyLarge,
  },
  talkInfoRow: {
    paddingTop: 10,
  },
  talkTitle: {
    fontSize: FontSizes.bodyLarge,
  },
  talkLocation: {
    fontSize: FontSizes.bodyLarge,
    color: Colors.faint,
    marginTop: 10,
  },
  nextYear: {
    textAlign: "center",
    fontSize: FontSizes.title,
    marginVertical: 10,
  },
  button: {
    padding: 15,
    ...Platform.select({
      ios: {
        borderRadius: 5,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 2, height: 2 },
      },
      android: {
        backgroundColor: "#fff",
        elevation: 2,
      },
      dom: {
        borderRadius: 5,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 2, height: 2 },
      },
    }),
  },
});
