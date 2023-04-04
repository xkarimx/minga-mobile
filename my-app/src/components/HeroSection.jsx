import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HeroSection(props) {
  const navigation= useNavigation()

  return (
    <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Mangas")}>
      <Text style={styles.texto}>{props.text || props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#96d1d7',
    padding: 10,
    width: 290,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  texto: {
    color: '#5297ac',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});