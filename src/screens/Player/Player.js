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
        <TopNavigation
          rightControls={BackAction()}
          alignment="center"
          title="Player"
        />
        <Layout style={style.containerHeader}>
          <Text>BlackSwan</Text>
          <Text>BTS</Text>
        </Layout>
        <Layout style={style.containerImage}>
          <Image
            style={style.poster}
            source={{uri: 'https://via.placeholder.com/600/92c952'}}
          />
        </Layout>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  containerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  poster: {
    width: 350,
    height: 350,
    borderRadius: 200,
  },
});
