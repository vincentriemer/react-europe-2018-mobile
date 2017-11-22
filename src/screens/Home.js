import React from 'react';
import { Text, Image, ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient, Video } from 'expo';
import { connectDrawerButton } from '../Navigation';
import { RectButton } from 'react-native-gesture-handler';

import NavigationBar from '../components/NavigationBar';
import TalksUpNext from '../components/TalksUpNext';
import { BoldText, SemiBoldText } from '../components/StyledText';
import MenuButton from '../components/MenuButton';
import { Colors, Layout } from '../constants';

import { Speakers, Talks } from '../data';

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
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
              source={require('../assets/logo-shadow.png')}
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
                <RectButton style={styles.button}>
                  <SemiBoldText style={styles.buttonText}>
                    Buy a ticket
                  </SemiBoldText>
                </RectButton>
                <RectButton style={styles.button}>
                  <SemiBoldText style={styles.buttonText}>
                    I already have a ticket
                  </SemiBoldText>
                </RectButton>
              </View>
            </View>
          </View>

          <TalksUpNext style={{marginTop: 20}} />

          <OverscrollView />
        </ScrollView>
        <NavigationBar renderLeftButton={() => <MenuButton />} />
      </View>
    );
  }
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
    borderRadius: 8,
    marginTop: 10,
    overflow: 'hidden',
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 17,
  },
});

export default Home;
