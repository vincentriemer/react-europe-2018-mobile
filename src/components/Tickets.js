import React from "react";
import { Image, Platform, StyleSheet, View, AsyncStorage } from "react-native";
import moment from "moment-timezone";

import { BoldText, RegularText, SemiBoldText } from "./StyledText";
import TicketCard from "./TicketCard";
import { Colors, FontSizes } from "../constants";
import _ from "lodash";
import {
  convertUtcDateToEventTimezoneDaytime,
  conferenceHasEnded
} from "../utils";
import { Title } from "react-native-paper";

export default class Tickets extends React.Component {
  state = {
    tickets: []
  };
  async getTickets() {
    try {
      const value = await AsyncStorage.getItem("@MySuperStore:tickets");
      this.setState({ tickets: JSON.parse(value) });
    } catch (err) {
      return [];
    }
  }

  constructor(props) {
    super(props);
    this.getTickets();
  }
  componentDidMount() {}
  render() {
    const tix = this.state.tickets || [];
    return (
      <View style={[{ marginHorizontal: 10 }, this.props.style]}>
        <Title>My Tickets</Title>
        {tix.map(
          ticket => (
            <TicketCard
              key={ticket.ref}
              ticket={ticket}
              style={{ marginTop: 10, marginBottom: 10 }}
            />
          ) /*{
                ticket.checkinLists.map( ch => {
                    (
                        <View style={[{ marginHorizontal: 10 }, this.props.style]}>
                        <SemiBoldText style={{ fontSize: FontSizes.title }}>
                        lol
                        </SemiBoldText>
                        <TicketCard
                    key={ticket.ref}
                    ticket={ticket}
                    style={{ marginTop: 10, marginBottom: 10 }}
                        />
                        </View>

                )
                })


            }i*/ /*(

        )*/
        )}
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
