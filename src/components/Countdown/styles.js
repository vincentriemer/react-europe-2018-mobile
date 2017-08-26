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
  color: 'black',
  fontSize: 18,
  textAlign: 'center',
});

export const Label = glamorous.text({
  color: 'black',
  fontSize: 16,
  textAlign: 'center',
});

export const Value = glamorous.text({
  color: '#187f65',
  fontSize: 32,
  textAlign: 'center',
  flex: 1,
  fontFamily: 'open-sans-bold',
  borderColor: '#187f65',
  width: 50,
  marginTop: 8,
  paddingTop: 4,
  paddingBottom: 4,
  borderWidth: 1,
});
