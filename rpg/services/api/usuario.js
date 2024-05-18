import { api } from ".";
import { buscarTema } from "../api/tema";
import { getCookieValue } from "../utils/auth";

export const criarNovoUsuario = async (data) => {
  if (data.datanascimento) {
    return await api.post("/usuarios", data);
  }

  delete data.datanascimento;
  return await api.post("/usuarios", data);
};

export const autenticar = async (data) => {
  const response = await api.post(
    "usuarios/login",
    {
      email: data.email,
      senha: data.senha,
    },
    {
      withCredentials: true,
    }
  );

  console.log("Usuário autenticado com sucesso:", response.data.token);
  return response.data.token;
};

export const listarTemasFavoritos = async () => {
  return await api.get("usuarios/temas/listar");
};

export const getUsuarioTemaPorId = async (id) => {
  try {
    const temasResponse = await api.get(`usuarios/temas/listar/${id}`);
    const temas = temasResponse.data;

    if (!Array.isArray(temas)) {
      throw new Error("Data is not an array");
    }

    const temasComNomes = await Promise.all(
      temas.map(async (tema) => {
        const temaDetalhado = await buscarTema(tema.idtema);
        return temaDetalhado.data[0].nome;
      })
    );

    return temasComNomes;
  } catch (error) {
    console.error("Erro ao buscar temas: ", error);
    return []; // Return an empty array in case of an error
  }
};

export const listarUsuarios = async () => {
  return await api.get("/usuarios");
};

export const getUsuarioPorId = async (id) => {
  return await api.get(`/usuario/${id}`);
};

export const entrarNaMesa = async (mesaId) => {
  try {
    // Obtenha o token do cookie
    const token = getCookieValue("BeholderToken");

    // Verifique se há um token antes de fazer a solicitação
    if (!token) {
      alert("É necessário estar logado para entrar em uma mesa");
      return;
    }

    // Configure o cabeçalho com o token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    };

    const response = await api.post(
      `/usuarios/entrar-na-mesa/${mesaId}`,
      null,
      config
    );

    return response;
  } catch (error) {
    console.error("Erro ao entrar na mesa:", error);
    throw error;
  }
};
