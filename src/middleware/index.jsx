import axios from "axios";
import { createContext, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./storage";

// Create a Authenication Hook
const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
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

  const getUser = async (data) => {
    try {
      let authresult = await axios.get(
        `https://konectin-backend-hj09.onrender.com/user/getUser?userId=${data}`
      );
      console.log(authresult);
    } catch (err) {
      console.error(err);
    }
  };

  const signIn = async (data, loader, setError) => {
    try {
      let authresult = await axios.post(
        "https://konectin-backend-hj09.onrender.com/user/login",
        data
      );

      const userData = { ...authresult.data.data };
      userData.token = authresult.data.token;

      setUser(userData);
      loader(false);
      setTimeout(() => {
        navigate("/blog/all");
      }, 1000);
    } catch (err) {
      loader(false);
      setError(err.response.data.message);
    }
  };

  const signUp = async (data, loader, setError) => {
    try {
      const res = await axios.post(
        "https://konectin-backend-hj09.onrender.com/user/register",
        data
      );
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
    setUser(null);
  };

  return { user, getUser, signIn, signUp, signOut };
};
