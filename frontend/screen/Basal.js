import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';
import * as Font from 'expo-font'

function Basal(props) {
  const Separator = () => (
     <View style = {styles.separator}/>
  );
 return (
    <ImageBackground 
    style = {styles.background}
   source={require('../background4.png')}>  
   <View style={styles.container}>
    <Image
    style={styles.eczema1} 
    source={require('../basal.jpg')}/>
   <View>
    <Text style={styles.baseText1}>Basal cell carcinoma is a type of skin cancer. 
    Basal cell carcinoma begins in the basal cells — a type of cell
     within the skin that produces new skin cells as old ones die off. </Text>
   <View>
    <Text style={styles.baseText2}>Most basal cell carcinomas are thought to be caused 
    by long-term exposure to ultraviolet (UV) radiation from sunlight </Text>
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

export default Basal;
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
        top: 115,
  
    },
    titleText1:{
        alignItems: 'center',
        fontSize: 15,
        textAlign:"center",
        fontFamily: "Red-Hat-Text-Bold",
        color:'#4C4C4C',
          top: 75,
    
      },
      titleText2:{
        alignItems: 'center',
        fontSize: 15,
        textAlign:"center",
        fontFamily: "Red-Hat-Text-Bold",
        color:'#4C4C4C',
          top: 30,
    
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

    eczema1:{
        top:80,
        width:277,
        height:139,
        borderRadius:5,
        
    },

    LogoTreatment:{
        width:75,
        height:91,
        alignItems:"center",
        top:140,
        left:135,
        
    },
    
    LogoPrevention:{
        width:75,
        height:91,
        alignItems:"center",
        top:100,
        left:135,
        
    },
    LogoLocation:{
        width:75,
        height:91,
        alignItems:"center",
        top:60,
        left:135,
        
    },

    select1:{
        bottom:450,
        left:300,
    },
    numSelect1:{
        bottom:475,
        left:306,
        color:'#FCF2D9'
    },
  })
  