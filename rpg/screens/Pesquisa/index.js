import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tab from '../../components/Tab'; 

export default function Chat() {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>Pesquisaaaaa</Text>
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
