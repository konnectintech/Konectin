/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./storage";
import { EventType, PublicClientApplication } from "@azure/msal-browser";
import {
  MsalProvider,
  useIsAuthenticated,
  useMsal,
  useMsalAuthentication,
} from "@azure/msal-react";
import { useEffect } from "react";

// Create a Authenication Hook
const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);

const pca = new PublicClientApplication({
  auth: {
    clientId: "c2b4e277-e8b3-438c-9a65-22e774e10990",
    authority:
      "https://login.microsoftonline.com/ab112dcd-2c77-436d-b233-5e194a097e40",
    redirectUri: "/",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
  system: {
    loggerOptions: {
      logLevel: 3 /* LogLevel.Verbose */, // Set the logging level to verbose so we
    },
  },
});

pca.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    pca.setActiveAccount(event.payload.account);
  }
});

const SubProvider = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const AuthProvider = ({ children }) => {
  return (
    <MsalProvider instance={pca}>
      <SubProvider>{children}</SubProvider>
    </MsalProvider>
  );
};

export { useAuthContext, AuthProvider };

export const RequireAuth = ({ children }) => {
  const auth = useAuthContext(); // Your hook to get login status

  // if you are not signed in then return to signup page
  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  // else return the page you went to
  return children;
};

// Create User logged Hook
export const useAuth = () => {
  const [user, setUser] = useLocalStorage("user", null);
  const [previousLog, setPreviousLog] = useLocalStorage("previous_user", "");
  const [userType, setUserType] = useLocalStorage("userType", "");
  const isUserAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();
  const navigate = useNavigate();
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  useEffect(() => {
    if (isUserAuthenticated) {
      const currentAccount = instance.getActiveAccount();
      setPreviousLog(currentAccount);
    }
  }, [instance]);

  const { result, error } = useMsalAuthentication();

  useEffect(() => {
    if (!previousLog) {
      return;
    }

    if (!error) {
      console.log(error);
      return;
    }

    if (result) {
      const loggedUser = axios.get("https://graph.mircosoft.com/v1.0/me", {
        headers: { Authorization: `Bearer ${result.accessToken}` },
      });

      setUser(loggedUser);
    }
  }, [previousLog, error, result]);

  // const getUser = async (data) => {
  //   try {
  //     let authresult = await axios.get(
  //       `https://konectin-backend-hj09.onrender.com/user/getUser?userId=${data}`
  //     );
  //     console.log(authresult);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const signIn = async (data, loader, setError, log) => {
    if (log === "normal") {
      try {
        let authresult = await axios.post(`${url}/login`, data);

        const userData = { ...authresult.data.data };
        userData.token = authresult.data.token;

        setUser(userData);
        setUserType(log);
        loader(false);
        navigate("/resume/options");
      } catch (err) {
        console.log(err);
        loader(false);
        setError(err.response.data.message);
      }
    }
  };

  const signUp = async (data, loader, setError) => {
    try {
      const res = await axios.post(`${url}/register`, data);
      const userData = res.data.user;
      setUser(userData);
      loader(false);
      setTimeout(() => {
        navigate("/verify-mail");
      }, 1000);
    } catch (err) {
      loader(false);
      setError(err.response.data.message);
    }
  };

  const signOut = () => {
    if (userType === "normal") {
      setUser(null);
    } else if (userType === "microsoft") {
      instance.logoutPopup();
    }
  };

  return {
    user,
    setPreviousLog,
    setUserType,
    previousLog,
    signIn,
    signUp,
    signOut,
  };
};
