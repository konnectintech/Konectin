import { signImage, konectinLogo } from "../../assets";
import * as FaIcon from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./sign.css";
import SectionWrapper from "../../components/animation/sectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { useAuthContext } from "../../middleware/auth";
import { useEffect } from "react";

function Sign() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  return (
    <section className="flex-col lg:flex-row min-h-screen gap-8 lg:gap-16 justify-between bg-neutral-1000 auth-container">
      <motion.div
        variants={slideIn("ltr", "tween", 0.1, 0.2)}
        className="auth-side-image hidden lg:block relative"
      >
        <img
          className="w-full h-full"
          src={signImage}
          alt="sign in background"
        />
      </motion.div>

      <motion.div
        variants={slideIn("rtl", "tween", 0.1, 0.2)}
        className="auth-body items-start lg:w-6/12 w-full sm:min-w-[500px] flex-1 sm:[--left-right:150%] [--left-right:-150%]"
      >
        <div className="p-6 lg:pr-16 max-w-[600px] min-h-[80vh] lg:p-0 mx-auto flex flex-col gap-4 items-start justify-center">
          <Link to="/">
            <img src={konectinLogo} alt="Konectin Logo" />
          </Link>
          <Outlet />
        </div>
      </motion.div>

      <div className="lg:hidden bg-primary-700 w-full text-center text-white py-6">
        <div className="flex gap-4 items-center justify-center mb-6">
          <a
            href="http://www.twitter.com/KonectinInc"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-secondaryBg"
          >
            <FaIcon.FaTwitter size="1.1rem" />
          </a>
          <a
            href="https://web.facebook.com/people/Konectin-Inc/100091305090654/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-secondaryBg"
          >
            <FaIcon.FaFacebookF size="1rem" />
          </a>
          <a
            href="https://www.linkedin.com/company/konectin/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-secondaryBg"
          >
            <FaIcon.FaLinkedinIn size="1rem" />
          </a>
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

export default SectionWrapper(Sign, "sign");
