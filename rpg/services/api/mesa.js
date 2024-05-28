import { api } from ".";

export const criarMesa = async (data) => {
  return await api.post("/mesas", data, { withCredentials: true });
};

export const getMesas = async () => {
  return await api.get("/mesas");
};

export const getMinhasMesas = async () => {
  return await api.get("/minhasmesas", { withCredentials: true });
};

export const getMesa = async (id) => {
  return await api.get(`/mesa/${id}`);
};

export const editarMesa = async (mesaId, userId, camposEditados) => {
  try {
    const response = await api.patch(`/mesa/${mesaId}`, { userId, ...camposEditados });
    return response; // Retorna a resposta completa para permitir verificação de status no handleSubmit
  } catch (error) {
    if (error.response && error.response.data) {
      // Se houver dados de resposta no erro, lança a resposta completa
      throw error.response; // Lança o erro da resposta para ser tratado no handleSubmit
    } else {
      // Caso contrário, trata-se de um erro genérico
      throw new Error(`Erro ao editar a mesa: ${error.message}`);
    }
  }
};



