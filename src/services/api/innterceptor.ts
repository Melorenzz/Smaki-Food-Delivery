import axios, { type AxiosInstance } from "axios";
import { store } from "../../store.ts";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: SERVER_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const tokensStr = localStorage.getItem("tokens");
        const token = tokensStr ? JSON.parse(tokensStr)?.access_token : null;

        if (token) {
            (config.headers as any).Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const tokensStr = localStorage.getItem("tokens");
            const refreshToken = tokensStr ? JSON.parse(tokensStr)?.refresh_token : null;

            if (!refreshToken) {
                localStorage.removeItem("tokens");
                store.getState().setIsAuthenticated(false);
                return Promise.reject(error);
            }

            try {
                const response = await axios.post(`${SERVER_URL}/auth/refresh`, {
                    refreshToken: refreshToken,
                });

                const newAccessToken = response.data.access_token;

                localStorage.setItem(
                    "tokens",
                    JSON.stringify({
                        ...JSON.parse(tokensStr),
                        access_token: newAccessToken,
                    })
                );

                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (err) {
                localStorage.removeItem("tokens");
                store.getState().setIsAuthenticated(false);
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);
