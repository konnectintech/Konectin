import { useState, useEffect } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
import { months } from "../../../../../assets/data/months";
import { years } from "../../../../../assets/data/years";
import { useNavigate } from "react-router-dom";

const College = ({ data, handleBack }) => {
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
    "p-4 mb-6 text-[11px] w-full text-primary-200 border border-neutral-500 outline-0 rounded-[4px] bg-neutral-1000";

  const navigate = useNavigate();

  useEffect(() => {
    if (data.education?.length) {
      setEducationList(data.education);
    }
  }, [data]);

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

  // const addEducation = (e) => {
  //   e.preventDefault();
  //   setEducationList([
  //     ...education_list,
  //     {
  //       schoolName: "",
  //       country: "",
  //       degree: "",
  //       state: "",
  //       city: "",
  //       graduated: false,
  //       graduation_month: null,
  //       graduation_year: null,
  //     },
  //   ]);
  // };

  // const removeEducation = (index) => {
  //   const list = [...education_list];
  //   list.splice(index, 1);
  //   setEducationList(list);
  // };

  const handleGraduated = (e, index) => {
    setGraduated(e.target.checked);
    education_list[index].graduated = e.target.checked;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (school_name && country && state && city) {
      data.education = education_list;
    }

    navigate("/resume/builder/skills");
  };

  return (
    <section className="max-w-6xl flex flex-col justify-between gap-10 mt-8">
      <div className="w-full mx-auto self-center">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
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
              <div className="flex">
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
                  value={graduated}
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
            </div>
          ))}
        </form>
      </div>

      <div className="max-w-xl flex flex-col max-md:justify-center gap-5 md:flex-row">
        <button
          onClick={handleBack}
          className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm py-3 px-[4.5rem]"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm text-neutral-1000 py-3 px-[4.5rem] bg-primary-600"
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default College;
