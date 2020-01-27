import React from 'react';
import {TopNavigation, Icon, TopNavigationAction} from '@ui-kitten/components';
import {StatusBar, SafeAreaView, ScrollView} from 'react-native';
import {styles} from '../constant';
import Search from '../component/Search';
import Discover from '../component/Home/Discover';
import Featured from '../component/Home/Featured';
const HomeScreen = () => {
  const EditIcon = style => <Icon {...style} name="bell-outline" />;
  const EditAction = () => <TopNavigationAction icon={EditIcon} />;
  const renderRightControls = () => [<EditAction />];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TopNavigation
        title="Discover"
        alignment="center"
        titleStyle={styles.headerNav}
        rightControls={renderRightControls()}
      />
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
