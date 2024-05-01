import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const CustomSelect = ({ options, value, onChange, showSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [inputValue, setInputValue] = useState(value);
  const selectRef = useRef;

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  useEffect(() => {
    if (!inputValue && value) setInputValue(value);
  }, [value]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionClick = (option) => {
    setInputValue(option);

    onChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);
    setIsOpen(true);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <div className="relative inline-block w-full  rounded-md ">
      <div className="relative">
        <div
          className="border shadow-sm border-gray-300 rounded-md p-3 flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your current job title"
            className="bg-transparent text-sm font-medium focus:outline-none"
          />
          {!showSearch ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5  ${isOpen ? "transform rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          ) : (
            <div className="bg-primary-600 absolute top-0 right-0 px-4 h-full flex justify-center items-center rounded-tr rounded-br">
              <FaSearch className=" text-white " />
            </div>
          )}
        </div>
        {isOpen && (
          <ul className="absolute z-50 mt-2 py-2 w-full max-h-[300px] overflow-auto no-scrollbar bg-white border border-gray-300 rounded-md shadow-lg">
            {filteredOptions.map((option) => (
              <li
                key={option}
                className={`px-4 py-2 cursor-pointer hover:bg-neutral-700 hover:text-white text-sm font-medium ${
                  option === value
                    ? "font-semibold bg-primary-200 text-white"
                    : ""
                }`}
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

export default CustomSelect;
