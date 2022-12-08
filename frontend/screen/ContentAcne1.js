import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Stack, ImageBackground} from 'react-native';
import * as Font from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from './WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';

function ContentAcne1(props) {

     const Stack = createStackNavigator();

 return (
    
    <SafeAreaView style={styles.container}>
        <ImageBackground
        style={styles.background}
        source={require('../background6.png')}>
          <Text style={styles.titleText1}> Treatments</Text>
        <Text style={styles.baseText1}>
        {'\u2B24'} Requires use of one or more drugs (applied to the skin, taken by mouth, or  both) to control and prevent recurrence.
        </Text>
        <Text style={styles.baseText1}>
        {'\u2B24'} Discontinue the offending drug, if drug-related.
        </Text>
        <Text style={styles.baseText1}>
        {'\u2B24'} Requires long periods of treatment because acne does not go away immediately
         (it may take one to four months before improvement may be noticed).
        </Text>
        <Text style={styles.baseText1}>
        {'\u2B24'} Certain procedures such as lasers and light therapy, chemical peels, extraction and injection.
        </Text>
        </ImageBackground>
    </SafeAreaView>
  );
};

export default ContentAcne1;
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
        top: 120,
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
  })
  