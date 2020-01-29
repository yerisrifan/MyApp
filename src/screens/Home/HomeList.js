import React from 'react';
import {Icon, Text, Layout} from '@ui-kitten/components';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const HomeList = (title, author, props) => {
  return (
    <TouchableOpacity onPress={this.props.navigation.navigate('Player')}>
      <Layout style={styles.item}>
        <Text style={styles.title}>{title.title}</Text>
        <Icon
          style={styles.icon}
          name="play-circle-outline"
          width={32}
          height={32}
          fill="#bac8e4"
        />
      </Layout>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    maxWidth: 300,
    maxHeight: 30,
  },
  icon: {
    marginEnd: 0,
    color: 'red',
    marginLeft: 20,
    width: 30,
    height: 30,
  },
});
export default withNavigation(HomeList);
