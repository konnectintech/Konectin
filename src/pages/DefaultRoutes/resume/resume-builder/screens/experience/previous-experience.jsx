import * as FaIcon from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import { MdArrowDropDown } from "react-icons/md";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";
import JobTitleInput from "../../../../../../components/jobTitleInput";
import { useTemplateContext } from "../../../../../../middleware/resume";
import { GetCountries, GetState, GetCity } from "react-country-state-city";

const PreviousExperience = ({ data, handleBack, handleInputChange }) => {
  const [showCountry, setShowCountry] = useState(false);
  const [showState, setShowState] = useState(false);
  const [showCity, setShowCity] = useState(false);

  const [countryid, setCountryid] = useState(0);

  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const jobTitleRef = useRef(null)

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);

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
              ref={jobTitleRef}
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
                    value={data?.country}
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
                          handleInputChange("country", item.name);
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
                    onInput={(e) => handleInputChange("state", e.target.value)}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    placeholder="Enter State"
                    className="bg-transparent outline-none border-none w-full h-full"
                    value={data?.state}
                  />
                ) : (
                  <div
                    onClick={() => setShowState((prev) => !prev)}
                    className="cursor-pointer flex gap-2 items-center w-full"
                  >
                    <input
                      readOnly
                      className="bg-transparent outline-none border-none w-full h-full"
                      value={data?.state}
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
                          handleInputChange("state", item.name);
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
                    onInput={(e) => handleInputChange("city", e.target.value)}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Enter City"
                    className="bg-transparent outline-none border-none w-full h-full"
                    value={data?.city}
                  />
                ) : (
                  <div
                    onClick={() => setShowCity((prev) => !prev)}
                    className="cursor-pointer flex gap-2 items-center w-full"
                  >
                    <input
                      readOnly
                      className="bg-transparent outline-none border-none w-full h-full"
                      value={data?.city}
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
                          handleInputChange("city", item.name);
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
