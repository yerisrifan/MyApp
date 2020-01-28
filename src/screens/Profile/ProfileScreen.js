import React from 'react';
import {withNavigation} from 'react-navigation';
import {Layout, Text, Button} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {styles} from '../../constant';

const ManageScreen = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.container}>
        <Layout style={style.containerProfile}>
          <Image
            style={style.avatar}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4q1qA61wpV5hGLQLAbJA1bxghWskKC-QDmIps0ytiRmwQZ7rRw&s',
            }}
          />
          <Text style={style.profileName}>Susi Susanti</Text>
          <Button
            onPress={() => props.navigation.navigate('Manage')}
            style={style.btn}
            size="medium"
            appearance="outline">
            Manage Profile
          </Button>
        </Layout>
        <Layout style={style.containerMenu}>
          <TouchableOpacity style={style.textContainer}>
            <Text style={style.textMenu}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.textContainer}>
            <Text style={style.textMenu}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.textContainer}>
            <Text style={style.textMenu}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.textContainer}>
            <Text style={style.textMenu}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Auth')}
            style={style.textContainer}>
            <Text style={style.textMenu}>SignOut</Text>
          </TouchableOpacity>
          <Text style={style.version}>Version 0.1</Text>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerProfile: {
    alignItems: 'center',
    marginVertical: 70,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: '#1b2136',
  },
  profileName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    marginBottom: 20,
  },
  btn: {
    borderRadius: 20,
  },
  containerMenu: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  textContainer: {
    marginBottom: 15,
    borderStyle: 'solid',
    borderBottomColor: '#1b2136',
    borderBottomWidth: 2,
  },
  textMenu: {
    marginBottom: 15,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '500',
    fontSize: 16,
  },
  version: {
    marginBottom: 15,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '100',
    fontSize: 12,
  },
});
export default withNavigation(ManageScreen);
