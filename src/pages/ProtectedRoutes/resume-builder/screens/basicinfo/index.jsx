import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../../../../../assets/data/countries";
import JobTitleInput from "../../../../../components/jobTitleInput";

const BasicInformation = ({ data, handleChange, template }) => {
  const [selected_country, setSelectedCountry] = useState("");
  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]";

  const navigate = useNavigate();

  useEffect(() => {
    if (data.country) {
      setSelectedCountry(data.country);
    }
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.country = selected_country;
    navigate("employment-experience");
  };

  return (
    <main className=" max-w-6xl -mt-8 md:-mt-0 flex flex-col xl:flex-row justify-between self-center items-center mx-auto gap-10">
      <div className="  -mt-8 flex flex-col justify-center">
        <h2 className=" text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Basic Information
        </h2>
        <p className=" text-[#66666a] text-sm tracking-wide mt-3 mb-5">
          This information will placed at the top of your resume.
        </p>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className=" flex">
            <input
              className={`mr-4 ${form_classes}`}
              type="text"
              value={data.firstName}
              onChange={handleChange("firstName")}
              placeholder="First Name"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={data.lastName}
              onChange={handleChange("lastName")}
              className={`${form_classes}`}
            />
          </div>
          <JobTitleInput updateForm={setSelectedCountry} />
          <input
            className={form_classes}
            type="text"
            placeholder="Phone"
            value={data.phoneNumber}
            onChange={handleChange("phoneNumber")}
          />
          <div className="flex">
            <select
              value={selected_country}
              onChange={handleCountryChange}
              className={`${form_classes} mr-4`}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <input
              value={data.city}
              onChange={handleChange("city")}
              className={form_classes}
              type="text"
              placeholder="City"
            />
          </div>
          <div className="flex">
            <input
              className={`${form_classes} mr-4`}
              type="text"
              value={data.state}
              onChange={handleChange("state")}
              placeholder="State / Province"
            />
            <input
              className={form_classes}
              type="text"
              value={data.zipCode}
              onChange={handleChange("zipCode")}
              placeholder="Zip Code"
            />
          </div>
          <input
            className={form_classes}
            type="email"
            value={data.email}
            onChange={handleChange("email")}
            placeholder="Email*"
          />

          <div className="max-w-md flex gap-4 mt-2">
            <button
              onClick={() => navigate(-1)}
              className="w-full max-w-xs text-center border border-primary-200 rounded-lg text-sm py-3 px-6 bg-transparent"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-white py-3 px-6 bg-primary-500"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
      <div className="hidden flex-col md:ml-10 xl:flex">
        <div className=" w-[503px] shadow- rounded-lg">{template()}</div>
      </div>
    </main>
  );
};

export default BasicInformation;
