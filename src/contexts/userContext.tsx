import React, { useState, ReactNode, useEffect } from "react";
import axios from "axios";
import { userObject } from "../utilities/types";
import { stringify } from "querystring";
import { useNavigate } from "react-router-dom";

interface userContext {
  token: string | null;
  setToken: (token: string | null) => void;
  user: userObject | null;
  setUser: (user: userObject | null) => void;
  refreshUser: () => void;
  clearTokenAndUser: () => void;
  APIPost: Function;
  APIPostAuthy: Function;
  APIGetAuthy: Function;
  APIDeleteAuthy: Function;
}

const API_URL: string =
  process.env.REACT_APP_URL || "sunny-back-production.up.railway.app";
const USER_URL = API_URL.concat("user");

const UserContext = React.createContext<userContext>({
  token: null,
  user: null,
  setUser: () => {},
  refreshUser: () => {},
  setToken: () => {},
  APIGetAuthy: () => {},
  APIPostAuthy: () => {},
  APIDeleteAuthy: () => {},
  APIPost: () => {},
  clearTokenAndUser: () => {},
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("jwt")
  );

  const [user, setUser] = useState<userObject | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    token && localStorage.setItem("jwt", token);
    refreshUser();
    console.log("Ran user refresh");
  }, [token]);

  const clearTokenAndUser = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
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
    console.log(url, successCallback, headers);
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
    APIPost(url, body, successCallback, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const APIGetAuthy = async (url: string, successCallback: Function) => {
    APIGet(url, successCallback, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const APIDeleteAuthy = async (url: string, successCallback: Function) => {
    APIDelete(url, successCallback, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const refreshUser = async () => {
    // Call your API to get fresh user data
    await APIGetAuthy(USER_URL, (userData: any) => {
      setUser(userData);
    });
  };

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        setUser,
        refreshUser,
        setToken,
        clearTokenAndUser,
        APIPost,
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
