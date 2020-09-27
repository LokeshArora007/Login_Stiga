import axios from 'axios';
import LocalStorageService from './localStorageService';

const localStorageService = LocalStorageService.getService();

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: false,
});

client.interceptors.request.use(
    (config) => {
        const token = localStorageService.getToken();
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

client.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default client;
