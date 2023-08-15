import * as FaIcon from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { months } from "../../../../../..//assets/data/months";
import { years } from "../../../../../../assets/data/years";
import { countries } from "../../../../../../assets/data/countries";
import JobTitleInput from "../../../../../../components/jobTitleInput";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";
import { useTemplateContext } from "../../../../../../middleware/resume";

const PreviousExperience = ({ data, handleBack, handleInputChange }) => {
  const navigate = useNavigate();
  const { templateData } = useTemplateContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // handleSubmit(formArray); Sends data to backend then
    navigate("/resume/builder/employment-experience/responsibilities");
  };

  return (
    <div className="max-w-6xl flex flex-col lg:flex-row items-start justify-between self-center mx-auto gap-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-xl md:max-w-[30ch] md:text-2xl leading-tight font-semibold md:leading-snug">
          What recent employment experience do you have?
        </h2>

        <div className="w-full">
          <div className="mt-6">
            <JobTitleInput
              title={data?.jobTitle}
              handleInputChange={({ subsection, values }) =>
                handleInputChange(subsection, values)
              }
              section="jobExperience"
              subsection="jobTitle"
            />
            <input
              className="input-container"
              type="text"
              name="company"
              value={data?.company}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              onInput={(e) => handleInputChange(e.target.name, e.target.value)}
              placeholder="Company / Organization Name"
            />
            <div className="flex gap-4">
              <select
                value={data?.country}
                name="country"
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
                onInput={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
                className="input-container"
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
                value={data?.state}
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
                onInput={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
                placeholder="State / Province"
                className="input-container"
              />
              <input
                className="input-container"
                type="text"
                value={data?.city}
                name="city"
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
                onInput={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
                placeholder="City"
              />
            </div>

            <div className="flex gap-4">
              <select
                name="startMonth"
                value={data?.startMonth}
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
                onInput={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
                className="input-container"
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
                value={data?.startYear}
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
                onInput={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
                className="input-container"
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
            {!data?.current && (
              <div className="flex gap-4">
                <select
                  name="endMonth"
                  value={data?.endMonth}
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  onInput={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  className="input-container"
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
                  value={data?.endYear}
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  onInput={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  className="input-container"
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
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => handleInputChange("current", !data?.current)}
            >
              <div
                className={`w-5 h-5 rounded-sm border-[1.5px] border-primary-600 flex items-center justify-center ${
                  data?.current ? "bg-primary-400" : "bg-white"
                }`}
              >
                {data?.current && <FaIcon.FaCheck size=".4rem" color="#fff" />}
              </div>
              <span className="text-sm font-light text-neutral-300">
                I currently work here
              </span>
            </div>
          </div>

          <div className="mt-16">
            <NavigationButton back={handleBack} cont={handleSubmit} />
          </div>
        </div>
      </div>

      <div className="max-lg:hidden">
        <SelectedTemplates data={templateData} />
      </div>
    </div>
  );
};

export default PreviousExperience;
