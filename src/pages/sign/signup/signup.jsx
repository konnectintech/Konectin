import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FieldForm } from "../../../components/form";
import { getLoginStatus } from "../../../middleware/signAuth";
import { signUpForm } from "../signData";
import Agreement from "./agreement";

function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate();
  const userIsLogged = getLoginStatus();

  useEffect(() => {
    if (userIsLogged) navigate("/dashboard/profile");
  }, [userIsLogged]);

  useEffect(() => {
    if (agreed) {
      setErrorMessage("");
    }
  }, [agreed]);

  // handle sign up
  const handleSignUp = (data) => {
    if (agreed) {
      axios
        .post("http://localhost:5000/user/register", data)
        .then(async (res) => {
          const userData = await res.data.data;
          const userToken = await res.data.token;
          localStorage.setItem("User", JSON.stringify(userData));
          localStorage.setItem("UserToken", userToken);
          setTimeout(() => {
            navigate("/verify-mail");
          }, 1000);
        })
        .catch((err) => setErrorMessage(err.response.data.message));
    } else {
      setErrorMessage(
        "Please read and agreed with our terms and condition to continue"
      );
    }
  };

  return (
    <>
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
