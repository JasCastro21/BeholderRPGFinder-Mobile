import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tab from '../../components/Tab'; 
import NavBar from '../../components/NavBar'; 


export default function Mencoes() {
  const tabs = [
    { key: 'todos', text: 'Todos', screen: 'Notificacao' },
    { key: 'mencoes', text: 'Menções', screen: 'Mencoes' },
  ];

  return (
    <View style={styles.container}>
      <NavBar tabs={tabs} initialActiveTab='mencoes'/>
      <View style={styles.chatContent}>
        <Text style={styles.text}>Mencoessssssssssssssss</Text>
      </View>
      <Tab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
