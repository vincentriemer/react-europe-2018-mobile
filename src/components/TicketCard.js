import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import { Svg } from "expo";
import { RectButton } from "react-native-gesture-handler";
import FadeIn from "react-native-fade-in-image";
import { withNavigation } from "react-navigation";
import QRCode from "react-native-qrcode-svg";

import SaveIconWhenSaved from "./SaveIconWhenSaved";
import { BoldText, RegularText, SemiBoldText } from "./StyledText";
import { conferenceHasEnded, getSpeakerAvatarURL } from "../utils";
import { Colors, FontSizes } from "../constants";

@withNavigation
export default class TicketCard extends React.Component {
  render() {
    const { ticket } = this.props;

    return (
      <RectButton
        onPress={this._handlePress}
        style={[styles.button, this.props.style]}
        activeOpacity={0.05}
      >
        <View style={styles.ticketInfoRow}>
          <RegularText style={styles.ticketTitle}>
            This ticket gives you access to{" "}
            {ticket.checkinLists.map(ch => ch.name).join(" and ")}. ref:{" "}
            {ticket.ref}
          </RegularText>
          <QRCode style={{ flex: 1 }} value={ticket.ref} size={300} />
        </View>
      </RectButton>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate("Details", { ticket: this.props.ticket });
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
    flexDirection: "row"
  },
  headerRowAvatarContainer: {
    paddingRight: 10
  },
  headerRowInfoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 5
  },
  speakerName: {
    fontSize: FontSizes.bodyTitle
  },
  organizationName: {
    color: Colors.faint,
    fontSize: FontSizes.bodyLarge
  },
  ticketInfoRow: {
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  ticketTitle: {
    fontSize: FontSizes.bodyTitle
  },
  ticketLocation: {
    fontSize: FontSizes.bodyLarge,
    color: Colors.faint,
    marginTop: 10
  },
  nextYear: {
    textAlign: "center",
    fontSize: FontSizes.title,
    marginVertical: 10
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
        shadowOffset: { width: 2, height: 2 }
      },
      android: {
        backgroundColor: "#fff",
        elevation: 2
      }
    })
  }
});
