import { useState, useEffect } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    setAuthorized(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthorized(true);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setAuthorized(false);
  };

  return {
    authorized,
    setAuthorized,
    loading,
    setLoading,
    token,
    setToken,
    logout,
    login,
    error,
    setError,
  };
};

export default useAuth;
