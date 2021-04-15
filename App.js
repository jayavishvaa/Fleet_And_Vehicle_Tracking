import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import OtpVerification from './Screens/OtpVerification';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import routes from './Screens/routes';
import VerifyAndCreateAccount from './Screens/VerifyAndCreateAccount';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={routes.LOGIN} component={Login}/>
          <Stack.Screen name={routes.SIGNUP} component={Signup}/>
          <Stack.Screen name={routes.OTPVERIFICATION} component={OtpVerification}/>
          <Stack.Screen name={routes.VERIFYANDCREATEACCOUNT} component={VerifyAndCreateAccount}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}