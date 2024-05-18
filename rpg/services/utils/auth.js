import * as jwtDecode from "jwt-decode"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { api } from "../api";
import "core-js/stable/atob";

export const getStoredToken = async () => {
  try {
    const token = await AsyncStorage.getItem("BeholderToken");
    return token;
  } catch (error) {
    console.error("Erro ao obter o token armazenado:", error);
    return null;
  }
};

export const fetchUserData = async () => {
  try {
    const token = await AsyncStorage.getItem("BeholderToken");
    if (token) {
      console.log("Token: ", token)
      const decodedToken = jwtDecode.jwtDecode(token);
      console.log("Token decodificado: ", decodedToken)
      const userId = decodedToken.userId;
      const response = await axios.get(
        `https://next-beholder-server.onrender.com/api/usuario/${userId}`
      );
      return response.data[0];
    }
  } catch (error) {
    console.error("Erro ao obter os dados do usuário:", error);
  }
};

export const fetchOtherUsers = async (id) => {
  try {
    const response = await api.get(`/usuariomesa/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter outros usuários:", error);
    return null;
  }
};
