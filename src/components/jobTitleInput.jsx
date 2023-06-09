import Select, { components } from "react-select";
import * as BsIcon from "react-icons/bs";
import { jobs } from "../assets/data/job";

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

function JobTitleInput({ updateForm }) {
  const handleChange = (opt) => {
    updateForm((prev) => ({ ...prev, jobTitle: opt.value }));
  };

  return (
    <Select
      className="mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]"
      placeholder="Job Title"
      components={{ DropdownIndicator }}
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
      options={jobs}
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
