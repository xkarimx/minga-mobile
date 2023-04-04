import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import bg from '../../images/bg9.jpg';
import Title from '../components/Title';
import HeroSection2 from '../components/HeroSection2';
import HeroSection from '../components/HeroSection';
import LoginForm from '../components/LoginForm';
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

export default function Seccion1Hero1() {

  let [token, setToken] = useState("");
  let state = useSelector((store) => store.bottomReducer.state);

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

  return (
    <ImageBackground source={bg} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.seccion}>
          <View style={styles.texto}>
            <Title text='Best Manga Reader' />
            <HeroSection2 text='Find the perfect manga for you' />
            <HeroSection text="Read" />
          </View>
        </View>
        <View style={styles.seccion2}>
          <LoginForm />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    height:"200%"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  seccion: {
    height: "50%",
    padding: 20,
    justifyContent: 'center',
  },
  seccion2: {
    height: "100%",
  },
  texto: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 35,
  },
});