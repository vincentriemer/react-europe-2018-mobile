import React from 'react';
import { AsyncStorage, Button, Text, View } from 'react-native';
import { BarCodeScanner, Permissions, Notifications } from 'expo';
import { SafeAreaView } from 'react-navigation';
import { query } from 'urql';
import { GQL } from '../../constants';

import client from '../../utils/gqlClient';

const qrQuery = `
query events($slug: String!, $uuid: String!){
  events(slug: $slug) {
	me(uuid: $uuid){
      mobileMessage
	  answers {
		id
        value
        question {
          id
		  title
        }
	  }
	  firstName
	  lastName
	  email
	  ref
	  shareInfo
      uuid
      id
      type
staffCheckinLists {
    id
    name
    mainEvent
}
checkinLists {
        id
        name
        mainEvent
      }
	}
  }
}
`;

const updatePushTokenQuery = `
mutation updateAttendee($uuid: String!, $expoPushToken: String!) {
  updateAttendee(uuid: $uuid, expoPushToken: $expoPushToken) {
    firstName
    lastName
    id
    email
  }
}
`;

export default class QRScannerModalNavigation extends React.Component {
  state = {
    showQRScanner: true,
  };

  componentDidMount() {
    this.didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      payload => {
        console.debug('didBlur', payload);
        this.setState({ showQRScanner: false });
      }
    );
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        console.debug('didfocus', payload);
        this.setState({ showQRScanner: true });
      }
    );
  }

  componentWillUnmount() {
    this.didBlurSubscription && this.didBlurSubscription.remove();
    this.didFocusSubscription && this.didFocusSubscription.remove();
  }

  async setTickets(tickets) {
    try {
      const value = await AsyncStorage.setItem(
        '@MySuperStore:tickets',
        tickets
      );
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  async registerForPushNotificationsAsync(uuid) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    const variables = { uuid: uuid, expoPushToken: token };
    client
      .executeQuery(query(updatePushTokenQuery, variables), true)
      .then(function(value) {
        console.log('updated attendee', value, token, uuid);
      });
    console.log('token', token, uuid);
  }
  _handleBarCodeRead = data => {
    console.log(8);
    let variables = { slug: GQL.slug, uuid: data.data };
    let navigation = this.props.navigation;
    let that = this;
    client.executeQuery(query(qrQuery, variables), true).then(function(value) {
      if (value && value.data && value.data.events && value.data.events[0]) {
        let me = value.data.events[0].me;
        if (me === null) {
          Alert.alert('Ticket not found!');
          return;
        }
        AsyncStorage.getItem('@MySuperStore:tickets').then(value => {
          let tickets = null;
          let newTickets = [];
          let found = false;

          if (value === null && me !== null) {
            tickets = [me];
          } else {
            let existingTickets = JSON.parse(value) || [];
            existingTickets.map((ticket, i) => {
              if (ticket && me && me.ref && ticket.ref === me.ref) {
                found = true;
                newTickets.push(me);
              } else {
                if (ticket) {
                  newTickets.push(ticket);
                }
              }
            });
            if (!found && me) {
              newTickets.push(me);
            }
            tickets = newTickets;
            if (!tickets || tickets[0] === [null]) {
              tickets = [];
            }
          }
          if (tickets && tickets !== null && tickets !== []) {
            let stringifiedTickets = JSON.stringify(tickets);
            that.setTickets(stringifiedTickets);
            //AsyncStorage.setItem("@MySuperStore:tickets", stringifiedTickets)
            //AsyncStorage.removeItem('@MySuperStore:tickets')
            //.then(value => {
            that.registerForPushNotificationsAsync(variables.uuid);
            navigation.navigate('Profile');
            //});
          }
        });
        // expected output: Array [1, 2, 3]
      }
    });
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        {this.state.showQRScanner ? (
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={{ flex: 1 }}
          />
        ) : null}

        <SafeAreaView
          forceInset={{ top: 'always' }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
          <Text
            style={{
              fontSize: 20,
              marginTop: 15,
              textAlign: 'center',
              color: '#fff',
            }}>
            Scan your ticket QR code
          </Text>
        </SafeAreaView>

        <SafeAreaView
          forceInset={{ bottom: 'always' }}
          style={{ position: 'absolute', bottom: 10, left: 0, right: 0 }}>
          <Button
            onPress={() => this.props.navigation.goBack()}
            color="#fff"
            title="Dismiss"
          />
        </SafeAreaView>
      </View>
    );
  }
}
