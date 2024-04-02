import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from '../../components/NavBar'; 
import Tab from '../../components/Tab';

const Feed = () => {
  const tabs = [
    { key: 'recomendados', text: 'Recomendados', screen: 'Feed' },
    { key: 'seguindo', text: 'Seguindo', screen: 'Seguindo' },
  ];

  return (
    <View style={styles.container}>
      <NavBar tabs={tabs} initialActiveTab='recomendados'/>
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
