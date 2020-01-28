import {createStackNavigator} from 'react-navigation-stack';
import ManageScreen from '../screens/Profile/ProfileScreen';

export default createStackNavigator(
  {
    ManageScreen,
  },
  {
    headerMode: 'none',
  },
);
