import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { educationOption } from "./data";

function Education({ data, updateForm }) {
  const [show, setShow] = useState(false);

  const handleChange = (value, name) => {
    Object.keys(value).forEach((holder) => {
      const data = value[holder];
      const errorRef = document.getElementById(`${holder}Error`);
      const container = document.getElementById(holder);

      if (data === "") {
        container.style.borderColor = "#F11010";
        errorRef.style.display = "block";
        errorRef.innerHTML = "Input field not filled yet";
      } else {
        container.style.borderColor = "initial";
        errorRef.style.display = "none";
      }
    });
    updateForm("education", name, value);
  };

  return (
    <div className="flex flex-col gap-2 min-w-[160px]">
      <div className="relative">
        <div className="flex items-center relative cursor-pointer">
          <input
            className="input-container !mb-0"
            value={data?.name}
            name="education"
            placeholder="What best describes your current educational status?"
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
            readOnly
          />
          <MdArrowDropDown
            onClick={() => setShow((prev) => !prev)}
            className={`${
              show ? "rotate-180" : "rotate-0"
            } absolute right-2 duration-300 text-neutral-300`}
            size="1.5rem"
          />
        </div>
        {show && (
          <div className="bg-neutral-100 w-full z-10 overflow-y-auto text-white py-1 rounded flex flex-col">
            {educationOption.map((education) => (
              <div
                key={education.name}
                onClick={() => {
                  updateForm("education", "name", education.name);
                  setShow((prev) => !prev);
                }}
                className={`${
                  data?.name === education.name
                    ? "bg-primary-500"
                    : "hover:bg-neutral-200"
                } flex gap-2 items-center py-3 px-4 cursor-pointer`}
              >
                <span
                  className={`${
                    data?.name === education.name
                      ? "bg-secondary-600 border-transparent"
                      : "border-white"
                  } rounded-full block !w-4 !h-4 border`}
                />
                <div className="md:w-[32ch] truncate">{education.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {educationOption.map((education) =>
        data?.name === education.name
          ? Object.keys(education.options).map((option) => (
              <div key={option} className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <input
                    className="input-container !mb-0"
                    type="text"
                    name={option}
                    id={option}
                    value={
                      data?.options === undefined ? "" : data.options[option]
                    }
                    onChange={(e) => {
                      const newOptions = {
                        ...data.options,
                        [option]: e.target.value,
                      };
                      handleChange(newOptions, "options");
                    }}
                    onInput={(e) => {
                      const newOptions = {
                        ...education.options,
                        [option]: e.target.value,
                      };
                      handleChange(newOptions, "options");
                    }}
                    placeholder={education.options[option]}
                  />
                  <label
                    className="mt-1 text-xs text-error-500 hidden"
                    htmlFor={option}
                    id={`${option}Error`}
                  ></label>
                </div>
              </div>
            ))
          : null
      )}
    </div>
  );
}

export default Education;
