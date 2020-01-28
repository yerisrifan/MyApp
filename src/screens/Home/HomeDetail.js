import React, {Fragment} from 'react';
import {styles} from '../../constant';
import {
  TopNavigation,
  Icon,
  TopNavigationAction,
  Text,
  Layout,
  Button,
} from '@ui-kitten/components';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import HomeList from './HomeList';

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
      <TopNavigation leftControl={BackAction()} />
      <Layout style={style.containerHeader}>
        <Image
          style={style.poster}
          source={{
            uri:
              'https://mmc.tirto.id/image/otf/500x0/2019/04/01/bts_come_back_ratio-16x9.jpg',
          }}
        />
        <TextTicker
          style={style.title}
          duration={10000}
          loop
          bounc
          repeatSpacer={50}>
          BTS (방탄소년단) '작은 것들을 위한 시 (Boy With Luv) feat. Halsey'
          Official MV
        </TextTicker>
        <Text style={style.artist}> BTS </Text>
        <Button style={style.btnPlay}>Play Now</Button>
      </Layout>
      <Layout>
        <HomeList />
      </Layout>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
  },
  poster: {
    marginTop: 20,
    width: 200,
    height: 200,
    borderRadius: 30,
  },
  title: {
    paddingTop: 20,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    fontWeight: '500',
  },
  artist: {
    paddingBottom: 20,
    marginTop: 10,
    fontSize: 15,
    fontWeight: '200',
    fontFamily: 'Montserrat-Regular',
  },
  btnPlay: {
    width: '70%',
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
export default HomeDetail;
