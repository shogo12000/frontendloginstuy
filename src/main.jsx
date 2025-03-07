import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; 
import { Routers } from "./routes/Routers.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/UserStore.jsx";
import axios from "axios";

//axios.defaults.baseURL = "https://backendlogin-delta.vercel.app/api"
axios.defaults.baseURL = "http://localhost:3000/api"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Routers} />
    </Provider>
  </StrictMode>
);
