import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tab from '../../components/Tab'; 
import NavBar from '../../components/NavBar'; 


export default function Jogadores() {
  const tabs = [
    { key: 'pesquisa', text: 'Mesas', screen: 'Pesquisa' },
    { key: 'jogadores', text: 'Jogadores', screen: 'Jogadores' },
  ];

  return (
    <View style={styles.container}>
      <NavBar tabs={tabs} initialActiveTab='jogadores'/>
      <View style={styles.chatContent}>
        <Text style={styles.text}>Jogadoresssssssssssssssssss</Text>
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
