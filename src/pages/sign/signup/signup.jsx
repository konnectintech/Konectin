/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FieldForm } from "../../../components/form";
import { useAuth } from "../../../middleware/auth";
import { signUpForm } from "../signData";
import Agreement from "./agreement";
import Preloader from "../../../components/preloader";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { toast } from "react-toastify";

function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    if (agreed) {
      setErrorMessage("");
    }
  }, [agreed]);

  const navigate = useNavigate();
  const { instance } = useMsal();
  const { signUp } = useAuth();
  const isUserAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!isUserAuthenticated) {
      instance
        .ssoSilent({
          scopes: ["user.read"],
          loginHint: "",
        })
        .then((res) => {
          instance.setActiveAccount(res.account);
          navigate("/blog/all");
        })
        .catch((err) => {
          if (err instanceof InteractionRequiredAuthError) {
            // instance.loginPopup({
            //   scopes: ["user.read"],
            // });
          }
        });
    }
  }, []);

  // handle sign up
  const handleSignUp = async (data) => {
    if (agreed) {
      toast.info(
        "Minor changes currently being made... Please try again in the next 24 hours"
      );
      // setLoading(true);
      // signUp(data, setLoading, setErrorMessage);
      // sessionStorage.setItem("mail", "");
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
