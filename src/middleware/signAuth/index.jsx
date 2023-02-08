import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Footer from "../../layouts/footer";

// Create a Authenication Hook
export const RequireAuth = ({ children }) => {
  const nav = useLocation();
  const userIsLogged = useLoginStatus(); // Your hook to get login status

  // if you are not signed in then return to signup page
  if (!userIsLogged) {
    return <Navigate to="/signup" />;
  }

  if (nav.pathname === "/login" || "/signup") {
    return children;
  }

  // else return the page you went to
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

// Create User logged Hook
export function useLoginStatus() {
  const [user, setUser] = useState(true);

  // Function to change user to true when signed in

  return user;
}
