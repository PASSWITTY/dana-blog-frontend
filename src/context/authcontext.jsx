/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthContext = createContext({
    user: null,
    setUser: () => { },
});

const AuthProvider = ({ children }) => {
    const location = useLocation();
    const storedUser = localStorage.getItem("user");
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [storedUser]);

    const shouldRedirect =({ id }) => ['/signup', '/login', `/data/${id}`].includes(location.pathname);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {(!storedUser) ? shouldRedirect || <Navigate to="/" /> : children }
            {/* {(storedUser) ? children : <Navigate to="/" /> ||shouldRedirect } */}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };