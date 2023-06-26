import React, { useState } from "react";
import axios from "axios";

const DEFAULT_FUNCTION = () => {
  console.error("WRONG FUNCTION");
};

interface userContext {
  token: string | null;
  user: string | null;
  setTokenAndUser: (token: string, user: string) => void;
  genericPostWithAuth: Function;
}

const UserContext = React.createContext<userContext>({
  token: null,
  user: null,
  setTokenAndUser: DEFAULT_FUNCTION,
  genericPostWithAuth: DEFAULT_FUNCTION,
});

const UserProvider = ({ children }: { children: any }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);

  const setTokenAndUser = (token: string, user: string) => {
    setToken(token);
    setUser(user);
  };

  // My idea for making it so we can just call
  // genericPostWithAuth("/url/here", {body: "here"}).then(...)
  // Instead of repeating. not sure how viable it is.. too lazy to test
  // SO TODO
  const genericPost = async (
    url: string,
    body: object,
    successCallback: Function,
    headers: object
  ) => {
    console.log("url", url);
    console.log("body", body);
    try {
      await axios.post(url, body, headers).then((response) => {
        successCallback && successCallback(response.data);
      });
    } catch (error) {
      console.error("error", error);
      return error;
    }
  };

  const genericPostWithAuth = async (
    url: string,
    body: object,
    successCallback: Function
  ) => {
    genericPost(url, body, successCallback, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  // End my psycho shit

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        setTokenAndUser,
        genericPostWithAuth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
