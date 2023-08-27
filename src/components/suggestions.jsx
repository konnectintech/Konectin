import professions from "professions";
import * as BsIcon from "react-icons/bs";
import { useState, useEffect } from "react";
import Creatable from "react-select/creatable";
import { components } from "react-select";
import { konectinLogo } from "../assets";

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
  loading,
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
          className="text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-t-[4px] bg-[#f9f9f9]"
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
        <p className="text-[#3f4044] font-extralight tracking-[-0.01em] text-sm">
          Showing 3 results for <span className="font-bold">{jobTitle}</span>
        </p>
        {loading ? (
          <div className="relative w-full min-h-[300px] flex border border-[#b2b3b48a]">
            <div className="bg-neutral-100 opacity-50 absolute w-full h-full"></div>
            <div className="animate-pulse m-auto bg-white p-3 rounded-full">
              <img width="20px" src={konectinLogo} alt="" />
            </div>
          </div>
        ) : (
          <div className="bg-neutral-1000 border border-[#b2b3b48a] overflow-y-auto rounded h-full max-h-[300px] min-h-[200px]">
            {responsibilities.map((item, index) => {
              return item.error ? (
                <div
                  key={index}
                  className="p-5 w-full flex gap-4 items-start border-b border-[#b2b3b48a]"
                >
                  <p className="text-xs text-[#191a1f] font-light">
                    {item.error}
                  </p>
                </div>
              ) : (
                <div
                  key={index}
                  className="p-5 w-full flex gap-4 items-start border-b border-[#b2b3b48a]"
                >
                  <div
                    onClick={() => handleAddSuggestion(item)}
                    className="bg-[#403580] text-white text-xs font-extralight tracking-wide p-2 rounded-md cursor-pointer"
                  >
                    Add
                  </div>
                  <p className="text-xs text-[#191a1f] font-light">{item}</p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default Suggestions;
