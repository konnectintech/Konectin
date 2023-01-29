// Create a custom components for the major buttons in the app
export function CustomButton({ primary, children }) {
  return (
    <button
      className={
        primary
          ? "w-full py-2 bg-primaryBtn text-white text-center rounded-md"
          : "w-full py-2 bg-transparent flex gap-2 items-center justify-center text-black-500 border-black border rounded-md"
      }
    >
      {children}
    </button>
  );
}

export function ResumeButton() {
  return (
    <button className="self-start px-6 py-2 bg-transparent flex gap-2 items-center justify-center text-primaryBtn border-primaryBtn border rounded-sm bg-white">
      Build resume now
    </button>
  );
}
