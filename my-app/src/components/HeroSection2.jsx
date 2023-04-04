import { Text, StyleSheet } from 'react-native';

export default function SectionHero2(props) {
  return (
    <Text style={styles.parrafo} numberOfLines={2}>
      {props.text || props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  parrafo: {
    color: "white",
    textShadowColor:'#96d1d7',
    textShadowOffset: { width: 0, height: 3 }, 
    textShadowRadius: 4,
    fontSize: 19,
    textAlign: "center",
    marginVertical: 10,
    
  },
});