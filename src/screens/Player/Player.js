import React, {Component} from 'react';
import {
  TopNavigation,
  Icon,
  TopNavigationAction,
  Text,
  Layout,
} from '@ui-kitten/components';
import {styles} from '../../constant';
import {SafeAreaView, StyleSheet, Image} from 'react-native';
import Control from './Control';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';

export default class Player extends Component {
  render() {
    const BackIcon = style => (
      <Icon {...style} name="arrow-ios-downward-outline" />
    );
    const BackAction = () => (
      <TopNavigationAction
        onPress={() => this.props.navigation.goBack()}
        icon={BackIcon}
      />
    );
    return (
      <SafeAreaView style={styles.container}>
        <TopNavigation rightControls={BackAction()} />
        <Layout style={style.containerMain}>
          <Layout style={style.containerHeader}>
            <Text style={style.title}>BlackSwan</Text>
            <Text style={style.artist}>BTS</Text>
          </Layout>
          <Layout style={style.containerImage}>
            <Image
              style={style.poster}
              source={{uri: 'https://via.placeholder.com/600/92c952'}}
            />
          </Layout>
          <Layout>
            <Slider />
            <Control />
          </Layout>
        </Layout>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  containerMain: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  containerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    fontWeight: '500',
  },
  artist: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '200',
    fontFamily: 'Montserrat-Regular',
  },

  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  poster: {
    width: 300,
    height: 300,
    borderRadius: 200,
  },
});
