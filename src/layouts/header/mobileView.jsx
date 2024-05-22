import { Link, useLocation } from "react-router-dom";
import ProfileBar from "./profileBar";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../middleware/auth";

function MobileHeader({ isOpen, links, setIsOpen }) {
  const { user } = useAuthContext();
  const { pathname } = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={
        isOpen
          ? "flex flex-col gap-8 w-full h-full items-start pt-24 bg-primary-600 px-4 text-white fixed z-20 top-0 right-0 md:hidden"
          : "hidden"
      }
    >
      {links.map((link, index) => (
        <NavLink
          className={({ isActive }) =>
            (link.link === "/blog" && pathname.split("/")[1] === "blog") ||
            isActive
              ? "text-secondary-600 flex items-center"
              : "text-primary-100 hover:text-secondary-600 flex items-center"
          }
          onClick={toggle}
          key={index}
          to={link.link === "/blog" ? "/blog/all" : link.link}
        >
          {link.name}
        </NavLink>
      ))}

      <nav className="flex flex-col gap-3 w-full">
        {user ? (
          <ProfileBar closeMenu={() => setIsOpen(false)} />
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
  );
}

export default MobileHeader;
