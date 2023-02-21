import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>My To-Dos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    headerContainer: {
    backgroundColor: 'rgb(88,190,195)',
    width: "100%",
    justifyContent:"center",
    alignItems:"center",
    paddingBottom:20,
    paddingTop:50
  },
  headerText:{
    fontWeight:"bold",
    fontSize:25,

  }
});
