import React from 'react';
import { AsyncStorage, Button, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { SafeAreaView } from 'react-navigation';
import { query } from 'urql';
import { GQL } from '../../constants';
import client from '../../utils/gqlClient';

const qrCheckinQuery = `
mutation createCheckin($uuid: String!, $checkinListId: Int!, $ref: String!) {
  createCheckin(uuid: $uuid, checkinListId: $checkinListId, ref: $ref) {
    firstName
    lastName
    id
    type
    ref
    ticket {
      id
      name
    }
    email
    checkinMessage
    checkins {
      checkinListId
      createdAt
      id
    }
  }
}
`;


export default class QRCheckinScannerModalNavigation extends React.Component {
  state = {
    hasCameraPermission: null,
    checkinList: { name: '' },
    showQRScanner: true,
    checkRef: true,
    uuid: null,
  };
  constructor(props) {
    super(props);
    AsyncStorage.removeItem('@MySuperStore:lastCheckedInRef');
  }
  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };
  _delay = async time => {
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(), time);
    });
  };

  componentDidMount() {
    this._requestCameraPermission();
    const params = this.props.navigation.state.params || {};

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

    const checkinList = params.checkinList;
    const uuid = params.uuid;
    console.log('uuid is', uuid);
    console.log('checkinList is', checkinList);
    this.setState({
      uuid: uuid,
      checkinList: checkinList,
    });
  }
  _handleCheckinBarCodeRead = data => {
    let { state } = this;
    this.setState({ showQRScanner: false });
    AsyncStorage.getItem('@MySuperStore:lastCheckedInRef').then(value => {
      AsyncStorage.setItem('@MySuperStore:lastCheckedInRef', data.data);
      if (data.data !== value) {
        let variables = {
          uuid: this.state.uuid,
          checkinListId: this.state.checkinList.id,
          ref: data.data,
        }; //{ slug: GQL.slug, uuid: data.data };
        let navigation = this.props.navigation;
        //console.log("Scanned!", data.data);
        //console.log("variables", variables);
        //console.log("uuid state is", this.state.uuid);
        //console.log("checkinlist state is", this.state.checkinList);
        console.log('showQRSCanner', state.showQRScanner);
        if (state.showQRScanner) {
          client
            .executeQuery(query(qrCheckinQuery, variables), true)
            .then(function(value) {
              if (state.showQRScanner) {
                console.log('checkin mutation value', value);
                if (value && value.data && value.data.createCheckin === null) {
                  Alert.alert(
                    'This reference could not be found, make sure you selected the right Checkin List!'
                  );
                  this.setState({ showQRScanner: true });
                } else if (value && value.data && value.data.createCheckin) {
                  if (
                    value.data.createCheckin.checkinMessage ===
                    'Already checked-in today'
                  ) {
                    Alert.alert(
                      'This reference has already been checked today! The person cannot get in as their ticket has already been used by someone else.'
                    );
                  }
                  navigation.navigate('CheckedInAttendeeInfo', {
                    checkedInAttendee: value.data.createCheckin,
                  });
                }
                //            // expected output: Array [1, 2, 3]
              }
            });
        }
      }
    });
  };

  componentWillUnmount() {
    this.didBlurSubscription && this.didBlurSubscription.remove();
    this.didFocusSubscription && this.didFocusSubscription.remove();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        {this.state.showQRScanner ? (
          <BarCodeScanner
            onBarCodeRead={this._handleCheckinBarCodeRead}
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
            Checking {this.state.checkinList.name}
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