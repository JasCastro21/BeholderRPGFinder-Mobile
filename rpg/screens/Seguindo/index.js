import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import NavBar from '../../components/NavBar'; 
import Tab from '../../components/Tab';
import Cards from '../../components/Cards';

const Feed = () => {
  const tabs = [
    { key: 'recomendados', text: 'Recomendados', screen: 'Feed' },
    { key: 'seguindo', text: 'Seguindo', screen: 'Seguindo' },
  ];

  return (
    <View style={styles.container}>
      <NavBar tabs={tabs} initialActiveTab='seguindo' />
      
      <ScrollView style={styles.feedContent}>
        <Cards />
      </ScrollView>
      
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
    backgroundColor: '#fff',
  },
});

export default Feed;
