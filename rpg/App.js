import React from 'react';
import { StatusBar } from 'react-native';
import { View, Text } from 'react-native';
import { Home } from './screens/Home/Index';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Home />
      <StatusBar style='auto' />
    </View>
  );
}

