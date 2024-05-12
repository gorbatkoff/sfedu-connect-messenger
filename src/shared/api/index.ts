import axios from "axios";

import { USER_TOKEN_KEY } from "@/shared/const/localStorage";

export const apiInstance = axios.create({
  baseURL: __API_URL__,
});

apiInstance.interceptors.request.use((config) => {
  if (config.headers) {
    console.log("called");
    config.headers.Authorization = localStorage.getItem(USER_TOKEN_KEY) || "";
  }

  return config;
});
