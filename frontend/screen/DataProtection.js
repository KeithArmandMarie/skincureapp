import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function DataProtection({navigation}) {
  return (
    <View>
      <ImageBackground
        style={styles.background}
        source={require('../assets/background1.png')}>
        <Text style={styles.titleText}>Terms & Data Protection</Text>
        <Text style={styles.baseText}>
          Your data is essential. We will never disclose or sell any of your
          personal information, including photos.
        </Text>
        <Text style={styles.baseText}>
          SkinCure's data is all encrypted. You will be able to share
          information with us anonymously in order to help us develop SkinCure.
          Your data is completely secure.
        </Text>
        <Button
          style={styles.button1}
          color="#3F60A0"
          title="ACCEPT TERMS OF SERVICE"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </ImageBackground>
    </View>
  );
}

export default DataProtection;
const styles = StyleSheet.create({
  background: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: "40%"
  },

  button1: {
    alignItems: 'center',
    fontSize: 20,
    borderRadius: 15,
    marginStart: 50,
  },

  titleText: {
    alignItems: 'center',
    fontSize: 25,
    textAlign: 'center',
    color: '#4C4C4C',
  },

  baseText: {
    margin: 15,
    fontSize: 15,
    fontWeight: 'medium',
    textAlign: 'center',
    color: '#4C4C4C',
  },
});
