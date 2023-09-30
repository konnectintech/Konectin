import { useEffect, useRef, useState } from "react";
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

  // Input Reference
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const cityRef = useRef(null);
  const countryRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const stateRef = useRef(null);
  const zipCodeRef = useRef(null);
  const emailRef = useRef(null);
  // Input Validation Error Reference
  const firstNameErrMsg = useRef(null);
  const lastNameErrMsg = useRef(null);
  const cityErrMsg = useRef(null);
  const countryErrMsg = useRef(null);
  const phoneNumberErrMsg = useRef(null);
  const stateErrMsg = useRef(null);
  const zipCodeErrMsg = useRef(null);
  const emailErrMsg = useRef(null);

  let allInputs = [
    firstNameRef,
    lastNameRef,
    cityRef,
    countryRef,
    phoneNumberRef,
    stateRef,
    zipCodeRef,
    emailRef,
  ];
  let allErrMsg = [
    firstNameErrMsg,
    lastNameErrMsg,
    cityErrMsg,
    countryErrMsg,
    phoneNumberErrMsg,
    stateErrMsg,
    zipCodeErrMsg,
    emailErrMsg,
  ];

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
      setFilteredCountries(result);
    });
    // console.log(allInputs)
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

    // OnChange Input Field Validation
    let id = name.toLowerCase();
    allErrMsg.forEach((msg) => {
      if (msg.current.id === id) {
        let current = msg.current;
        current.style.display = "none";
        if (!current.parentElement.firstChild.value) {
          current.style.display = "block";
        }
      }
    });
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

    let id = section.toLowerCase();
    allErrMsg.forEach((msg) => {
      if (msg.current.id === id) {
        let current = msg.current;
        current.style.display = "none";
      }
    });
  };

  const handleSubmit = () => {
    // Validation of empty fields
    allInputs.forEach((input) => {
      if (input.current.value === "") {
        allErrMsg.forEach((msg) => {
          if (input.current.name === msg.current.id)
            msg.current.style.display = "block";
        });
      }
    });

    // Validation before routing to next page
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
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                className="input-container"
                type="text"
                name="firstname"
                value={firstName}
                ref={firstNameRef}
                onChange={(e) => handleInputChange(e, "firstName", "firstname")}
                placeholder="First Name"
              />
              <h1
                className="-mt-4 mb-4 errorMessage text-red-600 hidden "
                id="firstname"
                ref={firstNameErrMsg}
              >
                Firsname required
              </h1>
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                ref={lastNameRef}
                onChange={(e) => handleInputChange(e, "lastName", "lastname")}
                className="input-container"
                name="lastname"
              />
              <h1
                className="-mt-4 mb-4 errorMessage text-red-600 hidden "
                id="lastname"
                ref={lastNameErrMsg}
              >
                Lastname required
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                className="input-container"
                type="tel"
                minLength="4"
                maxLength="6"
                value={zipCode}
                ref={zipCodeRef}
                onChange={(e) => handleInputChange(e, "zipCode", "zipcode")}
                placeholder="Zip Code"
                name="zipcode"
              />
              <h1
                className="-mt-4 mb-4 errorMessage text-red-600 hidden "
                id="zipcode"
                ref={zipCodeErrMsg}
              >
                Zip Code required
              </h1>
            </div>

            <div className="input-container relative flex flex-col">
              {cityList.length <= 0 ? (
                <div className="flex flex-col">
                  <input
                    onInput={(e) => handleInputChange(e, "city")}
                    onChange={(e) => handleInputChange(e, "city", "city")}
                    placeholder="Enter City"
                    className="bg-transparent outline-none border-none w-full "
                    value={city}
                    ref={cityRef}
                    name="city"
                  />
                  <h1
                    className="absolute -bottom-12 errorMessage text-base left-0 mb-4 text-red-600 hidden "
                    id="city"
                    ref={cityErrMsg}
                  >
                    City required
                  </h1>
                </div>
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

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="input-container relative">
              {stateList.length <= 0 ? (
                <div>
                  <input
                    onInput={(e) => handleInputChange(e, "state")}
                    onChange={(e) => handleInputChange(e, "state")}
                    placeholder="Enter State"
                    className="bg-transparent errorMessage outline-none border-none w-full h-full"
                    value={state}
                    ref={stateRef}
                    name="state"
                  />
                  <h1
                    className="-mt-4 mb-4 text-base absolute -bottom-12 left-0 text-red-600 hidden errorMessage"
                    id="state"
                    ref={stateErrMsg}
                  >
                    State required
                  </h1>
                </div>
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
                  readOnly
                  className="bg-transparent errorMessage outline-none border-none w-full h-full"
                  value={country}
                  name="country"
                  placeholder="Country"
                  // onInput={(e) => handleInputChange(e, "state")}
                  onChange={(e) => handleInputChange(e, "country")}
                  ref={countryRef}
                />
                <MdArrowDropDown size="1.5rem" />
                <h1
                  className="absolute -bottom-12 errorMessage text-base left-0 mb-4 text-red-600 hidden "
                  id="country"
                  ref={countryErrMsg}
                >
                  Country required
                </h1>
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

          <div className="flex flex-col">
            <input
              className="input-container"
              type="text"
              placeholder="Phone"
              minLength="12"
              maxLength="12"
              value={phoneNumber}
              ref={phoneNumberRef}
              name="phonenumber"
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
            <h1
              className="-mt-4 mb-4 errorMessage text-red-600 hidden "
              id="phonenumber"
              ref={phoneNumberErrMsg}
            >
              Phone required
            </h1>
          </div>

          <div className="flex flex-col">
            <input
              className="input-container"
              type="email"
              value={email}
              ref={emailRef}
              name="email"
              onChange={(e) => handleInputChange(e, "email")}
              placeholder="Email*"
            />
            <h1
              className="-mt-4 mb-4 errorMessage text-red-600 hidden "
              id="email"
              ref={emailErrMsg}
            >
              Email required
            </h1>
          </div>
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
