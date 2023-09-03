/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../../middleware/resume";

import { FaPlus } from "react-icons/fa";
import DatePicker from "react-multi-date-picker";
import NavigationButton from "../navigationButton";
import {
  CountrySelect,
  CitySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

function HighSchool() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setStateid] = useState(0);

  const { templateData, setTemplateData } = useTemplateContext();
  const currentEditedEducation = templateData.currentEditedEducation;

  const [education, setEducation] = useState(
    templateData.education[currentEditedEducation - 1]
  );

  const navigate = useNavigate();

  useEffect(() => {
    setTemplateData((prev) => ({
      ...prev,
      education: Object.values(prev.education).map((obj, id) => {
        if (id === currentEditedEducation - 1) {
          return education;
        }
        return obj;
      }),
    }));
  }, [education]);

  const handleChange = (name, value) => {
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (sub, index, value) => {
    setEducation((prev) => ({
      ...prev,
      [sub]: prev[sub].map((obj, id) => (id === index ? { name: value } : obj)),
    }));
  };

  useEffect(() => {
    if (templateData.education) {
      setEducation(templateData.education[currentEditedEducation - 1]);
    }
  }, [currentEditedEducation]);

  // const addEducation = (e) => {
  //   e.preventDefault();
  //   setEducation([
  //     ...education,
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
  //   const list = [...education];
  //   list.splice(index, 1);
  //   setEducation(list);
  // };

  const cancelEdu = () => {
    templateData.education.splice(currentEditedEducation - 1, 1);

    setTemplateData((prev) => ({
      ...prev,
      education: templateData.education,
      currentEditedEducation: Object.keys(templateData.education).length - 1,
    }));

    navigate("/resume/builder/education/select-edu");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/resume/builder/skills");
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="mx-auto">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Add High School
        </h2>

        <div className="w-full mt-6">
          <input
            type="text"
            name="schoolName"
            value={education.schoolName}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            onInput={(e) => handleChange(e.target.name, e.target.value)}
            className="input-container"
            placeholder="High School Name"
          />
          <div className="flex gap-4">
            <CountrySelect
              showFlag={false}
              containerClassName="input-container"
              onTextChange={(e) => handleChange("country", e.target.value)}
              onChange={(e) => {
                setCountryid(e.id);
                handleChange("country", e.name);
              }}
              placeHolder={education.country ? education.country : "Country"}
            />
            <StateSelect
              containerClassName="input-container"
              countryid={countryid}
              onTextChange={(e) => handleChange("state", e.target.value)}
              onChange={(e) => {
                setStateid(e.id);
                handleChange("state", e.name);
              }}
              placeHolder={education.state ? education.state : "State"}
            />
            <CitySelect
              containerClassName="input-container"
              countryid={countryid}
              stateid={stateid}
              onTextChange={(e) => handleChange("city", e.target.value)}
              onChange={(e) => {
                handleChange("city", e.name);
              }}
              placeHolder={education.city ? education.city : "Country"}
            />
          </div>

          <div className="flex gap-4">
            <DatePicker
              format="MMMM"
              arrow={false}
              buttons={false}
              onlyMonthPicker
              containerClassName="w-full"
              inputClass="input-container"
              placeholder="Graduation Month"
              className="bg-primary-600 text-white"
              onChange={(e) => {
                const date = e.toDate();
                handleChange(
                  "month",
                  date.toLocaleString("default", { month: "long" })
                );
              }}
            />
            <DatePicker
              arrow={false}
              onlyYearPicker
              containerClassName="w-full"
              inputClass="input-container"
              placeholder="Graduation Year"
              className="bg-primary-600 text-white"
              onChange={(e) => {
                const date = e.toDate();
                handleChange("year", date.getFullYear());
              }}
              maxDate={new Date()}
            />
          </div>
          <div>
            {education.relevantCourses.map((course, index) => (
              <input
                key={course + index}
                className="input-container"
                type="text"
                name="relevantCourse"
                placeholder="Relevant Course"
                value={course.name}
                onChange={(e) =>
                  handleArrayChange("relevantCourses", index, e.target.value)
                }
                onInput={(e) =>
                  handleArrayChange("relevantCourses", index, e.target.value)
                }
              />
            ))}
            <button
              onClick={() =>
                setEducation((prev) => ({
                  ...prev,
                  relevantCourses: [...prev.relevantCourses, ""],
                }))
              }
              className="flex items-center gap-3 border-none outline-none mb-6"
            >
              <div className="bg-primary-400 text-neutral-1000 w-6 h-6 flex items-center justify-center rounded-full">
                <FaPlus size="0.7rem" />
              </div>
              <span className="font-extrabold text-sm text-neutral-400">
                Add Relevant Course
              </span>
            </button>
          </div>
          <div>
            {education?.awards.map((award, index) => (
              <input
                key={award + index}
                className="input-container"
                type="text"
                placeholder="Award/Honour"
                value={award.name}
                onChange={(e) =>
                  handleArrayChange("awards", index, e.target.value)
                }
                onInput={(e) =>
                  handleArrayChange("awards", index, e.target.value)
                }
              />
            ))}
            <button
              onClick={() =>
                setEducation((prev) => ({
                  ...prev,
                  awards: [...prev.awards, ""],
                }))
              }
              className="flex items-center gap-3 border-none outline-none mb-6"
            >
              <div className="bg-primary-400 text-neutral-1000 w-6 h-6 flex items-center justify-center rounded-full">
                <FaPlus size="0.7rem" />
              </div>
              <span className="font-extrabold text-sm text-neutral-400">
                Add Award/Honour
              </span>
            </button>
          </div>
        </div>
      </div>

      <NavigationButton back={cancelEdu} cont={handleSubmit} />
    </section>
  );
}

export default HighSchool;
