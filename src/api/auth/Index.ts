import api from "../axiosInstance";
export const login = (data: any) => api.post("/auth/login", data,{
    withCredentials: true
  });

export const register = (data: any) => api.post("/auth/register", data);

