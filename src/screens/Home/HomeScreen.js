import React, {Component} from 'react';
import {StatusBar, SafeAreaView, ScrollView} from 'react-native';
import {styles} from '../../constant';
import Discover from '../../component/Home/Discover';
import Featured from '../../component/Home/Featured';
import Header from '../../component/Header/Header';
class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <Header title="Discover" />
          {/* <Featured /> */}
          <Discover
            title="Discover"
            data={'BTS'}
            navigation={this.props.navigation}
          />
          <Discover
            title="Trending"
            data={'khalid basalamah terbaru'}
            navigation={this.props.navigation}
          />
          <Discover
            data={'pengajian ustad abdul somad'}
            title="Trending"
            navigation={this.props.navigation}
          />
          <Discover
            data={'pengajian ustadz adi hidayat'}
            title="Trending"
            navigation={this.props.navigation}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
