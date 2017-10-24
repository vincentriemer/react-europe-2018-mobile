import React from 'react';
import { Platform } from 'react-native';
import glamorous from 'glamorous-native';
import keynotes from './keynotes';

const snakecase = value => value.toLowerCase().replace(' ', '-');

const Container = glamorous.view({
  flex: 1,
  margin: 10,
  marginBottom: 20,
  borderColor: '#187f65',
  borderWidth: 2,
  borderTopWidth: 0,
});

const Image = glamorous.image({
  borderRadius: 50,
  height: 100,
  width: 100,
  backgroundColor: '#187f65',
  marginRight: 15,
});

const Details = glamorous.view({
  flex: 1,
  flexDirection: 'column',
});

const Name = glamorous.text({
  fontSize: 24,
  fontWeight: 'bold',
});

const Text = glamorous.text({
  // lineHeight: 1.2,
  letterSpacing: 1.1,
  fontSize: 14,
});

const TextList = glamorous.view({
  margin: 8,
});

const Tagline = glamorous.text({
  color: 'white',
  fontStyle: 'italic',
});

const Bio = ({ children }) => {
  if (typeof children === 'string') {
    return (
      <TextList>
        {children
          .split('\n')
          .map((child, i) => <Text key={`bio_${i}`}>{child}</Text>)}
      </TextList>
    );
  }
  return children;
};

const List = glamorous.view({});

const Title = glamorous.text({
  // fontFamily: 'orbitron-bold',
  backgroundColor: '#187f65',
  color: 'white',
  fontSize: 32,
  textAlign: 'center',
  padding: 10,
  marginTop: 10,
  marginBottom: 15,
});

const Section = glamorous.view({
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#187f65',
  padding: 8,
  alignItems: 'center',
  marginBottom: 5,
});

export default class Keynotes extends React.Component {
  render() {
    return (
      <List>
        <Title>Keynotes</Title>
        {keynotes.map(({ image, name, bio, tagline }) => {
          return (
            <Container key={snakecase(name)}>
              <Section>
                <Image source={{ uri: image }} />
                <Details>
                  <Name>{name}</Name>
                  <Tagline>{tagline}</Tagline>
                </Details>
              </Section>
              <Bio>{bio}</Bio>
            </Container>
          );
        })}
      </List>
    );
  }
}
