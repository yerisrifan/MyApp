import {createStackNavigator} from 'react-navigation-stack';
import PlayListScreen from '../screens/Playlist/PlayListScreen';

export default createStackNavigator(
  {
    PlayListScreen,
  },
  {
    headerMode: 'none',
  },
);
