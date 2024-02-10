import * as FaIcon from "react-icons/fa";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavigationButton from "../navigationButton";
import Responsibilities from "./work-responsibilities";
import SelectedTemplates from "../../resume-templates";
import JobTitleInput from "../../../../../../components/jobTitleInput";
import { useTemplateContext } from "../../../../../../middleware/resume";
import CountryInput from "../../../../../../components/form/countryInput";
import StateInput from "../../../../../../components/form/stateInput";
import CityInput from "../../../../../../components/form/cityInput";
import { onSectionComplete, verifyInput } from "../verification";
import DateSelector from "../../../../../../components/form/dateSelector";
import ResumeModal from "../../../../../../layouts/resumeRoutes/resumeModal";

const PreviousExperience = ({ data, handleBack, handleInputChange }) => {
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const companyErrorRef = useRef(null);

  const navigate = useNavigate();
  const { templateData } = useTemplateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSectionComplete(templateData, 2);

    delete data._id; // Remove the item id

    const formHolder = Object.keys(data);

    formHolder.forEach((holder) => {
      let errorHolder;
      switch (holder) {
        case "city":
        case "state":
        case "country":
        case "startMonth":
        case "startYear":
          errorHolder = document.getElementById(`${holder}Error`);
          verifyInput(data[holder], errorHolder, holder);
          break;
        case "endMonth":
        case "endYear":
          if (data.current) break;
          errorHolder = document.getElementById(`${holder}Error`);
          verifyInput(data[holder], errorHolder, holder);
          break;
        case "jobTitle":
          errorHolder = document.getElementById(`${holder}Error`);
          verifyInput(data[holder], errorHolder, holder);
          break;
        case "current":
        case "workDesc":
          break;
        default:
          errorHolder = companyErrorRef.current;
          verifyInput(data[holder], errorHolder, holder);
          break;
      }
    });

    if (
      data.jobTitle !== "" &&
      data.company !== "" &&
      data.country &&
      (data.startMonth !== "" || data.startYear !== "") &&
      (data.current || data.endMonth !== "" || data.endYear !== "")
    ) {
      openModal();
      navigate("/resume/builder/employment-experience/responsibilities");
    }
  };

  return (
    <div className="max-w-6xl flex flex-col lg:flex-row items-start justify-between self-center mx-auto gap-10">
      <div className="flex flex-col justify-center max-lg:w-full">
        <h2 className="text-xl md:max-w-[30ch] md:text-2xl leading-tight font-semibold md:leading-snug">
          What recent employment experience do you have?
        </h2>

        <div className="w-full">
          <div className="mt-6">
            <JobTitleInput
              auth
              title={data?.jobTitle}
              handleInputChange={(value) =>
                handleInputChange("jobTitle", value)
              }
            />

            <div className="flex flex-col">
              <input
                type="text"
                id="company"
                name="company"
                className="input-container"
                value={data?.company}
                onChange={(e) => {
                  handleInputChange(e.target.name, e.target.value);
                  verifyInput(
                    e.target.value,
                    companyErrorRef.current,
                    "company"
                  );
                }}
                onInput={(e) => {
                  handleInputChange(e.target.name, e.target.value);
                  verifyInput(
                    e.target.value,
                    companyErrorRef.current,
                    "company"
                  );
                }}
                placeholder="Company / Organization Name"
              />
              <label
                className="-mt-5 mb-1 text-xs pl-4 text-error-500 hidden"
                htmlFor="company"
                ref={companyErrorRef}
              ></label>
            </div>

            <div className="flex gap-4">
              {/* Country  */}
              <CountryInput
                handleChange={(name, value) => handleInputChange(name, value)}
                country={data?.country}
                setCountryId={setCountryId}
              />

              {/* State */}
              <StateInput
                countryId={countryId}
                handleChange={(name, value) => handleInputChange(name, value)}
                state={data?.state}
                setStateId={setStateId}
              />

              <CityInput
                countryId={countryId}
                stateId={stateId}
                handleChange={(name, value) => handleInputChange(name, value)}
                city={data?.city}
              />
            </div>

            <div className="flex gap-4">
              {/* Start Month */}
              <DateSelector
                monthPicker
                handleDataChange={(name, value) => {
                  console.log(name, value);
                  handleInputChange(name, value);
                }}
                id="startMonth"
                year={data?.startYear}
                month={data?.startMonth}
                placeholder="Start Month"
              />

              {/* Start Year */}
              <DateSelector
                handleDataChange={(name, value) =>
                  handleInputChange(name, value)
                }
                id="startYear"
                year={data?.startYear}
                month={data?.startMonth}
                placeholder="Start Year"
                maxDate
              />
            </div>
            {!data?.current && (
              <div className="flex gap-4">
                {/* End Month */}
                <DateSelector
                  monthPicker
                  handleDataChange={(name, value) =>
                    handleInputChange(name, value)
                  }
                  id="endMonth"
                  year={data?.endYear}
                  month={data?.endMonth}
                  placeholder="End Month"
                />

                {/* End Year */}
                <DateSelector
                  handleDataChange={(name, value) =>
                    handleInputChange(name, value)
                  }
                  id="endYear"
                  year={data?.endYear}
                  month={data?.endMonth}
                  placeholder="End Year"
                  minDate={{ month: data?.startMonth, year: data?.startYear }}
                />
              </div>
            )}
            <div
              className="w-fit flex gap-2 items-center cursor-pointer"
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

      <div className="max-md:hidden w-1/2">
        <div className="h-[360px] sm:h-[300px] md:h-[500px] lg:h-[580px] lg:w-[500px] flex items-center justify-center">
          <div className="md:scale-[42%] lg:scale-[50%] mt-10">
            <SelectedTemplates data={templateData} />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <NavigationButton back={handleBack} cont={handleSubmit} />
      </div>

      {isModalOpen && (
        <ResumeModal onClose={closeModal}>
          <Responsibilities
            data={data}
            closeModal={closeModal}
            handleInputChange={handleInputChange}
          />
        </ResumeModal>
      )}
    </div>
  );
};

export default PreviousExperience;
