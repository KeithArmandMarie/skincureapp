import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function WelcomeScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <ImageBackground
        resizeMode="cover"
        style={styles.background}
        source={require('../assets/backgrounds/background.png')}>
        <Text style={styles.titleText}>What is SkinCure?</Text>
        <Text style={styles.baseText}>
          Skincure is a resource for answering questions regarding common skin
          diseases in the Philippines.
        </Text>
        <Text style={styles.baseText}>
          Skincure does not make diagnoses. Only qualified professionals are
          capable of doing so. When in doubt, visit a nearby derma clinic.
        </Text>
        <Text style={styles.baseText}>
          Please get medical attention if you are feeling unwell or have quickly
          changing symptoms
        </Text>
        <Button 
          color="#3F60A0" 
          title="I UNDERSTAND, LETS GET STARTED"
          onPress={() => navigation.navigate("DataPrivacyScreen")} />
      </ImageBackground>
    </View>
  );
}

export default WelcomeScreen;
const styles = StyleSheet.create({
  background: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: "30%"
  },

  titleText: {
    fontSize: 25,
    color: '#4C4C4C',
  },
  baseText: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'medium',
    textAlign: 'center',
    color: '#4C4C4C',
  },
});
