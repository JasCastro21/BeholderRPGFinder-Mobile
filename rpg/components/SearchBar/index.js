import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ searchQuery, setSearchQuery, onSearchPress, tipoTela }) => {
  let placeholderText = tipoTela === 'jogadores' ? 'Pesquisar jogadores' : 'Pesquisar mesas';

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder={placeholderText}
        placeholderTextColor="#7D7D7D"
        selectionColor="#8B0000" 
      />
      <TouchableOpacity onPress={onSearchPress} style={styles.iconContainer}>
        <FontAwesome name="search" size={20} color="#8B0000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 30,
    margin: 10,
    paddingLeft: 15,
    paddingRight: 10,
    elevation: 3,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#7D7D7D',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
