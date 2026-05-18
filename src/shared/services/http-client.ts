import axios from "axios";
import { env } from "../constants/env";
import { clearAccessToken, getAccessToken } from "../helpers/auth-storage";
import { toastBus } from "./toast-bus";
import { parseApiError } from "../helpers/api-error";

export const httpClient = axios.create({
  baseURL: env.apiBaseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      clearAccessToken();
    }
    toastBus.emit({ type: "error", message: parseApiError(error) });
    return Promise.reject(error);
  },
);
