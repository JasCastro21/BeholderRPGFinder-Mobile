import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';
import { criarMesa } from '../../services/api/mesa';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CriarMesa = () => {
  const navigation = useNavigation();
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [sistema, setSistema] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [periodo, setPeriodo] = useState('Diária');
  const [dia, setDia] = useState('');
  const [preco, setPreco] = useState('');
  const [vagas, setVagas] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = async () => {
  
    let diaValue = periodo === 'Diária' ? 'Diária' : dia;
  
    const payload = {
      titulo,
      subtitulo,
      sistema,
      descricao,
      data,
      horario,
      periodo,
      dia: diaValue === '' ? 'Diária' : diaValue,
      preco: preco === 'Grátis' ? 0 : parseInt(preco, 10),
      vagas: parseInt(vagas, 10) + 1
    };
  
    try {
      const token = await AsyncStorage.getItem("BeholderToken");
      if (!token) {
        throw new Error("Token não encontrado");
      }
  
      const response = await criarMesa(payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const mesaId = response.data.mesa.data[0].id;
      console.log("response criar mesa: ", response)
  
      Alert.alert(
        'Sucesso',
        'Mesa criada com sucesso!',
        [
          {
            text: 'Continuar',
            onPress: () => navigation.navigate('Chat', {mesaId}),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error("Erro ao criar a mesa:", error);
      Alert.alert('Erro', 'Houve um problema ao criar a mesa.');
    }
  };

  const diasSemana = [
    { label: 'Domingo', value: 'Domingo' },
    { label: 'Segunda-feira', value: 'Segunda-feira' },
    { label: 'Terça-feira', value: 'Terça-feira' },
    { label: 'Quarta-feira', value: 'Quarta-feira' },
    { label: 'Quinta-feira', value: 'Quinta-feira' },
    { label: 'Sexta-feira', value: 'Sexta-feira' },
    { label: 'Sábado', value: 'Sábado' },
  ];

  const diasMes = Array.from({ length: 31 }, (_, i) => ({
    label: (i + 1).toString(),
    value: (i + 1).toString()
  }));

  const horarios = Array.from({ length: 24 }, (_, i) => ({
    label: `${i.toString().padStart(2, '0')}:00`,
    value: `${i.toString().padStart(2, '0')}:00:00`
  }));

  const precos = [
    { label: 'Grátis', value: 'Grátis' },
    { label: 'R$ 1', value: '1' },
    { label: 'R$ 5', value: '5' },
    { label: 'R$ 10', value: '10' }
  ];

  const vagasOptions = Array.from({ length: 9 }, (_, i) => ({
    label: (i + 1).toString(),
    value: (i + 1).toString()
  }));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} />

      <Text style={styles.label}>Subtítulo</Text>
      <TextInput style={styles.input} value={subtitulo} onChangeText={setSubtitulo} />

      <Text style={styles.label}>Sistema</Text>
      <TextInput style={styles.input} value={sistema} onChangeText={setSistema} />

      <Text style={styles.label}>Descrição</Text>
      <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} multiline />

      <Text style={styles.label}>Horário</Text>
      <RNPickerSelect
        onValueChange={setHorario}
        items={horarios}
        style={pickerSelectStyles}
      />

      <Text style={styles.label}>Período</Text>
      <RNPickerSelect
        onValueChange={(value) => {
          setPeriodo(value);
          if (value !== 'Semanal') setDia('');
        }}
        items={[
          { label: 'Diária', value: 'Diária' },
          { label: 'Semanal', value: 'Semanal' },
          { label: 'Mensal', value: 'Mensal' }
        ]}
        style={pickerSelectStyles}
      />

      {periodo === 'Semanal' && (
        <>
          <Text style={styles.label}>Dia da Semana</Text>
          <RNPickerSelect
            onValueChange={setDia}
            items={diasSemana}
            style={pickerSelectStyles}
          />
        </>
      )}

      {periodo === 'Mensal' && (
        <>
          <Text style={styles.label}>Dia do Mês</Text>
          <RNPickerSelect
            onValueChange={setDia}
            items={diasMes}
            style={pickerSelectStyles}
          />
        </>
      )}

      <Text style={styles.label}>Preço</Text>
      <RNPickerSelect
        onValueChange={setPreco}
        items={precos}
        style={pickerSelectStyles}
      />

      <Text style={styles.label}>Vagas</Text>
      <RNPickerSelect
        onValueChange={setVagas}
        items={vagasOptions}
        style={pickerSelectStyles}
      />

      <View style={styles.buttonContainer}>
        <Button title="Criar Mesa" onPress={handleSubmit} color="#8B0000" />
</View>
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
padding: 20,
},
label: {
marginTop: 10,
fontSize: 16,
fontWeight: 'bold'
},
input: {
borderWidth: 1,
borderColor: '#ccc',
padding: 10,
marginTop: 5,
borderRadius: 5
},
buttonContainer: {
marginTop: 20,
marginBottom: 20
}
});

const pickerSelectStyles = StyleSheet.create({
inputIOS: {
fontSize: 16,
paddingVertical: 12,
paddingHorizontal: 10,
borderWidth: 1,
borderColor: 'gray',
borderRadius: 4,
color: 'black',
paddingRight: 30,
marginTop: 5
},
inputAndroid: {
fontSize: 16,
paddingHorizontal: 10,
paddingVertical: 8,
borderWidth: 0.5,
borderColor: 'purple',
borderRadius: 8,
color: 'black',
paddingRight: 30,
marginTop: 5
}
});

export default CriarMesa;
