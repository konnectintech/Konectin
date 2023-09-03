import * as FaIcon from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import JobTitleInput from "../../../../../../components/jobTitleInput";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";
import { useTemplateContext } from "../../../../../../middleware/resume";
import {
  CountrySelect,
  CitySelect,
  StateSelect,
} from "react-country-state-city";
import DatePicker from "react-multi-date-picker";
import { useState } from "react";

// Imported CSS
import "react-country-state-city/dist/react-country-state-city.css";

const PreviousExperience = ({ data, handleBack, handleInputChange }) => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setStateid] = useState(0);

  const navigate = useNavigate();
  const { templateData } = useTemplateContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // handleSubmit(formArray); Sends data to backend then
    navigate("/resume/builder/employment-experience/responsibilities");
  };

  return (
    <div className="max-w-6xl flex flex-col lg:flex-row items-start justify-between self-center mx-auto gap-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-xl md:max-w-[30ch] md:text-2xl leading-tight font-semibold md:leading-snug">
          What recent employment experience do you have?
        </h2>

        <div className="w-full">
          <div className="mt-6">
            <JobTitleInput
              title={data?.jobTitle}
              handleInputChange={({ subsection, values }) =>
                handleInputChange(subsection, values)
              }
              section="jobExperience"
              subsection="jobTitle"
            />
            <input
              className="input-container"
              type="text"
              name="company"
              value={data?.company}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              onInput={(e) => handleInputChange(e.target.name, e.target.value)}
              placeholder="Company / Organization Name"
            />
            <div className="flex gap-4">
              <CountrySelect
                showFlag={false}
                containerClassName="input-container"
                onTextChange={(e) =>
                  handleInputChange("country", e.target.value)
                }
                onChange={(e) => {
                  setCountryid(e.id);
                  handleInputChange("country", e.name);
                }}
                placeHolder={data?.country ? data.country : "Country"}
              />
              <StateSelect
                containerClassName="input-container"
                countryid={countryid}
                onTextChange={(e) => handleInputChange("state", e.target.value)}
                onChange={(e) => {
                  setStateid(e.id);
                  handleInputChange("state", e.name);
                }}
                placeHolder={data?.state ? data.state : "State"}
              />
              <CitySelect
                containerClassName="input-container"
                countryid={countryid}
                stateid={stateid}
                onTextChange={(e) => handleInputChange("city", e.target.value)}
                onChange={(e) => {
                  handleInputChange("city", e.name);
                }}
                placeHolder={data?.city ? data.city : "City"}
              />
            </div>

            <div className="flex gap-4">
              <DatePicker
                format="MMMM"
                arrow={false}
                buttons={false}
                onlyMonthPicker
                placeholder="Start Month"
                containerClassName="w-full"
                inputClass="input-container"
                className="bg-primary-600 text-white"
                onChange={(e) => {
                  const date = e.toDate();
                  handleInputChange(
                    "startMonth",
                    date.toLocaleString("default", { month: "long" })
                  );
                }}
              />
              <DatePicker
                arrow={false}
                onlyYearPicker
                placeholder="Start Year"
                containerClassName="w-full"
                inputClass="input-container"
                className="bg-primary-600 text-white"
                onChange={(e) => {
                  const date = e.toDate();
                  handleInputChange("startYear", date.getFullYear());
                }}
                maxDate={new Date()}
              />
            </div>
            {!data?.current && (
              <div className="flex gap-4">
                <DatePicker
                  format="MMMM"
                  arrow={false}
                  buttons={false}
                  onlyMonthPicker
                  placeholder="End Month"
                  containerClassName="w-full"
                  inputClass="input-container"
                  className="bg-primary-600 text-white"
                  onChange={(e) => {
                    const date = e.toDate();
                    handleInputChange(
                      "endMonth",
                      date.toLocaleString("default", { month: "long" })
                    );
                  }}
                />
                <DatePicker
                  arrow={false}
                  onlyYearPicker
                  placeholder="End Year"
                  minDate={new Date(`${data?.startMonth} ${data?.startYear}`)}
                  containerClassName="w-full"
                  inputClass="input-container"
                  className="bg-primary-600 text-white"
                  onChange={(e) => {
                    const date = e.toDate();
                    handleInputChange("endYear", date.getFullYear());
                  }}
                />
              </div>
            )}
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => handleInputChange("current", !data?.current)}
            >
              <div
                className={`w-5 h-5 rounded-sm border-[1.5px] border-primary-600 flex items-center justify-center ${
                  data?.current ? "bg-primary-400" : "bg-white"
                }`}
              >
                {data?.current && <FaIcon.FaCheck size=".4rem" color="#fff" />}
              </div>
              <span className="text-sm font-light text-neutral-300">
                I currently work here
              </span>
            </div>
          </div>

          <div className="mt-16">
            <NavigationButton back={handleBack} cont={handleSubmit} />
          </div>
        </div>
      </div>

      <div className="max-lg:hidden">
        <SelectedTemplates data={templateData} />
      </div>
    </div>
  );
};

export default PreviousExperience;
