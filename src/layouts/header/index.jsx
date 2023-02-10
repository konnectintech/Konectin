import { useState } from "react";
import { FaBars } from "react-icons/fa";
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
          offset.visible && offset.prevScrollpos >= 50
            ? "navbar-change"
            : offset.prevScrollpos <= 50
            ? "navbar"
            : "nav-bar-hidden"
        }
      bg-primaryBg py-2`}
    >
      <nav className="w-11/12 mx-auto max-w-screen-2xl flex justify-between items-center gap-16">
        <Link to="/" className="nav-icon block">
          <img src={konectinIcon} />
        </Link>
        <nav className="md:hidden">
          <FaBars size="1.5rem" color="#D86842" />
        </nav>
        <nav className="gap-8 hidden md:flex">
          {links.map((link, index) => (
            <Link
              className={
                link.link === nav.pathname
                  ? "py-1 border-b-2 border-primaryBtn"
                  : "py-1"
              }
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
            className="w-full text-sm px-6 py-2 text-black-500 border-primaryBtn border rounded-sm"
          >
            Log In
          </Link>
        </nav>
      </nav>
    </header>
  );
}

export default Header;
