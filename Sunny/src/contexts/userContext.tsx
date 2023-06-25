import React, {useState} from "react";

interface userContext {
    token: string | null;
    user: string | null;
    setTokenAndUser: (token: string, user: string) => void;
  }

const UserContext = React.createContext<userContext>({
    token: null,
    user: null,
    setTokenAndUser: () => {console.error("WRONG FUNCTION")}
});

const UserProvider = ({ children }: {children: any}) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<string | null>(null);

    const setTokenAndUser = (token: string, user: string) => {
        setToken(token);
        setUser(user);
    }

    return <UserContext.Provider value={{
        token,
        user,
        setTokenAndUser
    }}>
        {children}
    </UserContext.Provider>
};

export { UserProvider, UserContext };