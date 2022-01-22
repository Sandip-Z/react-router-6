import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return tokenString;
  };

  const [token, setToken] = useState(getToken());
  
  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  const removeToken = () => {
    setToken(null);
    localStorage.removeItem('token');
  }

  return {
    setToken: saveToken,
    token,
    removeToken
  };
};

export default useToken;
