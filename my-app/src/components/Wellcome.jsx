import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import logo from '../../images/Logo.png'

export default function TitlteHero1(props) {
  return (
    <View style={styles.bienvenida}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.welcomeH2}>{props.text} <Text style={styles.span}>{props.text2}</Text></Text>
      <Text style={styles.welcomeP}>Discover manga, manhua and manhwa, track your progress, have fun, read manga</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bienvenida: {
    marginTop:150,
    alignItems: 'center',
    justifyContent: "flex-start",
  
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  welcomeH2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: "white",
    textShadowColor:'#96d1d7',
    textShadowOffset: { width: 0, height: 3 }, 
    textShadowRadius: 4,
    
  },
  span: {
    color: '#29abe2',
  },
  welcomeP: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    color: "white",
    textShadowColor:'#96d1d7',
    textShadowOffset: { width: 0, height: 3 }, 
    textShadowRadius: 4,
  },
  // titulo: {
  //   color: "white",
  //   textShadowColor:'#96d1d7',
  //   textShadowOffset: { width: 0, height: 3 }, 
  //   textShadowRadius: 4,
  //   fontSize: 44,
  //   textAlign: "center",
  //   fontWeight: 'bold',
  //   marginVertical: 10,
  //   marginTop: 180,
  // },
});