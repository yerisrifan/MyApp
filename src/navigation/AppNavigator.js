import React from 'react';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import StackHome from './StackHome';
import StackAlbum from './StackAlbum';
import StackPlaylist from './StackPlaylist';
import StackProfile from './StackProfile';
import Player from '../screens/Player/Player';
import MiniPlayer from '../screens/Player/MiniPlayer';
import ProfileManage from '../screens/Profile/ProfileManage';
import Auth from '../screens/Auth/Auth';

const TabBarComponent = ({navigation}) => {
  const onSelect = index => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  // Icons
  const HomeIcon = style => <Icon {...style} name="home" />;
  const SearchIcon = style => <Icon {...style} name="search-outline" />;
  const PlaylistIcon = style => <Icon {...style} name="headphones-outline" />;
  const User = style => <Icon {...style} name="menu-2-outline" />;
  return (
    <SafeAreaView style={{backgroundColor: '#181a2c'}}>
      <MiniPlayer />
      <BottomNavigation
        selectedIndex={navigation.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab title="Discover" icon={HomeIcon} />
        <BottomNavigationTab title="Search" icon={SearchIcon} />
        <BottomNavigationTab title="Playlist" icon={PlaylistIcon} />
        <BottomNavigationTab title="Profile" icon={User} />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    StackHome,
    StackAlbum,
    StackPlaylist,
    StackProfile,
  },
  {
    tabBarComponent: TabBarComponent,
  },
);

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
    Player: {
      screen: Player,
    },
    Manage: {
      screen: ProfileManage,
    },
    Auth: {
      screen: Auth,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

export const AppNavigator = createAppContainer(StackNavigator);
