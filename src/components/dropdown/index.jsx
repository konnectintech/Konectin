import { useAuthContext } from "../../middleware/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ActionModal from "../actionModal";
import { logOut } from "../../assets";

const Dropdown = ({ offset, isOpen, setIsOpen }) => {
  const { user, signOut } = useAuthContext();
  const [logoutOpen, setLogoutOpen] = useState(false);
  const navigate = useNavigate();

  const toggleLogoutModal = () => {
    setLogoutOpen(!logoutOpen);
  };

  const logoutFn = () => {
    signOut();
    navigate("/");
    setLogoutOpen(!logoutOpen);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div>
          <div
            className="absolute top-0 left-0 h-screen w-screen"
            onClick={() => setIsOpen(false)}
          ></div>
          <div
            className={`${
              offset.prevScrollpos <= 50 || offset.darken
                ? "top-full visible opacity-100"
                : "-top-full invisible opacity-0"
            } duration-500 w-64 bg-white py-4 px-2 rounded-md absolute text-sm right-10 drop-shadow-dropdown`}
          >
            <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
              {user?.picture ? (
                <img
                  src={user?.picture}
                  alt={user?.fullname}
                  className="w-16 h-16 rounded-full bg-neutral-grey"
                />
              ) : (
                <div className="rounded-full bg-neutral-1000 flex items-center justify-center w-16 h-16">
                  <h3 className="text-uppercase sm:text-xl font-black text-neutral-100">
                    {user?.fullname.split(" ")[0].charAt(0) || "K"}
                    {user?.fullname.split(" ")[1].charAt(0) || "U"}
                  </h3>
                </div>
              )}
              <div>
                <p className="text-neutral-100 text-base font-bold">
                  {user?.fullname || "Konectin User"}
                </p>
                <p>{user?.email || "user@konenctin.org"}</p>
              </div>
            </div>
            <hr />
            <div className="my-2 flex flex-col">
              <Link
                to="/dashboard"
                className="p-2 rounded-md hover:bg-primary-100 !text-black"
              >
                Profile
              </Link>
              <Link
                to="/dashboard/display/resumes"
                className="p-2 rounded-md hover:bg-primary-100 !text-black truncate"
              >
                Saved Resumes & Cover Letters
              </Link>
            </div>
            <hr />
            <div className="mt-2 flex flex-col">
              <Link
                to="/faq"
                className="p-2 rounded-md hover:bg-primary-100 !text-black"
              >
                Help
              </Link>
              <div
                className="p-2 rounded-md hover:bg-primary-100 !text-black cursor-pointer"
                onClick={toggleLogoutModal}
              >
                Log out
              </div>
            </div>
          </div>
        </div>
      )}
      {logoutOpen && (
        <>
          <ActionModal
            isOpen={toggleLogoutModal}
            onClose={toggleLogoutModal}
            icon={logOut}
            header="Are you sure you want to log out?"
            body="Keep your notifications enabled to stay updated. See you soon!"
            buttonText="Logout"
            btnColors="border-primary-600 bg-error-500"
            actionFn={logoutFn}
          />
        </>
      )}
    </>
  );
};

export default Dropdown;
