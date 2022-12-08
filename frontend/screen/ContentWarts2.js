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
        source={require('../background9.png')}>
            <Text style={styles.titleText}> Symptoms</Text>
            <Text style={styles.baseText1}>
        {'\u2B24'} Rough bumps or growths that may look like a cauliflower; some look like flat-topped bumps that cluster around certain areas such as the face and neck.
        Rough bumps or growths that may look like a cauliflower; some look like flat-topped bumps that cluster around certain areas such as the face and neck.
        </Text>
        <Text style={styles.baseText1}>
        {'\u2B24'} May be colored flesh, pink, white or tan and often contain tiny black dots.
        </Text>
        <Text style={styles.baseText1}>
        {'\u2B24'}Genital warts are usually passed through sexual intercourse.
        </Text>
        <Text style={styles.baseText1}>
        {'\u2B24'}May cause pain if located around the nails or at the soles of the feet.
        </Text>
        <View>
        <Text style={styles.titleText2}> Prevention</Text>
            <Text style={styles.baseText2}>
        {'\u2B24'}Keep your skin dry.

        </Text>
        <Text style={styles.baseText2}>
        {'\u2B24'} Wear slippers all the time.
        </Text>
        <Text style={styles.baseText2}>
        {'\u2B24'}Avoid touching/picking  or scratching your warts since this may spread the virus to other areas of the body.
        </Text>
        <Text style={styles.baseText2}>
        {'\u2B24'} In hairy areas, better to cut the hair with scissors than shave to avoid the warts.
        </Text>
        <Text style={styles.baseText2}>
        {'\u2B24'} Practice safe sex: abstinence, monogamy, condom use.
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
      titleText2:{
        alignItems: 'center',
        fontSize: 15,
        textAlign:"center",
        fontFamily: "Red-Hat-Text-Bold",
        color:'#4C4C4C',
          top: 150,
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
     top:150,
      paddingVertical: 5,
      paddingHorizontal: 32,
    },
      text: {
        fontSize: 42,
      },
  })
  