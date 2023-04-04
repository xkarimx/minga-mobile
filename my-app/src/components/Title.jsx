import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TitlteHero1(props) {
  return (
    <Text style={styles.titulo}>{props.text || props.children}</Text>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "white",
    textShadowColor:'#96d1d7',
    textShadowOffset: { width: 0, height: 3 }, 
    textShadowRadius: 4,
    fontSize: 44,
    textAlign: "center",
    fontWeight: 'bold',
    marginVertical: 10,
  },
});