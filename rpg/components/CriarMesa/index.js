import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CriarMesa = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [theme, setTheme] = useState('');
  const [subTheme, setSubTheme] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [slots, setSlots] = useState('');
  const [cost, setCost] = useState('');

  const handlePostar = () => {
    // Lógica para postar
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Text style={styles.imageText}>Imagem</Text>
        </View>
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Nome da Mesa"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição da Mesa"
        value={description}
        onChangeText={setDescription}
      />
      <Picker
        selectedValue={theme}
        style={styles.picker}
        onValueChange={(itemValue) => setTheme(itemValue)}
      >
        <Picker.Item label="Escolha um Tema" value="" />
        {/* Adicione mais itens aqui */}
      </Picker>
      <Picker
        selectedValue={subTheme}
        style={styles.picker}
        onValueChange={(itemValue) => setSubTheme(itemValue)}
      >
        <Picker.Item label="Escolha um Subtema" value="" />
        {/* Adicione mais itens aqui */}
      </Picker>
      <Picker
        selectedValue={day}
        style={styles.picker}
        onValueChange={(itemValue) => setDay(itemValue)}
      >
        <Picker.Item label="Escolha um Dia" value="" />
        {/* Adicione mais itens aqui */}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Horário"
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Vagas"
        value={slots}
        onChangeText={setSlots}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Custo/Sessão"
        value={cost}
        onChangeText={setCost}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handlePostar}>
        <Text style={styles.buttonText}>Postar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    color: '#aaa',
  },
  input: {
    height: 40,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#8B0000',
  },
  picker: {
    height: 40,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#8B0000',
  },
  button: {
    backgroundColor: '#8B0000',
    paddingHorizontal: 40,
    paddingVertical: 8,
    marginVertical: 5,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CriarMesa;
