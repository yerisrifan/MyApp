import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {styles} from '../../constant';

const ManageScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.container}>
        <Layout style={style.containerProfile}>
          <Image
            style={style.avatar}
            source={{
              uri:
                'https://expo-netflix.calebnance.now.sh/static/media/purple-penguin.622a496f.jpg',
            }}
          />
          <Text>Susi Susanti</Text>
          <Button size="medium" appearance="outline">
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
          <Text style={style.textMenu}>Version 0.1</Text>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerProfile: {
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  containerMenu: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  textContainer: {
    marginBottom: 10,
    borderStyle: 'solid',
    borderBottomColor: '#1b2136',
    borderBottomWidth: 1,
  },
  textMenu: {
    marginBottom: 10,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '500',
    fontSize: 16,
  },
});
export default ManageScreen;
