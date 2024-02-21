import axios from "axios";

export const BASE_URL = "https://diary.es6.kr";

axios.defaults.baseURL = BASE_URL;

export const diaryKeys = {
  list: () => ["diaryList"] as const,
  retrieve: (date: string) => [...diaryKeys.list(), date] as const,
};

export const todoKeys = {
  list: () => ["toDoList"] as const,
};
