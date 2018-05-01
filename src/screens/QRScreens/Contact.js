import React from 'react';
import { AsyncStorage, Button, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { SafeAreaView } from 'react-navigation';
import { query } from 'urql';
import { GQL } from '../../constants';
import client from '../../utils/gqlClient';

const qrContactQuery = `
query events($slug: String!, $uuid: String!, $q: String!){
  events(slug: $slug) {
    attendees(uuid: $uuid, q: $q){
      lastName
      firstName
      id
      email
      answers {
        id
        question{
          id
          title
        }
        value
      }
    }
  }
}
`;

export default class QRContactScannerModalNavigation extends React.Component {
  state = {
    hasCameraPermission: null,
    showQRScanner: true,
  };

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  componentDidMount() {
    this._requestCameraPermission();

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

  _handleContactBarCodeRead = data => {
    let navigation = this.props.navigation;
    AsyncStorage.getItem('@MySuperStore:tickets').then(value => {
      let tickets = JSON.parse(value) || [];
      let uuid = '';
      let contactRef = data.data;
      tickets.map(ticket => {
        ticket.checkinLists.map(ch => {
          if (ch.mainEvent) {
            uuid = ticket.uuid;
          }
        });
      });
      let variables = { slug: GQL.slug, uuid: uuid, q: contactRef };
      client
        .executeQuery(query(qrContactQuery, variables), true)
        .then(function(scannedContact) {
          if (
            scannedContact &&
            scannedContact.data &&
            scannedContact.data.events &&
            scannedContact.data.events[0] &&
            scannedContact.data.events[0].attendees &&
            scannedContact.data.events[0].attendees[0]
          ) {
            let contact = scannedContact.data.events[0].attendees[0];
            console.log('new contact', contact);
            AsyncStorage.getItem('@MySuperStore:contacts').then(
              storedContacts => {
                let contacts = null;
                let newContacts = [];
                let found = false;
                if (storedContacts === null && contact && contact.firstName) {
                  contacts = [contact];
                } else {
                  let existingContacts = JSON.parse(storedContacts) || [];
                  console.log(
                    'how many existing contacts',
                    existingContacts.length
                  );
                  existingContacts.map((existingContact, i) => {
                    console.log('existing contact', existingContact);
                    if (
                      existingContact &&
                      existingContact.id &&
                      contact &&
                      contact.id &&
                      existingContact.id === contact.id
                    ) {
                      found = true;
                      newContacts.push(contact);
                    } else if (existingContact && existingContact.id) {
                      newContacts.push(existingContact);
                    }
                  });
                  if (!found && contact && contact.id) {
                    newContacts.push(contact);
                  }
                  contacts = newContacts;
                }
                if (contacts === [null]) {
                  contacts = [];
                }
                let stringifiedContacts = JSON.stringify(contacts);
                AsyncStorage.setItem(
                  '@MySuperStore:contacts',
                  stringifiedContacts
                )
                  //AsyncStorage.removeItem('@MySuperStore:tickets')
                  .then(value => {
                    navigation.navigate('Contacts');
                  });
              }
            );
          }
        });
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        {this.state.showQRScanner ? (
          <BarCodeScanner
            onBarCodeRead={this._handleContactBarCodeRead}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'stretch',
            }}
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
            Scan a badge's QR code
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
