// Create a custom components for the major inputs in the app
export function Input({ legend, type, placeholder }) {
  return (
    <fieldset className="border border-primaryBtn rounded-md mt-8 cursor-pointer">
      <legend className="ml-4 px-1">{legend}</legend>
      <input
        type={type}
        className="w-full text-xs bg-transparent border-0 outline-0 px-4 pt-3 pb-4"
        placeholder={placeholder}
      />
    </fieldset>
  );
}
