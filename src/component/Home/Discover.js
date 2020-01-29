import React, {Component} from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Layout, Text, Card} from '@ui-kitten/components';
import axios from 'axios';

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
class Discover extends Component {
  constructor() {
    super();
    this.state = {
      audioData: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const willSearch = this.props.data;
    if (willSearch) {
      const base = 'https://app-backendyt1991.herokuapp.com/search/';
      const get = await axios.get(base + willSearch);
      this.setState({
        audioData: get.data.items,
      });
    }
  };

  render() {
    return (
      <Layout style={styles.cardContainer}>
        <Text style={styles.cardH1}>{this.props.title}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.state.audioData &&
            this.state.audioData.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {
                      videoId: item.id.videoId,
                    })
                  }>
                  <Layout style={styles.cardSingle}>
                    <Image
                      style={styles.cardPoster}
                      source={{
                        uri: item.snippet.thumbnails.medium.url,
                      }}
                    />
                    <Text style={styles.cardTitle}>{item.snippet.title}</Text>
                    <Text style={styles.cardArtist}>{item.artist}</Text>
                  </Layout>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 20,
  },
  cardSingle: {
    width: 100,
    marginRight: 12,
  },
  cardH1: {
    fontFamily: 'Montserrat-Bold',
    marginTop: 30,
    marginBottom: 20,
    fontSize: 20,
  },
  cardTitle: {
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    fontWeight: '500',
    maxHeight: 30,
    paddingTop: 10,
    fontSize: 14,
  },
  cardArtist: {
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    maxHeight: 30,
    fontSize: 12,
    fontWeight: '200',
  },
  cardPoster: {
    flexDirection: 'row',
    borderRadius: 20,
    height: 100,
  },
});
export default Discover;
