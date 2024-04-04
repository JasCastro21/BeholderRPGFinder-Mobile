import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native'; 
import Tab from '../../components/Tab'; 
import NavBar from '../../components/NavBar'; 
import Cards from '../../components/Cards';


export default function Mencoes() {
  const tabs = [
    { key: 'todos', text: 'Todos', screen: 'Notificacao' },
    { key: 'mencoes', text: 'Menções', screen: 'Mencoes' },
  ];

  return (
    <View style={styles.container}>
      <NavBar tabs={tabs} initialActiveTab='mencoes'/>

      <ScrollView style={styles.feedContent}>
        <Cards/>
      </ScrollView>

      <Tab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feedContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
