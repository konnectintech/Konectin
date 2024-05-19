import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const CustomSelect = ({ options, value, onChange, showSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const handleOptionClick = (option) => {
    setInputValue(option);
    onChange(option);

    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);
    onChange(inputText);
    setIsOpen(true);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <div className="relative inline-block w-full rounded-md">
      <div className="relative">
        <label
          htmlFor="customInput"
          className="input-container block cursor-text"
        >
          <input
            type="text"
            id="customInput"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 300)}
            placeholder="Enter your current job title"
            className="flex-1 w-full pr-12 bg-transparent outline-none"
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
        </label>

        {isOpen && filteredOptions.length >= 1 && (
          <ul className="absolute z-50 -mt-6 py-2 w-full max-h-[300px] overflow-auto no-scrollbar bg-white border border-gray-300 rounded-md shadow-lg duration-300">
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
