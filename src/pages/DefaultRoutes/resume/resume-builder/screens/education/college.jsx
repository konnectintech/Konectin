/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../../middleware/resume";

import { MdArrowDropDown } from "react-icons/md";
import DatePicker from "react-multi-date-picker";
import NavigationButton from "../navigationButton";
import { GetCountries, GetState, GetCity } from "react-country-state-city";

function College() {
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

    navigate("/resume/builder/skills");
  };

  return (
    <section className="max-w-6xl flex flex-col justify-between gap-10 mt-8">
      <div className="w-full mx-auto self-center">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          What’s your college or university?
        </h2>

        <form className="w-full mt-12">
          <div className="mt-6">
            <input
              className="input-container"
              value={education.schoolName}
              name="schoolName"
              type="text"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
              placeholder="College / University Name"
            />
            <input
              className="input-container"
              value={education.degree}
              name="degree"
              type="text"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
              placeholder="Degree"
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
                  <div className="absolute flex flex-col bg-primary-600 text-white left-0 border overflow-y-auto h-[30vh] top-full w-full">
                    {countriesList.map((item, index) => (
                      <div
                        className="w-full py-3 px-6 cursor-pointer hover:bg-primary-400"
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
                  <div className="absolute flex flex-col bg-primary-600 text-white left-0 border overflow-y-auto h-[30vh] top-full w-full">
                    {stateList.map((item, index) => (
                      <div
                        className="w-full py-3 px-6 cursor-pointer hover:bg-primary-400"
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
                  <div className="absolute flex flex-col bg-primary-600 text-white left-0 border overflow-y-auto h-[30vh] top-full w-full">
                    {cityList.map((item, index) => (
                      <div
                        className="w-full py-3 px-6 cursor-pointer hover:bg-primary-400"
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
          </div>
        </form>
      </div>

      <NavigationButton back={cancelEdu} cont={handleSubmit} />
    </section>
  );
}

export default College;
