import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FieldForm } from "../../../components/form";
import { GetLoginStatus } from "../../../middleware";
import { signUpForm } from "../signData";
import Agreement from "./agreement";
import Preloader from "../../../components/preloader";

function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isloading, setLoading] = useState(false);

  const navigate = useNavigate();
  const userIsLogged = GetLoginStatus();

  useEffect(() => {
    if (userIsLogged) navigate("/dashboard/profile");
  }, [userIsLogged, navigate]);

  useEffect(() => {
    if (agreed) {
      setErrorMessage("");
    }
  }, [agreed]);

  // handle sign up
  const handleSignUp = (data) => {
    if (agreed) {
      setLoading(true);
      axios
        .post("https://konectin-backend-hj09.onrender.com/user/register", data)
        .then(async (res) => {
          const userData = await res.data.data;
          const userToken = await res.data.token;
          localStorage.setItem("User", JSON.stringify(userData));
          localStorage.setItem("UserToken", userToken);

          setLoading(false);
          setTimeout(() => {
            navigate("/verify-mail");
          }, 1000);
        })
        .catch((err) => {
          setErrorMessage(err.response.data.message);
          setLoading(false);
        });
    } else {
      setErrorMessage(
        "Please read and agree with our terms and condition to continue"
      );
    }
  };

  return (
    <>
      {isloading && <Preloader />}
      <div>
        <h1 className="text-3xl font-semibold lg:text-4xl lg:font-normal">
          Create an account...
        </h1>
        <p className="text-neutral-300">Get started with us at Konectin</p>
      </div>

      <div className="w-full flex flex-col items-stretch text-xs md:text-sm">
        <FieldForm
          handleSubmit={handleSignUp}
          params={signUpForm}
          formFor="Sign up"
          errorMessage={errorMessage}
        >
          <Agreement agreed={agreed} setAgreed={setAgreed} />
        </FieldForm>

        {/* Log In Link */}
        <p className="self-center mt-6">
          Do you have an account already?{" "}
          <Link to="/login" className="text-secondary-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignUp;
