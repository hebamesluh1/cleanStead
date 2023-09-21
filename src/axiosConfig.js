import axios from "axios";

axios.defaults.baseURL = "https://student.valuxapps.com/api";
// axios.defaults.baseURL = "https://react-tt-api.onrender.com/api/users";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["lang"] = "ar";

export const setAccessToken = (token) => {
  axios.defaults.headers.common["Authorization"] = token;
};
