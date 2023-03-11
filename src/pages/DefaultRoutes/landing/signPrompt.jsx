import { Link } from "react-router-dom";
import { googleIcon } from "../../../assets";

function SignPrompt() {
  return (
    <div className="text-sm">
      <div className="border border-gray-400 rounded-lg p-3 xs:p-6 flex flex-col md:flex-row gap-3 xs:gap-6 items-center justify-between">
        <input
          className="w-full md:flex-1 bg-neutral-1000 border border-gray-400 outline-0 px-4 xs:px-6 py-3 rounded-lg"
          type="text"
          placeholder="Enter your email address"
        />

        <div className="w-full md:w-fit flex flex-col xxs:flex-row gap-2 xs:gap-6 items-center justify-center md:justify-between">
          <Link
            to="/signup"
            className="w-full xxs:w-fit px-4 xs:px-0 xs:w-32 py-3 bg-primary-500 text-white text-center rounded-md"
          >
            Sign Up
          </Link>
          or
          <button className="w-full xxs:w-fit px-4 xs:px-0 xs:w-60 py-2 bg-transparent flex gap-2 items-center justify-center text-black-500 border-primary-500 border rounded-md">
            <img src={googleIcon} alt="continue with google" /> Continue with
            Google
          </button>
        </div>
      </div>
      <div className="text-right mt-2">
        Have an account already?{" "}
        <Link to="/login" className="text-secondary-600">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignPrompt;
