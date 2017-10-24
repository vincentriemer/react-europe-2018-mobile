import React from 'react';
import { Text, View } from 'react-native';
const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 28 }}>Home</Text>
    </View>
  );
};

Home.navigationOptions = {
  headerStyle: { backgroundColor: '#187f65' },
  headerTintColor: 'white',
  title: 'Home',
};

export default Home;
