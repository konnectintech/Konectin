/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../../middleware/resume";

import { FaPlus } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import DatePicker from "react-multi-date-picker";
import NavigationButton from "../navigationButton";
import { GetCountries, GetState, GetCity } from "react-country-state-city";

function HighSchool() {
  const [showCountry, setShowCountry] = useState(false);
  const [showState, setShowState] = useState(false);
  const [showCity, setShowCity] = useState(false);

  const [countryid, setCountryid] = useState(0);

  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);

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
            {/* Country  */}
            <div className="input-container relative">
              <div
                onClick={() => setShowCountry((prev) => !prev)}
                className="cursor-pointer flex gap-2 items-center w-full"
              >
                <input
                  readOnly
                  placeholder="Enter Country"
                  className="bg-transparent outline-none border-none w-full h-full"
                  value={education.country}
                />
                <MdArrowDropDown size="1.5rem" />
              </div>
              {showCountry && (
                <div className="absolute flex flex-col bg-neutral-1000 left-0 border overflow-y-auto h-[30vh] top-full w-full">
                  {countriesList.map((item, index) => (
                    <div
                      className="w-full py-3 px-6 cursor-pointer hover:bg-purple-400 hover:text-white"
                      key={index}
                      onClick={() => {
                        setShowCountry((prev) => !prev);
                        handleChange("country", item.name);
                        setCountryid(item.id);
                        GetState(item.id).then((result) => {
                          setStateList(result);
                        });
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="input-container relative">
              {stateList.length <= 0 ? (
                <input
                  onInput={(e) => handleChange("state", e.target.value)}
                  onChange={(e) => handleChange("state", e.target.value)}
                  placeholder="Enter State"
                  className="bg-transparent outline-none border-none w-full h-full"
                  value={education.state}
                />
              ) : (
                <div
                  onClick={() => setShowState((prev) => !prev)}
                  className="cursor-pointer flex gap-2 items-center w-full"
                >
                  <input
                    readOnly
                    className="bg-transparent outline-none border-none w-full h-full"
                    value={education.state}
                  />
                  <MdArrowDropDown size="1.5rem" />
                </div>
              )}

              {showState && (
                <div className="absolute flex flex-col bg-neutral-1000 left-0 border overflow-y-auto h-[30vh] top-full w-full">
                  {stateList.map((item, index) => (
                    <div
                      className="w-full py-3 px-6 cursor-pointer hover:bg-purple-400 hover:text-white"
                      key={index}
                      onClick={() => {
                        setShowState((prev) => !prev);
                        handleChange("state", item.name);
                        GetCity(countryid, item.id).then((result) => {
                          setCityList(result);
                        });
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="input-container relative">
              {cityList.length <= 0 ? (
                <input
                  onInput={(e) => handleChange("city", e.target.value)}
                  onChange={(e) => handleChange("city", e.target.value)}
                  placeholder="Enter City"
                  className="bg-transparent outline-none border-none w-full h-full"
                  value={education.city}
                />
              ) : (
                <div
                  onClick={() => setShowCity((prev) => !prev)}
                  className="cursor-pointer flex gap-2 items-center w-full"
                >
                  <input
                    readOnly
                    className="bg-transparent outline-none border-none w-full h-full"
                    value={education.city}
                  />
                  <MdArrowDropDown size="1.5rem" />
                </div>
              )}
              {showCity && (
                <div className="absolute flex flex-col bg-neutral-1000 left-0 border overflow-y-auto h-[30vh] top-full w-full">
                  {cityList.map((item, index) => (
                    <div
                      className="w-full py-3 px-6 cursor-pointer hover:bg-purple-400 hover:text-white"
                      key={index}
                      onClick={() => {
                        setShowCity((prev) => !prev);
                        handleChange("city", item.name);
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
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
