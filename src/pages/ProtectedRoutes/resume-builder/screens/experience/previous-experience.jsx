import React, { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import { months } from "../../../../../assets/data/months";
import { years } from "../../../../../assets/data/years";
import { countries } from "../../../../../assets/data/countries";
import { ResumeTemplateSample1Image } from "../../../../../assets";

const PreviousExperience = ({ next, previous, data }) => {
  const [experience_list, setExperienceList] = useState(data.jobExperience);
  const [selected_country, setSelectedCountry] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [state, setState] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [current, setCurrent] = useState(false);

  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]";

  useEffect(() => {
    if (data.jobExperience?.length) {
      const updatedExperienceList = data.jobExperience.map((item) => ({
        ...item,
        current: item.current,
      }));
      setExperienceList(updatedExperienceList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addExperience = (e) => {
    e.preventDefault();
    setExperienceList([
      ...experience_list,
      {
        jobTitle: "",
        company: "",
        country: "",
        city: "",
        state: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        workDesc: [{ description: "" }],
        current: false,
      },
    ]);
  };
  console.log(experience_list);

  const addDescription = (e, index) => {
    e.preventDefault();
    const updatedExperienceList = [...experience_list];
    updatedExperienceList[index].workDesc.push({ summary: "" });
    setExperienceList(updatedExperienceList);
  };

  const removeDescription = (e, expIndex, descIndex) => {
    e.preventDefault();
    const updatedExperienceList = [...experience_list];
    updatedExperienceList[expIndex].workDesc.splice(descIndex, 1);
    setExperienceList(updatedExperienceList);
  };

  const handleStartMonthChange = (event, index) => {
    setStartMonth(event.target.value);
    experience_list[index].startMonth = event.target.value;
  };
  const handleEndMonthChange = (event, index) => {
    setEndMonth(event.target.value);
    experience_list[index].endMonth = event.target.value;
  };
  const handleStartYearChange = (event, index) => {
    setStartYear(event.target.value);
    experience_list[index].startYear = event.target.value;
  };
  const handleEndYearChange = (event, index) => {
    setEndYear(event.target.value);
    experience_list[index].endYear = event.target.value;
  };

  const handleCountryChange = (event, index) => {
    setSelectedCountry(event.target.value);
    experience_list[index].country = event.target.value;
  };

  const handleCurrent = (e, index) => {
    setCurrent(e.target.checked);
    console.log(endMonth, endYear);
    experience_list[index].current = e.target.checked;
  };

  const removeExperience = (index) => {
    const list = [...experience_list];
    list.splice(index, 1);
    setExperienceList(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selected_country &&
      jobTitle &&
      company &&
      startMonth &&
      startYear &&
      state
    ) {
      data.jobExperience = experience_list;
    }

    next(data);
  };

  return (
    <main className="-mt-8 flex justify-between flex-col items-start mx-auto">
      <div className="flex flex-col mx-auto md:flex-row items-center gap-6">
        <div className="flex flex-col">
          <h2 className=" text-xl w-[25ch] md:max-w-[30ch] md:text-2xl leading-tight font-semibold md:leading-snug">
            What recent employement experience do you have?
          </h2>

          <form className=" max-w-96 mt-12">
            {experience_list?.map((experience, index) => (
              <div
                key={index}
                className={`mt-6 ${
                  experience_list.length > 1 && " border-b border-[#2d2d2e8a]"
                }`}
              >
                <input
                  className={form_classes}
                  value={experience.jobTitle}
                  type="text"
                  onChange={(e) => {
                    setJobTitle(e.target.value);
                    experience_list[index].jobTitle = e.target.value;
                  }}
                  placeholder="Job Title"
                />
                <input
                  className={form_classes}
                  type="text"
                  value={experience.company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                    experience_list[index].company = e.target.value;
                  }}
                  placeholder="Company / Organization Name"
                />
                <div className=" flex">
                  <select
                    value={experience.country}
                    onChange={(e) => handleCountryChange(e, index)}
                    className={`${form_classes} mr-4`}
                    placeholder="Country"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={experience.state}
                    onChange={(e) => {
                      setState(e.target.value);
                      experience_list[index].state = e.target.value;
                    }}
                    placeholder="State / Province"
                    className={`mr-4 ${form_classes}`}
                  />
                  <input
                    className={form_classes}
                    type="text"
                    placeholder="City"
                  />
                </div>

                <div className="flex">
                  <select
                    value={experience.startMonth}
                    onChange={(e) => handleStartMonthChange(e, index)}
                    className={`${form_classes} mr-4`}
                  >
                    <option value="">Start Month</option>
                    {months.map((month) => (
                      <option key={month.label} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                  <select
                    value={experience.startYear}
                    onChange={(e) => handleStartYearChange(e, index)}
                    className={form_classes}
                  >
                    <option value="" disabled>
                      Start Year
                    </option>
                    {years.map((year) => (
                      <option key={year.label} value={year.value}>
                        {year.label}
                      </option>
                    ))}
                  </select>
                </div>
                {!current && (
                  <div className="flex">
                    <select
                      value={experience.endMonth}
                      onChange={(e) => handleEndMonthChange(e, index)}
                      className={`${form_classes} mr-4`}
                    >
                      <option value="">End Month</option>
                      {months.map((month) => (
                        <option key={month.label} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </select>
                    <select
                      value={experience.endYear}
                      onChange={(e) => handleEndYearChange(e, index)}
                      className={form_classes}
                      placeholder="End Year"
                    >
                      <option value="" disabled>
                        End Year
                      </option>
                      {years.map((year) => (
                        <option key={year.label} value={year.value}>
                          {year.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className=" flex items-center">
                  <input
                    type="checkbox"
                    value={experience.current}
                    onChange={(e) => handleCurrent(e, index)}
                    placeholder=""
                  />
                  <label
                    htmlFor="checkbox"
                    className=" ml-2 mt-[2px] text-sm font-light text-[#66666a]"
                  >
                    I currently work here
                  </label>
                </div>
                {experience.workDesc.map((desc, i) => {
                  return (
                    <div key={i} className="mt-6">
                      <textarea
                        value={desc.summary}
                        onChange={(e) => {
                          const list = [...experience_list];

                          list[index].workDesc[i].summary = e.target.value;
                          setExperienceList(list);
                        }}
                        placeholder="Add a description point"
                        className="p-4 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9] resize-none h-14"
                      />
                      {experience.workDesc.length > 1 && (
                        <div className="flex justify-end">
                          <button
                            onClick={(e) => removeDescription(e, index, i)}
                            className="flex items-center border-none outline-none"
                          >
                            <div className=" bg-[#fb3b3b] p-1 border rounded-full">
                              <FaMinus color="#f5f5f5" size="0.5rem" />{" "}
                            </div>
                            <span className=" ml-3 font-extrabold text-xs text-[#8c8c8f]">
                              Remove Description
                            </span>
                          </button>
                        </div>
                      )}
                      <button
                        onClick={(e) => addDescription(e, index)}
                        className="flex items-center border-none outline-none mb-6"
                      >
                        <div className=" bg-[#FD853C] p-1 border rounded-full">
                          <FaPlus color="#f5f5f5" size="0.5rem" />{" "}
                        </div>
                        <span className=" ml-3 font-extrabold text-xs text-[#8c8c8f]">
                          Add Description
                        </span>
                      </button>
                    </div>
                  );
                })}
                {experience_list.length > 1 && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => removeExperience(index)}
                      className="flex items-center border-none outline-none mb-6 mt-6"
                    >
                      <div className=" bg-[#fb3b3b] p-1 border rounded-full">
                        <FaMinus color="#f5f5f5" size="0.8rem" />{" "}
                      </div>
                      <span className=" ml-3 font-extrabold text-sm text-[#8c8c8f]">
                        Remove Experience
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={addExperience}
              className="flex items-center border-none outline-none mb-6 mt-6"
            >
              <div className=" bg-[#665d99] p-1 border rounded-full">
                <FaPlus color="#f5f5f5" size="0.8rem" />{" "}
              </div>
              <span className=" ml-3 font-extrabold text-sm text-[#8c8c8f]">
                Add Experience
              </span>
            </button>
          </form>
        </div>
        <div className=" hidden flex-col md:ml-10 md:flex">
          <div className=" w-[300px] h-[422px] shadow rounded-lg">
            {" "}
            <img src={ResumeTemplateSample1Image} alt="template" />
          </div>
        </div>
      </div>
      <div className="w-8/12 lg:max-w-4xl flex flex-col justify-center mx-auto mt-12 gap-5 md:flex-row">
        <button
          onClick={previous}
          className="w-full border border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-4"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] mx-auto py-5 px-6 bg-[#332A66]"
        >
          Continue
        </button>
      </div>
    </main>
  );
};

export default PreviousExperience;
