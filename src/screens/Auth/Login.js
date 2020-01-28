import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  Layout,
  Input,
  Button,
  Icon,
  Text,
  CheckBox,
} from '@ui-kitten/components';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const passIcon = style => <Icon {...style} name="eye-off" />;
    return (
      <Layout style={style.containerLogin}>
        <Layout style={style.inputContainer}>
          <Layout style={style.containerLogo}>
            <Image
              style={style.logo}
              source={require('../../../assets/img/logo.png')}
            />
          </Layout>
          <Input style={style.textInput} placeholder="Email" />
          <Input style={style.textInput} placeholder="******" icon={passIcon} />
          <Text style={style.forget}> Forget Password?</Text>
          <Layout style={style.rememberContainer}>
            <CheckBox />
            <Text style={style.rememberText}>Remenber Me</Text>
          </Layout>
          <Button
            onPress={() => this.props.navigation.navigate('Detail')}
            style={style.btnInput}>
            Login
          </Button>
        </Layout>
      </Layout>
    );
  }
}

const style = StyleSheet.create({
  containerLogin: {
    marginTop: 70,
  },
  containerLogo: {
    opacity: 0.4,
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 5,
  },
  textInput: {
    borderRadius: 20,
    marginTop: 20,
  },
  btnInput: {
    borderRadius: 20,
    marginTop: 30,
  },
  forget: {
    fontFamily: 'Montserrat-Bold',
    marginTop: 20,
    textAlign: 'right',
    color: '#3366FF',
  },
  rememberContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  rememberText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    marginLeft: 10,
    fontWeight: '200',
  },
});
