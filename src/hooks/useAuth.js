import { useReducer, useEffect } from "react";
import { setAccessToken } from "../axiosConfig";


const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authorized: true,
        token: action.token,
      };
    case "LOGOUT":
      return {
        ...state,
        authorized: false,
        token: "",
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.loading,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

const useAuth = () => {
  const initialState = {
    loading: false,
    authorized: false,
    token: "",
    error: "",
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (token) => {
    dispatch({ type: "LOGIN", token });
    localStorage.setItem("token", token);
    setAccessToken(token)
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      login(token);
      setAccessToken(token);
    }
  }, []);

  const logout = () => {
    localStorage.clear(); 
    // or can write : localStorage.removeItem("token")
    dispatch({ type: "LOGOUT" });
  };

  const setLoading = (loading) => {
    dispatch({ type: "SET_LOADING", loading });
  };

  const setError = (error) => {
    dispatch({ type: "SET_ERROR", error });
  };

  return {
    ...state,
    login,
    logout,
    setLoading,
    setError,
  };
};

export default useAuth;
