import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { months } from "../../../../../assets/data/months";
import { years } from "../../../../../assets/data/years";
import { countries } from "../../../../../assets/data/countries";
import JobTitleInput from "../../../../../components/jobTitleInput";

const PreviousExperience = ({ data, handleStep, template, workId }) => {
  const [experience, setExperience] = useState(data.jobExperience[workId - 1]);
  const navigate = useNavigate();

  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9] select-wrapper";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  };

  const handleCurrent = (event) => {
    const { name, checked } = event.target;
    setExperience((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formReq = new FormData(e.target);
    const formKey = Object.keys(experience);
    const formArray = {};

    for (let i = 0; i < formKey.length; i++) {
      const name = experience[i];
      const value = formReq.get(name);
      formArray[name] = value;
    }

    // handleSubmit(formArray); Sends data to backend then
    handleStep(1);
  };

  return (
    <section className="mt-8 flex justify-between flex-col items-start mx-auto">
      <div className="flex w-full overflow-hidden flex-col justify-between mx-auto md:flex-row items-center gap-6">
        <div className="flex flex-col w-full">
          <h2 className="text-xl w-[25ch] md:max-w-[30ch] md:text-2xl leading-tight font-semibold md:leading-snug">
            What recent employment experience do you have?
          </h2>

          <form onSubmit={handleSubmit} className="max-w-96">
            <div className="mt-6">
              {/* <input
                className={form_classes}
                value={experience.jobTitle}
                type="text"
                name="jobTitle"
                onChange={(e) => handleChange(e)}
                onInput={handleChange}
                placeholder="Job Title"
              /> */}
              <JobTitleInput updateForm={setExperience} />
              <input
                className={form_classes}
                type="text"
                name="company"
                value={experience.company}
                onChange={(e) => handleChange(e)}
                onInput={handleChange}
                placeholder="Company / Organization Name"
              />
              <div className="flex">
                <select
                  value={experience.country}
                  name="country"
                  onChange={(e) => handleChange(e)}
                  onInput={handleChange}
                  className={`${form_classes} mr-4`}
                  placeholder="Country"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="state"
                  value={experience.state}
                  onChange={(e) => handleChange(e)}
                  onInput={handleChange}
                  placeholder="State / Province"
                  className={`mr-4 ${form_classes}`}
                />
                <input
                  className={form_classes}
                  type="text"
                  name="city"
                  onChange={(e) => handleChange(e)}
                  onInput={handleChange}
                  placeholder="City"
                />
              </div>

              <div className="flex">
                <select
                  name="startMonth"
                  value={experience.startMonth}
                  onChange={(e) => handleChange(e)}
                  onInput={handleChange}
                  className={`${form_classes} mr-4`}
                >
                  <option value="">Start Month</option>
                  {months.map((month) => (
                    <option key={month.label} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
                <select
                  name="startYear"
                  value={experience.startYear}
                  onChange={(e) => handleChange(e)}
                  onInput={handleChange}
                  className={form_classes}
                >
                  <option value="" disabled>
                    Start Year
                  </option>
                  {years.map((year) => (
                    <option key={year.label} value={year.value}>
                      {year.label}
                    </option>
                  ))}
                </select>
              </div>
              {!experience.current && (
                <div className="flex">
                  <select
                    name="endMonth"
                    value={experience.endMonth}
                    onChange={(e) => handleChange(e)}
                    onInput={handleChange}
                    className={`${form_classes} mr-4`}
                  >
                    <option value="">End Month</option>
                    {months.map((month) => (
                      <option key={month.label} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                  <select
                    name="endYear"
                    value={experience.endYear}
                    onChange={(e) => handleChange(e)}
                    onInput={handleChange}
                    className={form_classes}
                    placeholder="End Year"
                  >
                    <option value="" disabled>
                      End Year
                    </option>
                    {years.map((year) => (
                      <option key={year.label} value={year.value}>
                        {year.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="flex items-center">
                <input
                  id="checkbox"
                  type="checkbox"
                  name="current"
                  value={experience.current}
                  onChange={(e) => handleCurrent(e)}
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 mt-[2px] text-sm font-light text-[#66666a]"
                >
                  I currently work here
                </label>
              </div>
            </div>

            <div className="max-w-xl flex flex-col justify-center mt-6 gap-5 md:flex-row">
              <button
                onClick={() => (workId === 1 ? navigate(-1) : handleStep(2))}
                className="w-full border border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-4"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] mx-auto py-5 px-6 bg-[#332A66]"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
        <div className="hidden flex-col md:ml-10 md:flex">
          <div className=" w-[300px] h-[422px] shadow rounded-lg">
            {template()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousExperience;
