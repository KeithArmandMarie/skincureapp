import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';
import * as Font from 'expo-font'

function Acne(props) {
  const Separator = () => (
     <View style = {styles.separator}/>
  );
 return (
    <ImageBackground 
    style = {styles.background}
   source={require('../background4.png')}>  
   <View style={styles.container}>
    <Image
    style={styles.acne} 
    source={require('../acne1.jpg')}/>
   <View>
    <Text style={styles.baseText1}>Acne is a skin condition that occurs 
when your hair follicles become plugged
 with oil and dead skin cells. It causes 
whiteheads, blackheads or pimples. </Text>
   <View>
    <Text style={styles.baseText2}>Acne is most common among teenagers, 
though it affects people of all ages. </Text>
   <View>
    <Image
    style={styles.LogoTreatment} 
    source={require('../treatment.png')}/>
    <Text style={styles.titleText}> Treatments</Text>
    <View>
      <View>
      <Image
    style={styles.LogoPrevention} 
    source={require('../prevention.png')}/>
    <Text style={styles.titleText1}> Symptoms and Prevention</Text></View>  
    <View>
    <Image
    style={styles.LogoLocation} 
    source={require('../location.png')}/>
    <Text style={styles.titleText2}> Locate Nearest Derma Clinic</Text>
    </View>
        <Image 
        style={styles.select1}
        source={require('../select.png')}/>
        <Text style={styles.numSelect1}>09</Text>
    </View>
    </View>
      </View>
    </View>
    </View>
    </ImageBackground>

  )
}

export default Acne;
const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    paddingVertical: 5,
    position:'absolute',
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
      fontSize: 15,
      textAlign:"center",
      fontFamily: "Red-Hat-Text-Bold",
      color:'#4C4C4C',
        top: 130,
  
    },
    titleText1:{
        alignItems: 'center',
        fontSize: 15,
        textAlign:"center",
        fontFamily: "Red-Hat-Text-Bold",
        color:'#4C4C4C',
          top: 95,
    
      },
      titleText2:{
        alignItems: 'center',
        fontSize: 15,
        textAlign:"center",
        fontFamily: "Red-Hat-Text-Bold",
        color:'#4C4C4C',
          top: 60,
    
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
     top:130,
      left:3,
      paddingVertical: 12,
      paddingHorizontal: 32,
    },
    baseText2:{
      fontSize: 15,
      fontWeight: "bold",
      textAlign:"center",
      fontFamily: "Red-Hat-Text-Regular",
      color:'#4D4D4D',
      top:120,
      left:3,
      paddingVertical: 12,
      paddingHorizontal: 32,
    },

    acne:{
        top:80,
        width:277,
        height:139,
        borderRadius:5,
        
    },

    LogoTreatment:{
        width:75,
        height:91,
        alignItems:"center",
        top:158,
        left:135,
        
    },
    
    LogoPrevention:{
        width:75,
        height:91,
        alignItems:"center",
        top:120,
        left:135,
        
    },
    LogoLocation:{
        width:75,
        height:91,
        alignItems:"center",
        top:80,
        left:135,
        
    },

    select1:{
        bottom:430,
        left:300,
    },
    numSelect1:{
        bottom:455,
        left:306,
        color:'#FCF2D9'
    },
  })
  