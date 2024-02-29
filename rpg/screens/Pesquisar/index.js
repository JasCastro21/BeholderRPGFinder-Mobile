import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#8B0000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar..."
        placeholderTextColor="#666666"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    margin: 10,
    borderColor: '#8B0000',
    borderWidth: 2, 
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchBar;
