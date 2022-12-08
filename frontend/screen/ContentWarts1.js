import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Stack, ImageBackground} from 'react-native';
import * as Font from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from './WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';

function ContentWarts1(props) {

     const Stack = createStackNavigator();

 return (
    
    <SafeAreaView style={styles.container}>
        <ImageBackground
        style={styles.background}
        source={require('../background8.png')}>
            <Text style={styles.titleText1}> Treatments</Text>
        <Text style={styles.baseText1}>
        {'\u2B24'} Your dermatologist may prescribe topical medications to destroy the warts. This may require several applications. 
        Often, your dermatologist will recommend treatment using physical destruction of the lesions such as cryotherapy (freezing using liquid nitrogen), cautery, or even lasers 
        </Text>

        </ImageBackground>
    </SafeAreaView>
  );
};

export default ContentWarts1;
const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingVertical: 5,
        position:'absolute',
        textAlign:"left",
    },    
    background:{
        flex:1,
        position:'absolute',
        width:360,
        height:753,
        
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
      fontSize: 15,
      textAlign:"center",
      fontFamily: "Red-Hat-Text-Bold",
      color:'#4C4C4C',
        top: 75,
        right:10,
    },

    baseText1:{
      fontSize: 15,
      fontWeight: "medium",
      textAlign:"left",
      fontFamily: "Red-Hat-Text-Regular",
      color:'#4C4C4C',
     top:120,
      paddingVertical: 12,
      paddingHorizontal: 32,
    },
    baseText2:{
      fontSize: 15,
      fontWeight: "bold",
      textAlign:"center",
      fontFamily: "Red-Hat-Text-Regular",
      color:'#4D4D4D',
      top:105,
      left:3,
      paddingVertical: 12,
      paddingHorizontal: 32,
    },

      text: {
        fontSize: 42,
      },
      titleText1:{
        alignItems: 'center',
        fontSize: 15,
        textAlign:"center",
        fontFamily: "Red-Hat-Text-Bold",
        color:'#4C4C4C',
          top: 120,
          right:10,
      },
  })
  