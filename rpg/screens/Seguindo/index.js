import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from '../../components/NavBar'; 
import Tab from '../../components/Tab'; 

const Seguindo = () => {
  const tabs = [
    { key: 'recomendados', text: 'Recomendados', screen: 'Feed' },
    { key: 'seguindo', text: 'Seguindo', screen: 'Seguindo' },
  ];

  return (
    <View style={styles.container}>
      <NavBar tabs={tabs} initialActiveTab='seguindo'/>
      <View style={styles.chatContent}>
        <Text style={styles.text}>Seguindoooooooo</Text>
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

export default Seguindo;
