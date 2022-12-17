import { useState } from "react";
import { googleIcon, konectinIcon, signImage } from "../../assets";
import { CustomButton } from "../../components/button";
import { Input } from "../../components/form";
import * as FaIcon from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp() {
  // All Form Input and its detail
  const signForm = [
    { legend: "Full Name", type: "text", placeholder: "e.g John Doe John" },
    {
      legend: "E-mail",
      type: "email",
      placeholder: "e.g JohnDaneJohn@gmail.com",
    },
    {
      legend: "Password",
      type: "password",
      placeholder: "Minimum of 8 characters",
    },
    {
      legend: "Confirm Password",
      type: "password",
      placeholder: "Minimum of 8 character",
    },
  ];

  const [agreed, setAgreed] = useState(false);
  // check if you agreed with terms

  return (
    <section className="flex flex-col lg:flex-row min-h-screen gap-16 justify-between items-center">
      <div className="hidden lg:block relative h-screen">
        <img className="h-full" src={signImage} alt="sign in background" />
        <h1 className="font-bold text-4xl xl:ml-16 pl-16 relative -top-1/2 z-10">
          Find the Job made <br /> for you
        </h1>
      </div>

      <div className="p-6 lg:pr-16 lg:p-0 mx-auto lg:w-7/12 xl:w-fit flex flex-col items-start">
        <img src={konectinIcon} alt="Konnectin Logo" />
        <h1 className="text-3xl font-semibold lg:text-4xl lg:font-normal mt-4">
          Create an account...
        </h1>
        <p>Get started with us at Konectin</p>

        {/* Iterate through formList */}
        <form className="flex w-full flex-col items-stretch text-xs">
          {signForm.map((input, index) => (
            <Input key={index} {...input} />
          ))}

          <div className="mt-4 flex justify-between md:justify-start gap-2 items-center">
            {/* Agreed buttton */}
            <div
              className={
                agreed
                  ? "w-5 h-5 cursor-pointer rounded-sm bg-primaryBtn flex items-center justify-center"
                  : "w-5 h-5 cursor-pointer rounded-sm border border-primaryBtn"
              }
              onClick={() => {
                setAgreed((prev) => !prev);
              }}
            >
              {agreed ? <FaIcon.FaCheck size=".8rem" color="#fff" /> : null}
            </div>

            <div className="cursor-pointer select-none">
              <font
                onClick={() => {
                  setAgreed((prev) => !prev);
                }}
              >
                I agree to Konectin{" "}
              </font>
              <a
                href="/"
                className="text-primaryBtn underline hover:text-secondaryBtn"
              >
                TERMS OF SERVICE
              </a>{" "}
              and{" "}
              <a
                href="/"
                className="text-primaryBtn underline hover:text-secondaryBtn"
              >
                PRIVACY POLICY
              </a>
            </div>
          </div>

          <div className="text-center mt-6">
            <CustomButton primary>Sign Up</CustomButton>
            or
            <CustomButton>
              <img src={googleIcon} alt="continue with google" /> Continue with
              Google
            </CustomButton>
          </div>

          {/* Log In Link */}
          <p className="self-center mt-6">
            Do you have an account already?{" "}
            <Link to="/login" className="text-primaryBtn hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>

      <div className="lg:hidden bg-secondaryBtn w-full text-center text-white py-6">
        <div className="flex gap-4 items-center justify-center mb-6">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-secondaryBg">
            <FaIcon.FaTwitter size="1.1rem" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-secondaryBg">
            <FaIcon.FaFacebookF size="1rem" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-secondaryBg">
            <FaIcon.FaLinkedinIn size="1rem" />
          </div>
        </div>
        <p className="text-xs text-gray-200">
          A product of konectin
          <br />
          <br />
          &copy; 2022 Konectin Ltd. All rights reserved
        </p>
      </div>
    </section>
  );
}

export default SignUp;

// Export Sign Out as wwll
export function SignIn() {
  const signForm = [
    { legend: "Full Name", type: "text", placeholder: "" },
    {
      legend: "Password",
      type: "password",
      placeholder: "",
    },
  ];

  const [agreed, setAgreed] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row min-h-screen gap-16 justify-between items-center">
      <div className="hidden lg:block relative h-screen">
        <img className="h-full" src={signImage} alt="sign in background" />
        <h1 className="font-bold text-4xl xl:ml-16 pl-16 relative -top-1/2 z-10">
          Find the Job made <br /> for you
        </h1>
      </div>

      <div className="p-6 lg:pr-16 lg:p-0 mx-auto lg:w-7/12 xl:w-4/12 flex flex-col items-start">
        <img src={konectinIcon} alt="Konnectin Logo" />
        <h1 className="text-4xl mt-4">Welcome back...</h1>
        <p>Continue from where you stopped</p>
        {/* Form SignIn */}
        <form className="w-full flex flex-col items-stretch text-xs md:text-sm">
          {signForm.map((input, index) => (
            <Input key={index} {...input} />
          ))}

          <div className="mt-8 w-full flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div
                className={
                  agreed
                    ? "w-5 h-5 cursor-pointer rounded-sm bg-primaryBtn flex items-center justify-center"
                    : "w-5 h-5 cursor-pointer rounded-sm border border-primaryBtn"
                }
                onClick={() => {
                  setAgreed((prev) => !prev);
                }}
              >
                {agreed ? <FaIcon.FaCheck size=".8rem" color="#fff" /> : null}
              </div>
              <div
                className="cursor-pointer select-none"
                onClick={() => {
                  setAgreed((prev) => !prev);
                }}
              >
                Remember me
              </div>
            </div>
            <div className="text-primaryBtn">Forget password?</div>
          </div>

          <div className="text-center mt-6">
            <CustomButton primary={true}>Sign In</CustomButton>
            or
            <CustomButton>
              <img src={googleIcon} alt="continue with google" /> Continue with
              Google
            </CustomButton>
          </div>

          {/* Log In Link */}
          <p className="self-center mt-6">
            You don't have an account?{" "}
            <Link to="/signup" className="text-primaryBtn hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      <div className="lg:hidden bg-secondaryBtn w-full text-center text-white py-6">
        <div className="flex gap-4 items-center justify-center mb-6">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-secondaryBg">
            <FaIcon.FaTwitter size="1.1rem" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-secondaryBg">
            <FaIcon.FaFacebookF size="1rem" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-secondaryBg">
            <FaIcon.FaLinkedinIn size="1rem" />
          </div>
        </div>
        <p className="text-xs text-gray-200">
          A product of konectin
          <br />
          <br />
          &copy; 2022 Konectin Ltd. All rights reserved
        </p>
      </div>
    </section>
  );
}
