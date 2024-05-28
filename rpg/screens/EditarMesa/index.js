import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { editarMesa } from '../../services/api/mesa';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { fetchUserData } from '../../services/utils/auth';

const EditarMesa = ({ route }) => {
  const navigation = useNavigation();
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [sistema, setSistema] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [dia, setDia] = useState('');
  const [preco, setPreco] = useState('');
  const [vagas, setVagas] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();
        console.log('ID do usuário fetchado:', userData.id);

        setTitulo(route.params.mesa.titulo);
        setSubtitulo(route.params.mesa.subtitulo);
        setSistema(route.params.mesa.sistema);
        setDescricao(route.params.mesa.descricao);
        setData(route.params.mesa.data);
        setHorario(route.params.mesa.horario);
        setPeriodo(route.params.mesa.periodo);
        setDia(route.params.mesa.dia);
        setPreco(route.params.mesa.preco);
        setVagas(route.params.mesa.vagas);

        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao carregar dados da mesa:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
      dia,
      preco: route.params.mesa.preco,
      vagas: route.params.mesa.vagas,
      precoOriginal: route.params.mesa.preco,
      vagasOriginal: route.params.mesa.vagas,
    };
  
    try {
      const token = await AsyncStorage.getItem("BeholderToken");
      if (!token) {
        throw new Error("Token não encontrado");
      }
  
      const response = await editarMesa(route.params.mesa.id, userData.id, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200 || response.status === 204) {
        Alert.alert(
          'Sucesso',
          'Mesa editada com sucesso!',
          [
            {
              text: 'Continuar',
              onPress: () => {
                // Atualizar o estado para recarregar a tela de Chat
                setIsLoading(true);
                // Navegar de volta para a tela de Chat
                const mesaId = route.params.mesa.id;
                navigation.navigate('Chat', { mesaId });
              },
            },
          ],
          { cancelable: false }
        );
        return;
      }
  
      const errorMessage = response.data && response.data.message ? response.data.message : 'Erro desconhecido';
      Alert.alert('Erro', errorMessage);
    } catch (error) {
      if (error.data && error.data.errors) {
        const errorMessage = error.data.errors.map(err => err.msg).join('\n');
        Alert.alert('Erro de validação', errorMessage);
      } else {
        Alert.alert('Erro', 'Houve um problema ao editar a mesa.');
      }
    }
  };
  
  const diasMes = Array.from({ length: 31 }, (_, i) => ({
    label: (i + 1).toString(),
    value: (i + 1).toString(),
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
    value: `${i.toString().padStart(2, '0')}:00:00`,
  }));

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}><Text style={styles.label}>Título</Text>
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
        <Dropdown
          data={diasMes}
          labelField="label"
          valueField="value"
          placeholder="Selecione"
          value={dia}
          onChange={item => setDia(item.value)}
          style={styles.dropdown}
          selectedTextStyle={styles.selectedText}
          placeholderStyle={styles.placeholderText}
          inputContainerStyle={styles.inputContainer}
        />
      </>
    )}
  
    <Text style={styles.label}>Horário</Text>
    <Dropdown
      data={horarios}
      labelField="label"
      valueField="value"
      placeholder="Selecione"
      value={horario}
      onChange={item => setHorario(item.value)}
      style={styles.dropdown}
      selectedTextStyle={styles.selectedText}
      placeholderStyle={styles.placeholderText}
      inputContainerStyle={styles.inputContainer}
    />
  
    <Text style={styles.label}>Período</Text>
    <Dropdown
      data={[
        { label: 'Diária', value: 'Diária' },
        { label: 'Semanal', value: 'Semanal' },
        { label: 'Mensal', value: 'Mensal' },
      ]}
      labelField="label"
      valueField="value"
      placeholder="Selecione"
      value={periodo}
      onChange={item => {
        setPeriodo(item.value);
        // Update dia only if relevant to the new periodo
        if (item.value === 'Diária') {
          setDia('');
        }
      }}
      style={styles.dropdown}
      selectedTextStyle={styles.selectedText}
      placeholderStyle={styles.placeholderText}
      inputContainerStyle={styles.inputContainer}
    />
  
    {periodo === 'Semanal' && (
      <>
        <Text style={styles.label}>Dia da Semana</Text>
        <Dropdown
          data={diasSemana}
          labelField="label"
          valueField="value"
          placeholder="Selecione"
          value={dia}
          onChange={item => setDia(item.value)}
          style={styles.dropdown}
          selectedTextStyle={styles.selectedText}
          placeholderStyle={styles.placeholderText}
          inputContainerStyle={styles.inputContainer}
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
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginTop: 5,
      borderRadius: 5,
    },
    nonEditableField: {
      borderWidth: 1,
      borderColor: '#c4c4c4',
      padding: 10,
      marginTop: 5,
      borderRadius: 5,
      backgroundColor: '#c4c4c4',
    },buttonContainer: {
      marginTop: 20,
      marginBottom: 20,
    },
    dropdown: {
      marginTop: 5,
      padding: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    selectedText: {
      fontSize: 16,
    },
    placeholderText: {
      fontSize: 16,
      color: '#ccc',
    },
    inputContainer: {
      borderBottomWidth: 0,
    },
  });
  
  export default EditarMesa;