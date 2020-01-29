import React, {Component} from 'react';
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
  TouchableOpacity,
  FlatList,
} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import {withNavigation} from 'react-navigation';
import axios from 'axios';
import {connect} from 'react-redux';
import {playNow, getAudioData, setAudio, changeNow} from '../../action';

class HomeDetail extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      videoId: '',
      videoInfo: [],
      related: [],
    };
  }
  componentDidMount() {
    this.getInfo();
  }

  getInfo = async () => {
    const videoId = await this.props.navigation.getParam('videoId', 'No-ID');
    const url = 'https://app-backendyt1991.herokuapp.com/info/' + videoId;
    const getinfo = await axios.get(url);
    const detail = await getinfo.data.info.player_response.videoDetails;
    this.setState({
      related: getinfo.data.info.related_videos,
      videoInfo: detail,
      isLoading: false,
    });
  };

  async handleGoPlayer(item) {
    this.props.navigation.navigate('Player', {
      videoId: item.id,
      title: item.title,
      author: item.author,
      video_thumbnail: item.video_thumbnail,
    });
    const willset = await getAudioData(item.id);
    await this.props.setAudio(willset);
    await this.props.change(!this.props.isChanging);
  }
  render() {
    const BackIcon = style => <Icon {...style} name="arrow-ios-back-outline" />;
    const BackAction = () => (
      <TopNavigationAction
        onPress={() => this.props.navigation.goBack()}
        icon={BackIcon}
      />
    );
    return (
      <SafeAreaView style={styles.container}>
        <TopNavigation leftControl={BackAction()} />
        {this.state.isLoading ? (
          <Layout>
            <Text>Loading</Text>
          </Layout>
        ) : (
          <Layout style={style.containerHeader}>
            <Image
              style={style.poster}
              source={{
                uri: this.state.videoInfo.thumbnail.thumbnails[1].url,
              }}
            />
            <TextTicker
              style={style.title}
              duration={10000}
              loop
              bounc
              repeatSpacer={50}>
              {this.state.videoInfo.title}
            </TextTicker>
            <Text style={style.artist}> {this.state.videoInfo.author} </Text>
            <Button
              onPress={() =>
                this.props.navigation.navigate('Player', {
                  videoId: this.state.videoInfo.videoId,
                })
              }
              style={style.btnPlay}>
              Play Now
            </Button>
            <FlatList
              data={this.state.related}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity onPress={() => this.handleGoPlayer(item)}>
                    <Layout style={style.item}>
                      <Text style={style.itemTitle}>{item.title}</Text>
                      <Icon
                        style={style.itemIcon}
                        name="play-circle-outline"
                        width={32}
                        height={32}
                        fill="#bac8e4"
                      />
                    </Layout>
                  </TouchableOpacity>
                );
              }}
            />
          </Layout>
        )}
      </SafeAreaView>
    );
  }
}

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
  item: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  itemTitle: {
    maxWidth: 300,
    maxHeight: 30,
  },
  itemIcon: {
    marginEnd: 0,
    color: 'red',
    marginLeft: 20,
    width: 30,
    height: 30,
  },
});

const mapStateToProps = state => {
  return {
    isPaused: state.isPaused,
    isLoading: state.isLoading,
    selectedId: state.selectedId,
    audioData: state.audioData,
    isChanging: state.isChanging,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pause: val => dispatch(playNow(val)),
    change: val => dispatch(changeNow(val)),
    setAudio: val => dispatch(setAudio(val)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(HomeDetail));
