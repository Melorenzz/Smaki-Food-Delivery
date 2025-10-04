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
        const tokensStr = localStorage.getItem('tokens');
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
            originalRequest._retry = true; // чтобы не зациклиться

            const tokensStr = localStorage.getItem("tokens");
            const refreshToken = tokensStr ? JSON.parse(tokensStr)?.refresh_token : null;

            if (!refreshToken) {
                // нет refresh_token → редирект на логин или просто reject
                localStorage.removeItem("tokens");
                return Promise.reject(error);
            }

            try {
                // запрос на обновление access_token
                const response = await axios.post(`${SERVER_URL}/auth/refresh`, {
                    refresh_token: refreshToken,
                });

                const newAccessToken = response.data.access_token;

                // обновляем объект tokens в localStorage
                localStorage.setItem(
                    "tokens",
                    JSON.stringify({
                        ...JSON.parse(tokensStr),
                        access_token: newAccessToken,
                    })
                );

                // подставляем новый токен и повторяем исходный запрос
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (err) {
                // refresh_token тоже недействителен → удаляем все токены
                localStorage.removeItem("tokens");
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);