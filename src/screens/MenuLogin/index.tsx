import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';

const MenuLogin = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.containerForm}>
        <Button label="LOGIN" />
        <Button label="REGISTER" />
      </View>
    </ImageBackground>
  );
};

export default MenuLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom:150
  },
  containerForm: {
    marginLeft: 30,
    marginRight: 30,
    gap:20
  },
});
