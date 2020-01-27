import {createStackNavigator} from 'react-navigation-stack';
import ManageScreen from '../screens/Profile/ManageScreen';

export default createStackNavigator(
  {
    ManageScreen,
  },
  {
    headerMode: 'none',
  },
);
