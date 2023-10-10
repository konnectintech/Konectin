/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./storage";
import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

// Create a Authenication Hook
const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);

const pca = new PublicClientApplication({
  auth: {
    clientId: "fafebde3-1871-43ee-afb0-34374edaa6b1",
    authority: "https://login.microsoftonline.com/common/",
    redirectUri: "/login",
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
    console.log(event.payload.account);
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
  const navigate = useNavigate();
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

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

  const signIn = async (data, loader, setError) => {
    try {
      let authresult = await axios.post(`${url}/login`, data);

      const userData = { ...authresult.data.data };
      userData.token = authresult.data.token;

      setUser(userData);
      loader(false);
      navigate("/resume/options");
    } catch (err) {
      console.log(err);
      loader(false);
      setError(err.response.data.message);
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
    console.log("User successful logged out");
    setUser(null);
  };

  return {
    user,
    signIn,
    signUp,
    signOut,
  };
};
