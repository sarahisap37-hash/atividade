import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>a</Text>
      <View style={styles.main}>
        
        <Text style={styles.nav}>Home</Text>
        <Link href={"/catalogo"} style={styles.nav}>Shop</Link>
        <Link href={"/cursos"} style={styles.nav}>Cursos</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, 
  main: {
    width: '50%',
    height: '50%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    borderRadius: 15,
    padding: 110,
    
    backgroundColor: '#ffffff'
  },
  nav: {
    textAlign: "center",
    padding: 10,
    fontSize: 30
  }

})