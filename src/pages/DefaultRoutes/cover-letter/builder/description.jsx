import { useNavigate } from "react-router-dom";
import { useState } from "react";

function JobDescription({ data, handleChange }) {
  const [errorMessage, setErrorMessage] = useState({
    companyInfo: "",
    jobDescription: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    handleChange({ section: "description", subsection: name, values: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.jobDescription.length <= 2) {
      setErrorMessage((prev) => ({
        ...prev,
        jobDescription: "Please fill in the job description",
      }));
    }

    if (data.companyInfo.length <= 2) {
      setErrorMessage((prev) => ({
        ...prev,
        companyInfo: "Please fill in the company information",
      }));
    }

    if (data.companyInfo.length >= 2 && data.jobDescription.length >= 2) {
      setErrorMessage({ companyInfo: "", jobDescription: "" });
      navigate("/cover-letter/short-bio");
    }
  };

  return (
    <>
      <h2 className="py-4 mb-3 font-bold text-2xl md:text-4xl leading-10">
        <span className="text-secondary-500">Job Description</span> & Company
        Brief
      </h2>
      <span>
        Fantastic, could you briefly describe the job role and the company. This
        will help me customize your cover letter to fit the role and the
        company's ethos.
      </span>
      <form
        className="w-full flex flex-col items-center gap-4 max-w-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-4 mt-6 w-full">
          <div className="flex-col flex items-start w-full gap-2">
            <input
              type="text"
              placeholder="Job Description"
              id="job"
              value={data.jobDescription}
              onChange={(e) => {
                handleInputChange("jobDescription", e.target.value);
                setErrorMessage((prev) => ({ ...prev, jobDescription: "" }));
              }}
              className="px-4 py-3 text-[11px] w-full text-primary-400 border border-neutral-500 outline-0 bg-neutral-1000 focus:border-primary-500 focus:border-[1.5px]"
            />
            <label htmlFor="job" className="text-error-500 text-sm">
              {errorMessage.jobDescription && errorMessage.jobDescription}
            </label>
          </div>
          <div className="flex-col flex items-start w-full gap-2">
            <input
              type="text"
              placeholder="Company's Info"
              value={data.companyInfo}
              id="company"
              onChange={(e) => {
                handleInputChange("companyInfo", e.target.value);
                setErrorMessage((prev) => ({ ...prev, companyInfo: "" }));
              }}
              className="px-4 py-3 text-[11px] w-full text-primary-400 border border-neutral-500 outline-0 bg-neutral-1000 focus:border-primary-500 focus:border-[1.5px]"
            />
            <label htmlFor="company" className="text-error-500 text-sm">
              {errorMessage.companyInfo && errorMessage.companyInfo}
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-white w-fit rounded-lg bg-primary-600 py-3 px-16"
        >
          Continue
        </button>
      </form>
    </>
  );
}

export default JobDescription;
