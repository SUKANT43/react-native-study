import { View, Text, Button,StyleSheet, TextInput } from 'react-native';
import React from 'react';

export default function MyForm() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your goal' style={styles.textInput}/>
        <Button title='Add Goal'
/>      </View>
      <View style={styles.goalContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
    appContainer:{
      padding:50,
      paddingHorizontal:16
    },
    inputContainer:{
      flex:1,
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
      marginTop:10,
      flex:3
    }
})