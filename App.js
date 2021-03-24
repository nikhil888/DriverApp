import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <>
    <StatusBar barStyle = "dark-content"/>
    <SafeAreaView>
      <HomeScreen/>
    </SafeAreaView>
    </>
  );
}


