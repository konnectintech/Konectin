import { useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { fieldList, typeList } from "./data";

function InternType({ data, updateForm }) {
  const [showData, setShowData] = useState({
    type: false,
    field: false,
  });

  const errorMessage = useRef(null);

  const handleChange = (value, name) => {
    updateForm("internType", name, value);
  };

  return (
    <>
      <div className="flex flex-col gap-2 min-w-[160px] relative">
        <div
          onClick={() => setShowData((prev) => ({ ...prev, type: !prev.type }))}
          className="flex items-center relative cursor-pointer"
        >
          <input
            className="input-container !mb-0"
            value={data?.type}
            name="type"
            placeholder="What type of internship are you interested in?*"
            readOnly
            // onChange={(e) => handleCountryInput(e.target.value)}
            // onInput={(e) => handleCountryInput(e.target.value)}
          />
          <MdArrowDropDown
            className={`${
              showData.type ? "rotate-180" : "rotate-0"
            } absolute right-2 duration-300 text-neutral-300`}
            size="1.5rem"
          />
        </div>
        {showData.type && (
          <div className="bg-neutral-100 w-full text-white py-1 rounded flex flex-col">
            {typeList.map((type) => (
              <div
                key={type}
                onClick={() => {
                  handleChange(type, "type");
                  setShowData((prev) => ({ ...prev, type: !prev.type }));
                }}
                className={`${
                  data?.type === type
                    ? "bg-primary-500"
                    : "hover:bg-neutral-200"
                } flex gap-2 items-center py-3 px-4 cursor-pointer`}
              >
                <span
                  className={`${
                    data?.type === type
                      ? "bg-secondary-600 border-transparent"
                      : "border-white"
                  } rounded-full block w-4 h-4 border`}
                />
                <div className="truncate">{type}</div>
              </div>
            ))}
          </div>
        )}
        <label
          className="absolute mt-8 text-error-500 hidden"
          ref={errorMessage}
        >
          Please select an option
        </label>
      </div>
      <div className="flex flex-col gap-2 min-w-[160px] relative">
        <div
          onClick={() =>
            setShowData((prev) => ({ ...prev, field: !prev.field }))
          }
          className="flex items-center relative cursor-pointer"
        >
          <input
            className="input-container !mb-0"
            value={data?.field}
            name="field"
            placeholder="Preferred Field/Department for Internship?*"
            readOnly
            // onChange={(e) => handleCountryInput(e.target.value)}
            // onInput={(e) => handleCountryInput(e.target.value)}
          />
          <MdArrowDropDown
            className={`${
              showData.field ? "rotate-180" : "rotate-0"
            } absolute right-2 duration-300 text-neutral-300`}
            size="1.5rem"
          />
        </div>
        {showData.field && (
          <div className="bg-neutral-100 w-full text-white py-1 rounded flex flex-col">
            {fieldList.map((field) => (
              <div
                key={field}
                onClick={() => {
                  handleChange(field, "field");
                  setShowData((prev) => ({ ...prev, field: !prev.field }));
                }}
                className={`${
                  data?.field === field
                    ? "bg-primary-500"
                    : "hover:bg-neutral-200"
                } flex gap-2 items-center py-3 px-4 cursor-pointer`}
              >
                <span
                  className={`${
                    data?.field === field
                      ? "bg-secondary-600 border-transparent"
                      : "border-white"
                  } rounded block w-4 h-4 border`}
                />
                <div className="truncate">{field}</div>
              </div>
            ))}
          </div>
        )}
        <label
          className="absolute mt-8 text-error-500 hidden"
          ref={errorMessage}
        >
          Please select an option
        </label>
      </div>
    </>
  );
}

export default InternType;
