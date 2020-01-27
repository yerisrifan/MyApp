import React from 'react';
import {withNavigation} from 'react-navigation';
import {Layout, Text, Icon, Avatar} from '@ui-kitten/components';
import {StyleSheet, TouchableOpacity} from 'react-native';

const MiniPlayer = props => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Player')}>
      <Layout style={styles.container}>
        <Avatar
          style={styles.avatar}
          source={{uri: 'https://via.placeholder.com/600/92c952'}}
        />
        <Layout style={styles.containerText}>
          <Text style={styles.title}>Mini</Text>
          <Text style={styles.artis}>Artist</Text>
        </Layout>
        <Layout style={styles.icon}>
          <Icon
            name="play-circle-outline"
            width={32}
            height={32}
            fill="#bac8e4"
          />
        </Layout>
      </Layout>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
  containerText: {
    marginLeft: 15,
    alignSelf: 'center',
    backgroundColor: 'transparent',
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
    color: '#fff',
  },
  artis: {},
});
export default withNavigation(MiniPlayer);
