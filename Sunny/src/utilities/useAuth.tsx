import { useState, useEffect } from "react";

interface AuthData {
  token: string | null;
  user: User | null;
  //   login: (token: string, user: User) => void;
  //   logout: () => void;
}

interface User {
  id: string;
  username: string;
}

const useAuth = (): AuthData => {
  const [authData, setAuthData] = useState<AuthData>({
    token: null,
    user: null,
    // login: (token, user) => {
    //   setAuthData({ ...authData, token, user });
    // },
    // logout: () => {
    //   setAuthData({ ...authData, token: null, user: null });
    // },
  });

  const saveAuthDataToStorage = (data: AuthData | null): void => {
    if (data && data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  const getAuthDataFromStorage = (): AuthData | null => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return null;
  };

  const updateAuthData = (token: string | null, user: User | null): void => {
    const data = { token, user };
    setAuthData(data);
    saveAuthDataToStorage(data);
  };

  const checkTokenValidity = async (): Promise<boolean> => {
    if (authData.token) {
      try {
        // Make an API call to validate the token
        // Replace this with your own API endpoint
        const response = await fetch("/api/validateToken", {
          headers: {
            Authorization: `Bearer ${authData.token}`,
          },
        });

        if (response.ok) {
          const user = await response.json();
          updateAuthData(authData.token, user);
          return true;
        } else {
          // Invalid token, clear the authentication data
          updateAuthData(null, null);
          return false;
        }
      } catch (error) {
        console.error("Error validating token:", error);
        return false;
      }
    }

    return false;
  };

  // Function to update the authentication data with a new token and user
  const login = (token: string, user: User): void => {
    setAuthData({ token, user });
    saveAuthDataToStorage({ token, user });
  };

  // Function to clear the authentication data
  const logout = (): void => {
    setAuthData({ token: null, user: null });
    saveAuthDataToStorage(null);
  };

  useEffect(() => {
    const initialAuthData = getAuthDataFromStorage();
    if (initialAuthData) {
      setAuthData(initialAuthData);
    }
    checkTokenValidity();
  }, []);

  return {
    ...authData,
    // login,
    // logout,
  };
};

export default useAuth;
