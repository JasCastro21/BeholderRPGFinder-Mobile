import { api } from ".";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const enviarMensagem = async (id, mensagem) => {
  try {
    const token = await AsyncStorage.getItem('BeholderToken');

    if (!token) {
      alert("É necessário estar logado para enviar mensagens");
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    };

    const response = await api.post(`/mensagens/${id}`, mensagem, config);

    return response.data;
  } catch (error) {
    if (error.response) {
      // O servidor respondeu com um código de status fora do intervalo 2xx
      console.log('Status do erro:', error.response.status);
      console.log('Dados do erro:', error.response.data);
      console.log('Cabeçalhos do erro:', error.response.headers);
    } else if (error.request) {
      // A solicitação foi feita, mas não houve resposta do servidor
      console.log('Erro na solicitação:', error.request);
    } else {
      // Ocorreu um erro ao configurar a solicitação
      console.log('Erro ao configurar a solicitação:', error.message);
    }
    throw error;
  }
};

export const listarMensagens = async (id) => {
  try {
    const token = await AsyncStorage.getItem('BeholderToken');

    if (!token) {
      alert("É necessário estar logado para listar mensagens");
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    };

    const response = await api.get(`/mensagens/${id}`, config);
    return response.data;
  } catch (error) {
    if (error.response) {
      // O servidor respondeu com um código de status fora do intervalo 2xx
      console.log('Status do erro:', error.response.status);
      console.log('Dados do erro:', error.response.data);
      console.log('Cabeçalhos do erro:', error.response.headers);
    } else if (error.request) {
      // A solicitação foi feita, mas não houve resposta do servidor
      console.log('Erro na solicitação:', error.request);
    } else {
      // Ocorreu um erro ao configurar a solicitação
      console.log('Erro ao configurar a solicitação:', error.message);
    }
    throw error;
  }
};