import axios from "axios";

import { USER_TOKEN_KEY } from "@/shared/const/localStorage";

export const apiInstance = axios.create({
  baseURL: __API_URL__,
});

apiInstance.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_TOKEN_KEY) || "";
  }

  if (config.method === "post") {
    config.headers["Content-Type"] = "application/json";
  }

  return config;
});
