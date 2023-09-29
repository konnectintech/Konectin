import { Link } from "react-router-dom";
import { MicrosoftLog } from "../../../components/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../../../components/animation/sectionWrapper";
import { slideIn } from "../../../utils/motion";

function SignPrompt() {
  const [mail, setMail] = useState("");

  useEffect(() => {
    sessionStorage.setItem("mail", mail);
  }, [mail]);

  return (
    <div className="text-sm">
      <motion.div
        variants={slideIn("up", "spring", 0, 1)}
        className="border border-gray-400 rounded-lg p-3 xs:p-6 flex flex-col md:flex-row gap-3 xs:gap-6 items-center justify-between"
      >
        <input
          className="w-full md:flex-1 bg-neutral-1000 border border-gray-400 outline-0 px-4 xs:px-6 py-3 rounded-lg"
          type="email"
          placeholder="Enter your email address"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          onInput={(e) => setMail(e.target.value)}
        />

        <div className="w-full md:w-fit flex flex-col xxs:flex-row gap-2 xs:gap-6 items-center justify-center md:justify-between">
          <Link
            to="/signup"
            className="w-full xxs:w-fit px-4 xs:px-0 xs:w-32 py-3 bg-primary-500 text-white text-center rounded-md hover:text-primary-500 hover:bg-transparent duration-500 hover:border border-primary-500 peer peer-hover/link:text-primary-500"
          >
            Sign Up
          </Link>
          or
          <div className="xxs:w-fit xs:w-60">
            <MicrosoftLog />
          </div>
        </div>
      </motion.div>
      <div className="text-right mt-2">
        Have an account already?{" "}
        <Link to="/login" className="text-secondary-600">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SectionWrapper(SignPrompt, "sign-prompt", 0.7);
