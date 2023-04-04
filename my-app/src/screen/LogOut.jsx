import React, { useState } from 'react';
import { Button, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import bottomTabsActions from '../store/ReloadBottomsTabs/actions.js';  
import detailsActions from "../store/Details/actions.js"

const { mangaClicked } = detailsActions
const { reloadBottomTabs } = bottomTabsActions

export default function LogOut() {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  let state = useSelector(store => store.bottomReducer.state)
  let [token, setToken] = useState('')
  const [loading, setLoading] = useState()

  useFocusEffect(
    React.useCallback(() => {
      async function getData() {
        try {
          const value = await AsyncStorage.getItem("token");
          setToken(value);
        } catch (error) {
          console.log(error);
        }
      }
      getData();
    }, [state])
  );

  let headers = { headers: { 'Authorization': `Bearer ${token}` } }


  const handleLogOut = async () => {
    let url = 'https://minga-grupoblanco.onrender.com/api/signout'
    try {
      setLoading(true)
      await axios.post(url," ",headers)

      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      
  
      const storedToken = await AsyncStorage.getItem('token');
      const storedUser = await AsyncStorage.getItem('user');
      console.log('Token almacenado:', storedToken);
      console.log('Usuario almacenado:', storedUser);
      dispatch(mangaClicked( {state:false} ))
      dispatch(reloadBottomTabs({ state: false }));
      dispatch(reloadBottomTabs({ state: !state }))

      setTimeout(() => {
        setLoading(false);
      }, 3000);
      Alert.alert(
        'Log out successfully, thank you for visiting us!!',
      
      );
      navigation.navigate('Home');
      
    } catch (e) {
      Alert.alert(
        'Ups !',
      
      );
      console.log(e);
    }
  };

  return (
  <TouchableOpacity  onPress={handleLogOut}   style={style.button}  activeOpacity={0.7}>
    <Text  style={style.button}> Log Out </Text>

    
    </TouchableOpacity>
  )
}

const style = StyleSheet.create ({
  button: {
    backgroundColor: '#96d1d7',
    color: '#5297ac',
    textAlign: 'center',
    fontSize: 25,  },
    buttonHover: {
      backgroundColor: 'darkgrey',
    },
})