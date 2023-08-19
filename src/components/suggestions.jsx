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
        <div className="bg-neutral-1000 border border-[#b2b3b48a] overflow-y-auto rounded h-full max-h-[300px] min-h-[200px]">
          {loading ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style>{`.spinner_1KD7{animation:spinner_6QnB 1.2s infinite}.spinner_MJg4{animation-delay:.1s}.spinner_sj9X{animation-delay:.2s}.spinner_WwCl{animation-delay:.3s}.spinner_vy2J{animation-delay:.4s}.spinner_os1F{animation-delay:.5s}.spinner_l1Tw{animation-delay:.6s}.spinner_WNEg{animation-delay:.7s}.spinner_kugV{animation-delay:.8s}.spinner_4zOl{animation-delay:.9s}.spinner_7he2{animation-delay:1s}.spinner_SeO7{animation-delay:1.1s}@keyframes spinner_6QnB{0%,50%{animation-timing-function:cubic-bezier(0.27,.42,.37,.99);r:0}25%{animation-timing-function:cubic-bezier(0.53,0,.61,.73);r:2px}}`}</style>
              <circle className="spinner_1KD7" cx="12" cy="3" r="0" />
              <circle
                className="spinner_1KD7 spinner_MJg4"
                cx="16.50"
                cy="4.21"
                r="0"
              />
              <circle
                className="spinner_1KD7 spinner_SeO7"
                cx="7.50"
                cy="4.21"
                r="0"
              />
              <circle
                className="spinner_1KD7 spinner_sj9X"
                cx="19.79"
                cy="7.50"
                r="0"
              />
              <circle
                className="spinner_1KD7 spinner_7he2"
                cx="4.21"
                cy="7.50"
                r="0"
              />
              <circle
                className="spinner_1KD7 spinner_WwCl"
                cx="21.00"
                cy="12.00"
                r="0"
              />
              <circle
                className="spinner_1KD7 spinner_4zOl"
                cx="3.00"
                cy="12.00"
                r="0"
              />
              <circle
                className="spinner_1KD7 spinner_vy2J"
                cx="19.79"
                cy="16.50"
                r="0"
              />
              <circle
                className="spinner_1KD7 spinner_kugV"
                cx="4.21"
                cy="16.50"
                r="0"
              />
              <circle
                className="spinner_1KD7 spinner_os1F"
                cx="16.50"
                cy="19.79"
                r="0"
              />
              <circle
                className="spinner_1KD7 spinner_WNEg"
                cx="7.50"
                cy="19.79"
                r="0"
              />
              <circle
                className="spinner_1KD7 spinner_l1Tw"
                cx="12"
                cy="21"
                r="0"
              />
            </svg>
          ) : (
            responsibilities.map((item, index) => {
              return (
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
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default Suggestions;
