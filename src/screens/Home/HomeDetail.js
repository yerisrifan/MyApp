import React from 'react';
import {styles} from '../../constant';
import {
  TopNavigation,
  Icon,
  TopNavigationAction,
  Text,
  Button,
} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';

const HomeDetail = props => {
  const BackIcon = style => <Icon {...style} name="arrow-ios-back-outline" />;
  const BackAction = () => (
    <TopNavigationAction
      onPress={() => props.navigation.goBack()}
      icon={BackIcon}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation leftControl={BackAction()} title="Application Title" />
      <Text>Details</Text>
      <Button onPress={() => props.navigation.navigate('Player')}>Play</Button>
    </SafeAreaView>
  );
};

export default HomeDetail;
