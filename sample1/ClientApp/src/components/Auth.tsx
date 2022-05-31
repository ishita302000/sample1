import { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);
//return  auth and useauth
export const AuthProvider = ({ childeren }) => {

    const [userId, setuserId] = useState(0);

    const login = (userId) => {
        setuserId(userId);
    }
    const logout = () => {
        setuserId(0);
    }

    return (<AuthContext.Provider value={{ userId, login, logout }}> {childeren}
    </AuthContext.Provider>);
}
export const UseAuth = () => {
    return useContext(AuthContext);
}




