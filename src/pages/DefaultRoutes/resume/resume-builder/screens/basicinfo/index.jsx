import { useNavigate } from "react-router-dom";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";
import { countries } from "../../../../../../assets/data/countries";

const BasicInformation = ({ data, onInputChange }) => {
  const { firstName, lastName, city, country, state, zipCode, email } =
    data?.basicInfo;

  const navigate = useNavigate();

  const handleInputChange = (event, name) => {
    const { value } = event.target;
    onInputChange({ section: "basicInfo", subsection: name, values: value });
  };

  const handleSubmit = () => {
    if (firstName && lastName && state && email && country) {
      if (Object.keys(data.jobExperience).length <= 0) {
        navigate("employment-experience");
        return;
      }

      navigate("/resume/builder/employment-experience/job-activities");
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
          {/* <input
            className="input-container"
            type="text"
            placeholder="Phone"
            value={phoneNumber}
            onChange={(e) => handleInputChange(e, "phoneNumber")}
          /> */}
          <div className="flex gap-4">
            <input
              value={city}
              onChange={(e) => handleInputChange(e, "city")}
              className="input-container"
              type="text"
              placeholder="City"
            />
            <input
              className="input-container"
              type="text"
              value={state}
              onChange={(e) => handleInputChange(e, "state")}
              placeholder="State / Province"
            />
          </div>
          <div className="flex gap-4">
            <select
              value={country}
              onChange={(e) => handleInputChange(e, "country")}
              className="input-container"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <input
              className="input-container"
              type="text"
              value={zipCode}
              onChange={(e) => handleInputChange(e, "zipCode")}
              placeholder="Zip Code"
            />
          </div>
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
