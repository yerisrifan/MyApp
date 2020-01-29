import React, {Component} from 'react';
import {playNow, getAudioData, setAudio} from '../../action';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class Controls extends Component {
  handlePause = () => {
    this.props.pause(!this.props.isPaused);
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
          <Image
            style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}
            source={require('../../../assets/img/ic_shuffle_white.png')}
          />
        </TouchableOpacity> */}
        <View style={{width: 40}} />
        <TouchableOpacity onPress={null}>
          <Image
            source={require('../../../assets/img/ic_skip_previous_white_36pt.png')}
          />
        </TouchableOpacity>
        <View style={{width: 20}} />
        {!this.props.isPaused ? (
          <TouchableOpacity onPress={this.handlePause}>
            <View style={styles.playButton}>
              <Image
                source={require('../../../assets/img/ic_pause_white_48pt.png')}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={this.handlePause}>
            <View style={styles.playButton}>
              <Image
                source={require('../../../assets/img/ic_play_arrow_white_48pt.png')}
              />
            </View>
          </TouchableOpacity>
        )}
        <View style={{width: 20}} />
        {/* <TouchableOpacity onPress={null} disabled={null}>
          <Image
            style={[forwardDisabled && {opacity: 0.3}]}
            source={require('../../../assets/img/ic_skip_next_white_36pt.png')}
          />
        </TouchableOpacity> */}
        <View style={{width: 40}} />
        {/* <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
          <Image
            style={[styles.secondaryControl, repeatOn ? [] : styles.off]}
            source={require('../../../assets/img/ic_repeat_white.png')}
          />
        </TouchableOpacity> */}
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    isPaused: state.isPaused,
    isLoading: state.isLoading,
    selectedId: state.selectedId,
    audioData: state.audioData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pause: val => dispatch(playNow(val)),
    setAudio: val => dispatch(setAudio(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.3,
  },
});
