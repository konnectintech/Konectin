import { useNavigate } from "react-router-dom";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useEffect, useState } from "react";

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
<<<<<<< HEAD
=======

  const [countryid, setCountryid] = useState(0);
  const [code, setCode] = useState("");
  const [stateid, setStateid] = useState(0);
>>>>>>> 5822cfa0a6b144e9a98bb71a8ed78e805a414b19

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
<<<<<<< HEAD
          <input
            className="input-container"
            type="text"
            placeholder="Phone"
            value={phoneNumber}
            onChange={(e) => handleInputChange(e, "phoneNumber")}
          />
=======
>>>>>>> 5822cfa0a6b144e9a98bb71a8ed78e805a414b19
          <div className="flex gap-4">
            <CitySelect
              containerClassName="input-container"
              countryid={countryid}
              stateid={stateid}
              onTextChange={(e) => handleInputChange(e, "city")}
              onChange={(e) => {
                handleSelectChange(e, "city");
              }}
              placeHolder="Select City"
            />
            <StateSelect
              containerClassName="input-container"
              countryid={countryid}
              onTextChange={(e) => handleInputChange(e, "state")}
              onChange={(e) => {
                setStateid(e.id);
                handleSelectChange(e, "state");
              }}
              placeHolder="Select State"
            />
          </div>
          <div className="flex gap-4">
            <CountrySelect
              showFlag={false}
              containerClassName="input-container"
              onTextChange={(e) => handleInputChange(e, "country")}
              onChange={(e) => {
                setCountryid(e.id);
                setCode(e.phone_code);
                handleSelectChange(e, "country");
              }}
              placeHolder="Select Country"
            />
            <input
              className="input-container"
              type="tel"
              minLength="4"
              maxLength="6"
              value={zipCode}
              onChange={(e) => handleInputChange(e, "zipCode")}
              placeholder="Zip Code"
            />
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
