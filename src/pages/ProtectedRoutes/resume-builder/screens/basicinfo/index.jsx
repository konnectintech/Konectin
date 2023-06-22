import { useNavigate } from "react-router-dom";
import { countries } from "../../../../../assets/data/countries";
import JobTitleInput from "../../../../../components/jobTitleInput";
import { Link } from "react-router-dom";

const BasicInformation = ({ data, onInputChange, template }) => {
  const {
    fullName,
    profession,
    phoneNumber,
    city,
    country,
    state,
    zipCode,
    email,
  } = data?.basicInfo;

  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]";

  const navigate = useNavigate();

  const handleInputChange = (event, name) => {
    const { value } = event.target;
    onInputChange({ section: "basicInfo", subsection: name, values: value });
  };

  const handleSubmit = () => {
    if (fullName && profession && email && country) {
      if (Object.keys(data.jobExperience).length <= 1) {
        navigate("employment-experience");
        return;
      }

      navigate("/resume/employment-experience/job-activities");
    }
  };

  return (
    <div className="mt-4 max-w-6xl flex flex-col md:flex-row justify-between self-center mx-auto gap-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Basic Information
        </h2>
        <p className="text-[#66666a] text-sm tracking-wide mt-3 mb-5">
          This information will placed at the top of your resume.
        </p>

        <div className="w-full">
          <div className="flex">
            <input
              className={`mr-4 ${form_classes}`}
              type="text"
              value={fullName.split(" ")[0]}
              onChange={(e) => handleInputChange(e, "fullName")}
              placeholder="First Name"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={fullName.split(" ")[1]}
              onChange={(e) => handleInputChange(e, "fullName")}
              className={`${form_classes}`}
            />
          </div>
          <JobTitleInput
            title={profession}
            handleInputChange={onInputChange}
            section="basicInfo"
            subsection="profession"
          />
          <input
            className={form_classes}
            type="text"
            placeholder="Phone"
            value={phoneNumber}
            onChange={(e) => handleInputChange(e, "phoneNumber")}
          />
          <div className="flex">
            <select
              value={country}
              onChange={(e) => handleInputChange(e, "country")}
              className={`${form_classes} mr-4`}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <input
              value={city}
              onChange={(e) => handleInputChange(e, "city")}
              className={form_classes}
              type="text"
              placeholder="City"
            />
          </div>
          <div className="flex">
            <input
              className={`${form_classes} mr-4`}
              type="text"
              value={state}
              onChange={(e) => handleInputChange(e, "state")}
              placeholder="State / Province"
            />
            <input
              className={form_classes}
              type="text"
              value={zipCode}
              onChange={(e) => handleInputChange(e, "zipCode")}
              placeholder="Zip Code"
            />
          </div>
          <input
            className={form_classes}
            type="email"
            value={email}
            onChange={(e) => handleInputChange(e, "email")}
            placeholder="Email*"
          />

          <div className="max-w-md flex gap-4 mt-2">
            <Link
              to="/resume/ai/template-selector"
              className="w-full max-w-xs text-center border border-primary-200 rounded-lg text-sm py-3 px-6 bg-transparent"
            >
              Back
            </Link>
            <button
              onClick={handleSubmit}
              className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-white py-3 px-6 bg-primary-500"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="max-md:hidden">{template()}</div>
    </div>
  );
};

export default BasicInformation;
