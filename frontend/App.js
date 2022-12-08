/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './screen/Home';
import {
  SafeAreaView,
} from 'react-native';
import WelcomeScreen from './screen/WelcomeScreen';
import CameraScreen from './screen/CameraScreen';
import CameraPreview from './screen/CameraPreview';
import DataProtection from './screen/DataProtection';
import ResultScreen from './screen/Result';
import CreateProfile from './screen/CreateProfile'; 
import Profile from './screen/Profile'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName='WelcomeScreen'>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}/>
    <Stack.Screen 
      name="DataPrivacyScreen" 
      component={DataProtection} 
      options={{headerShown: false}}/>
    <Stack.Screen 
      name="HomeScreen" 
      component={Home} 
      options={{
        title: "Home",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="CameraScreen" 
      component={CameraScreen} 
      options={{
        title: "Camera",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="CameraPreview" 
      component={CameraPreview} 
      options={{
        title: "Back",
        headerShown: true
      }}/>
    <Stack.Screen 
      name="Result" 
      component={ResultScreen} 
      options={{
        title:"Result",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="CreateProfile" 
      component={CreateProfile} 
      options={{
        title:"CreateProfile",
        headerShown: false
      }}/>
    <Stack.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        title:"Profile",
        headerShown: false
      }}/>
  </Stack.Navigator>
)

const App = () => {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
