/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../../middleware/resume";

import { FaPlus } from "react-icons/fa";
import DatePicker from "react-multi-date-picker";
import NavigationButton from "../navigationButton";
import CountryInput from "../../../../../../components/form/countryInput";
import StateInput from "../../../../../../components/form/stateInput";
import CityInput from "../../../../../../components/form/cityInput";
import { onSectionComplete, verifyInput } from "../verification";

function HighSchool() {
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);

  const schoolRef = useRef(null);
  const endMonthRef = useRef(null);
  const endYearRef = useRef(null);

  let allErrMsg = [schoolRef, endMonthRef, endYearRef];

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

    let errorHolder;
    switch (name) {
      case "city":
      case "state":
      case "country":
        errorHolder = document.getElementById(`${name}Error`);
        verifyInput(value, errorHolder, name);
        break;
      case "current":
        break;
      case "endMonth":
      case "endYear":
        errorHolder = allErrMsg.filter((ref) => {
          return ref.current.getAttribute("for") === name;
        });
        errorHolder = errorHolder[0].current;
        verifyInput(value, errorHolder, name);
        break;
      default:
        errorHolder = allErrMsg.filter(
          (ref) => ref.current.getAttribute("for") === name
        );
        errorHolder = errorHolder[0].current;
        verifyInput(value, errorHolder, name);
        break;
    }
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
      currentEditedEducation:
        currentEditedEducation - 1 <= 0 ? 0 : currentEditedEducation - 1,
    }));

    navigate("/resume/builder/education/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSectionComplete(templateData);

    const formHolder = Object.keys(education);

    formHolder.forEach((holder) => {
      let errorHolder;
      switch (holder) {
        case "city":
        case "state":
        case "country":
          errorHolder = document.getElementById(`${holder}Error`);
          verifyInput(education[holder], errorHolder, holder);
          break;
        case "relevantCourses":
        case "awards":
          break;
        case "endMonth":
        case "endYear":
          errorHolder = allErrMsg.filter(
            (ref) => ref.current.getAttribute("for") === holder
          );
          errorHolder = errorHolder[0].current;
          verifyInput(education[holder], errorHolder, holder);
          break;
        default:
          errorHolder = allErrMsg.filter(
            (ref) => ref.current.getAttribute("for") === holder
          );

          errorHolder = errorHolder[0].current;
          verifyInput(education[holder], errorHolder, holder);
          break;
      }
    });

    if (
      education.schoolName !== "" &&
      education.country &&
      (education.endMonth !== "" || education.endYear !== "")
    ) {
      navigate("/resume/builder/skills");
    }
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="mx-auto">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Add High School
        </h2>

        <div className="w-full mt-6">
          <div className="flex flex-col">
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              className="input-container"
              value={education.schoolName}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
              placeholder="High School Name"
            />
            <label
              className="-mt-5 text-xs pl-4 text-error-500 hidden"
              htmlFor="schoolName"
              ref={schoolRef}
            ></label>
          </div>

          <div className="flex gap-4">
            {/* Country  */}
            <CountryInput
              handleChange={(name, value) => handleChange(name, value)}
              country={education.country}
              setCountryId={setCountryId}
            />

            {/* State */}
            <StateInput
              countryId={countryId}
              handleChange={(name, value) => handleChange(name, value)}
              state={education.state}
              setStateId={setStateId}
            />

            <CityInput
              countryId={countryId}
              stateId={stateId}
              handleChange={(name, value) => handleChange(name, value)}
              city={education.city}
            />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col w-full">
              <DatePicker
                format="MMMM"
                arrow={false}
                buttons={false}
                onlyMonthPicker
                id="endMonth"
                placeholder={
                  education.endMonth === ""
                    ? "Graduation Month"
                    : education.endMonth
                }
                value={new Date(`${education.endMonth} ${education.endYear}`)}
                // containerClassName="w-full"
                inputClass="input-container"
                className="bg-primary-600 text-white"
                onChange={(e) => {
                  const date = e.toDate();
                  handleChange(
                    "endMonth",
                    date.toLocaleString("default", { month: "long" })
                  );
                }}
              />

              <label
                className="-mt-5 mb-1 text-xs pl-4 text-error-500 hidden"
                htmlFor="endMonth"
                ref={endMonthRef}
              ></label>
            </div>

            <div className="flex flex-col w-full">
              <DatePicker
                arrow={false}
                onlyYearPicker
                id="endYear"
                placeholder={
                  education.endYear === ""
                    ? "Graduation Year"
                    : education.endYear
                }
                value={new Date(`${education.endMonth} ${education.endYear}`)}
                maxDate={new Date()}
                // containerClassName="w-full"
                inputClass="input-container"
                className="bg-primary-600 text-white"
                onChange={(e) => {
                  const date = e.toDate();
                  handleChange("endYear", date.getFullYear());
                }}
              />

              <label
                className="-mt-5 mb-1 text-xs pl-4 text-error-500 hidden"
                htmlFor="endYear"
                ref={endYearRef}
              ></label>
            </div>
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
