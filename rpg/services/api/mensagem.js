import { api } from ".";
import { getCookieValue } from "../utils/auth";

export const enviarMensagem = async (id, mensagem) => {
  try {
    // Obtenha o token do cookie ou de onde você o armazenou
    const token = getCookieValue("BeholderToken");

    // Verifique se há um token antes de fazer a solicitação
    if (!token) {
      alert("É necessário estar logado para enviar mensagens");
      return;
    }

    // Configure o cabeçalho com o token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    };

    // Corpo da requisição
    const requestBody = mensagem;

    const response = await api.post(`/mensagens/${id}`, requestBody, config);

    return response.data;
  } catch (error) {
    alert("Contate um administrador. Erro: ", error);
    throw error;
  }
};

export const listarMensagens = async (id) => {
  try {
    const token = getCookieValue("BeholderToken");

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
    alert("Contate um administrador. Erro: ", error);
    throw error;
  }
};
