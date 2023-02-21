import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'

export default function Lists({item,handleDelete}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.text}</Text>
      <TouchableOpacity onPress={()=>handleDelete(item.key)} style={styles.delete}>
      <AntDesign name="delete" size={15} color="green" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "white",
    height: 50,
    borderColor : "black",
    borderStyle:"solid",
    borderWidth: 1,
    margin : 10,
    width : 300,
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  delete:{
   height: 50,
   borderLeftColor : "gray",
   borderLeftWidth: 2,
   alignItems:"center",
   justifyContent:"center",
   paddingLeft: 12
   
  }
});
