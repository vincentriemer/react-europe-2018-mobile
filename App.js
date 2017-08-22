import React from 'react';
import {
  Button,
  Platform,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import { Font, WebBrowser } from 'expo';
import glamorous from 'glamorous-native';
import Countdown from './src/components/Countdown';

const ScrollingContainer = glamorous.scrollView({
  flex: 1,
  backgroundColor: '#187f65',
});

const Container = glamorous.view({
  flex: 1,
  flexDirection: 'column',
  backgroundColor: '#187f65',
  alignItems: 'center',
});

const Image = glamorous.image({
  marginTop: 24,
  marginBottom: 20,
});

const Heading = glamorous.text({
  fontFamily: 'open-sans-bold',
  fontSize: 32,
  color: 'white',
});

const HeaderWrapper = glamorous.view({
  flex: 1,
  marginTop: 10,
  marginBottom: 20,
});

const ThemedButton = glamorous.text({
  fontFamily: 'open-sans-bold',
  textAlign: 'center',
  margin: 10,
  padding: 5,
  fontSize: 36,
  color: '#187f65',
  backgroundColor: 'white',
  borderRadius: 2,
  ...Platform.select({
    android: { elevation: 5 },
    ios: {},
  }),
});

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./assets/OpenSans-Bold.ttf'),
      'orbitron-bold': require('./assets/Orbitron-Bold.ttf'),
    });
    this.setState({
      fontLoaded: true,
    });
  }

  openTickets = () => {
    WebBrowser.openBrowserAsync(
      'https://www.eventbrite.com/e/nodevember-2017-tickets-34928136998'
    );
  };

  render() {
    return (
      this.state.fontLoaded &&
      <ScrollingContainer>
        <Container>
          <Image source={require('./assets/logo.png')} />
          <HeaderWrapper>
            <Heading>November 27th & 28th</Heading>
            <TouchableOpacity onPress={this.openTickets}>
              <ThemedButton>Buy Tickets</ThemedButton>
            </TouchableOpacity>
          </HeaderWrapper>
          <Countdown />
        </Container>
      </ScrollingContainer>
    );
  }
}
