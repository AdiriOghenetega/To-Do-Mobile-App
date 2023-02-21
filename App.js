import {useState} from "react"
import { StyleSheet, ScrollView, View,FlatList,Alert,TouchableWithoutFeedback,Keyboard,VirtualizedList } from 'react-native';
import {Header,Lists,AddTodo} from "./components"


export default function App() {

  const [todoList,setTodoList] = useState([
    {
      text : "Go Shopping",
      key : "1"
    }
  ])
  const [todoInput, setTodoInput] = useState("")

  function handleTodoInput(val){
    setTodoInput(val)
  }

  function handleAddTodo(text){
    if(text.length > 3){
      
      setTodoList(prev=>{
        return [
         {
          text:text,
          key : Math.random().toString()
         },...prev 
        ]
      })
      setTodoInput("")
    }else{
      Alert.alert("INPUT TOO SHORT","input length must be more than 3 letters",[ { text: "OK", onPress: () => console.log("OK Pressed") }])
    }
  }

  function handleDelete(key){
     setTodoList(prev=>{
      return prev.filter(item=> item.key !== key)
     })
  }

  return (
    
    <View style={styles.container}>
    <Header />
    <AddTodo handleAddTodo={handleAddTodo} handleTodoInput={handleTodoInput} todoInput={todoInput} />
   
    <View style={styles.flatlist}>
    <FlatList
    data={todoList}
    renderItem={({item})=>(
     <Lists item={item} handleDelete={handleDelete} />
    )}
     />
    </View>
   
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  flatlist : {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    flex:1,
    marginBottom : 50
  }
});
