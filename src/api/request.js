import axios from "axios";
import Storage from "@/utils/storage";

const baseURL = "https://anti-cheat-book-api.xav1er.com";

const request = axios.create({
  baseURL,
  timeout: 5000,
  responseType: "json",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

request.interceptors.request.use(async config => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${await Storage.get("token")}`,
  };
  return config;
});

request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return error;
  }
);

export default request;
