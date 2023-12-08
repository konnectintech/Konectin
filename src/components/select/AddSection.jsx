import React, { useEffect, useRef, useState } from "react";
import { BsPlus } from "react-icons/bs";

const AddSection = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block rounded-md " ref={selectRef}>
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-primary-600 cursor-pointer font-bold "
        >
          <BsPlus className="bg-primary-600 text-lg rounded-full text-white" />{" "}
          Add Section
        </div>
        {isOpen && (
          <ul className="absolute z-10 mt-2 py-2 w-56 border bg-white border-gray-300 rounded-md shadow-lg">
            {options.map((option) => (
              <li
                key={option}
                className={`px-4 py-2 cursor-pointer capitalize hover:bg-primary-200 hover:bg-opacity-10 `}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddSection;
