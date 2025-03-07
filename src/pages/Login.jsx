import { useState } from "react";
import { FormLogin } from "./FormLogin";
import { FormRegister } from "./FormRegister";

export const Login = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="flex-1 flex justify-center items-center">
      {login ? <FormLogin setLogin={setLogin}/> : <FormRegister setLogin={setLogin}/>}
    </div>
  );
};
