import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Stack, ImageBackground} from 'react-native';
import * as Font from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from './WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';

function ContentAcne2(props) {

     const Stack = createStackNavigator();

 return (
    
    <SafeAreaView style={styles.container}>
        <ImageBackground
        style={styles.background}
        source={require('../background5.png')}>
            <Text style={styles.titleText}> Symptoms</Text>
            <Text style={styles.baseText1}>
        {'\u2B24'} Whiteheads & Blackheads.
        </Text>
        <Text style={styles.baseText1}>
        {'\u2B24'} Red bumps that sometimes may have pus.
        </Text>
        <Text style={styles.baseText1}>
        {'\u2B24'} Cysts and nodules in severe cases.
        </Text>
        <Text style={styles.baseText1}>
        {'\u2B24'} Areas are commonly affected are face, chest, back, & shoulders.
        </Text>
        <View>
        <Text style={styles.titleText1}> Prevention</Text>
            <Text style={styles.baseText2}>
        {'\u2B24'}No exact preventive measure as the disorder commonly occurs in teens.

        </Text>
        <Text style={styles.baseText2}>
        {'\u2B24'} See a dermatologist for early treatment to prevent complications such as scarring.
        </Text>
        </View>
        </ImageBackground>
    </SafeAreaView>
  );
};

export default ContentAcne2;
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
    titleText1:{
        alignItems: 'center',
        fontSize: 15,
        textAlign:"center",
        fontFamily: "Red-Hat-Text-Bold",
        color:'#4C4C4C',
          top: 200,
          right:10,
      },
    baseText1:{
      fontSize: 15,
      fontWeight: "medium",
      textAlign:"left",
      fontFamily: "Red-Hat-Text-Regular",
      color:'#4C4C4C',
     top:90,
      paddingVertical: 5,
      paddingHorizontal: 32,
    },
        baseText2:{
      fontSize: 15,
      fontWeight: "medium",
      textAlign:"left",
      fontFamily: "Red-Hat-Text-Regular",
      color:'#4C4C4C',
     top:210,
      paddingVertical: 5,
      paddingHorizontal: 32,
    },
      text: {
        fontSize: 42,
      },
  })
  