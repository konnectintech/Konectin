import { useEffect, useRef, useState } from "react";
import { GetCountries } from "react-country-state-city";
import { MdArrowDropDown } from "react-icons/md";
import { ageRange, genderList } from "./data";

function BasicDetails({ data, updateForm }) {
  const [countriesList, setCountriesList] = useState([]);
  const [showData, setShowData] = useState({
    code: false,
    country: false,
    gender: false,
  });
  const errorMessage = useRef(null);

  useEffect(() => {
    GetCountries({ showFlag: true }).then((result) => {
      let africanCountries = result.filter(
        (item) => item.region.toLowerCase() === "africa"
      );
      setCountriesList(africanCountries);
    });
  }, []);

  const handleChange = (value, name) => {
    updateForm("basicDetails", name, value);
  };

  return (
    <>
      <div className="flex flex-col">
        <input
          className="input-container !mb-0"
          type="text"
          name="fullname"
          id="fullName"
          value={data?.fullName}
          onChange={(e) => handleChange(e.target.value, "fullName")}
          onInput={(e) => handleChange(e.target.value, "fullName")}
          placeholder="Full Name*"
        />
        <label
          className="-mt-5 text-xs pl-4 text-error-500 hidden"
          htmlFor="fullName"
          // ref={firstNameErrMsg}
        ></label>
      </div>
      <div className="flex flex-col">
        <input
          className="input-container !mb-0"
          type="email"
          value={data?.email}
          name="email"
          id="email"
          onChange={(e) => handleChange(e.target.value, "email")}
          onInput={(e) => handleChange(e.target.value, "email")}
          placeholder="Email Address*"
        />
        <label
          className="-mt-5 mb-4 text-xs pl-4 text-error-500 hidden"
          htmlFor="email"
          // ref={emailErrMsg}
        ></label>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 min-w-[160px] !w-fit relative">
          <div
            onClick={() =>
              setShowData((prev) => ({ ...prev, code: !prev.code }))
            }
            className="flex items-center relative cursor-pointer"
          >
            <input
              className="input-container !mb-0"
              value={data?.country_code}
              name="country_code"
              placeholder="Country Code*"
              readOnly
            />
            <MdArrowDropDown
              className={`${
                showData.code ? "rotate-180" : "rotate-0"
              } absolute right-2 duration-300 text-neutral-300`}
              size="1.5rem"
            />
          </div>
          {showData.code && countriesList.length >= 1 && (
            <div className="bg-neutral-100 absolute top-full translate-y-2 w-full max-h-48 z-10 overflow-y-auto text-white py-1 rounded flex flex-col">
              {countriesList.map((country) => (
                <div
                  key={country.phone_code}
                  onClick={() => handleChange()}
                  className="flex gap-1 py-3 px-4 cursor-pointer hover:bg-neutral-200"
                >
                  <span>{country.iso2}</span>
                  <div className="w-full flex">
                    <div className="w-[10ch] truncate">{country.name}</div> (+
                    {country.phone_code})
                  </div>
                </div>
              ))}
            </div>
          )}
          <label
            id="countryError"
            className="absolute mt-8 text-error-500 hidden"
            ref={errorMessage}
          >
            Country code required
          </label>
        </div>

        <div className="flex flex-col w-full">
          <input
            className="input-container !mb-0"
            type="text"
            placeholder="Phone Number*"
            minLength="12"
            maxLength="12"
            value={data?.phoneNumber}
            name="phonenumber"
            id="phoneNumber"
            onChange={(e) => {
              e.target.value = e.target.value
                .replace(/[^0-9]/g, "")
                .replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")
                .trim();

              handleChange(e.target.value, "phoneNumber");
            }}
            onInput={(e) => {
              e.target.value = e.target.value
                .replace(/[^0-9]/g, "")
                .replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")
                .trim();

              handleChange(e.target.value, "phoneNumber");
            }}
          />
          <label
            className="-mt-5 text-xs pl-4 text-error-500 hidden"
            htmlFor="phoneNumber"
            // ref={phoneNumberErrMsg}
          ></label>
        </div>
      </div>

      <div className="flex flex-col gap-2 min-w-[160px] relative">
        <div
          onClick={() =>
            setShowData((prev) => ({ ...prev, country: !prev.country }))
          }
          className="flex items-center relative cursor-pointer"
        >
          <input
            className="input-container !mb-0"
            value={data?.country}
            name="country"
            placeholder="Country of Residence*"
            readOnly
            // onChange={(e) => handleCountryInput(e.target.value)}
            // onInput={(e) => handleCountryInput(e.target.value)}
          />
          <MdArrowDropDown
            className={`${
              showData.country ? "rotate-180" : "rotate-0"
            } absolute right-2 duration-300 text-neutral-300`}
            size="1.5rem"
          />
        </div>
        {showData.country && countriesList.length >= 1 && (
          <div className="bg-neutral-100 absolute top-full translate-y-2 w-full max-h-48 z-10 overflow-y-auto text-white py-1 rounded flex flex-col">
            {countriesList.map((country) => (
              <div
                key={country.name}
                onClick={() => handleChange(country.name, "country")}
                className="flex gap-1 py-3 px-4 cursor-pointer hover:bg-neutral-200"
              >
                <span>{country.iso2}</span>
                <div className="truncate">{country.name}</div>
              </div>
            ))}
          </div>
        )}
        <label
          className="absolute mt-8 text-error-500 hidden"
          ref={errorMessage}
        >
          Country required
        </label>
      </div>

      <div className="flex flex-col gap-2 min-w-[160px] relative">
        <div
          onClick={() =>
            setShowData((prev) => ({ ...prev, gender: !prev.gender }))
          }
          className="flex items-center relative cursor-pointer"
        >
          <input
            className="input-container !mb-0"
            value={data?.gender}
            name="gender"
            placeholder="Gender*"
            readOnly
            // onChange={(e) => handleCountryInput(e.target.value)}
            // onInput={(e) => handleCountryInput(e.target.value)}
          />
          <MdArrowDropDown
            className={`${
              showData.gender ? "rotate-180" : "rotate-0"
            } absolute right-2 duration-300 text-neutral-300`}
            size="1.5rem"
          />
        </div>
        {showData.gender && (
          <div className="bg-neutral-100 absolute top-full translate-y-1 w-full max-h-48 z-10 overflow-y-auto text-white py-1 rounded flex flex-col">
            {genderList.map((gender) => (
              <div
                key={gender}
                onClick={() => {
                  handleChange(gender, "gender");
                  setShowData((prev) => ({ ...prev, gender: !prev.gender }));
                }}
                className={`${
                  data?.gender === gender
                    ? "bg-primary-500"
                    : "hover:bg-neutral-200"
                } flex gap-2 items-center py-3 px-4 cursor-pointer`}
              >
                <span
                  className={`${
                    data?.gender === gender
                      ? "bg-secondary-600 border-transparent"
                      : "border-white"
                  } rounded-full block w-4 h-4 border`}
                />
                <div className="truncate">{gender}</div>
              </div>
            ))}
          </div>
        )}
        <label
          className="absolute mt-8 text-error-500 hidden"
          ref={errorMessage}
        >
          Gender required
        </label>
      </div>

      <div className="flex flex-col gap-2 min-w-[160px] relative">
        <div
          onClick={() =>
            setShowData((prev) => ({ ...prev, ageRange: !prev.ageRange }))
          }
          className="flex items-center relative cursor-pointer"
        >
          <input
            className="input-container !mb-0"
            value={data?.ageRange}
            name="ageRange"
            placeholder="Age Range*"
            readOnly
            // onChange={(e) => handleCountryInput(e.target.value)}
            // onInput={(e) => handleCountryInput(e.target.value)}
          />
          <MdArrowDropDown
            className={`${
              showData.ageRange ? "rotate-180" : "rotate-0"
            } absolute right-2 duration-300 text-neutral-300`}
            size="1.5rem"
          />
        </div>
        {showData.ageRange && (
          <div className="bg-neutral-100 absolute top-full translate-y-1 w-full z-10 overflow-y-auto text-white py-1 rounded flex flex-col">
            {ageRange.map((age) => (
              <div
                key={age}
                onClick={() => {
                  handleChange(age, "ageRange");
                  setShowData((prev) => ({
                    ...prev,
                    ageRange: !prev.ageRange,
                  }));
                }}
                className={`${
                  data?.ageRange === age
                    ? "bg-primary-500"
                    : "hover:bg-neutral-200"
                } flex gap-2 items-center py-3 px-4 cursor-pointer`}
              >
                <span
                  className={`${
                    data?.ageRange === age
                      ? "bg-secondary-600 border-transparent"
                      : "border-white"
                  } rounded block w-4 h-4 border`}
                />
                <div className="truncate">{age}</div>
              </div>
            ))}
          </div>
        )}
        <label
          className="absolute mt-8 text-error-500 hidden"
          ref={errorMessage}
        >
          Country code required
        </label>
      </div>
    </>
  );
}

export default BasicDetails;
