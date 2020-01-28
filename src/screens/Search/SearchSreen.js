import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';
import {SearchBar} from 'react-native-elements';
import {styles} from '../../constant';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../../component/Header/Header';

const SearchScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Search" />
      <Layout style={style.container}>
        <SearchBar
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          placeholder="Type Here..."
        />
        <Text>tes</Text>
      </Layout>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    height: '90%',
    paddingHorizontal: 20,
  },
});
export default SearchScreen;
