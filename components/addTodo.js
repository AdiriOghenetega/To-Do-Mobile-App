import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({handleAddTodo,handleTodoInput,todoInput}) {

    
    return (
        <View style={styles.container}>
            <Text>Add Schedule :</Text>
            <TextInput placeholder='e.g shopping,karate lessons,Date' style={styles.input} onChangeText={(val)=> handleTodoInput(val)} value={todoInput} />
            <View style={styles.button}>
                <Button title='add to list' color="black" onPress={()=> handleAddTodo(todoInput)}  />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    input: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        placeholderTextColor: 'gray',
        marginTop: 5,
        width:300,
        borderRadius: 10
    },
    button:{
       marginTop: 9,
        paddingHorizontal: 5,
        backgroundColor: "rgb(88,190,195)",
        borderRadius: 10
    }
});
