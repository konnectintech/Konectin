import { useAuth } from "../../middleware/auth";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Logout from "../../components/logout";

const Dropdown = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const [logoutOpen, setLogoutOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", closeDropdown);
    } else {
      document.removeEventListener("click", closeDropdown);
    }
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  });

  const openLogoutModal = () => {
    // setDropdownOpen(false);
    setLogoutOpen(true);
  };

  const closeLogoutModal = () => {
    setLogoutOpen(false);
  };

  return isOpen ? (
    <>
      <div
        ref={dropdownRef}
        className="w-[300px] bg-white pt-11 pb-4 px-4 rounded-md absolute right-4 drop-shadow-dropdown"
      >
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
                {user?.fullname.split(" ")[0].charAt(0)}
                {user?.fullname.split(" ")[1].charAt(0)}
              </h3>
            </div>
          )}
          <div>
            <p className="text-neutral-100 text-base font-bold">
              {user?.fullname}
            </p>
            <p>{user?.email}</p>
          </div>
        </div>
        <hr />
        <ul className="my-4 flex flex-col gap-2 cursor-pointer">
          <li className="p-2 rounded-md hover:bg-primary-100">
            <Link to="/dashboard">Profile</Link>
          </li>
          <li className="p-2 rounded-md hover:bg-primary-100">
            <Link to="#">Saved Resumes & Cover Letters</Link>
          </li>
        </ul>
        <hr />
        <ul className="mt-4 flex flex-col gap-2 cursor-pointer">
          <li className="p-2 rounded-md hover:bg-primary-100">Help</li>
          <li
            className="p-2 rounded-md hover:bg-primary-100"
            onClick={openLogoutModal}
          >
            Log out
          </li>
        </ul>
      </div>
      {logoutOpen && <Logout closeLogoutModal={closeLogoutModal} />}
    </>
  ) : null;
};

export default Dropdown;
