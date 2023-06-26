import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { konectinIcon } from "../../assets";
import "../header/header.css";
import { useLocalStorage } from "../../middleware/storage";

function ResumeInfoHeader() {
  const [offset, setOffset] = useState({
    prevScrollpos: window.pageYOffset,
    visible: true,
  });

  const [locationNo, setLocationNo] = useLocalStorage("crStage", 1);

  const [isOpen, setToggle] = useState(false);
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Internships", link: "/internship" },
    { name: "Resume Builder", link: "/resume" },
    { name: "Blog", link: "/blog" },
    { name: "About Us", link: "/about" },
  ];

  const [links] = useState([
    { path: "/resume/builder/", text: "basic info", no: 1 },
    {
      path: "/resume/builder/employment-experience",
      text: "work history",
      no: 2,
    },
    {
      path: "/resume/builder/education",
      text: "education",
      no: 3,
    },
    {
      path: "/resume/builder/skills",
      text: "skills",
      no: 4,
    },
    {
      path: "/resume/builder/bio",
      text: "bio",
      no: 5,
    },
    { path: "/resume/builder/download", text: "finalize", no: 6 },
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
  }, [pathname, links, setLocationNo]);

  const toggle = () => {
    setToggle(!isOpen);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <header
        className={
          isOpen
            ? "navbar bg-white"
            : offset.prevScrollpos <= 50
            ? "navbar"
            : offset?.darken
            ? "navbar-change bg-white"
            : "nav-bar-hidden"
        }
      >
        <nav className="w-11/12 mx-auto max-w-screen-2xl flex justify-between items-center gap-6 lg:gap-16 py-4">
          <Link to="/" className="relative z-30 nav-icon block">
            <img src={konectinIcon} alt="Konectin Logo" />
          </Link>
          <nav
            onClick={toggle}
            className="md:hidden relative z-30 cursor-pointer"
          >
            {isOpen ? (
              <FaTimes size="1.5rem" color="#fff" />
            ) : (
              <FaBars size="1.5rem" color="#332a66" />
            )}
          </nav>

          {/* Desktop and Tab View  */}
          <nav className="hidden transistion-all md:flex md:gap-3 lg:gap-6 flex-row text-sm">
            {links.map((link, index) => (
              <div
                key={index}
                className={`flex cursor-pointer items-center gap-2 text-sm ${
                  locationNo >= link.no
                    ? "text-secondary-500 font-semibold"
                    : "text-secondary-300 font-medium"
                }`}
              >
                <span
                  className={`max-md:hidden circle-orange ${
                    locationNo >= link.no
                      ? "text-secondary-500 border-secondary-500"
                      : "text-secondary-300 border-secondary-300"
                  }`}
                >
                  {link.no}
                </span>
                <span className="flex-1 uppercase">{link.text}</span>
                {link.no <= links.length - 1 && (
                  <span
                    className={`nav-dotted-line max-xl:hidden relative rounded-xl block w-6 h-0.5 ${
                      locationNo >= link.no
                        ? "bg-secondary-500"
                        : "bg-secondary-300 inactive"
                    }`}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Mobile View  */}
          <nav
            className={
              isOpen
                ? "flex flex-col gap-8 w-full h-full items-start pt-36 bg-white px-6 text-white fixed z-20 top-0 right-0 md:hidden"
                : "hidden"
            }
          >
            {navLinks.map((link, index) => (
              <Link
                className={
                  (link.link === "/blog" &&
                    pathname.split("/")[1] === "blog") ||
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
      </header>

      <nav className="absolute w-full top-20 flex flex-row justify-center gap-4 mx-auto md:hidden mb-8 px-4">
        {links.map((link, index) => (
          <div
            key={index}
            className={`flex cursor-pointer w-full items-center gap-2 text-sm ${
              locationNo >= link.no
                ? "text-secondary-500 font-semibold"
                : "text-secondary-300 font-medium"
            }`}
          >
            <span
              className={`circle-orange ${
                locationNo >= link.no
                  ? "text-secondary-500 border-secondary-500"
                  : "text-secondary-300 border-secondary-300"
              }`}
            >
              {link.no}
            </span>
            {link.no <= links.length - 1 && (
              <span
                className={`nav-dotted-line relative rounded-xl hidden xxs:block w-4 sm:w-6 h-0.5 ${
                  locationNo >= link.no
                    ? "bg-secondary-500"
                    : "bg-secondary-300 inactive"
                }`}
              />
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

export default ResumeInfoHeader;
