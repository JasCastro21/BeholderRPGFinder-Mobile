import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native'; 
import Tab from '../../components/Tab'; 
import NavBar from '../../components/NavBar'; 
import CardNotifi from '../../components/CardNotificacao';

export default function Notificacao() {
  const tabs = [
    { key: 'todos', text: 'Todos', screen: 'Notificacao' },
    { key: 'mencoes', text: 'Menções', screen: 'Mencoes' },
  ];

  return (
    <View style={styles.container}>
      <NavBar tabs={tabs} initialActiveTab='todos'/>
      
      <ScrollView style={styles.feedContent}>
        <CardNotifi />
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
