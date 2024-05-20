import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCVContext } from "../../../../middleware/cv";

function JobDescription({ data }) {
  const { setCVData } = useCVContext();
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setCVData((prev) => ({
      ...prev,
      description: { ...prev.description, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.length <= 2) {
      setErrorMessage("Please fill in the job description");
    }

    if (data.length >= 2) {
      setErrorMessage("");
      navigate("/cover-letter/company-info");
    }
  };

  return (
    <>
      <h2 className="py-4 mb-3 font-bold text-2xl md:text-4xl leading-10">
        <span className="text-secondary-500">Job </span>Description
      </h2>
      <span>
        Fantastic, could you copy and paste the job role. This will help me
        customize your cover letter to fit the role you are applying for.
      </span>
      <form
        className="w-full flex flex-col items-center gap-4 max-w-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex-col flex items-start w-full gap-2 mt-6">
          <textarea
            type="text"
            placeholder="Job Description"
            id="job"
            value={data}
            onChange={(e) => {
              handleInputChange("jobDescription", e.target.value);
              setErrorMessage("");
            }}
            className="px-4 py-3 text-[11px] w-full h-16 text-primary-400 border rounded border-neutral-500 outline-0 bg-neutral-1000 focus:border-primary-500 focus:border-[1.5px]"
          />
          <label htmlFor="job" className="text-error-500 text-sm">
            {errorMessage && errorMessage}
          </label>
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
