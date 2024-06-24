import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";
import CountryInput from "../../../../../../components/form/countryInput";
import StateInput from "../../../../../../components/form/stateInput";
import CityInput from "../../../../../../components/form/cityInput";
import { onSectionComplete, verifyInput } from "../verification";

const BasicInformation = ({ data, onInputChange }) => {
  const {
    firstName,
    lastName,
    imageUrl, 
    profession,
    city,
    state,
    country,
    phoneNumber,
    zipCode,
    email,
    website,
  } = data?.basicInfo;

  const [code, setCode] = useState("");
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);

  // Input Validation Error Reference
  const firstNameErrMsg = useRef(null);
  const lastNameErrMsg = useRef(null);
  const phoneNumberErrMsg = useRef(null);
  const zipCodeErrMsg = useRef(null);
  const emailErrMsg = useRef(null);
  const professionErrMsg = useRef(null);
  const websiteErrMsg = useRef(null);

  let allErrMsg = [
    firstNameErrMsg,
    lastNameErrMsg,
    phoneNumberErrMsg,
    zipCodeErrMsg,
    emailErrMsg,
    professionErrMsg,
    websiteErrMsg,
  ];

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

    // OnChange Input Field Validation
    let errorHolder = allErrMsg.filter(
      (ref) => ref.current.getAttribute("for") === name
    );
    errorHolder = errorHolder[0].current;
    verifyInput(value, errorHolder, name);
  };

  const handleCCSChange = (name, value) => {
    onInputChange({ section: "basicInfo", subsection: name, values: value });
  };

  const handleSubmit = () => {
    onSectionComplete(data, 2);

    const formHolder = Object.keys(data.basicInfo);

    formHolder.forEach((holder) => {
      let errorHolder;
      switch (holder) {
        case "fullName":
        case "phoneCode":
        case "profession":
          break;
        case "city":
        case "state":
        case "country":
          errorHolder = document.getElementById(`${holder}Error`);
          verifyInput(data.basicInfo[holder], errorHolder, holder);
          break;
        default:
          errorHolder = allErrMsg.filter(
            (ref) => ref.current.getAttribute("for") === holder
          );
          errorHolder = errorHolder[0].current;
          verifyInput(data.basicInfo[holder], errorHolder, holder);
          break;
      }
    });

    // Validation before routing to next page
    if (firstName && lastName && email && country && profession && website) {
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onInputChange({ section: "basicInfo", subsection: "imageUrl", values: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-6xl flex flex-col md:flex-row items-start justify-between self-center mx-auto gap-10">
      <div className="flex flex-col justify-center w-full md:w-1/2">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Basic Information
        </h2>
        <p className="text-[#66666a] text-sm tracking-wide mt-3 mb-5">
          Start with the essentials. Who you are and how can employers connect with you.
        </p>

        <form className="w-full">
          <div className="flex flex-col">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imageUrl && <img src={imageUrl} alt="Profile" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                className="input-container"
                type="text"
                name="firstname"
                id="firstName"
                value={firstName}
                onChange={(e) => handleInputChange(e, "firstName", "firstname")}
                placeholder="First Name"
              />
              <label
                className="-mt-5 text-xs pl-4 text-error-500 hidden"
                htmlFor="firstName"
                ref={firstNameErrMsg}
              ></label>
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => handleInputChange(e, "lastName", "lastname")}
                className="input-container"
                name="lastname"
                id="lastName"
              />
              <label
                className="-mt-5 text-xs pl-4 text-error-500 hidden"
                htmlFor="lastName"
                ref={lastNameErrMsg}
              ></label>
            </div>
          </div>

          <div className="flex flex-col">
            <input
              className="input-container"
              type="text"
              value={profession}
              name="profession"
              autoComplete="profession"
              id="profession"
              onChange={(e) => handleInputChange(e, "profession")}
              placeholder="Profession"
            />
            <label
              className="-mt-5 mb-4 text-xs pl-4 text-error-500 hidden"
              htmlFor="email"
              ref={professionErrMsg}
            ></label>
          </div>

          <div className="flex flex-col">
            <input
              className="input-container"
              type="text"
              placeholder="Phone"
              minLength="12"
              maxLength="12"
              value={phoneNumber}
              name="phonenumber"
              id="phoneNumber"
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

                handleInputChange(e, "phoneNumber");
              }}
            />
            <label
              className="-mt-5 text-xs pl-4 text-error-500 hidden"
              htmlFor="phoneNumber"
              ref={phoneNumberErrMsg}
            ></label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                className="input-container"
                type="tel"
                minLength="4"
                maxLength="6"
                value={zipCode}
                onChange={(e) => handleInputChange(e, "zipCode", "zipcode")}
                onInput={(e) => handleInputChange(e, "zipCode", "zipcode")}
                placeholder="Zip Code"
                name="zipcode"
                id="zipCode"
              />
              <label
                className="-mt-5 text-xs pl-4 text-error-500 hidden"
                htmlFor="zipCode"
                ref={zipCodeErrMsg}
              ></label>
            </div>

            {/* City */}
            <CityInput
              countryId={countryId}
              stateId={stateId}
              handleChange={handleCCSChange}
              city={city}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* State */}
            <StateInput
              countryId={countryId}
              handleChange={handleCCSChange}
              state={state}
              setStateId={setStateId}
            />

            {/* Country  */}
            <CountryInput
              setCode={setCode}
              handleChange={handleCCSChange}
              country={country}
              setCountryId={setCountryId}
            />
          </div>


          <div className="flex flex-col">
            <input
              className="input-container"
              type="email"
              value={email}
              name="email"
              autoComplete="email"
              id="email"
              onChange={(e) => handleInputChange(e, "email")}
              placeholder="Email*"
            />
            <label
              className="-mt-5 mb-4 text-xs pl-4 text-error-500 hidden"
              htmlFor="email"
              ref={emailErrMsg}
            ></label>
          </div>
          
          <div className="flex flex-col">
            <input
              className="input-container"
              type="url"
              value={website}
              name="Your Website"
              autoComplete="website"
              id="website"
              onChange={(e) => handleInputChange(e, "website")}
              placeholder="www.konectin.com"
            />
            <label
              className="-mt-5 mb-4 text-xs pl-4 text-error-500 hidden"
              htmlFor="website"
              ref={websiteErrMsg}
            ></label>
          </div>
        </form>
        <NavigationButton
          back={() => navigate("/resume/ai/template-selector")}
          cont={handleSubmit}
        />
      </div>

      <div className="max-md:hidden w-1/2">
        <div className="h-[360px] sm:h-[300px] md:h-[500px] lg:h-[580px] lg:w-[500px] flex items-center justify-center">
          <div className="md:scale-[42%] lg:scale-[50%] mt-10">
            <SelectedTemplates data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
