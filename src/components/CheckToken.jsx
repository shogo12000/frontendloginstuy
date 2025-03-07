import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Login } from "../pages/Login";
import axios from "axios";
 

export const CheckToken = ({ children }) => {
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.user);
  const [isTokenValid, setIsTokenValid] = useState(null);  

  useEffect(() => {
    const checkTokenValidity = async () => {
 
      const token = user.token;
      if (!token) {
        setIsTokenValid(false);  
        return <Login />;
      }

      try {
        const resp = await axios.get(
          "/users/verify-token",  
          { headers: { Authorization: `Bearer ${token}` } }
        );  
        setIsTokenValid(true); 
      } catch (error) {
        console.log("Erro na verificação do token", error);
        setIsTokenValid(false);  
      }
    };

    checkTokenValidity();
  }, [user.token]);  

  if (isTokenValid === null) {
    return <div>Verificando token...</div>; 
  }

  if (!isTokenValid) {
    return <Login />;  
  }

  return children; 
};