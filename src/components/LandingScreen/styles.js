import glamorous from 'glamorous-native';
import { Platform } from 'react-native';

export const ScrollingContainer = glamorous.scrollView({
  flex: 1,
  backgroundColor: '#187f65',
});

export const Container = glamorous.view({
  flex: 1,
  flexDirection: 'column',
  backgroundColor: '#187f65',
  alignItems: 'center',
});

export const Image = glamorous.image({
  marginTop: 24,
  marginBottom: 20,
});

export const Heading = glamorous.text({
  fontFamily: 'open-sans-bold',
  fontSize: 32,
  color: 'white',
});

export const HeaderWrapper = glamorous.view({
  flex: 1,
  marginTop: 10,
  marginBottom: 20,
});

export const ThemedButton = glamorous.text({
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
