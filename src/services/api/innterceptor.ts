import axios, { type AxiosInstance } from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Request interceptor для динамического токена
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');

        // config.headers точно не null
        if (token) {
            config.headers!.set('Authorization', `Bearer ${token}`);
        }

        return config; // обязательно возвращаем config
    },
    (error) => {
        return Promise.reject(error);
    }
);
