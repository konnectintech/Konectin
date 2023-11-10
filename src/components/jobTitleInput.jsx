import { components } from "react-select";
import Creatable from "react-select/creatable";
import * as BsIcon from "react-icons/bs";
import professions from "professions";
import { useEffect, useRef, useState } from "react";
import { verifyInput } from "../pages/DefaultRoutes/resume/resume-builder/screens/verification";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator
      className="bg-primary-600 rounded-sm cursor-pointer p-4"
      {...props}
    >
      <BsIcon.BsSearch />
    </components.DropdownIndicator>
  );
};

function JobTitleInput({
  auth,
  title,
  handleInputChange,
  section,
  subsection,
}) {
  const [professionOption, setProfessionOption] = useState([]);
  const errorMessage = useRef(null);

  useEffect(() => {
    const storedProfession = JSON.parse(sessionStorage.getItem("profession"));

    if (storedProfession) {
      storedProfession.map((obj) =>
        setProfessionOption((prev) => [...prev, obj])
      );
    }

    professions.map((obj) =>
      setProfessionOption((prev) => [...prev, { label: obj, value: obj }])
    );
  }, []);

  const handleChange = (opt) => {
    handleInputChange({
      section: section,
      subsection: subsection,
      values: opt.value,
    });

    if (auth) {
      verifyInput(opt, errorMessage.current, "jobTitle");
    }
  };

  const handleAddProfession = (opt) => {
    const storedProfession = JSON.parse(sessionStorage.getItem("profession"));
    if (storedProfession) {
      const addedProfession = storedProfession.push({ label: opt, value: opt });
      sessionStorage.setItem("profession", JSON.stringify(addedProfession));
    } else {
      const profession = [{ label: opt, value: opt }];
      sessionStorage.setItem("profession", JSON.stringify(profession));
    }

    handleChange(opt);
  };

  return (
    <>
      <Creatable
        className="mb-6 text-[11px] w-full text-[#8C8C8F] border border-neutral-500 outline-0 rounded-[4px] bg-[#f9f9f9] relative z-40"
        inputId="jobTitle"
        placeholder="Job Title"
        // components={{ DropdownIndicator }}
        defaultInputValue={title}
        styles={{
          control: (base) => ({
            ...base,
            borderStyle: "none",
            boxShadow: "none",
            background: "transparent",
          }),
          option: (base) => ({
            ...base,
            "&:hover": {
              color: "white",
            },
          }),
          dropdownIndicator: (base) => ({
            ...base,
            padding: "1rem",
            color: "white",
            "&:hover": {
              color: "white",
            },
          }),
          indicatorsContainer: (base, state) => ({
            ...base,
            display: state.isFocused ? "none" : "flex",
          }),
          indicatorSeparator: (base, state) => ({
            ...base,
            display: state.isFocused ? "flex" : "none",
          }),
        }}
        options={professionOption}
        onChange={(opt) => handleChange(opt)}
        onCreateOption={handleAddProfession}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#eae6ff",
            primary: "#D1D1D2",
          },
        })}
      />
      <label
        id="jobTitleError"
        className="absolute -mt-5 mb-1 pl-4 text-xs text-error-500 hidden"
        ref={errorMessage}
      ></label>
    </>
  );
}

export default JobTitleInput;
