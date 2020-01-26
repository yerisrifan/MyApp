import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

const Featured = () => {
  const DiscoverData = [
    {
      albumId: 1,
      id: 1,
      title: 'Black Swan',
      artist: 'BTS',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 1,
      id: 2,
      title: 'Signed, Sealed, Delivered',
      artist: 'Sly & The Family Stone',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
    {
      albumId: 1,
      id: 3,
      title: 'I ll Be Around',
      artist: 'Sam Cooke',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      albumId: 1,
      id: 4,
      title: 'Lady Marmalade',
      artist: 'Aretha Franklin',
      url: 'https://via.placeholder.com/600/d32776',
      thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    },
    {
      albumId: 1,
      id: 5,
      title: 'My Girl',
      artist: 'Sam & Dave',
      url: 'https://via.placeholder.com/600/f66b97',
      thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    },
    {
      albumId: 1,
      id: 6,
      title: 'A Change Is Gonna Come',
      artist: 'Ray Charles',
      url: 'https://via.placeholder.com/600/56a8c2',
      thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
    },
  ];
  return (
    <Layout style={styles.container}>
      <Text style={styles.heading}>Featured</Text>
      <Image
        style={styles.featuredPoster}
        source={{uri: 'https://via.placeholder.com/600/92c952'}}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontFamily: 'Montserrat-Bold',
    marginBottom: 20,
    fontSize: 20,
  },
  featuredPoster: {
    flexDirection: 'row',
    borderRadius: 20,
    height: 200,
  },
});
export default Featured;
