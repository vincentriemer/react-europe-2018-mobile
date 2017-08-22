import glamorous from 'glamorous-native';

export const Container = glamorous.view({
  flex: 1,
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'center',
});

export const Section = glamorous.view({
  flexDirection: 'column',
  padding: 10,
});

export const Title = glamorous.text({
  color: 'white',
  fontSize: 16,
  textAlign: 'center',
});

export const Value = glamorous.text({
  color: 'white',
  fontSize: 32,
  textAlign: 'center',
  flex: 1,
  fontFamily: 'orbitron-bold',
});
