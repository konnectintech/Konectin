import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { konectinIcon } from "../../assets";
import "./header.css";

function Header() {
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
  const nav = useLocation();

  const handleScroll = () => {
    const { prevScrollpos } = offset;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    const pageHero = document.querySelector(".page-hero").clientHeight;
    const darken = pageHero < currentScrollPos;

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
      className={`
        ${
          isOpen || offset.prevScrollpos <= 50
            ? "navbar"
            : offset.visible && offset.prevScrollpos >= 50
            ? "navbar-change"
            : "nav-bar-hidden"
        }
      ${isOpen ? "bg-secondaryBtn" : "bg-primaryBg"} py-2 md:bg-secondaryBtn`}
    >
      <nav className="w-11/12 mx-auto max-w-screen-2xl flex justify-between items-center gap-16">
        <Link to="/" className="relative z-30 nav-icon block">
          <img
            className={isOpen ? "brightness-[500%] md:filter-none" : "konectin"}
            src={konectinIcon}
          />
        </Link>
        <nav onClick={toggle} className="md:hidden relative z-30">
          {isOpen ? (
            <FaTimes size="1.5rem" color="#fff" />
          ) : (
            <FaBars size="1.5rem" color="#D86842" />
          )}
        </nav>
        <nav
          className={`${
            isOpen
              ? "flex flex-col w-3/4 h-full items-start pt-36 bg-secondaryBtn px-6 text-white fixed z-20 top-0 right-0"
              : "hidden"
          } gap-8 transistion-all md:flex md:flex-row md:relative md:h-fit md:w-fit md:text-white md:p-0 md:bg-transparent`}
        >
          {links.map((link, index) => (
            <Link
              className={
                link.link === nav.pathname
                  ? "py-1 border-b-2 border-primaryBtn"
                  : "py-1"
              }
              onClick={toggle}
              key={index}
              to={link.link}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <nav className="hidden lg:block">
          <Link
            to="/login"
            className="w-full text-sm px-6 py-2 text-white border-primaryBtn border rounded-sm"
          >
            Log In
          </Link>
        </nav>
      </nav>
    </header>
  );
}

export default Header;
