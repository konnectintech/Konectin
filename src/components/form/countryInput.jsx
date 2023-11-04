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
    // console.log(allInputs)
  }, []);

  const handleCountryInput = (input) => {
    setShowCountry(true);
    GetCountries().then((result) => {
      const filtered = result.filter((country) =>
        country.name.toLowerCase().startsWith(input.toLowerCase())
      );

      if (filtered.length >= 0) {
        setCountriesList(filtered);
      }
    });

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
            value={country}
            name="country"
            placeholder="Country"
            onChange={(e) => handleCountryInput(e.target.value)}
            onInput={(e) => handleCountryInput(e.target.value)}
          />
        </div>
        <label
          id="countryError"
          className="absolute mt-8 text-error-500 hidden"
          ref={errorMessage}
        >
          Country required
        </label>
      </div>
      {showCountry && country.length >= 3 && (
        <div className="absolute z-10 flex flex-col bg-primary-600 text-white left-0 border overflow-y-auto max-h-[30vh] h-fit top-full w-full">
          {countriesList.map((item, index) => (
            <div
              className="w-full py-3 px-6 cursor-pointer hover:bg-primary-400"
              key={index}
              onClick={() => {
                setShowCountry((prev) => !prev);
                setCode && setCode(`${item.phone_code}`);
                handleSelectChange(item.name);
                setCountryId(item.id);
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
