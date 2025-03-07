import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Profile } from "../pages/Profile";
import { MainPage } from "../pages/MainPage";
import { Login } from "../pages/Login";
import { CheckToken } from "../components/CheckToken";
import { LinkOne } from "../pages/LinkOne";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: Loading,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: (
          <CheckToken>
            <Profile />
          </CheckToken>
        ),
      },
      {
        path: "linkone",
        element: (
          <CheckToken>
            <LinkOne />
          </CheckToken>
        ),
      },
      
    ],
  },
]);
