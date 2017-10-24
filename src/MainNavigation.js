import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Screens from './screens';

const DrawerStack = DrawerNavigator({
  Home: { screen: Screens.Home },
});

const MainNavigation = StackNavigator(
  {
    drawerStack: { screen: DrawerStack },
  },
  {
    initialRouteName: 'drawerStack',
    headerMode: 'float',
  }
);

export default MainNavigation;
