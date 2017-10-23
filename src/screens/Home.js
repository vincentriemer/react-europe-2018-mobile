import React from 'react';
import { Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Text style={{ marginTop: 10, fontSize: 28 }}>Home</Text>
    </View>
  );
};

Home.navigationOptions = {
  headerStyle: { backgroundColor: '#187f65' },
  headerTintColor: 'white',
  title: 'Home',
};

export default Home;
