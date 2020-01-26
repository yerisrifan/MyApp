import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {StatusBar, SafeAreaView, ScrollView} from 'react-native';
import {styles} from '../constant';
import Search from '../component/Search';
import Discover from '../component/Home/Discover';
import Featured from '../component/Home/Featured';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Search />
      <ScrollView>
        <Featured />
        <Discover title="Discover" />
        <Discover title="Trending" />
        <Discover title="Trending" />
        <Discover title="Trending" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
