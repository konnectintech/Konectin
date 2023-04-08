import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FieldForm } from "../../../components/form/";
import ForgetPassword from "./forgetPassword";
import { loginForm } from "../signData";
import axios from "axios";
import { getLoginStatus } from "../../../middleware/signAuth";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const userIsLogged = getLoginStatus();

  useEffect(() => {
    if (userIsLogged) navigate("/dashboard/profile");
  }, [userIsLogged]);

  const handleSubmit = (data) => {
    axios
      .post("http://localhost:5000/user/login", data)
      .then(async (res) => {
        const userData = await res.data.data;
        const userToken = await res.data.token;
        localStorage.setItem("User", JSON.stringify(userData));
        localStorage.setItem("UserToken", userToken);
      })
      .catch((err) => setErrorMessage(err.response.data.message));
  };

  return (
    <>
      <div>
        <h1 className="text-4xl">Welcome back...</h1>
        <p>Continue from where you stopped</p>
      </div>
      <div className="w-full flex flex-col items-stretch text-xs md:text-sm">
        <FieldForm
          handleSubmit={handleSubmit}
          params={loginForm}
          formFor="Sign in"
          errorMessage={errorMessage}
        >
          <ForgetPassword />
        </FieldForm>

        {/* Log In Link */}
        <p className="self-center mt-6">
          You don't have an account?{" "}
          <Link to="/signup" className="text-secondary-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
