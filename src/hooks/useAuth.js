import axios from "axios";
import { useState } from "react";
import { setAccessToken } from "../axiosConfig";

const useAuth = () => {
  const [authorized, setAuthorized] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const data = await axios.post(`/login`, {
        email,
        password,
      });
      console.log("Logged in successfully");
      setToken(data.token);
      setAuthorized(true);
      localStorage.setItem("token", data.token);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
    setLoading(false);
  };

  const signup = async (name, email, password, phone) => {
    setLoading(true);
    try {
      const data = await axios.post(`/signup`, {
        name,
        email,
        password,
        phone,
      });
      console.log("Signed up and logged in successfully");
      setToken(data.token);
      setAuthorized(true);
      localStorage.setItem("token", data.token);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
    setLoading(false);
  };

  const logout = async () => {
    const body = {
      fcm_token: token,
    };
    try {
      await axios.post("/logout", body);
      console.log("Logged out successfully");
      setAccessToken("");
    } catch (error) {
      setError(error.message);
    }
    localStorage.clear();
    setAuthorized(false);
    setToken("");
  };

  return {
    authorized,
    token,
    error,
    loading,
    signup,
    login,
    logout,
    setError,
    setLoading,
  };
};

export default useAuth;
