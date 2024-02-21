import axios from "axios";

axios.defaults.baseURL = "https://diary.es6.kr";

export const login = (data: Auth) =>
  axios.post("/auth/login", data).then((res) => {
    console.debug(res);
    return res.data;
  });

export const signUp = (data: Auth) =>
  axios.post("/auth/signup", data).then((res) => {
    console.debug(res);
    return res.data;
  });
