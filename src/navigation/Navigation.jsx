import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/UserReducer";

export const Navigation = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 font-bold">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-600" : ""
        }
      >
        Home
      </NavLink>

      {!user.token && (
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600" : ""
          }
        >
          login
        </NavLink>
      )}

      {user.token && (
        <>
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-600" : ""
            }
          >
            profile
          </NavLink>

          <NavLink
            to="/linkone"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-600" : ""
            }
          >
            LinkOne
          </NavLink>

          <NavLink
            to="/"
            onClick={()=>{
              dispatch(logout());
            }} 
          >
            logout
          </NavLink>
        </>
      )}
    </div>
  );
};
