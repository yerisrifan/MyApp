import {createStackNavigator} from 'react-navigation-stack';
import AlbumScreen from '../screens/Album/AlbumScreen';

export default createStackNavigator(
  {
    AlbumScreen,
  },
  {
    headerMode: 'none',
  },
);
