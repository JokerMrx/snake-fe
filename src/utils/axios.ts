import Axios, { InternalAxiosRequestConfig } from "axios";
import { API_V0_ADDRESS } from "../config/main.config";
import Cookie from "js-cookie";

export const axios = Axios.create({
  baseURL: `${API_V0_ADDRESS}`,
  headers: {
    "Content-Language": "en"
  }
});

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const { headers } = config;
  const token = Cookie.get("_token");

  if (token && headers) headers.Authorization = `Bearer ${token}`;

  return config;
});
