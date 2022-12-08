import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground, Pressable} from 'react-native';
import * as Font from 'expo-font'

function CreateProfile(props) {
  const Separator = () => (
     <View style = {styles.separator}/>
  );
 return (
    <ImageBackground 
    style = {styles.background}
   source={require('../background3.png')}>  
   <View>
    <Text style={styles.baseText}>
    Name
    </Text> 
   <View>
  <Text style={styles.baseText1}>
    Age
  </Text>
<View style ={styles.button1}>
<Button
   color ='#834D1E'
title='Continue'/>
</View> 
</View> 
</View>
    </ImageBackground>

  )
}

export default CreateProfile;
const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    top:100,
    paddingVertical: 5,
    paddingHorizontal: 30,
    textAlign:"center",
    

  },
    background:{
      flex:1,
      position:'absolute',
      width:360,
      height:753,
      
    },
  
    button1:{
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 50,
      position: 'absolute',
      top: 400,
      left: 80,
      fontFamily: "Red-Hat-Text-Medium",
      borderRadius: 5,
    
    
    },
    text: {
      fontSize: 10,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    titleText:{
      alignItems: 'center',
      fontSize: 25,
      textAlign:"center",
      fontFamily: "Red-Hat-Text-Medium",
      color:'#4C4C4C',
   top: 20,
  
    },
    baseText:{
      fontSize: 15,
      fontWeight: "medium",
      textAlign:"center",
      fontFamily: "Red-Hat-Text-Regular",
      color:'#4C4C4C',
      top:180,
      right: 100,
      paddingVertical: 12,
      paddingHorizontal: 32,
    },
    baseText1:{
      fontSize: 15,
      fontWeight: "medium",
      textAlign:"center",
      fontFamily: "Red-Hat-Text-Regular",
      color:'#4C4C4C',
      top:137,
      left:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
    },
    baseText2:{
      fontSize: 15,
      fontWeight: "bold",
      textAlign:"center",
      fontFamily: "Red-Hat-Text-Regular",
      color:'#4D4D4D',
      top:20,
      paddingVertical: 12,
      paddingHorizontal: 32,
    },
  })
  