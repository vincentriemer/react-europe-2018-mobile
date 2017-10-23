import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Screens from './screens';

const DrawerStack = DrawerNavigator({
  Home: { screen: Screens.Home },
  Keynotes: { screen: Screens.Keynotes },
  Speakers: { screen: Screens.Speakers },
  Sponsors: { screen: Screens.Sponsors },
  Events: { screen: Screens.Events },
});

const MainNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack },
  },
  {
    initialRouteName: 'DrawerStack',
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#187f65' },
      title: 'Nodevember',
      headerTintColor: 'white',
    }),
  }
);

export default MainNavigation;
