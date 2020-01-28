import React, {Component} from 'react';
import {TopNavigation, Icon, TopNavigationAction} from '@ui-kitten/components';
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
          <Featured />
          <Discover title="Discover" navigation={this.props.navigation} />
          <Discover title="Trending" navigation={this.props.navigation} />
          <Discover title="Trending" navigation={this.props.navigation} />
          <Discover title="Trending" navigation={this.props.navigation} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
