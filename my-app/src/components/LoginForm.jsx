import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import bottomTabsActions from '../store/ReloadBottomsTabs/actions.js';  
import AsyncStorage from '@react-native-async-storage/async-storage';
import BienvenidaRegister from './Wellcome';
import axios from 'axios';
import google from "../../images/Googlee.png"

const { reloadBottomTabs } = bottomTabsActions

export default function FormLogin() {
  const navigation = useNavigation();
  const [mail, setmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  let state = useSelector(store => store.bottomReducer.state)
  const [loading, setLoading] = useState()

  async function handleSubmit() {
    let data = {
      mail: mail,
      password: password
    };
    
    let url = 'https://minga-grupoblanco.onrender.com/api/signin/';

    try {
      setLoading(true)
      const response = await axios.post(url, data);
      const { token, user } = response.data;
      
     
      await AsyncStorage.setItem('token', token);
      const storedToken = await AsyncStorage.getItem('token');
      console.log('Token almacenado:', storedToken);
      

      await AsyncStorage.setItem('user', JSON.stringify({
        name: user.name,
        mail: user.mail,
        photo: user.photo,
      }));
      const storedUser = await AsyncStorage.getItem('user');
      console.log('Usuario almacenado:', storedUser);
      console.log('logueado');
      dispatch(reloadBottomTabs({ state: !state }))
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      Alert.alert(
        'User logged in!',
      
      );
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Wrong Credentials',
      
      );
      setLoading(false);
    }
  }
  return (
    <KeyboardAwareScrollView>
    <View style={styles.container}>
      <BienvenidaRegister text="Welcome!"/>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Email</Text>
        <View style={styles.legendCont}>
          <TextInput
            style={styles.input}
            id="mail"
            name="mail"
            required
            onChangeText={(inputText) => setmail(inputText)}
          />
        </View>
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Password</Text>
        <View style={styles.legendCont}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            id="password"
            name="password"
            required
            onChangeText={(inputText) => setPassword(inputText)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
    
      </TouchableOpacity>

      <View style={styles.divGoogle}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
          
          }}
        >
          <Image style={styles.googleImg} source={google} />
          <Text style={styles.buttonText2}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.parrafosForm}>
        <Text>
          You don't have an account yet?
          <Text
            style={styles.parrafosFormText}
            onPress={() => {
              navigation.navigate('register');
            }}
          >
            {' '}
            Sign up
          </Text>
        </Text>
      </View>
    </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    // marginTop: 50,
    width: "100%",
  },
  fieldset: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: 30,
       width: 410,
    height: 65,
    width: "90%",
    justifyContent: "flex-start",
    background: "#EBEBEB",
    borderBottomWidth: 1,
  },
  legendCont:{
    display: "flex",
    width:"100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imagen:{
    width: 19,
    height: 19,
    marginBottom: 10,
  },
  googleImg: {
    width: 30,
    height:30
  },
  buttonText2:{
    color: "gray"
  },
  legend: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 1,
    fontWeight: 500,
    color: "white",
  },
  input: {
    width: "90%",
    backgroundColor: "transparent",
    height: 45,
    fontSize: 15,
    padding: 11,
    borderRadius: 5,
    color: 'white'
  },
  divCheck: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 12,
    lineHeight: 5,
    letterSpacing: 5,
    color: "#1F1F1F",
    gap: 5,
    width: 410,
  },

  button: {
    backgroundColor: "#96d1d7",
    borderRadius: 10,
    height: 60,
    marginBottom: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputTextKeyboard: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
  buttonText: {
    color: "white"
  },

  button2: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 60,
    margin: 15,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    flexDirection: "row",
    gap: 20
  },
  
  buttonText3: {
    color: "grey"
  },

  divGoogle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 410,
    height: 16,
    borderRadius: 10,
    background: "#EBEBEB",
    border: 1,
  },

  parrafosForm: {
    display: "flex",
    gap: 17,
    width: "100%",
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  parrafosFormText:{
    color: "#96d1d7",
    fontWeight: 700,
  },
});