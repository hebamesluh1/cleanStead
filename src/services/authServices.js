import axios from "axios";
import { API_PATH } from "../config/api";

const registerUser = async ({ email, password, username, phone }) => {
  try {
    const { data } = await axios.post(`${API_PATH}/register`, {
      email,
      password,
      name: username,
      phone,
    });

    if (data.status) {
      return { success: true, token: data.data.token };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const loginUser = async ({ email, password }) => {
  try {
    const { data } = await axios.post(`${API_PATH}/login`, { email, password });

    if (data.status) {
      return { success: true, token: data.data.token };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { loginUser, registerUser };
