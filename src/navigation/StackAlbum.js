import {createStackNavigator} from 'react-navigation-stack';
import AlbumScreen from '../screens/Search/SearchSreen';

export default createStackNavigator(
  {
    AlbumScreen,
  },
  {
    headerMode: 'none',
  },
);
