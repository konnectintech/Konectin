import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";
import { GetCountries, GetState, GetCity } from "react-country-state-city";

const BasicInformation = ({ data, onInputChange }) => {
  const {
    firstName,
    lastName,
    city,
    country,
    phoneNumber,
    state,
    zipCode,
    email,
  } = data?.basicInfo;

  const [code, setCode] = useState("");
  const [showCountry, setShowCountry] = useState(false);
  const [showState, setShowState] = useState(false);
  const [showCity, setShowCity] = useState(false);
  const [countryInput, setCountryInput] = useState("");

  const [countryid, setCountryid] = useState(0);

  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countriesList);

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
      setFilteredCountries(result);
    });
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    onInputChange({
      section: "basicInfo",
      subsection: "phoneCode",
      values: code,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  const handleInputChange = (event, name) => {
    const { value } = event.target;
    onInputChange({ section: "basicInfo", subsection: name, values: value });
  };

  const handleCountryInput = (input) => {
    setShowCountry(true);
    setCountryInput(input);
    const filtered = countriesList.filter((country) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleSelectChange = (event, section) => {
    const { name } = event;
    onInputChange({ section: "basicInfo", subsection: section, values: name });
  };

  const handleSubmit = () => {
    if (firstName && lastName && city && state && email && country) {
      const jobArray = Object.entries(data.jobExperience)[0];
      if (Object.keys(data.jobExperience).length >= 1) {
        if (jobArray[1].company === "" || jobArray[1].workDesc.length <= 28) {
          navigate("employment-experience");
          return;
        }

        navigate("/resume/builder/employment-experience/job-activities");
        return;
      }

      navigate("employment-experience");
    }
  };

  return (
    <div className="max-w-6xl flex flex-col lg:flex-row items-start justify-between self-center mx-auto gap-10">
      <div className="flex flex-col justify-center w-full">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Basic Information
        </h2>
        <p className="text-[#66666a] text-sm tracking-wide mt-3 mb-5">
          This information will placed at the top of your resume.
        </p>

        <div className="w-full">
          <div className="flex gap-4">
            <input
              className="input-container"
              type="text"
              value={firstName}
              onChange={(e) => handleInputChange(e, "firstName")}
              placeholder="First Name"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => handleInputChange(e, "lastName")}
              className="input-container"
            />
          </div>
          <div className="flex gap-4">
            <input
              className="input-container"
              type="tel"
              minLength="4"
              maxLength="6"
              value={zipCode}
              onChange={(e) => handleInputChange(e, "zipCode")}
              placeholder="Zip Code"
            />
            <div className="input-container relative">
              {cityList.length <= 0 ? (
                <input
                  onInput={(e) => handleInputChange(e, "city")}
                  onChange={(e) => handleInputChange(e, "city")}
                  placeholder="Enter City"
                  className="bg-transparent outline-none border-none w-full h-full"
                  value={city}
                />
              ) : (
                <div
                  onClick={() => setShowCity((prev) => !prev)}
                  className="cursor-pointer flex gap-2 items-center w-full"
                >
                  <input
                    readOnly
                    className="bg-transparent outline-none border-none w-full h-full"
                    value={city}
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
                        handleSelectChange(item, "city");
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
            <div className="input-container relative">
              {stateList.length <= 0 ? (
                <input
                  onInput={(e) => handleInputChange(e, "state")}
                  onChange={(e) => handleInputChange(e, "state")}
                  placeholder="Enter State"
                  className="bg-transparent outline-none border-none w-full h-full"
                  value={state}
                />
              ) : (
                <div
                  onClick={() => setShowState((prev) => !prev)}
                  className="cursor-pointer flex gap-2 items-center w-full"
                >
                  <input
                    readOnly
                    className="bg-transparent outline-none border-none w-full h-full"
                    value={state}
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
                        handleSelectChange(item, "state");
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

            {/* Country  */}
            <div className="input-container relative">
              <div
                onClick={() => setShowCountry((prev) => !prev)}
                className="cursor-pointer flex gap-2 items-center w-full"
              >
                <input
                  className="bg-transparent outline-none border-none w-full h-full"
                  value={countryInput}
                  onChange={(e) => handleCountryInput(e.target.value)}
                />
                <MdArrowDropDown size="1.5rem" />
              </div>
              {showCountry && (
                <div className="absolute flex flex-col bg-primary-600 text-white left-0 border overflow-y-auto h-[30vh] top-full w-full">
                  {filteredCountries.map((item, index) => (
                    <div
                      className="w-full py-3 px-6 cursor-pointer hover:bg-primary-400"
                      key={index}
                      onClick={() => {
                        setShowCountry((prev) => !prev);
                        setCode(item.phone_code);
                        handleSelectChange(item, "country");
                        setCountryid(item.id);
                        setCountryInput(item.name);
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
          </div>

          <input
            className="input-container"
            type="text"
            placeholder="Phone"
            minLength="12"
            maxLength="12"
            value={phoneNumber}
            onChange={(e) => {
              e.target.value = e.target.value
                .replace(/[^0-9]/g, "")
                .replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")
                .trim();

              onInputChange({
                section: "basicInfo",
                subsection: "phoneNumber",
                values: e.target.value,
              });
            }}
          />

          <input
            className="input-container"
            type="email"
            value={email}
            onChange={(e) => handleInputChange(e, "email")}
            placeholder="Email*"
          />
        </div>
        <NavigationButton
          back={() => navigate("/resume/ai/template-selector")}
          cont={handleSubmit}
        />
      </div>

      <div className="max-lg:hidden">
        <SelectedTemplates data={data} />
      </div>
    </div>
  );
};

export default BasicInformation;
