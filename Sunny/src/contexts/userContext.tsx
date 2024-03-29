import React, { useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DEFAULT_FUNCTION = () => {
  console.error("WRONG FUNCTION");
};

interface userContext {
  token: string | null;
  user: string | null;
  setTokenAndUser: (token: string, user: string) => void;
  APIPostAuthy: Function;
  APIGetAuthy: Function;
  APIDeleteAuthy: Function;
}

const UserContext = React.createContext<userContext>({
  token: null,
  user: null,
  setTokenAndUser: DEFAULT_FUNCTION,
  APIPostAuthy: DEFAULT_FUNCTION,
  APIGetAuthy: DEFAULT_FUNCTION,
  APIDeleteAuthy: DEFAULT_FUNCTION,
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  const setTokenAndUser = (token: string, user: string) => {
    setToken(token);
    setUser(user);
  };

  // Boot to home page if no active session
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  const APIGet = async (
    url: string,
    successCallback: Function,
    headers: object
  ) => {
    try {
      await axios.get(url, headers).then((response) => {
        successCallback && successCallback(response.data);
      });
    } catch (error) {
      console.error("error", error);
      return error;
    }
  };

  const APIPost = async (
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

  const APIDelete = async (
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

  const APIPostAuthy = async (
    url: string,
    body: object,
    successCallback: Function
  ) => {
    // console.log(token);
    APIPost(url, body, successCallback, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const APIGetAuthy = async (url: string, successCallback: Function) => {
    // console.log(url, token);

    APIGet(url, successCallback, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const APIDeleteAuthy = async (url: string, successCallback: Function) => {
    // console.log(token);
    APIDelete(url, successCallback, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        setTokenAndUser,
        APIPostAuthy,
        APIGetAuthy,
        APIDeleteAuthy,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
