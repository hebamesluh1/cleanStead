import axios from "axios";

const registerUser = async ({ email, password, username, phone }) => {
  try {
    return await axios.post(`/register`, {
      email,
      password,
      name: username,
      phone,
    });
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async ({ email, password }) => {
  try {
    return await axios.post(`/login`, { email, password });
  } catch (error) {
    console.error(error);
  }
};

export { loginUser, registerUser };
