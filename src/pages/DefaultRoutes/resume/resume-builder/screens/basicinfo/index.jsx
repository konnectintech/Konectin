import { useNavigate } from "react-router-dom";
import NavigationButton from "../navigationButton";
import { countries } from "../../../../../../assets/data/countries";

const BasicInformation = ({ data, onInputChange, template }) => {
  const {
    fullName,
    firstName,
    lastName,
    city,
    country,
    state,
    zipCode,
    email,
  } = data?.basicInfo;

  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-neutral-500 outline-0 rounded-[4px] bg-[#f9f9f9]";

  const navigate = useNavigate();

  const handleInputChange = (event, name) => {
    const { value } = event.target;
    onInputChange({ section: "basicInfo", subsection: name, values: value });
  };

  const handleSubmit = () => {
    if (fullName && state && email && country) {
      if (Object.keys(data.jobExperience).length <= 1) {
        navigate("employment-experience");
        return;
      }

      navigate("/resume/builder/employment-experience/job-activities");
    }
  };

  return (
    <div className="max-w-6xl flex flex-col md:flex-row items-start justify-between self-center mx-auto gap-10">
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
              value={firstName}
              onChange={(e) => handleInputChange(e, "firstName")}
              placeholder="First Name"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => handleInputChange(e, "lastName")}
              className={`${form_classes}`}
            />
          </div>
          {/* <input
            className={form_classes}
            type="text"
            placeholder="Phone"
            value={phoneNumber}
            onChange={(e) => handleInputChange(e, "phoneNumber")}
          /> */}
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
        </div>
        <NavigationButton
          back="/resume/ai/template-selector"
          cont={handleSubmit}
        />
      </div>

      <div className="max-md:hidden">{template()}</div>
    </div>
  );
};

export default BasicInformation;
