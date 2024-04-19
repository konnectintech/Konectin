import { useAuth } from "../../middleware/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ActionModal from "../actionModal";
import { logOut } from "../../assets";

const Dropdown = () => {
  const { user, signOut } = useAuth();
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleLogoutModal = () => {
    setLogoutOpen(!logoutOpen);
  };

  const logoutFn = () => {
    signOut();
    navigate("/");
    setLogoutOpen(!logoutOpen);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div>
          <div
            className="absolute top-0 left-0 h-screen w-screen"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
          <div className="w-64 bg-white pt-11 pb-4 px-4 rounded-md absolute right-10 top-20 drop-shadow-dropdown">
            <div className="flex items-center gap-4 text-xs text-neutral-400 mb-6">
              {user?.picture ? (
                <img
                  src={user?.picture}
                  alt={user?.fullname}
                  className="w-16 h-16 rounded-full bg-neutral-grey"
                />
              ) : (
                <div className="rounded-full bg-neutral-1000 flex items-center justify-center w-16 h-16">
                  <h3 className="text-uppercase sm:text-3xl font-black text-neutral-100">
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
            <div className="my-4 flex flex-col gap-2 cursor-pointer">
              <Link
                to="/dashboard"
                className="p-2 rounded-md hover:bg-primary-100"
              >
                Profile
              </Link>
              <Link
                to="/dashboard/display/resumes"
                className="p-2 rounded-md hover:bg-primary-100"
              >
                Saved Resumes & Cover Letters
              </Link>
            </div>
            <hr />
            <div className="mt-4 flex flex-col gap-2 cursor-pointer">
              <Link to="/faq" className="p-2 rounded-md hover:bg-primary-100">
                Help
              </Link>
              <div
                className="p-2 rounded-md hover:bg-primary-100"
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
