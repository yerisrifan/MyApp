import React, {Component} from 'react';
import {
  TopNavigation,
  Icon,
  TopNavigationAction,
  Text,
  Layout,
} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import {styles} from '../../constant';
import {SafeAreaView, StyleSheet, Image} from 'react-native';
import Control from './Control';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';
import {playNow, getAudioData, setAudio, changeNow} from '../../action';

class Player extends Component {
  handlePause = () => {
    this.props.pause(!this.props.isPaused);
  };

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

    const title = this.props.navigation.getParam('title');
    const author = this.props.navigation.getParam('author');
    const video_thumbnail = this.props.navigation.getParam('video_thumbnail');

    return (
      <SafeAreaView style={styles.container}>
        <TopNavigation rightControls={BackAction()} />
        <Layout style={style.containerMain}>
          <Layout style={style.containerHeader}>
            <Text style={style.title}>
              {title || this.props.audioData.title}
            </Text>
            <Text style={style.artist}>
              {author || this.props.audioData.author}
            </Text>
          </Layout>
          <Layout style={style.containerImage}>
            <Image
              style={style.poster}
              source={{uri: video_thumbnail || this.props.audioData.poster}}
            />
          </Layout>
          <Layout>
            <Text></Text>
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

const mapStateToProps = state => {
  //console.log(state);
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
)(withNavigation(Player));
