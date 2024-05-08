import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as PiIcons from "react-icons/pi";
import * as IoIcons from "react-icons/io";

import { Link, NavLink, useLocation } from "react-router-dom";
import { konectinLogo } from "../../assets";
import "./header.css";
import { useAuthContext } from "../../middleware/auth";
import InternAnimation from "../../utils/intern-animation";
import Dropdown from "../../components/dropdown";
import Headline from "./headline";

function Header() {
  const { user } = useAuthContext();
  const [dropdown, setDropdown] = useState(false);

  const [offset, setOffset] = useState({
    prevScrollpos: window.scrollY,
    visible: true,
  });

  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    {
      name: "Our Services",
      link: "/services",
      sublink: [
        {
          name: "For Individuals",
          icon: MdIcons.MdOutlinePersonOutline,
          links: [
            { name: "AI Resume Builder", link: "/resume" },
            { name: "AI Cover Letter Builder", link: "/cover-letter" },
            { name: "AI Resume Review & Edit", link: "/resume/review" },
            { name: "Konectin Internship", link: "/internship" },
          ],
        },
        {
          name: "For Corporate Organizations",
          icon: PiIcons.PiUsersLight,
          links: [
            {
              name: "Konectin Internship Partnership",
              link: "/internship/partnership",
            },
          ],
        },
      ],
    },
    { name: "Blog", link: "/blog" },
    { name: "About Us", link: "/about" },
  ];

  const { pathname } = useLocation();

  const handleScroll = () => {
    const { prevScrollpos } = offset;
    const currentScrollPos = window.scrollY;
    const visible = prevScrollpos > currentScrollPos;
    const darken = visible && currentScrollPos >= 50;

    setOffset({
      prevScrollpos: currentScrollPos,
      visible,
      darken,
    });
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header
    // className={
    //   isOpen
    //     ? "navbar bg-primary-600"
    //     : offset.prevScrollpos <= 50
    //     ? "navbar"
    //     : offset?.darken
    //     ? "navbar-change bg-primary-600"
    //     : "nav-bar-hidden"
    // }
    >
      <Headline message="Konectin Partners EntryLevel" pageTo="/internship" />
      <nav className="w-full lg:w-11/12 relative z-10 mx-auto max-w-screen-2xl flex justify-between items-stretch gap-10 lg:gap-12 py-4 max-lg:px-4">
        <Link to="/" className="relative z-30 nav-icon block">
          <img
            className="w-[40px]"
            // className={
            //   isOpen
            //     ? "brightness-[500%] md:filter-none"
            //     : offset?.darken
            //     ? "brightness-[500%]"
            //     : "konectin"
            // }
            src={konectinLogo}
            alt="Konectin Logo"
          />
        </Link>
        <nav
          onClick={toggle}
          className="md:hidden relative z-30 cursor-pointer"
        >
          {isOpen ? (
            <FaIcons.FaTimes size="1.5rem" color="#fff" />
          ) : (
            <HiIcons.HiOutlineMenuAlt3 size="1.5rem" color="#332a66" />
            // <FaIcons.FaBars
            //   size="1.5rem"
            //   color={offset?.darken ? "#fff" : "#332a66"}
            // />
          )}
        </nav>

        <nav className="hidden transistion-all md:flex items-stretch gap-8 text-sm mr-auto relative flex-1">
          {links.map((link, index) =>
            link.sublink ? (
              <nav className="flex items-center group" key={index}>
                <div
                  className={`${
                    pathname.split("/")[1] === "services"
                      ? "text-secondary-600"
                      : "text-primary-600 group-hover:text-secondary-600"
                  } cursor-pointer flex items-center gap-3 justify-between`}
                >
                  {link.name}
                  <IoIcons.IoIosArrowDown />
                </div>

                <nav className="absolute top-full z-10 invisible opacity-0 duration-500 group-hover:opacity-100 group-hover:visible bg-white w-full flex gap-4 min-w-max lg:max-w-2xl sublink-box rounded-xl p-4">
                  {link.sublink.map((navSect) => (
                    <div
                      key={navSect.name}
                      className="p-6 bg-neutral-50 rounded flex-1 space-y-10"
                    >
                      <div className="flex gap-3 items-center text-base">
                        <navSect.icon
                          className="text-secondary-600"
                          size="1.7rem"
                        />
                        <span className="font-semibold truncate">
                          {navSect.name}
                        </span>
                      </div>
                      <div className="space-y-5">
                        {navSect.links.map((navLink) => (
                          <NavLink
                            className={({ isActive }) =>
                              isActive
                                ? "text-secondary-600 flex justify-between max-w-[250px] items-center gap-4"
                                : "text-primary-400 hover:text-secondary-600 flex justify-between max-w-[250px] items-center gap-4"
                            }
                            key={navLink.link}
                            to={`/services${navLink.link}`}
                          >
                            {navLink.name}
                            <IoIcons.IoIosArrowDown className="-rotate-90" />
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </nav>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  (link.link === "/blog" &&
                    pathname.split("/")[1] === "blog") ||
                  isActive
                    ? "text-secondary-600 flex items-center"
                    : "text-primary-600 hover:text-secondary-600 flex items-center"
                }
                key={index}
                to={link.link === "/blog" ? "/blog/all" : link.link}
              >
                {link.name}
              </NavLink>
            )
          )}
        </nav>

        <nav className="hidden md:flex gap-4">
          {user ? (
            <div
              onClick={() => setDropdown((prev) => !prev)}
              className="relative flex items-center cursor-pointer gap-2 text-xs text-neutral-400"
            >
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center text-white bg-primary-700"
                // className={`w-10 h-10 rounded-md flex items-center justify-center ${
                //   offset.darken
                //     ? "bg-white text-primary-700"
                //     : "text-white bg-primary-700"
                // }`}
              >
                <MdIcons.MdPerson size="1.5rem" />
              </div>
              <div>
                <h3
                  // className={`${
                  //   offset.darken ? "text-white" : "text-neutral-100"
                  // } text-base`}
                  className="text-neutral-100 text-base"
                >
                  {user?.fullname}
                </h3>
                <p>{user?.email}</p>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm px-6 py-3 text-primary-500 border-primary-500 bg-neutral-900 border-2 rounded"
                // className={`w-full text-sm px-6 py-3 text-black-500 border-primary-500 border-2 rounded ${
                //   offset.darken
                //     ? "hover:text-neutral-100 hover:bg-white"
                //     : "hover:text-white hover:bg-primary-500"
                // } transistion duration-500`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm px-6 py-3 text-white bg-primary-500 border-2 border-primary-500 rounded max-lg:hidden"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile View  */}
        <nav
          className={
            isOpen
              ? "flex flex-col gap-6 w-full h-full items-start pt-36 bg-primary-600 px-4 text-white fixed z-20 top-0 right-0 md:hidden"
              : "hidden"
          }
        >
          {links.map((link, index) => (
            <Link
              className={
                (link.link === "/blog" && pathname.split("/")[1] === "blog") ||
                link.link === pathname
                  ? "py-3 px-4 text-neutral-100 bg-neutral-900 rounded w-full"
                  : "py-3 px-4 text-white hover:text-neutral-900 w-full"
              }
              onClick={toggle}
              key={index}
              to={link.link === "/blog" ? "/blog/all" : link.link}
            >
              {link.name}
            </Link>
          ))}

          <nav className="mt-4 flex flex-col gap-3 w-full">
            {user ? (
              <div
                onClick={() => setDropdown((prev) => !prev)}
                className="relative flex items-center cursor-pointer gap-2 text-xs text-neutral-400"
              >
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center text-white bg-primary-700"
                  // className={`w-10 h-10 rounded-md flex items-center justify-center ${
                  //   offset.darken
                  //     ? "bg-white text-primary-700"
                  //     : "text-white bg-primary-700"
                  // }`}
                >
                  <MdIcons.MdPerson size="1.5rem" />
                </div>
                <div>
                  <h3
                    // className={`${
                    //   offset.darken ? "text-white" : "text-neutral-100"
                    // } text-base`}
                    className="text-neutral-100 text-base"
                  >
                    {user?.fullname}
                  </h3>
                  <p>{user?.email}</p>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="text-sm text-center flex-1 px-6 py-4 text-white bg-primary-500"
                >
                  Sign Up
                </Link>
                <p className="text-center text-neutral-500">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-sm text-secondary-400 underline underline-offset-4"
                  >
                    Login
                  </Link>
                </p>
              </>
            )}
          </nav>
        </nav>
      </nav>
      {/* End Mobile View */}

      {pathname.includes("/intern-application") &&
        (offset.prevScrollpos <= 50 || offset.darken) && <InternAnimation />}

      {dropdown && (
        <Dropdown offset={offset} setIsOpen={setDropdown} isOpen={dropdown} />
      )}
    </header>
  );
}

export default Header;
