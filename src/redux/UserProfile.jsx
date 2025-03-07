import {  useSelector } from "react-redux";

export const UserProfile = () => {
 
  const user = useSelector((state) => state.user);

  return (
    <div>
      {user.token ? (
        <div> 
          <p className="text-xl font-bold">UserName: {user.username}</p> 
          <p className="text-xl font-bold">Email: {user.email}</p>    
        </div>
      ) : (
        <h1 className="text-xl font-bold">Welcome to Main Page</h1>
      )}
    </div>
  );
};
