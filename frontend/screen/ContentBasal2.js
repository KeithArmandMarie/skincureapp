import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Stack, ImageBackground} from 'react-native';
import * as Font from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from './WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';

function ContentBasal2(props) {

     const Stack = createStackNavigator();

 return (
    
    <SafeAreaView style={styles.container}>
        <ImageBackground
        style={styles.background}
        source={require('../background7.png')}>
            <Text style={styles.titleText}> Symptoms</Text>
            <Text style={styles.baseText1}>
        {'\u2B24'} A shiny, skin-colored bump that's translucent, meaning you can see a bit through the surface. 
        The bump can look pearly white or pink on white skin. On brown and Black skin, the bump often looks brown or glossy black. 
        Tiny blood vessels might be visible, though they may be difficult to see on brown and Black skin. The bump may bleed and scab over.
        </Text>
        <Text style={styles.baseText1}>
        {'\u2B24'} A brown, black or blue lesion or a lesion with dark spots with a slightly raised, translucent border.
        </Text>
        <Text style={styles.baseText1}>
        {'\u2B24'}A flat, scaly patch with a raised edge. Over time, these patches can grow quite large.
        </Text>
        <Text style={styles.baseText1}>
        {'\u2B24'} A white, waxy, scar-like lesion without a clearly defined border.
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

export default ContentBasal2;
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
  