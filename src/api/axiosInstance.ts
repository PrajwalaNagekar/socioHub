import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    withCredentials: true,
    timeout: 10000,
});

export const chatURL = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL_CHAT,
    withCredentials: true,
    timeout: 10000,
});

//interceptors--used for safer exraction of data from response
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
export default api;
