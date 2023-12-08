import { useNavigate } from "react-router-dom";
import { useState } from "react";

function JobDescription({ data, handleChange }) {
  const [errorMessage, setErrorMessage] = useState({ company: "", job: "" });

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    handleChange({ section: "description", subsection: name, values: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.job.length <= 2) {
      setErrorMessage((prev) => ({
        ...prev,
        job: "Please fill in the job description",
      }));
    }

    if (data.company.length <= 2) {
      setErrorMessage((prev) => ({
        ...prev,
        company: "Please fill in the company information",
      }));
    }

    if (data.company.length >= 2 && data.job.length >= 2) {
      setErrorMessage({ company: "", job: "" });
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
              value={data.job}
              onChange={(e) => {
                handleInputChange("job", e.target.value);
                setErrorMessage((prev) => ({ ...prev, job: "" }));
              }}
              className="coverLetter__input"
            />
            <label htmlFor="job" className="text-error-500 text-sm">
              {errorMessage.job && errorMessage.job}
            </label>
          </div>
          <div className="flex-col flex items-start w-full gap-2">
            <input
              type="text"
              placeholder="Company's Info"
              value={data.company}
              id="company"
              onChange={(e) => {
                handleInputChange("company", e.target.value);
                setErrorMessage((prev) => ({ ...prev, company: "" }));
              }}
              className="coverLetter__input"
            />
            <label htmlFor="company" className="text-error-500 text-sm">
              {errorMessage.company && errorMessage.company}
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
