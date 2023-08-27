/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../../middleware/resume";

import DatePicker from "react-multi-date-picker";
import NavigationButton from "../navigationButton";
import {
  CountrySelect,
  CitySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

function College() {
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
          </div>
        </form>
      </div>

      <NavigationButton back={cancelEdu} cont={handleSubmit} />
    </section>
  );
}

export default College;
