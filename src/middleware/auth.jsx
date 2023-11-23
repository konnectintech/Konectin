/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect } from "react";
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
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  if (event.eventType === EventType.LOGIN_SUCCESS) {
    pca.setActiveAccount(event.payload.account);

    let { name, username } = event.payload.account;

    axios
      .post(`${url}/microsoft/login`, { name, username })
      .then((response) => {
        const user = { ...response.data.data };
        user.token = response.data.token;

        localStorage.getItem("user", JSON.stringify(user));

        window.location.href = "/resume/options";
      })
      .catch((err) => console.error(err));
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
  const { ongoing } = JSON.parse(sessionStorage.getItem("internData")) || "";
  const status = JSON.parse(sessionStorage.getItem("status")) || "";

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

  useEffect(() => {
    if (user && user._id && !user.cvs) {
      getUserResumes(user._id);
    }
  }, [user]);

  const getUserResumes = async (id) => {
    try {
      const response = await axios.get(`${url}/getResumes?userId=${id}`);
      const resumes = response.data.cvs;
      const templateData = JSON.parse(localStorage.getItem("templateData"));

      if (resumes.length >= 1 && !templateData) {
        const lastResume = resumes.slice(-1)[0];
        const { currentStage } = lastResume;

        if (currentStage >= 1 && currentStage < 6) {
          localStorage.setItem("templateData", JSON.stringify(lastResume));
        }
      }

      setUser((prev) => ({ ...prev, cvs: resumes, isLogged: true }));
    } catch (err) {
      console.error(err);
    }
  };

  const signIn = async (data, loader, setError) => {
    try {
      let authresult = await axios.post(`${url}/login`, data);

      const userData = { ...authresult.data.data };
      userData.token = authresult.data.token;

      setUser(userData);
      loader(false);

      if (ongoing) navigate("/internship/intern-application");
      else if (status) navigate(status);
      else navigate("/resume/options");
    } catch (err) {
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
        navigate("/verify-mail", { state: { from: "sign-up" } });
      }, 1000);
    } catch (err) {
      loader(false);
      setError(err.response.data.message);
    }
  };

  const signOut = () => {
    localStorage.removeItem("templateData");
    localStorage.removeItem("crStage");
    setUser(null);
  };

  return {
    user,
    signIn,
    signUp,
    signOut,
  };
};
