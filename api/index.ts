import axios from "axios";

export const BASE_URL = "https://diary.es6.kr";

const window = global.window;

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(
  (config) => {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Basic ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 404) {
      return;
    }
    return Promise.reject(error);
  },
);

export const diaryKeys = {
  list: () => ["diaryList"] as const,
  retrieve: (date: string) => [...diaryKeys.list(), date] as const,
};

export const todoKeys = {
  list: () => ["toDoList"] as const,
};
