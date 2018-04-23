import React from "react";
import { Image, Platform, StyleSheet, View, AsyncStorage } from "react-native";
import moment from "moment-timezone";

import { BoldText, RegularText, SemiBoldText } from "./StyledText";
import ContactCard from "./ContactCard";
import { Colors, FontSizes } from "../constants";
import _ from "lodash";
import {
  convertUtcDateToEventTimezoneDaytime,
  conferenceHasEnded
} from "../utils";

export default class MyContacts extends React.Component {
  state = {
    contacts: []
  };
  async getContacts() {
    try {
      const value = await AsyncStorage.getItem("@MySuperStore:contacts");
      this.setState({ contacts: JSON.parse(value) });
    } catch (err) {
      return [];
    }
  }

  constructor(props) {
    super(props);
    this.contacts = [];
  }
  componentDidMount() {
    this.getContacts();
  }
  render() {
    const contacts = this.state.contacts || [];
    return (
      <View style={[{ marginHorizontal: 10 }, this.props.style]}>
        <SemiBoldText style={{ fontSize: FontSizes.title }}>
          My Contacts
        </SemiBoldText>
        {contacts.map(contact => (
          <ContactCard
            key={contact.id + contact.email}
            contact={contact}
            style={{ marginTop: 10, marginBottom: 10 }}
          />
        ))}
      </View>
    );
  }
}
