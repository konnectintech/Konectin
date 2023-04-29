import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FieldForm } from "../../../components/form";
import { useAuth } from "../../../middleware";
import { signUpForm } from "../signData";
import Agreement from "./agreement";
import Preloader from "../../../components/preloader";

function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    if (agreed) {
      setErrorMessage("");
    }
  }, [agreed]);

  let { signUp } = useAuth();

  // handle sign up
  const handleSignUp = async (data) => {
    if (agreed) {
      setLoading(true);
      signUp(data, setLoading, setErrorMessage);
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
