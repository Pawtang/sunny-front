import React, { Component, ReactElement, useState, ReactNode } from "react";
import axios from "axios";

const DEFAULT_FUNCTION = () => {
  console.error("WRONG FUNCTION");
};

interface userContext {
  token: string | null;
  user: string | null;
  setTokenAndUser: (token: string, user: string) => void;
  genericPostWithAuth: Function;
  genericGetWithAuth: Function;
  genericDeleteWithAuth: Function;
}

const UserContext = React.createContext<userContext>({
  token: null,
  user: null,
  setTokenAndUser: DEFAULT_FUNCTION,
  genericPostWithAuth: DEFAULT_FUNCTION,
  genericGetWithAuth: DEFAULT_FUNCTION,
  genericDeleteWithAuth: DEFAULT_FUNCTION,
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);

  const setTokenAndUser = (token: string, user: string) => {
    setToken(token);
    setUser(user);
  };

  const genericGet = async (
    url: string,
    successCallback: Function,
    headers: object
  ) => {
    console.log("hit the get");
    try {
      await axios.get(url, headers).then((response) => {
        console.log(response);
        successCallback && successCallback(response.data);
      });
    } catch (error) {
      console.error("error", error);
      return error;
    }
  };

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

  const genericDelete = async (
    url: string,
    successCallback: Function,
    headers: object
  ) => {
    console.log("url", url);
    try {
      await axios.delete(url, headers).then((response) => {
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
    console.log(token);
    genericPost(url, body, successCallback, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const genericGetWithAuth = async (url: string, successCallback: Function) => {
    console.log(url, token);
    genericGet(url, successCallback, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const genericDeleteWithAuth = async (
    url: string,
    successCallback: Function
  ) => {
    console.log(token);
    genericDelete(url, successCallback, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        setTokenAndUser,
        genericPostWithAuth,
        genericGetWithAuth,
        genericDeleteWithAuth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
