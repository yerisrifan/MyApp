import React, {Component} from 'react';
import axios from 'axios';
import {withNavigation} from 'react-navigation';
import {Layout, Text, Icon, Avatar, Spinner} from '@ui-kitten/components';
import {StyleSheet, TouchableOpacity} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import Video from 'react-native-video';
import {connect} from 'react-redux';
import {playNow, getAudioData, setAudio, changeNow} from '../../action';

class MiniPlayer extends Component {
  // async componentDidMount() {
  //   this.getAudio();
  // }
  getAudio = async id => {
    const getData = await getAudioData(id);
    return getData;
  };
  handlePause = () => {
    this.props.pause(!this.props.isPaused);
  };
  handlePlayer = async () => {
    const willset = await this.getAudio(this.props.selectedId);
    await this.props.setAudio(willset);
    await this.props.change(!this.props.isChanging);
    this.props.navigation.navigate('Player');
  };

  render() {
    const video = this.props.isChanging ? null : (
      <Video
        source={{
          uri: this.props.audioData.url,
        }} // Can be a URL or a local file.
        onLoadStart={this.loadStart}
        onEnd={this.onEnd} // Callback when playback finishes
        onError={this.videoError}
        paused={this.props.isPaused}
      />
    );

    return (
      <TouchableOpacity onPress={() => this.handlePlayer()}>
        <Layout style={styles.container}>
          <Avatar
            style={styles.avatar}
            source={{uri: this.props.audioData.poster}}
          />
          <Layout style={styles.containerText}>
            <TextTicker
              style={styles.title}
              duration={10000}
              loop
              bounc
              repeatSpacer={50}>
              {this.props.audioData.title}
            </TextTicker>
            <Text style={styles.artis}>{this.props.audioData.author}</Text>
          </Layout>
          <Layout style={styles.icon}>
            <TouchableOpacity onPress={this.handlePause}>
              <Icon
                name="play-circle-outline"
                width={32}
                height={32}
                fill="#bac8e4"
              />
            </TouchableOpacity>
          </Layout>
          {video}
        </Layout>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#1b2136',
  },
  containerText: {
    marginLeft: 15,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    maxWidth: 270,
    minWidth: '70%',
  },
  backgroundImg: {
    width: 100,
    resizeMode: 'repeat',
  },
  icon: {
    marginEnd: 0,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  avatar: {
    alignSelf: 'center',
    marginLeft: 20,
  },
  title: {
    justifyContent: 'flex-start',
    maxHeight: 30,
    color: '#fff',
  },
  artis: {},
});
const mapStateToProps = state => {
  console.log(state);
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
)(withNavigation(MiniPlayer));
