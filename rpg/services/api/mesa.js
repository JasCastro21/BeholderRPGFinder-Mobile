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
