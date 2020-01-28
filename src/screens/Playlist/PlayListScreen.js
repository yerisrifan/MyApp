import React, {useState} from 'react';
import {Layout, Text, TabView, Tab} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet} from 'react-native';
import {styles} from '../../constant';
import Header from '../../component/Header/Header';

const PlayListScreen = () => {
  const [TabBar, setTabBar] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'My Playlist'} />
      <Layout style={style.containerPlaylist}>
        <Layout>
          <Text style={style.heading}>My Playlist</Text>
          <TabView>
            <Tab title={'Playlist'}>
              <Layout>
                <Text>Playlist</Text>
              </Layout>
            </Tab>
            <Tab title={'Music'}>
              <Layout>
                <Text>Music</Text>
              </Layout>
            </Tab>
          </TabView>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerPlaylist: {
    height: '90%',
    paddingTop: 5,
    paddingStart: 20,
  },
  heading: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default PlayListScreen;
