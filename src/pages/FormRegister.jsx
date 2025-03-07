import { InputField } from "../components/InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

export const FormRegister = ({setLogin}) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const btnSubmit = async (e) => {
      e.preventDefault();
      try {
        const resp = await axios.post("/auth/register", formData);
   
        if(resp.status === 201){
          setErrorMessage("Sucessfull Registered");
          //navigate("/profile") 
        }else{
          setErrorMessage("error")
          console.log(resp);
        }
  
      } catch (error) {
        if (error.response && error.response.data.message) {
          setErrorMessage(error.response.data.message);  
        } else {
          setErrorMessage("Ocorreu um erro inesperado. Tente novamente.");  
        }
      }
    };
  return (
    <form onSubmit={btnSubmit}>
      <div className="border-1 border-gray-900/10 p-12 rounded-md">
        <h2 className="text-base/7 font-semibold text-gray-900">
          Register New User
        </h2>
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <InputField
              title={"username"}
              type={"text"}
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="sm:col-span-2">
            <InputField
              title={"email"}
              type={"email"}
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="sm:col-span-2">
            <InputField
              title={"password"}
              type={"password"}
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="w-full mt-6 flex items-center justify-end gap-x-6  sm:col-span-6">
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>

          <div className="sm:col-span-6">
            <p className="w-full font-bold text-right" onClick={()=>setLogin(true)}>Login</p>
          </div>
        </div>
      </div>
    </form>
  );
};
