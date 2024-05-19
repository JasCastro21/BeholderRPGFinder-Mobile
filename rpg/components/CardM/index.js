// CardM.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CardM = ({ 
  title, 
  subtitle, 
  descricao, 
  mestre, 
  vagas, 
  dia, 
  horario, 
  preco, 
  onPress, 
  buttonText, 
  onButtonPress 
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Text style={styles.descricao}>{descricao}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Mestre:</Text>
        <Text style={styles.value}>{mestre}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Vagas:</Text>
        <Text style={styles.value}>{vagas}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Dia:</Text>
        <Text style={styles.value}>{dia}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Horário:</Text>
        <Text style={styles.value}>{horario}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Preço:</Text>
        <Text style={styles.value}>R${preco}</Text>
      </View>
      <TouchableOpacity style={styles.entrarButton} onPress={onButtonPress}>
        <Text style={styles.entrarButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  descricao: {
    fontSize: 14,
    color: '#888',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    color: '#555',
    marginLeft: 5,
  },
  entrarButton: {
    backgroundColor: '#8B0000',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  entrarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardM;
