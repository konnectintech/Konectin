import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../../../../../assets/data/countries";
import JobTitleInput from "../../../../../components/jobTitleInput";

const BasicInformation = ({ data, updateResume, template }) => {
  const [selected_country, setSelectedCountry] = useState("");
  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]";

  const navigate = useNavigate();

  useEffect(() => {
    if (data.country) {
      setSelectedCountry(data.country);
    }
  }, [data.country]);

  const handleChange = (event, name) => {
    const { value } = event.target;
    updateResume((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.country = selected_country;
    navigate("employment-experience");
  };

  return (
    <div className="min-h-[90vh] max-w-6xl items-center flex mx-auto">
      <div className="w-full flex flex-col xl:flex-row justify-center xl:justify-between self-center gap-10">
        <div className="flex flex-col">
          <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
            Basic Information
          </h2>
          <p className="text-[#66666a] text-sm tracking-wide mt-3 mb-5">
            This information will placed at the top of your resume.
          </p>

          <form className="w-full" onSubmit={handleSubmit}>
            <div className=" flex">
              <input
                className={`mr-4 ${form_classes}`}
                type="text"
                value={data.firstName}
                onChange={(e) => handleChange(e,"firstName")}
                placeholder="First Name"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={data.lastName}
                onChange={(e) => handleChange(e,"lastName")}
                className={`${form_classes}`}
              />
            </div>
            <JobTitleInput updateForm={setSelectedCountry} />
            <input
              className={form_classes}
              type="text"
              placeholder="Phone"
              value={data.phoneNumber}
              onChange={(e) => handleChange(e,"phoneNumber")}
            />
            <div className="flex">
              <select
                value={selected_country}
                onChange={handleChange}
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
                onChange={(e) => handleChange(e,"city")}
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
                onChange={(e) => handleChange(e,"state")}
                placeholder="State / Province"
              />
              <input
                className={form_classes}
                type="text"
                value={data.zipCode}
                onChange={(e) => handleChange(e,"zipCode")}
                placeholder="Zip Code"
              />
            </div>
            <input
              className={form_classes}
              type="email"
              value={data.email}
              onChange={(e) => handleChange(e,"email")}
              placeholder="Email*"
            />

            <div className="max-w-xl flex flex-col max-md:justify-center mt-2 gap-5 md:flex-row">
              <button
                onClick={() => navigate(-1)}
                className="w-full md:w-fit max-w-xs border border-[#b2b3b48a] rounded-lg text-sm py-3 px-[4.5rem]"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-full md:w-fit max-w-xs border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] py-3 px-[4.5rem] bg-[#332A66]"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
        <div className="hidden flex-col md:ml-10 xl:flex justify-start">
          <div className=" w-[503px] shadow- rounded-lg">{template()}</div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
