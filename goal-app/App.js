import { useState } from 'react';
import { View, Text, Button,StyleSheet, TextInput } from 'react-native';

export default function MyForm() {


  const[goal,setGoal]=useState('');
  const[allGoal,setAllGOal]=useState([])

  function goalInputHandler(text){
    setGoal(text)
  }


  function addGoalHandler(){
    if(goal.length==0){
      return alert("enter any text")
    }
    console.log(goal);
    setAllGOal((allGoal)=>[...allGoal,goal]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your goal' style={styles.textInput} onChangeText={goalInputHandler}/>
        <Button 
        title='Add Goal'
        onPress={addGoalHandler}
        />      
      </View>
      <View style={styles.goalContainer}>
        {allGoal.map((value,index)=>(<Text >{value}</Text>))}
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
    appContainer:{
      flex:1,
      padding:50,
      paddingHorizontal:16
    },
    inputContainer:{
      flexDirection:'row',
      gap:10,
      justifyContent:'center',
      alignItems:'center',
      paddingBottom:24,
      borderBottomWidth:1,
      borderBottomColor:'#cccccc'
    },
    textInput:{
      borderWidth:1,
      borderColor:'#cccccc',
      width:'70%'      
    },
    goalContainer:{
      flex:3,
      marginTop:10,
    }
})