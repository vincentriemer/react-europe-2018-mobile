import { StackNavigator } from 'react-navigation';
import Screens from './screens';

export default StackNavigator({
  Home: { screen: Screens.Home },
  Speakers: { path: 'speakers/:name', screen: Screens.Speakers },
  Keynotes: { path: 'keynotes/:name', screen: Screens.Keynotes },
  Events: { path: 'events/:name', screen: Screens.Events },
  Sponsors: { path: 'sponsors', screen: Screens.Sponsors },
});
