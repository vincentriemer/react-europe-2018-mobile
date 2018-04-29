import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import { Svg } from "expo";
import { RectButton } from "react-native-gesture-handler";
import FadeIn from "react-native-fade-in-image";
import { withNavigation } from "react-navigation";
import QRCode from "react-native-qrcode";

import SaveIconWhenSaved from "./SaveIconWhenSaved";
import { BoldText, RegularText, SemiBoldText } from "./StyledText";
import { conferenceHasEnded, getSpeakerAvatarURL } from "../utils";
import { Colors, FontSizes } from "../constants";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Title,
  Paragraph,
} from "react-native-paper";

@withNavigation
export default class TicketCard extends React.Component {
  render() {
    const { ticket } = this.props;

    return (
      <Card key={ticket.id}>
        <CardContent>
          <Title>This ticket gives you access to:</Title>
          {ticket.checkinLists.map(ch => (
            <Title key={ch.id}>✓ {ch.name}</Title>
          ))}
          <QRCode
            style={{ flex: 1 }}
            value={ticket.ref}
            size={300}
            bgColor="black"
            fgColor="white"
          />
          <Button onPress={this._handlePress}>Read useful info</Button>
        </CardContent>
      </Card>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate("TicketInstructions", {
      ticket: this.props.ticket,
    });
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
  ticketInfoRow: {
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  ticketTitle: {
    fontSize: FontSizes.bodyTitle,
  },
  ticketLocation: {
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
    }),
  },
});
