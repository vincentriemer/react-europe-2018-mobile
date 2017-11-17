import React from 'react';
import { Text, Image, ScrollView, StyleSheet, View } from 'react-native';
import { connectDrawerButton } from '../Navigation';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { BoldText, SemiBoldText } from '../components/StyledText';

import { Layout } from '../constants';

class TitleComponent extends React.Component {
  render() {
    return null;
    return (
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 100, height: 30, resizeMode: 'contain' }}
        tintColor="#fff"
      />
    );
  }
}

@connectDrawerButton
class MenuButton extends React.Component {
  render() {
    return (
      <RectButton
        onPress={this.props.openDrawer}
        style={{
          marginBottom: 2,
          marginRight: 5,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
        hitSlop={{ left: 15, top: 15, right: 15, bottom: 15 }}
      >
        <Feather name="menu" size={28} color="#fff" />
      </RectButton>
    );
  }
}

class Home extends React.Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: '#187f65' },
    headerTintColor: 'white',
    headerTitle: <TitleComponent />,
    headerLeft: <MenuButton />,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: '#187f65',
              padding: 10,
              paddingTop: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../assets/logo-shadow.png')}
              style={{ width: 220, height: 60, resizeMode: 'contain' }}
              tintColor="#fff"
            />
            <View style={styles.headerContent}>
              <SemiBoldText style={styles.headerText}>November 27th to 28th</SemiBoldText>
              <SemiBoldText style={styles.headerText}>Nashville, Tennesse</SemiBoldText>
              <View style={{paddingTop: 8, alignItems: 'center'}}>
                <RectButton style={styles.button}>
                  <BoldText style={styles.buttonText}>Buy a ticket</BoldText>
                </RectButton>
                {/* <RectButton style={styles.button}>
                  <Text style={styles.buttonText}>I already have a ticket</Text>
                </RectButton> */ }
              </View>
            </View>
          </View>

          <Text style={{ fontSize: 28, fontFamily: 'open-sans-bold' }}>
          </Text>

          <View
            style={{
              position: 'absolute',
              top: -400,
              height: 400,
              left: 0,
              right: 0,
              backgroundColor: '#187f65',
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContent: {
    alignItems: 'center',
    marginTop: 5,
    paddingVertical: 10,
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 17 * 1.5,
  },
  button: {
    backgroundColor: '#0E4537',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 17,
  },
});

export default Home;
