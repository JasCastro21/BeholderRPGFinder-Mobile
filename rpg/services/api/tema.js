import { api } from ".";

export const listarTemas = async () => {
  return await api.get("/temas");
};

export const buscarTema = async (id) => {
  return await api.get(`/temas/id/${id}`);
};
