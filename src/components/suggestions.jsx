import professions from "professions";
import * as BsIcon from "react-icons/bs";
import { useState, useEffect } from "react";
import Creatable from "react-select/creatable";
import { components } from "react-select";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator className="cursor-pointer p-4" {...props}>
      <BsIcon.BsSearch />
    </components.DropdownIndicator>
  );
};

const Suggestions = ({
  jobTitle,
  handleChange,
  handleAddSuggestion,
  responsibilities,
  selected,
}) => {
  const [professionOption, setProfessionOption] = useState([]);

  useEffect(() => {
    professions.map((obj) =>
      setProfessionOption((prev) => [...prev, { label: obj, value: obj }])
    );
  }, []);

  return (
    <div>
      <div className="flex position relative items-center">
        <Creatable
          className="text-[11px] w-full text-neutral-400 border border-neutral-500 outline-0 rounded-t-[4px] bg-[#f9f9f9]"
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
      <section className="flex flex-col gap-4 mt-4">
        <p className="text-neutral-200 font-extralight tracking-[-0.01em] text-sm">
          Showing 3 results for <span className="font-bold">{jobTitle}</span>
        </p>
        <div className="bg-neutral-1000 border border-neutral-500 overflow-y-auto rounded h-full max-h-[370px] min-h-[200px]">
          {responsibilities.map((item, index) => {
            return item.error ? (
              <div
                key={index}
                className={`p-5 w-full flex gap-4 items-start border-b border-neutral-500`}
              >
                <p className="text-xs text-neutral-100 font-light">
                  {item.error}
                </p>
              </div>
            ) : (
              <div
                key={index}
                className={`${
                  selected.includes(item.content)
                    ? "bg-primary-700 text-white"
                    : "text-neutral-100"
                } border-b border-neutral-500 p-5 w-full`}
              >
                <div
                  className={`${
                    item.loading
                      ? "opacity-10"
                      : "flex items-start gap-4 w-full"
                  }`}
                >
                  {!item.loading && selected.includes(item.content) ? (
                    <div className="bg-primary-500 text-white text-xs font-extralight tracking-wide p-1 rounded-md">
                      <BsIcon.BsCheck size="1.5rem" color="green" />
                    </div>
                  ) : (
                    <div
                      onClick={() => handleAddSuggestion(item)}
                      className="bg-primary-500 text-white text-xs font-extralight tracking-wide p-2 rounded-md cursor-pointer"
                    >
                      Add
                    </div>
                  )}

                  <p
                    className={`${
                      item.loading ? "blurry-text animate-pulse" : ""
                    } text-xs font-light`}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Suggestions;
