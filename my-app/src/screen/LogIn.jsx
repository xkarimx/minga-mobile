import React from 'react';
import { ScrollView, StyleSheet, View, ImageBackground } from 'react-native';
import Wellcome from '../components/Wellcome';
import LoginForm from '../components/LoginForm';
import bg from '../../images/bg18.jpg';

export default function LogIn() {
  return (
    <ImageBackground source={bg} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <Wellcome text="Welcome!" />
        <LoginForm />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
