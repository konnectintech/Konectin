// Create a custom components for the major buttons in the app
export function CustomButton({ primary, children }) {
  return (
    <button
      className={
        primary
          ? "w-full py-3 bg-primaryBtn text-white text-center rounded-md"
          : "w-full py-3 bg-transparent flex gap-2 items-center justify-center text-black-500 border-black border rounded-md"
      }
    >
      {children}
    </button>
  );
}
