/* eslint-disable react-hooks/exhaustive-deps */
import * as FaIcon from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTemplateContext } from "../../../../../../middleware/resume";

import NavigationButton from "../navigationButton";
import { onSectionComplete, verifyInput } from "../verification";
import CityInput from "../../../../../../components/form/cityInput";
import StateInput from "../../../../../../components/form/stateInput";
import CountryInput from "../../../../../../components/form/countryInput";
import DateSelector from "../../../../../../components/form/dateSelector";

function College() {
  const [stateId, setStateId] = useState(0);
  const [countryId, setCountryId] = useState(0);

  const schoolRef = useRef(null);
  const degreeRef = useRef(null);

  const allErrMsg = [schoolRef, degreeRef];

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
      case "startMonth":
      case "startYear":
      case "endMonth":
      case "endYear":
        errorHolder = document.getElementById(`${name}Error`);
        verifyInput(value, errorHolder, name);
        break;
      case "current":
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
        case "startMonth":
        case "startYear":
          errorHolder = document.getElementById(`${holder}Error`);
          verifyInput(education[holder], errorHolder, holder);
          break;
        case "current":
          break;
        case "endMonth":
        case "endYear":
          if (education.current) {
            break;
          } else {
            errorHolder = document.getElementById(`${holder}Error`);
            verifyInput(education[holder], errorHolder, holder);
            break;
          }
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
      education.degree !== "" &&
      education.country &&
      (education.startMonth !== "" || education.startYear !== "") &&
      (education.current ||
        education.endMonth !== "" ||
        education.endYear !== "")
    ) {
      navigate("/resume/builder/skills");
    }
  };

  return (
    <section className="max-w-6xl flex flex-col justify-between gap-10 mt-8">
      <div className="w-full mx-auto self-center">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          What’s your college or university?
        </h2>

        <form className="w-full mt-12">
          <div className="mt-6">
            <div className="flex flex-col">
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                className="input-container"
                value={education.schoolName}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                onInput={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="College / University Name"
              />
              <label
                className="-mt-5 text-xs pl-4 text-error-500 hidden"
                htmlFor="schoolName"
                ref={schoolRef}
              ></label>
            </div>

            <div className="flex flex-col">
              <input
                className="input-container"
                value={education.degree}
                name="degree"
                id="degree"
                type="text"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                onInput={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Degree"
              />
              <label
                className="-mt-5 text-xs pl-4 text-error-500 hidden"
                htmlFor="degree"
                ref={degreeRef}
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
              {/* Start Month */}
              <DateSelector
                monthPicker
                handleDataChange={(name, value) => {
                  handleChange(name, value);
                }}
                id="startMonth"
                year={education.startYear}
                month={education.startMonth}
                placeholder="Start Month"
              />

              {/* Start Year */}
              <DateSelector
                handleDataChange={(name, value) => handleChange(name, value)}
                id="startYear"
                year={education.startYear}
                month={education.startMonth}
                placeholder="Start Year"
                maxDate
              />
            </div>

            {!education.current && (
              <div className="flex gap-4">
                {/* End Month */}
                <DateSelector
                  monthPicker
                  handleDataChange={(name, value) => handleChange(name, value)}
                  id="endMonth"
                  year={education.endYear}
                  month={education.endMonth}
                  placeholder="End Month"
                />

                {/* End Year */}
                <DateSelector
                  handleDataChange={(name, value) => handleChange(name, value)}
                  id="endYear"
                  year={education.endYear}
                  month={education.endMonth}
                  placeholder="End Year"
                  minDate={{
                    month: education.startMonth,
                    year: education.startYear,
                  }}
                />
              </div>
            )}
            <div
              className="w-fit flex gap-2 items-center cursor-pointer"
              onClick={() => {
                handleChange("current", !education.current);
              }}
            >
              <div
                className={`w-5 h-5 rounded-sm border-[1.5px] border-primary-600 flex items-center justify-center ${
                  education.current ? "bg-primary-400" : "bg-white"
                }`}
              >
                {education.current && (
                  <FaIcon.FaCheck size=".4rem" color="#fff" />
                )}
              </div>
              <span className="text-sm font-light text-neutral-300">
                I currently attend here
              </span>
            </div>
          </div>
        </form>
      </div>

      <NavigationButton back={cancelEdu} cont={handleSubmit} />
    </section>
  );
}

export default College;
