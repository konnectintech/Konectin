import professions from "professions";
import * as BsIcon from "react-icons/bs";
import { useState, useEffect } from "react";
import Select, { components } from "react-select";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator className="cursor-pointer p-4" {...props}>
      <BsIcon.BsSearch />
    </components.DropdownIndicator>
  );
};

const responsibilities_suggestions = [
  "To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.",
  "To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.",
  "To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.",
  "To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.",
];

const Suggestions = ({ jobTitle, handleChange, handleAddSuggestion }) => {
  const [professionOption, setProfessionOption] = useState([]);

  useEffect(() => {
    professions.map((obj) =>
      setProfessionOption((prev) => [...prev, { label: obj, value: obj }])
    );
  }, []);

  return (
    <>
      <div className="flex relative items-center">
        <Select
          className="text-[11px] w-full text-primary-200 outline-0 rounded-[4px] bg-neutral-1000"
          placeholder="Type your job responsibility"
          components={{ DropdownIndicator }}
          styles={{
            control: (base) => ({
              ...base,
              borderStyle: "none",
              boxShadow: "none",
            }),
            option: (base) => ({
              ...base,
              "&:hover": {
                color: "white",
              },
            }),
            dropdownIndicator: (base) => ({
              ...base,
              padding: "1.2rem",
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
          onChange={(opt) => handleChange(opt.value)}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#B3AECC",
              primary: "#D1D1D2",
            },
          })}
        />
      </div>
      <section className="px-6 flex flex-col gap-4 mt-4">
        <p className="text-neutral-200 font-extralight tracking-[-0.01em] text-sm">
          Showing 3 results for{" "}
          <span className="font-bold capitalize">{jobTitle}</span>
        </p>
        <div className="border border-neutral-500 overflow-y-auto rounded h-[17rem]">
          {responsibilities_suggestions.map((item, index) => {
            return (
              <div
                key={index}
                className="p-5 w-full flex gap-4 justify-between items-start border-b border-neutral-500"
              >
                <div
                  onClick={() => handleAddSuggestion(item)}
                  className="bg-primary-500 text-white text-xs font-extralight tracking-wide p-2 rounded-md cursor-pointer"
                >
                  Add
                </div>
                <p className="text-xs text-neutral-100 font-light">{item}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Suggestions;
