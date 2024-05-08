import { useState } from "react";
import { useAuthContext } from "../../middleware/auth";
import { useNavigate } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import ActionModal from "../../components/actionModal";
import { logOut } from "../../assets";

function ProfileBar() {
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
  };

  return (
    <div className="relative flex items-center cursor-pointer gap-2 text-xs text-neutral-400 group">
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

      {/* Dropdown */}
      <div
        // ${
        //   offset.prevScrollpos <= 50 || offset.darken
        //     ? "top-full visible opacity-100"
        //     : "-top-full invisible opacity-0"
        // }
        className={`w-64 bg-white py-4 px-2 rounded-md absolute top-full translate-y-4 invisible opacity-0 duration-500 group-hover:opacity-100 group-hover:visible text-sm right-0 sublink-box`}
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
              {user.fullname}
            </p>
            <p>{user.email}</p>
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
    </div>
  );
}

export default ProfileBar;
