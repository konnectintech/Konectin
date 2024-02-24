/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
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

        localStorage.getItem("konectin-profiler-user", JSON.stringify(user));

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

export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

// Create User logged Hook
export const useAuth = () => {
  const [user, setUser] = useLocalStorage("konectin-profiler-user", null);
  const navigate = useNavigate();
  const location = useLocation();

  const url = import.meta.env.VITE_CLIENT_SERVER_URL;
  const { ongoing } = JSON.parse(sessionStorage.getItem("internData")) || "";
  const status = sessionStorage.getItem("status") || "";

  useEffect(() => {
    if (user !== null) {
      const decodedJwt = parseJwt(user.token);

      if (decodedJwt.exp * 1000 < Date.now()) {
        signOut();
      }
    }
  }, []);

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
      getUserResumes(user);
    }
  }, [user]);

  const getUserResumes = async (user) => {
    try {
      const response = await axios.get(`${url}/getResumes?userId=${user._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const resumes = response.data.cvs;
      const templateData = JSON.parse(
        localStorage.getItem("konectin-profiler-data-template")
      );

      if (
        resumes.length >= 1 &&
        (templateData?.basicInfo?.firstName === "" ||
          templateData?.basicInfo?.lastName === "" ||
          templateData === null)
      ) {
        const lastResume = resumes.slice(-1)[0];
        const { currentStage } = lastResume;

        if (currentStage >= 1 && currentStage <= 6) {
          localStorage.setItem(
            "konectin-profiler-data-template",
            JSON.stringify({
              ...lastResume,
              completed: {
                basic_info: currentStage >= 1,
                work_history: currentStage >= 2,
                education: currentStage >= 3,
                skills: currentStage >= 4,
                bio: currentStage >= 5,
              },
            })
          );
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

      setTimeout(() => {
        loader(false);

        if (location.state?.from === "verify-mail") {
          navigate("/verify-mail");
        }
        if (ongoing) {
          navigate("/internship/intern-application");
        } else if (status !== "") {
          sessionStorage.removeItem("status");
          navigate(`${status}`);
        } else navigate("/resume/options");
      }, 3000);
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
    localStorage.setItem(
      "konectin-profiler-data-template",
      JSON.stringify(null)
    );
    setUser(null);
  };

  return {
    user,
    signIn,
    signUp,
    signOut,
  };
};
