import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { konectinIcon } from "../../assets";
import "./header.css";
import { useAuth } from "../../middleware/auth";
import InternAnimation from "../../utils/intern-animation";
import Dropdown from "../../components/dropdown";

function Header() {
  const { user } = useAuth();
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }

  const [offset, setOffset] = useState({
    prevScrollpos: window.pageYOffset,
    visible: true,
  });

  const [isOpen, setToggle] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "Internships", link: "/internship" },
    { name: "Resume Builder", link: "/resume" },
    { name: "Blog", link: "/blog" },
    { name: "About Us", link: "/about" },
  ];

  const { pathname } = useLocation();

  const handleScroll = () => {
    const { prevScrollpos } = offset;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    const darken = visible && currentScrollPos >= 50;

    setOffset({
      prevScrollpos: currentScrollPos,
      visible,
      darken,
    });
  };

  const toggle = () => {
    setToggle(!isOpen);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={
        isOpen
          ? "navbar bg-primary-600"
          : offset.prevScrollpos <= 50
          ? "navbar"
          : offset?.darken
          ? "navbar-change bg-primary-600"
          : "nav-bar-hidden"
      }
    >
      <nav className="w-11/12 mx-auto max-w-screen-2xl flex justify-between items-center gap-16 py-4">
        <Link to="/" className="relative z-30 nav-icon block">
          <img
            className={
              isOpen
                ? "brightness-[500%] md:filter-none"
                : offset?.darken
                ? "brightness-[500%]"
                : "konectin"
            }
            src={konectinIcon}
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
            <FaIcons.FaBars
              size="1.5rem"
              color={offset?.darken ? "#fff" : "#332a66"}
            />
          )}
        </nav>

        <nav className="hidden gap-8 transistion-all md:flex flex-row text-sm">
          {links.map((link, index) => (
            <NavLink
              className={({ isActive }) =>
                (link.link === "/blog" && pathname.split("/")[1] === "blog") ||
                isActive
                  ? "py-1 border-b border-secondary-600"
                  : "py-1 hover:border-b border-secondary-600"
              }
              key={index}
              to={link.link === "/blog" ? "/blog/all" : link.link}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile View  */}
        <nav
          className={
            isOpen
              ? "flex flex-col gap-8 w-full h-full items-start pt-36 bg-primary-600 px-6 text-white fixed z-20 top-0 right-0 md:hidden"
              : "hidden"
          }
        >
          {links.map((link, index) => (
            <Link
              className={
                (link.link === "/blog" && pathname.split("/")[1] === "blog") ||
                link.link === pathname
                  ? "py-1 border-b border-secondary-600"
                  : "py-1"
              }
              onClick={toggle}
              key={index}
              to={link.link === "/blog" ? "/blog/all" : link.link}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <nav className="hidden lg:block" onClick={toggleDropdown}>
          {user ? (
            <Link
              to="/dashboard/"
              className="relative flex items-center cursor-pointer gap-2 text-xs text-neutral-400"
            >
              <div
                className={`w-10 h-10 rounded-md flex items-center justify-center ${
                  offset.darken
                    ? "bg-white text-primary-700"
                    : "text-white bg-primary-700"
                }`}
              >
                <MdIcons.MdPerson size="1.5rem" />
              </div>
              <div>
                <h3
                  className={`${
                    offset.darken ? "text-white" : "text-neutral-100"
                  } text-base`}
                >
                  {user?.fullname}
                </h3>
                <p>{user?.email}</p>
              </div>
            </Link>
          ) : (
            <Link
              to="/login"
              className={`w-full text-sm px-6 py-2 text-black-500 border-secondary-500 border rounded-sm ${
                offset.darken
                  ? "hover:text-neutral-100 hover:bg-white"
                  : "hover:text-white hover:bg-secondary-500"
              } transistion duration-500`}
            >
              Log In
            </Link>
          )}
        </nav>

     
      </nav>
      {pathname.includes("/intern-application") &&
        (offset.prevScrollpos <= 50 || offset.darken) && <InternAnimation />}

      {dropdown && (<Dropdown />) }
    </header>
  );
}

export default Header;
