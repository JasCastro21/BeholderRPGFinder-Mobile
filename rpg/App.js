import React from 'react';
import { StatusBar, View } from 'react-native';
/* import Home from './screens/Home'; */
import Login from './screens/Login';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Login />
      <StatusBar style='auto' />
    </View>
  );
}
