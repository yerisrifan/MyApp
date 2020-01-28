import React, {Component} from 'react';
import {
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Input,
  Button,
} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {styles} from '../../constant';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class ProfileManage extends Component {
  render() {
    const BackIcon = style => (
      <Icon {...style} name="arrow-ios-downward-outline" />
    );
    const passIcon = style => <Icon {...style} name="eye-off" />;
    const BackAction = () => (
      <TopNavigationAction
        onPress={() => this.props.navigation.goBack()}
        icon={BackIcon}
      />
    );

    const selectPhotoTapped = () => {
      ImagePicker.showImagePicker(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = {uri: response.uri};

          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };

          this.setState({
            avatarSource: source,
          });
        }
      });
    };
    return (
      <SafeAreaView style={styles.container}>
        <TopNavigation rightControls={BackAction()} />
        <Layout style={style.containerProfile}>
          <TouchableOpacity onPress={selectPhotoTapped}>
            <Image
              style={style.avatar}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4q1qA61wpV5hGLQLAbJA1bxghWskKC-QDmIps0ytiRmwQZ7rRw&s',
              }}
            />
          </TouchableOpacity>
          <Layout style={style.containerAvatar}>
            <Text style={style.textAvatar}>Choose Photo</Text>
          </Layout>
          <Layout style={style.inputContainer}>
            <Input style={style.textInput} placeholder="Name" />
            <Input style={style.textInput} placeholder="Email" />
            <Input
              style={style.textInput}
              placeholder="******"
              icon={passIcon}
            />
            <Button style={style.btnInput}>Save</Button>
          </Layout>
        </Layout>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  containerProfile: {
    alignItems: 'center',
    marginVertical: 70,
  },
  avatar: {
    width: 150,
    height: 150,
    marginBottom: 20,
    backgroundColor: '#1b2136',
  },
  containerAvatar: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: 150,
    height: 150,
    textAlign: 'center',
  },
  textAvatar: {
    textAlign: 'center',
    marginVertical: 50,
  },
  inputContainer: {
    marginTop: 20,
    width: '70%',
  },
  textInput: {
    borderRadius: 20,
    marginTop: 20,
  },
  btnInput: {
    borderRadius: 20,
    marginTop: 20,
  },
});
export default ProfileManage;
