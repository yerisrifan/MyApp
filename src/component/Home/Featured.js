import React from 'react';
import {Image, ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';

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

  const {width: screenWidth} = Dimensions.get('window');

  const _renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={{width: screenWidth - 60, height: screenWidth - 150}}>
        <ParallaxImage
          source={{uri: item.url}}
          containerStyle={{
            flex: 1,
            marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
            backgroundColor: 'white',
            borderRadius: 20,
          }}
          style={styles.featuredPoster}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };
  let _sliderRef = '';
  return (
    <Layout style={styles.container}>
      <Text style={styles.heading}>My Playlist</Text>
      <Carousel
        ref={c => (_sliderRef = c)}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={DiscoverData}
        renderItem={_renderItem}
        hasParallaxImages={true}
      />
      <Pagination
        containerStyle={{paddingVertical: 8}}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 4,
          marginHorizontal: 8,
        }}
        carouselRef={_sliderRef}
        activeDotIndex={1}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        inactiveDotColor={'rgba(255, 255, 255, 0.92)'}
        dotColor={'rgba(255, 255, 255, 0.92)'}
        dotsLength={DiscoverData.length}
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
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
export default Featured;
