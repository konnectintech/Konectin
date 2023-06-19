import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { konectinIcon } from "../../assets";
import "../header/header.css";

function ResumeInfoHeader() {
  const [offset, setOffset] = useState({
    prevScrollpos: window.pageYOffset,
    visible: true,
  });
  const [locationNo, setLocationNo] = useState(1);

  const [isOpen, setToggle] = useState(false);
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Internships", link: "/internship" },
    { name: "Resume Builder", link: "/resume" },
    { name: "Blog", link: "/blog" },
    { name: "About Us", link: "/about" },
  ];

  const [links] = useState([
    { path: "/resume/builder", text: "BASIC INFO", no: "1" },
    {
      path: "/resume/builder/employment-experience",
      text: "WORK HISTORY",
      icon: <FaArrowRight size="1rem" />,
      no: "2",
    },
    {
      path: "/resume/builder/education",
      text: "EDUCATION",
      icon: <FaArrowRight size="1rem" />,
      no: "3",
    },
    {
      path: "/resume/builder/skills",
      text: "SKILL",
      icon: <FaArrowRight size="1rem" />,
      no: "4",
    },
    { path: "/bio", text: "BIO", icon: <FaArrowRight size="1rem" />, no: "5" },
    { path: "/resume/builder/download", text: "FINALIZE", no: "6" },
  ]);

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

  useEffect(() => {
    for (let i = 0; i < links.length; i++) {
      if (
        (links[i].path === "/resume/builder/employment-experience" &&
          pathname.includes("/resume/builder/employment-experience")) ||
        links[i].path === pathname
      ) {
        setLocationNo(links[i].no);
      }
    }
  }, [pathname, links]);

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
            <FaTimes size="1.5rem" color="#fff" />
          ) : (
            <FaBars size="1.5rem" color={offset?.darken ? "#fff" : "#332a66"} />
          )}
        </nav>

        {/* Desktop View  */}
        <nav className="hidden gap-1 transistion-all lg:flex flex-row text-sm">
          {links.map((link, index) => (
            <li
              key={index}
              exact
              className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium ${
                locationNo >= link.no
                  ? "text-secondary-500"
                  : "text-secondary-300"
              }`}
            >
              <span
                className={`circleOrange border border-secondary-300 text-secondary-300 mr-1 text-sm font-medium ${
                  locationNo >= link.no
                    ? "text-secondary-500 "
                    : "text-secondary-300"
                }`}
              >
                {link.no}
              </span>
              <span className="flex-1">{link.text}</span>
              <span
                className={`nav-dotted-line relative rounded-xl block w-6 h-0.5 ml-1 ${
                  locationNo >= link.no
                    ? "bg-secondary-500"
                    : "bg-secondary-300 inactive"
                }`}
              />
            </li>
          ))}
        </nav>

        {/* Tablet View*/}
        <nav className="hidden gap-8 transistion-all md:flex flex-row text-sm lg:hidden">
          {links.map((link, index) => (
            <div key={index} className="flex items-center px-2 ">
              <span
                className={`flex circleOrange border border-secondary-300 text-secondary-300 text-sm font-medium ${
                  locationNo >= link.no
                    ? "text-secondary-500 "
                    : "text-secondary-300"
                }`}
              >
                {link.no}
              </span>

              <span
                className={`nav-dotted-line relative rounded-xl block w-5 h-0.5 ml-1 ${
                  locationNo >= link.no
                    ? "bg-secondary-500"
                    : "bg-secondary-300 inactive"
                }`}
              />
            </div>
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
          {navLinks.map((link, index) => (
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
      </nav>
      <nav className="flex flex-row justify-center mt-1 mx-auto md:hidden ">
        {links.map((link, index) => (
          <div key={index} className="flex items-center px-2 ">
            <span
              className={`flex circleOrange border border-secondary-300 text-secondary-300 text-sm font-medium ${
                locationNo >= link.no
                  ? "text-secondary-500 "
                  : "text-secondary-300"
              }`}
            >
              {link.no}
            </span>

            <span
              className={`nav-dotted-line relative rounded-xl block w-5 h-0.5 ml-1 ${
                locationNo >= link.no
                  ? "bg-secondary-500"
                  : "bg-secondary-300 inactive"
              }`}
            />
          </div>
        ))}
      </nav>
    </header>
  );
}

export default ResumeInfoHeader;
