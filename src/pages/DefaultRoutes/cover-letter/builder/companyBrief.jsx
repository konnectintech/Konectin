import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CompanyBrief({ data, handleChange }) {
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    handleChange({ section: "description", subsection: name, values: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.length <= 2) {
      setErrorMessage("Please fill in the company information");
    }

    if (data.length >= 2) {
      setErrorMessage("");
      navigate("/cover-letter/short-bio");
    }
  };

  return (
    <>
      <h2 className="py-4 mb-3 font-bold text-2xl md:text-4xl leading-10">
        <span className="text-secondary-500">Company </span>Brief
      </h2>
      <span>
        Good job! Now, could you copy and paste the company's mission, vision
        and values. This will help me align your values with the organization's
        ethos.
      </span>
      <form
        className="w-full flex flex-col items-center gap-4 max-w-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex-col flex items-start w-full gap-2 mt-6">
          <textarea
            type="text"
            placeholder="Company's Info"
            value={data}
            id="company"
            onChange={(e) => {
              handleInputChange("companyInfo", e.target.value);
              setErrorMessage("");
            }}
            className="px-4 py-3 text-[11px] w-full h-16 text-primary-400 border rounded border-neutral-500 outline-0 bg-neutral-1000 focus:border-primary-500 focus:border-[1.5px]"
          />
          <label htmlFor="company" className="text-error-500 text-sm">
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

export default CompanyBrief;
