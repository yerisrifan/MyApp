import React from 'react';
import {withNavigation} from 'react-navigation';
import {Button, Icon, List, ListItem} from '@ui-kitten/components';
import DataJson from '../../data/data.json';
const HomeList = props => {
  const PlayIcon = style => <Icon {...style} name="play-circle-outline" />;
  const renderItem = ({item, index}) => (
    <ListItem
      onPress={() => props.navigation.navigate('Player')}
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      icon={PlayIcon}
    />
  );
  return <List data={DataJson} renderItem={renderItem} />;
};

export default withNavigation(HomeList);
