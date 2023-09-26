import { Link } from "react-router-dom";
import { microsoftIcon } from "../../assets";
import { useMsal } from "@azure/msal-react";

// Create a custom components for the major buttons in the app
export function CustomButton({
  primary,
  children,
  type,
  onClick,
  disabled,
  colorType,
}) {
  return (
    <button
      type={type ? type : ""}
      disabled={disabled}
      onClick={onClick}
      className={`w-full py-3 ${
        primary
          ? `bg-${colorType}-${
              disabled ? 200 : 600
            } hover:shadow-xl text-center rounded-sm text-white`
          : "bg-transparent flex gap-2 items-center justify-center text-black-500 border-primary-800 border rounded-md"
      }`}
    >
      {children}
    </button>
  );
}

export function ResumeButton() {
  return (
    <Link
      to="/resume/options"
      className="self-start px-6 py-2 bg-white flex gap-2 items-center justify-center text-primary-500 border-primary-500 border rounded-sm hover:bg-primary-500 hover:text-white"
    >
      Build resume now
    </Link>
  );
}

export function MicrosoftLog() {
  const { instance } = useMsal();

  const handleSignIn = () => {
    instance.loginPopup({
      scopes: ["user.read"],
    });
  };

  return (
    <div
      onClick={handleSignIn}
      className="w-full py-3 px-4 cursor-pointer bg-transparent flex gap-2 items-center justify-center text-black-500 border-primary-500 border rounded-md hover:text-white hover:bg-primary-500 peer-hover:text-white peer-hover:bg-primary-500 duration-500 peer/link"
    >
      <img className="w-6" src={microsoftIcon} alt="continue with microsoft" />{" "}
      Continue with Microsoft
    </div>
  );
}
