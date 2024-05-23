import { useState, useEffect, useRef } from "react";
import { GetCountries } from "react-country-state-city/dist/cjs";
import { verifyInput } from "../../pages/DefaultRoutes/resume/resume-builder/screens/verification";

function CountryInput({ setCode, handleChange, country, setCountryId }) {
  const [countriesList, setCountriesList] = useState([]);
  const [showCountry, setShowCountry] = useState(false);
  const errorMessage = useRef(null);

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);

  const handleCountryInput = (input) => {
    if (countriesList.length === 0) {
      GetCountries().then((result) => {
        setCountriesList(result);
      });
    }

    setShowCountry(true);
    handleChange("country", input);
    verifyInput(input, errorMessage.current, "country");
  };

  const handleSelectChange = (name) => {
    handleChange("country", name);
    verifyInput(name, errorMessage.current, "country");
  };

  return (
    <div id="country" className="input-container relative">
      <div
        onClick={() => setShowCountry((prev) => !prev)}
        className="cursor-pointer flex flex-col gap-2 w-full"
      >
        <div className="flex items-center">
          <input
            className="bg-transparent outline-none border-none w-full h-full"
            value={country ? country : ""}
            id="countries"
            autoComplete="country"
            name="country"
            placeholder="Country"
            onChange={(e) => handleCountryInput(e.target.value)}
            onInput={(e) => handleCountryInput(e.target.value)}
            onBlur={() => setTimeout(() => setShowCountry(false), 300)}
            required
          />
        </div>
        <label
          htmlFor="countries"
          id="countryError"
          className="absolute mt-8 text-error-500 hidden"
          ref={errorMessage}
        >
          Country required
        </label>
      </div>
      {showCountry && countriesList.length >= 1 && (
        <div className="absolute z-30 flex flex-col bg-primary-600 text-white left-0 border overflow-y-auto max-h-[30vh] h-fit top-full w-full duration-300">
          {countriesList
            .filter((countries) =>
              countries.name.toLowerCase().startsWith(country.toLowerCase())
            )
            .map((item, index) => (
              <div
                className="w-full py-3 px-6 cursor-pointer hover:bg-primary-400"
                key={index}
                onClick={() => {
                  handleSelectChange(item.name);
                  setCountryId(item.id);
                  setCode && setCode(`${item.phone_code}`);
                  setShowCountry((prev) => !prev);
                }}
              >
                {item.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default CountryInput;
