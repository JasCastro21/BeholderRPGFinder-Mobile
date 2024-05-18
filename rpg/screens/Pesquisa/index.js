import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation
import Tab from '../../components/Tab'; 
import NavBar from '../../components/NavBar'; 
import SearchBar from '../../components/SearchBar'; 
import Filtro from '../../components/Filtro';
import CardM from '../../components/CardM';
import { FontAwesome } from '@expo/vector-icons'; // Importe o ícone desejado

export default function Pesquisa() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation(); // Obtenha a função de navegação

  const tabs = [
    { key: 'pesquisa', text: 'Mesas', screen: 'Pesquisa' },
    { key: 'jogadores', text: 'Jogadores', screen: 'Jogadores' },
  ];

  const handleSearchPress = () => {
    console.log(searchQuery);
  };

  const handleCreateTablePress = () => {
    navigation.navigate('CriarMesa'); // Navegue para a tela 'CriarMesa'
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
        {/* Botão redondo com ícone "+" */}
        <TouchableOpacity style={styles.addButton} onPress={handleCreateTablePress}>
          <FontAwesome name="plus" size={30} color="white" style={{ fontWeight: '100' }} />
        </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8B0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

