import React from 'react';
import {withNavigation} from 'react-navigation';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Layout, Text, Button, TabView, Tab} from '@ui-kitten/components';
import {styles} from '../../constant';
import Register from './Register';
import Login from './Login';

const Auth = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={style.loginContainer}>
        <TabView selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
          <Tab title="Sign In">
            <Login navigation={props.navigation} />
          </Tab>
          <Tab title="Sign Up">
            <Register />
          </Tab>
        </TabView>
      </Layout>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  loginContainer: {
    paddingHorizontal: 50,
    marginTop: 70,
  },
});
export default withNavigation(Auth);
