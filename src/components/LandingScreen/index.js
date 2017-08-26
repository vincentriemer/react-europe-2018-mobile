import React from 'react';
import { WebBrowser } from 'expo';
import { TouchableOpacity } from 'react-native';
import Countdown from '../Countdown';
import Keynotes from '../Keynotes';
import {
  Container,
  HeaderWrapper,
  Heading,
  Image,
  ScrollingContainer,
  ThemedButton,
} from './styles';

export default class LandingScreen extends React.Component {
  openTickets = () => {
    WebBrowser.openBrowserAsync(
      'https://www.eventbrite.com/e/nodevember-2017-tickets-34928136998'
    );
  };

  render() {
    return (
      <ScrollingContainer>
        <Container>
          <Image source={require('./logo.png')} />
          <HeaderWrapper>
            <Heading>November 27th & 28th</Heading>
            <TouchableOpacity onPress={this.openTickets}>
              <ThemedButton>Buy Tickets</ThemedButton>
            </TouchableOpacity>
          </HeaderWrapper>
        </Container>
        <Countdown />
        <Keynotes />
      </ScrollingContainer>
    );
  }
}
