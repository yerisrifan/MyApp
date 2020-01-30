import React, {Component} from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Layout, Text, Card} from '@ui-kitten/components';
import {toBackend} from '../../constant/connectBackend';

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
  getData = () => {
    const willSearch = this.props.data;
    if (willSearch) {
      console.log('/search/' + willSearch);
      toBackend('/search/' + willSearch).then(res => {
        this.setState({
          audioData: res.data.items,
        });
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
