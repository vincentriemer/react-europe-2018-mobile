import React from 'react';
import {
  Animated,
  Linking,
  Platform,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Asset, LinearGradient, WebBrowser, Video } from 'expo';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { NavigationActions } from 'react-navigation';
import FadeIn from 'react-native-fade-in-image';
import { View as AnimatableView } from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

import AnimatedScrollView from '../components/AnimatedScrollView';
import NavigationBar from '../components/NavigationBar';
import TalksUpNext from '../components/TalksUpNext';
import MenuButton from '../components/MenuButton';
import VideoBackground from '../components/VideoBackground';
import { BoldText, SemiBoldText } from '../components/StyledText';
import { connectDrawerButton } from '../Navigation';
import { Colors, FontSizes, Layout } from '../constants';
import { Speakers, Talks } from '../data';
import {
  HideWhenConferenceHasStarted,
  HideWhenConferenceHasEnded,
  ShowWhenConferenceHasEnded,
} from '../utils';

class Home extends React.Component {
  state = {
    scrollY: new Animated.Value(0),
  };

  render() {
    const { scrollY } = this.state;
    const headerOpacity = scrollY.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View style={{ flex: 1 }}>
        <AnimatedScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 20 + Layout.notchHeight / 2 }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: scrollY } },
              },
            ],
            { useNativeDriver: true }
          )}
        >
          <View
            style={{
              backgroundColor: '#4d5fab',
              padding: 10,
              paddingTop: Layout.headerHeight - 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../assets/logo.png')}
              style={{ width: 220, height: 60, resizeMode: 'contain' }}
              tintColor="#fff"
            />
            <View style={styles.headerContent}>
              <ShowWhenConferenceHasEnded>
                <SemiBoldText style={styles.headerText}>
                  Thank you for joining us!
                </SemiBoldText>
                <SemiBoldText style={styles.headerTextSmall}>
                  See you in May, 2019!
                </SemiBoldText>
              </ShowWhenConferenceHasEnded>

              <HideWhenConferenceHasEnded>
                <SemiBoldText style={styles.headerText}>
                  May 17th to 18th (Conference)
                </SemiBoldText>
                <SemiBoldText style={styles.headerText}>
                  May 15th to 16th (Workshops)
                </SemiBoldText>
                <SemiBoldText style={styles.headerText}>
                  Paris, France
                </SemiBoldText>
              </HideWhenConferenceHasEnded>
            </View>
          </View>

          <DeferredHomeContent />
          <OverscrollView />
        </AnimatedScrollView>

        <NavigationBar
          renderLeftButton={() => <MenuButton />}
          animatedBackgroundOpacity={headerOpacity}
        />
      </View>
    );
  }

  _openTickets = () => {
    Linking.openURL(
      'https://www.eventbrite.com/e/nodevember-2017-tickets-34928136998'
    );
  };

}

@withNavigation
class DeferredHomeContent extends React.Component {
  state = {
    ready: Platform.OS === 'android' ? false : true,
  };

  componentDidMount() {
    if (this.state.ready) {
      return;
    }

    setTimeout(() => {
      this.setState({ ready: true });
    }, 200);
  }

  render() {
    if (!this.state.ready) {
      return null;
    }
    return (
      <AnimatableView animation="fadeIn" useNativeDriver duration={800}>
        <TalksUpNext
          style={{ marginTop: 20, marginHorizontal: 15, marginBottom: 2 }}
        />
        <View style={{ marginHorizontal: 15, marginBottom: 20 }}>
          <TouchableOpacity onPress={this._handlePressAllTalks}>
            <SemiBoldText style={styles.seeAllTalks}>
              See all talks →
            </SemiBoldText>
          </TouchableOpacity>
        </View>

        <ClipBorderRadius>
          <RectButton
            style={styles.bigButton}
            onPress={this._handlePressCOCButton}
            underlayColor="#fff"
          >
            <SemiBoldText style={styles.bigButtonText}>
              Read the code of conduct
            </SemiBoldText>
          </RectButton>
        </ClipBorderRadius>

        <ClipBorderRadius>
          <RectButton
            style={styles.bigButton}
            onPress={this._handlePressMapButton}
            underlayColor="#fff"
          >
            <SemiBoldText style={styles.bigButtonText}>
              {Platform.OS === 'android' ? 'Download' : 'Open'} the conference map
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
      </AnimatableView>
    );
  }

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

  _handlePressTwitterButton = async () => {
    try {
      await Linking.openURL(`twitter://user?screen_name=nodevember`);
    } catch (e) {
      WebBrowser.openBrowserAsync('https://twitter.com/nodevember');
    }
  };

  _handlePressMapButton = () => {
    let url = Asset.fromModule(require('../assets/nodevember-map.pdf')).uri;
    if (Platform.OS === 'android') {
      Linking.openURL(url);
    } else {
      WebBrowser.openBrowserAsync(url);
    }
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
  headerSmallText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 7,
    lineHeight: 7 * 1.5,
  },
  bigButton: {
    backgroundColor: Colors.green,
    paddingHorizontal: 15,
    height: 50,
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
