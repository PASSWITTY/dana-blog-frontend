import axios from "axios";

export const baseURL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_APP_HOST_URL
    : import.meta.env.VITE_APP_HOST_URL_LIVE

const instance = axios.create({ baseURL })

instance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('user'));
  if (token) {
    config.headers.Authorization = `Bearer ${token.access_token}`;
  }
  return config;
});

export default instance