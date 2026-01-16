import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    withCredentials: true,
    timeout: 10000,
});
//interceptors--used for safer exraction of data from response
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message =
            error?.response?.data?.message || "Something went wrong";
        return Promise.reject(message);
    }
);

export default api;
