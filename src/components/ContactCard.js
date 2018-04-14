import React from "react";
import { Image, Platform, StyleSheet, View, Linking } from "react-native";
import { Svg, FileSystem, WebBrowser } from "expo";
import { RectButton } from "react-native-gesture-handler";
import FadeIn from "react-native-fade-in-image";
import { withNavigation } from "react-navigation";

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
  Paragraph
} from "react-native-paper";

@withNavigation
export default class ContactCard extends React.Component {
  render() {
    const { contact } = this.props;
    const bio = this.getContactBio();
    const twitter = this.getContactTwitter();
    return (
      <Card>
        <CardContent>
          <Title>{contact.firstName + " " + contact.lastName}</Title>
          {bio === "" ? null : <Paragraph>{bio}</Paragraph>}
        </CardContent>
        <CardActions>
          <Button onPress={this._handlePressTwitterButton}>@{twitter}</Button>
          <Button onPress={this._handlePressEmailButton}>Email</Button>
        </CardActions>
      </Card>
    );
  }
  _handlePressTwitterButton = async () => {
    const twitter = this.getContactTwitter();
    try {
      await Linking.openURL(`twitter://user?screen_name=` + twitter);
    } catch (e) {
      WebBrowser.openBrowserAsync("https://twitter.com/" + twitter);
    }
  };

  _handlePressEmailButton = () => {
    const contact = this.props.contact;
    const email = contact.email;
    Linking.openURL(
      "mailto:" +
        email +
        "?subject=hey it's" +
        contact.firstName +
        " " +
        contact.firstName +
        "from ReactEurope&body=ping"
    );
  };
  getContactBio = () => {
    let contact = this.props.contact;
    let bio = "";
    if (contact) {
      contact.answers.map(answer => {
        if (answer.question && answer.question.id === 56) {
          bio = answer.value;
        }
      });
    }
    return bio;
  };
  getContactTwitter = () => {
    let contact = this.props.contact;
    let twitter = "";
    if (contact) {
      contact.answers.map(answer => {
        if (answer.question && answer.question.title === "Twitter") {
          twitter = answer.value;
        }
      });
    }
    return twitter
      .replace("@", "")
      .replace("https://twitter.com/", "")
      .replace("twitter.com/", "");
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
