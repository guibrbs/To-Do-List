import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userDocID, setUserDocID] = useState('');
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        });
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser, setUserDocID, userDocID }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;