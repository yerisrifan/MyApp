import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import HomeDetail from '../screens/Home/HomeDetail';
import Player from '../screens/Player/Player';

export default StackHome = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Detail: {
      screen: HomeDetail,
    },
  },
  {
    headerMode: 'none',
  },
);
