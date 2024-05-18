import axios from "axios";

export const api = axios.create({ baseURL: "https://next-beholder-server.onrender.com/api" });
