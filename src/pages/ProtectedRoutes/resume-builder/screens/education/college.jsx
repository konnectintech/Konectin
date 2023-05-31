import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { months } from "../../../../../assets/data/months";
import { years } from "../../../../../assets/data/years";

const College = ({ data, next, previous, template }) => {
  const [education_list, setEducationList] = useState(data.education);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [school_name, setSchoolName] = useState("");
  const [country, setCountry] = useState("");
  // const [degree, setDegree] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [graduated, setGraduated] = useState("false");
  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]";

  useEffect(() => {
    if (data.education?.length) {
      setEducationList(data.education);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMonthChange = (event, index) => {
    setMonth(event.target.value);
    if (month) {
      education_list[index].graduationMonth = event.target.value;
    }
  };
  const handleYearChange = (event, index) => {
    setYear(event.target.value);
    if (year) {
      education_list[index].graduationYear = event.target.value;
    }
  };

  const addEducation = (e) => {
    e.preventDefault();
    setEducationList([
      ...education_list,
      {
        schoolName: "",
        country: "",
        degree: "",
        state: "",
        city: "",
        graduated: false,
        graduation_month: null,
        graduation_year: null,
      },
    ]);
  };

  const removeEducation = (index) => {
    const list = [...education_list];
    list.splice(index, 1);
    setEducationList(list);
  };

  const handleGraduated = (e, index) => {
    console.log(graduated);
    setGraduated(e.target.checked);
    education_list[index].graduated = e.target.checked;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (school_name && country && state && city) {
      data.education = education_list;
    }
    next(data);
  };
  return (
    <>
      <section className=" max-w-6xl flex justify-between items-center gap-10">
        <div className="mx-auto">
          <h2 className=" text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
            What’s your college or university?
          </h2>

          <form className="w-full mt-12">
            {education_list?.map((education, index) => (
              <div
                key={index}
                className={`mt-6 ${
                  education_list.length > 1 && " border-b border-[#2d2d2e8a]"
                }`}
              >
                <input
                  className={form_classes}
                  value={education.schoolName}
                  type="text"
                  onChange={(e) => {
                    setSchoolName(e.target.value);
                    education_list[index].schoolName = e.target.value;
                  }}
                  placeholder="College / University Name"
                />
                <input
                  className={form_classes}
                  value={education.degree}
                  type="text"
                  onChange={(e) => {
                    setSchoolName(e.target.value);
                    education_list[index].degree = e.target.value;
                  }}
                  placeholder="Degree"
                />
                <div className=" flex">
                  <input
                    type="text"
                    value={education.country}
                    placeholder="Country"
                    onChange={(e) => {
                      setCountry(e.target.value);
                      education_list[index].country = e.target.value;
                    }}
                    className={`mr-4 ${form_classes}`}
                  />
                  <input
                    type="text"
                    value={education.state}
                    onChange={(e) => {
                      setState(e.target.value);
                      education_list[index].state = e.target.value;
                    }}
                    placeholder="State / Province"
                    className={`mr-4 ${form_classes}`}
                  />
                  <input
                    type="text"
                    value={education.city}
                    name="city"
                    onChange={(e) => {
                      setCity(e.target.value);
                      education_list[index].city = e.target.value;
                    }}
                    className={form_classes}
                    placeholder="City"
                  />
                </div>

                <div
                  className={`${form_classes} flex justify-between items-center`}
                >
                  <label>Graduated?</label>
                  <input
                    type="checkbox"
                    value={education.graduated}
                    onChange={(e) => handleGraduated(e, index)}
                    placeholder=""
                  />
                </div>

                <div className="flex">
                  <select
                    value={education.graduationMonth}
                    onChange={(e) => handleMonthChange(e, index)}
                    className={`${form_classes} mr-4`}
                    placeholder="Graduation Month"
                  >
                    {months.map((month) => (
                      <option key={month.label} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                  <select
                    value={education.graduationYear}
                    onChange={(e) => handleYearChange(e, index)}
                    className={form_classes}
                    placeholder="Graduation Year"
                  >
                    {years.map((year) => (
                      <option key={year.label} value={year.value}>
                        {year.label}
                      </option>
                    ))}
                  </select>
                </div>
                {education_list.length > 1 && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => removeEducation(index)}
                      className="flex items-center border-none outline-none mb-6 mt-6"
                    >
                      <div className=" bg-[#fb3b3b] p-1 border rounded-full">
                        <FaMinus color="#f5f5f5" size="0.8rem" />{" "}
                      </div>
                      <span className=" ml-3 font-extrabold text-sm text-[#8c8c8f]">
                        Remove Education
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={addEducation}
              className="flex items-center border-none outline-none mb-6 mt-6"
            >
              <div className=" bg-[#665d99] p-1 border rounded-full">
                <FaPlus color="#f5f5f5" size="0.8rem" />{" "}
              </div>
              <span className=" ml-3 font-extrabold text-sm text-[#8c8c8f]">
                Add Education
              </span>
            </button>
          </form>
        </div>
        <div className=" hidden xl:ml-20 xl:flex">
          <div className="flex self-end w-[503px] rounded-lg">{template()}</div>
        </div>
      </section>
      <div className="w-8/12 flex flex-col justify-center mx-auto mt-12 gap-5 md:flex-row">
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
    </>
  );
};

export default College;
