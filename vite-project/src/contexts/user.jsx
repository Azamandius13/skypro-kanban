import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../lib/approutes";

export const UserContext = createContext(null);


const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(getUserFromLocalStorage());

  let navigate = useNavigate();

  const loginUser = (user) => {
    console.log(user)
    setUserData(user);
    localStorage.setItem('user', JSON.stringify(user))
    navigate(appRoutes.MAIN);
  };

  const logoutUser = () => {
    setUserData(null);
    localStorage.removeItem('user');
    navigate(appRoutes.LOGIN);
  };
  return (
    <UserContext.Provider value={{userData, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
