import React from 'react';
import { Text, Image, ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient, WebBrowser, Video } from 'expo';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { NavigationActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import NavigationBar from '../components/NavigationBar';
import TalksUpNext from '../components/TalksUpNext';
import MenuButton from '../components/MenuButton';
import { BoldText, SemiBoldText } from '../components/StyledText';
import { connectDrawerButton } from '../Navigation';
import { Colors, FontSizes, Layout } from '../constants';
import { Speakers, Talks } from '../data';

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 20 + Layout.notchHeight / 2 }}
        >
          <View
            style={{
              backgroundColor: '#187f65',
              padding: 10,
              paddingTop: Layout.headerHeight - 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={styles.headerVideoLayer}>
              <Video
                source={require('../assets/video.mp4')}
                style={{ flex: 1 }}
                resizeMode="cover"
                shouldPlay
                muted
                isLooping
              />
              <View style={styles.headerVideoOverlay} />
              <LinearGradient
                colors={[Colors.green, 'transparent']}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              />
            </View>
            <Image
              source={require('../assets/logo.png')}
              style={{ width: 220, height: 60, resizeMode: 'contain' }}
              tintColor="#fff"
            />
            <View style={styles.headerContent}>
              <SemiBoldText style={styles.headerText}>
                November 27th to 28th
              </SemiBoldText>
              <SemiBoldText style={styles.headerText}>
                Nashville, Tennesse
              </SemiBoldText>
              <View style={{ paddingTop: 8, alignItems: 'center' }}>
                <ClipBorderRadius>
                  <RectButton style={styles.button} underlayColor="#fff" onPress={this._openTickets}>
                    <SemiBoldText style={styles.buttonText}>
                      Buy a ticket
                    </SemiBoldText>
                  </RectButton>
                </ClipBorderRadius>
              </View>
            </View>
          </View>

          <TalksUpNext
            style={{ marginTop: 20, marginHorizontal: 15, marginBottom: 2 }}
          />
          <View style={{ marginHorizontal: 15, marginBottom: 20 }}>
            <BorderlessButton onPress={this._handlePressAllTalks}>
              <SemiBoldText style={styles.seeAllTalks}>
                See all talks →
              </SemiBoldText>
            </BorderlessButton>
          </View>

          <ClipBorderRadius>
            <RectButton
              style={styles.bigButton}
              onPress={this._handlePressCOCButton}
              underlayColor="#fff"
            >
              <SemiBoldText style={styles.bigButtonText}>
                Read the Code of Conduct
              </SemiBoldText>
            </RectButton>
          </ClipBorderRadius>

          <ClipBorderRadius>
            <RectButton
              style={styles.bigButton}
              onPress={this._handlePressTwitterButton}
              underlayColor="#fff"
            >
              <Ionicons
                name="logo-twitter"
                size={23}
                style={{
                  color: '#fff',
                  marginTop: 3,
                  backgroundColor: 'transparent',
                  marginRight: 5,
                }}
              />
              <SemiBoldText style={styles.bigButtonText}>
                @nodevember
              </SemiBoldText>
            </RectButton>
          </ClipBorderRadius>

          <OverscrollView />
        </ScrollView>
        <NavigationBar renderLeftButton={() => <MenuButton />} />
      </View>
    );
  }

  _openTickets = () => {
    WebBrowser.openBrowserAsync(
      'https://www.eventbrite.com/e/nodevember-2017-tickets-34928136998'
    );
  };

  _handlePressAllTalks = () => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'Schedule',
      })
    );
  };

  _handlePressCOCButton = () => {
    WebBrowser.openBrowserAsync('http://nodevember.org/conduct');
  };

  _handlePressTwitterButton = () => {
    WebBrowser.openBrowserAsync('https://twitter.com/nodevember');
  };
}

const OverscrollView = () => (
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
);

const ClipBorderRadius = ({ children, style }) => {
  return (
    <View
      style={[
        { borderRadius: BORDER_RADIUS, overflow: 'hidden', marginTop: 10 },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const BORDER_RADIUS = 3;

const styles = StyleSheet.create({
  headerContent: {
    alignItems: 'center',
    marginTop: 5,
    paddingVertical: 10,
  },
  headerVideoLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  headerVideoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.green,
    opacity: 0.8,
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
    borderRadius: BORDER_RADIUS,
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: FontSizes.normalButton,
  },
  bigButton: {
    backgroundColor: Colors.green,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  bigButtonText: {
    fontSize: FontSizes.normalButton,
    color: '#fff',
    textAlign: 'center',
  },
  seeAllTalks: {
    fontSize: FontSizes.normalButton,
    color: Colors.green,
  },
});

export default Home;
