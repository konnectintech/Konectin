import { Link } from "react-router-dom";

// Create a custom components for the major buttons in the app
export function CustomButton({
  primary,
  children,
  onClick,
  disabled,
  colorType,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full ${
        primary
          ? `py-3 text-neutral-100 bg-${colorType}-${
              disabled ? "500" : "600"
            } text-center rounded-sm`
          : "py-2 bg-transparent flex gap-2 items-center justify-center text-black-500 border-primary-800 border rounded-md"
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
      className="self-start px-6 py-2 bg-white flex gap-2 items-center justify-center text-primary-500 border-primary-500 border rounded-sm"
    >
      Build resume now
    </Link>
  );
}
