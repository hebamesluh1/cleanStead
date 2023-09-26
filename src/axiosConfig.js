import axios from "axios";
import { API_PATH } from "./config/api";

axios.defaults.baseURL = `${API_PATH}`;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["lang"] = "ar";

export const setAccessToken = (token) => {
  axios.defaults.headers.common["Authorization"] = token;
};
