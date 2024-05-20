import { api } from ".";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUsuarioMesa = async (id) => {
  return await api.get(`/usuariomesa/${id}`);
};

export const listarMesasDoUsuario = async (usuarioId) => {
  return await api.get(`/usuariomesa/mesas-do-usuario/${usuarioId}`, {
    withCredentials: true,
  });
};

export const listarUsuariosDaMesa = async (mesaId) => {
  const token = await AsyncStorage.getItem('BeholderToken'); // Obter o token do AsyncStorage
  return await api.get(`/usuariomesa/${mesaId}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`, // Adicionar o token aos headers
    },
  });
}
