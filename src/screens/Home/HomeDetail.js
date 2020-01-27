import React from 'react';
import {styles} from '../../constant';
import {
  TopNavigation,
  Icon,
  TopNavigationAction,
  Text,
  Layout,
} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet, Image} from 'react-native';

const HomeDetail = props => {
  const BackIcon = style => <Icon {...style} name="arrow-ios-back-outline" />;
  const BackAction = () => (
    <TopNavigationAction
      onPress={() => props.navigation.goBack()}
      icon={BackIcon}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation leftControl={BackAction()} title="Application Title" />
      <Layout style={style.containerDetail}>
        <Layout style={style.containerImage}>
          <Image
            style={style.poster}
            source={{uri: 'https://via.placeholder.com/150/56a8c2'}}
          />
        </Layout>
        <Text>single</Text>
      </Layout>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerDetail: {
    backgroundColor: 'red',
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
export default HomeDetail;
