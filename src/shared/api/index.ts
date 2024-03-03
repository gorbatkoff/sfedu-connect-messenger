import axios from "axios";

export const apiInstance = axios.create({
  baseURL: __API_URL__,
});

apiInstance.interceptors.request.use((config) => {
  if (config.headers) {
    // TODO: Переделать на куки
    config.headers.Authorization = localStorage.getItem("token") || "";
  }

  return config;
});
