import React from 'react';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import PlayListScreen from '../screens/PlayListScreen';
import ManageScreen from '../screens/ManageScreen';

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
    <SafeAreaView>
      <BottomNavigation
        selectedIndex={navigation.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab title="Home" icon={HomeIcon} />
        <BottomNavigationTab title="Album" icon={SearchIcon} />
        <BottomNavigationTab title="Playlist" icon={PlaylistIcon} />
        <BottomNavigationTab title="Profile" icon={User} />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen,
    SearchScreen,
    PlayListScreen,
    ManageScreen,
  },
  {
    tabBarComponent: TabBarComponent,
  },
);

export const AppNavigator = createAppContainer(TabNavigator);
