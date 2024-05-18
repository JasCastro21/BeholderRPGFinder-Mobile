import { api } from ".";

export const getUsuarioMesa = async (id) => {
  return await api.get(`/usuariomesa/${id}`);
};

export const listarMesasDoUsuario = async (usuarioId) => {
  return await api.get(`/usuariomesa/mesas-do-usuario/${usuarioId}`, {
    withCredentials: true,
  });
};

export const listarUsuariosDaMesa = async (mesaId) => {
  return await api.get(`/usuariomesa/${mesaId}`, {
    withCredentials: true,
  });
};
