import * as FaIcon from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  konectinIcon,
  mailIcon,
  contactIcon,
  locationIcon,
} from "../../assets";
import { FooterLinks } from "./footerLinks";

function Footer() {
  return (
    <footer className="bg-primary-600 pt-16 pb-8 px-8 text-xs text-gray-200">
      <div className="w-11/12 mx-auto max-w-screen-2xl flex flex-col justify-between items-center gap-8">
        <div className="w-full flex flex-col gap-8 md:gap-24 lg:gap-36 md:flex-row justify-start items-start pb-16 border-b border-white">
          <nav className="flex flex-col gap-12">
            <Link to="/" className="footer-icon block">
              <img src={konectinIcon} alt="konectin" />
            </Link>

            <nav className="flex flex-col gap-6 text-white text-sm">
              <div className="flex gap-4 items-center">
                <img
                  className="w-6 h-4 brightness-[500%]"
                  src={contactIcon}
                  alt="Phone call"
                />
                <a className="w-full" href="tel:03302438">
                  03302438
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  className="w-6 h-3 brightness-[500%]"
                  src={mailIcon}
                  alt="Konectin mail"
                />
                <a href="mailto:Konectincompany@gmail.com">
                  Konectincompany@gmail.com
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  className="w-6 h-5 brightness-[500%]"
                  src={locationIcon}
                  alt="address"
                />
                <address>Lagos, Nigeria.</address>
              </div>
            </nav>
          </nav>

          <nav className="grid grid-cols-2 lg:grid-cols-4 gap-16 py-4">
            {FooterLinks.map((nav, index) => (
              <nav key={index} className="flex flex-col gap-6">
                <h2 className="text-white text-2xl">{nav.head}</h2>

                {nav.sublinks.map((link, i) => (
                  <Link key={i} to={link.link}>
                    {link.name}
                  </Link>
                ))}
              </nav>
            ))}
          </nav>
        </div>

        <div className="w-full text-center text-white pb-10 md:py-6 md:flex justify-between items-center">
          <div className="flex gap-4 items-center justify-center mb-6 md:mb-0">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2">
              <FaIcon.FaTwitter size="1.1rem" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2">
              <FaIcon.FaFacebookF size="1rem" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2">
              <FaIcon.FaLinkedinIn size="1rem" />
            </div>
          </div>
          <p className="mb-4 md:mb-0">A product of konectin</p>
          <p>&copy; 2022 Konectin Ltd. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
