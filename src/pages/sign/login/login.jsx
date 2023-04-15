import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FieldForm } from "../../../components/form/";
import ForgetPassword from "./forgetPassword";
import { loginForm } from "../signData";
import axios from "axios";
import { GetLoginStatus } from "../../../middleware";
import Preloader from "../../../components/preloader";

function Login() {
  const [isloading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const userIsLogged = GetLoginStatus();

  useEffect(() => {
    if (userIsLogged) navigate("/dashboard/profile");
  }, [userIsLogged, navigate]);

  const handleSubmit = (data) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/user/login", data)
      .then(async (res) => {
        const userData = await res.data.data;
        const userToken = await res.data.token;
        localStorage.setItem("User", JSON.stringify(userData));
        localStorage.setItem("UserToken", userToken);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <>
      {isloading && <Preloader />}
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
