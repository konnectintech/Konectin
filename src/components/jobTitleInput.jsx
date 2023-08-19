import { components } from "react-select";
import Creatable from "react-select/creatable";
import * as BsIcon from "react-icons/bs";
import professions from "professions";
import { useEffect, useState } from "react";

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

function JobTitleInput({ title, handleInputChange, section, subsection }) {
  const [professionOption, setProfessionOption] = useState([]);

  useEffect(() => {
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
  };

  return (
    <Creatable
      className="mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]"
      placeholder="Job Title"
      components={{ DropdownIndicator }}
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
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "#B3AECC",
          primary: "#D1D1D2",
        },
      })}
    />
  );
}

export default JobTitleInput;
