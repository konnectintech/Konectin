import { signImage, konectinIcon } from "../../assets";
import * as FaIcon from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

function Sign() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen gap-8 lg:gap-16 justify-between items-center bg-neutral-1000">
      <div className="hidden lg:block relative h-screen">
        <img
          className="w-full h-full"
          src={signImage}
          alt="sign in background"
        />
      </div>

      <div className="items-start lg:w-6/12 w-full sm:min-w-[500px] flex-1">
        <div className="p-6 lg:pr-16 max-w-[600px] min-h-[80vh] lg:p-0 mx-auto flex flex-col gap-4 items-start justify-center">
          <Link to="/">
            <img src={konectinIcon} alt="Konectin Logo" />
          </Link>
          <Outlet />
        </div>
      </div>

      <div className="lg:hidden bg-primary-700 w-full text-center text-white py-6">
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

export default Sign;
