import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { editarMesa } from '../../services/api/mesa';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { fetchUserData } from '../../services/utils/auth';

const EditarMesa = ({ route }) => {
  const navigation = useNavigation();
  const [titulo, setTitulo] = useState(route.params.mesa.titulo);
  const [subtitulo, setSubtitulo] = useState(route.params.mesa.subtitulo);
  const [sistema, setSistema] = useState(route.params.mesa.sistema);
  const [descricao, setDescricao] = useState(route.params.mesa.descricao);
  const [data, setData] = useState(route.params.mesa.data); 
  const [horario, setHorario] = useState(route.params.mesa.horario);
  const [periodo, setPeriodo] = useState(route.params.mesa.periodo);
  const [dia, setDia] = useState(route.params.mesa.dia);
  const [preco] = useState(route.params.mesa.preco);
  const [vagas] = useState(route.params.mesa.vagas);

  const handleSubmit = async () => {
    const userData = await fetchUserData();

    const payload = {
      id: route.params.mesa.id,
      titulo,
      subtitulo,
      sistema,  
      descricao,
      data,
      horario,
      periodo,
      dia
    };

    console.log("____________________________________")
    console.log("PAYLOAD editar mesa")
    console.log(payload)
    console.log("____________________________________")

    // Função para remover propriedades vazias do payload
    function removerPropriedadesVazias(payload) {
      for (const key in payload) {
        if (payload[key] === '') {
          delete payload[key];
        }
      }
      return payload;
    }

    // Removendo propriedades vazias do payload antes de enviar
    const payloadLimpo = removerPropriedadesVazias(payload);

    try {
      const token = await AsyncStorage.getItem("BeholderToken");
      if (!token) {
        throw new Error("Token não encontrado");
      }

      const response = await editarMesa(route.params.mesa.id, userData.id, payloadLimpo, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      Alert.alert(
        'Sucesso',
        'Mesa editada com sucesso!',
        [
          {
            text: 'Continuar',
            onPress: () => navigation.goBack(),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error("Erro ao editar a mesa:", error);
      Alert.alert('Erro', 'Houve um problema ao editar a mesa.');
    }
  };

  const diasMes = Array.from({ length: 31 }, (_, i) => ({
    label: (i + 1).toString(),
    value: (i + 1).toString()
  }));

  const diasSemana = [
    { label: 'Domingo', value: 'Domingo' },
    { label: 'Segunda-feira', value: 'Segunda-feira' },
    { label: 'Terça-feira', value: 'Terça-feira' },
    { label: 'Quarta-feira', value: 'Quarta-feira' },
    { label: 'Quinta-feira', value: 'Quinta-feira' },
    { label: 'Sexta-feira', value: 'Sexta-feira' },
    { label: 'Sábado', value: 'Sábado' },
  ];

  const horarios = Array.from({ length: 24 }, (_, i) => ({
    label: `${i.toString().padStart(2, '0')}:00`,
    value: `${i.toString().padStart(2, '0')}:00:00`
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

      <Text style={styles.label}>Preço</Text>
      <View style={styles.nonEditableField}>
        <Text>{preco}</Text>
      </View>

      <Text style={styles.label}>Vagas</Text>
      <View style={styles.nonEditableField}>
        <Text>{vagas}</Text>
      </View>

      {(periodo === 'Mensal') && (
        <>
          <Text style={styles.label}>Dia do Mês</Text>
          <RNPickerSelect
            onValueChange={(value) => setDia(value)} 
            items={diasMes}
            style={pickerSelectStyles}
          />
        </>
      )}

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
          if (value === 'Diária') setDia('');
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

      <View style={styles.buttonContainer}>
        <Button title="Salvar" onPress={handleSubmit} color="#8B0000" />
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
  nonEditableField: {
    borderWidth: 1,
    borderColor: '#c4c4c4',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#c4c4c4',
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

export default EditarMesa;
