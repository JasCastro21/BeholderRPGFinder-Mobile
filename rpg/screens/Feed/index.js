import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tab from '../../components/Tab';

const Feed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.feedContent}>
        <Text style={styles.text}>Conteúdo da Tela de Feed</Text>
      </View>
      <Tab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feedContent: {
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

export default Feed;
