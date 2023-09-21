import axios from "axios";
import { API_PATH } from "../config/api";

export const registerUser = async ({ email, password, username, phone }) => {
  try {
    const response = await axios.post(`${API_PATH}/register`, {
      email,
      password,
      name: username,
      phone,
    });

    if (response.data.status) {
      return { success: true, token: response.data.data.token };
    } else {
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_PATH}/login`, { email, password });

    if (response.data.status) {
      return { success: true, token: response.data.data.token };
    } else {
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
