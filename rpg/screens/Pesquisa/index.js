import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tab from '../../components/Tab'; 
import NavBar from '../../components/NavBar'; 
import SearchBar from '../../components/SearchBar'; 
import Filtro from '../../components/Filtro';
import CardM from '../../components/CardM';

export default function Pesquisa() {
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { key: 'pesquisa', text: 'Mesas', screen: 'Pesquisa' },
    { key: 'jogadores', text: 'Jogadores', screen: 'Jogadores' },
  ];

  const handleSearchPress = () => {
    console.log(searchQuery);
  };

  return (
    <View style={styles.container}>
      <NavBar tabs={tabs} initialActiveTab='pesquisa'/>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchPress={handleSearchPress}
        tipoTela="pesquisa"
      />

      <Filtro/>

      <View style={styles.chatContent}>

      <CardM/>
      
      </View>
      <Tab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  chatContent: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
