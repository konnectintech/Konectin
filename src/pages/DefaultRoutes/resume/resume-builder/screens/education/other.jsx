/* eslint-disable react-hooks/exhaustive-deps */
import * as FaIcon from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../../middleware/resume";

import DatePicker from "react-multi-date-picker";
import NavigationButton from "../navigationButton";
import CountryInput from "../../../../../../components/form/countryInput";
import CityInput from "../../../../../../components/form/cityInput";
import StateInput from "../../../../../../components/form/stateInput";
import { onSectionComplete, verifyInput } from "../verification";

function Other() {
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);

  const schoolRef = useRef(null);
  const degreeRef = useRef(null);
  const startMonthRef = useRef(null);
  const startYearRef = useRef(null);
  const endMonthRef = useRef(null);
  const endYearRef = useRef(null);

  const [allErrMsg, setAllErrMsg] = useState([
    schoolRef,
    degreeRef,
    startMonthRef,
    startYearRef,
    endMonthRef,
    endYearRef,
  ]);

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

  useEffect(() => {
    if (education.current) {
      setAllErrMsg([schoolRef, degreeRef, startMonthRef, startYearRef]);
    } else {
      setAllErrMsg([
        schoolRef,
        degreeRef,
        startMonthRef,
        startYearRef,
        endMonthRef,
        endYearRef,
      ]);
    }
  }, [education.current]);

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
      case "startMonth":
      case "startYear":
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
        case "current":
          break;
        case "startMonth":
        case "startYear":
          errorHolder = allErrMsg.filter(
            (ref) => ref.current.getAttribute("for") === holder
          );
          errorHolder = errorHolder[0].current;
          verifyInput(education[holder], errorHolder, holder);
          break;
        case "endMonth":
        case "endYear":
          if (education.current) {
            break;
          } else {
            errorHolder = allErrMsg.filter(
              (ref) => ref.current.getAttribute("for") === holder
            );
            errorHolder = errorHolder[0].current;
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
              <div className="flex flex-col w-full">
                <DatePicker
                  format="MMMM"
                  arrow={false}
                  buttons={false}
                  onlyMonthPicker
                  id="startMonth"
                  placeholder={
                    education.startMonth === ""
                      ? "Start Month"
                      : education.startMonth
                  }
                  value={
                    new Date(`${education.startMonth} ${education.startYear}`)
                  }
                  // containerClassName="w-full"
                  inputClass="input-container"
                  className="bg-primary-600 text-white"
                  onChange={(e) => {
                    const date = e.toDate();
                    handleChange(
                      "startMonth",
                      date.toLocaleString("default", { month: "long" })
                    );
                  }}
                />

                <label
                  className="-mt-5 mb-1 text-xs pl-4 text-error-500 hidden"
                  htmlFor="startMonth"
                  ref={startMonthRef}
                ></label>
              </div>
              <div className="flex flex-col w-full">
                <DatePicker
                  arrow={false}
                  onlyYearPicker
                  id="startYear"
                  placeholder={
                    education.startYear === ""
                      ? "Start Year"
                      : education.startYear
                  }
                  value={
                    new Date(`${education.startMonth} ${education.startYear}`)
                  }
                  // containerClassName="w-full"
                  inputClass="input-container"
                  className="bg-primary-600 text-white"
                  onChange={(e) => {
                    const date = e.toDate();
                    handleChange("startYear", date.getFullYear());
                  }}
                  maxDate={new Date()}
                />
                <label
                  className="-mt-5 mb-1 text-xs pl-4 text-error-500 hidden"
                  htmlFor="startYear"
                  ref={startYearRef}
                ></label>
              </div>
            </div>

            {!education.current && (
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
                    value={
                      new Date(`${education.endMonth} ${education.endYear}`)
                    }
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
                    value={
                      new Date(`${education.endMonth} ${education.endYear}`)
                    }
                    minDate={
                      new Date(`${education.startMonth} ${education.startYear}`)
                    }
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

export default Other;
