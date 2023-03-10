import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FieldForm } from "../../../components/form";
import { signUpForm } from "../signData";
import Agreement from "./agreement";

function SignUp() {
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // handle sign up
  const handleSignUp = () => {
    navigate("/resume/options");
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
          errorState={errorState}
          errorMessage={errorMessage}
        >
          <Agreement />
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
