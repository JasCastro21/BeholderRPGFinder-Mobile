import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tab from '../../components/Tab'; 
import CardConversa from '../../components/CardConversa';

export default function Conversa() {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <CardConversa/>
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
    backgroundColor: '#fff',
    justifyContent: 'flex-start', 
    paddingHorizontal: 10,
  },
});
