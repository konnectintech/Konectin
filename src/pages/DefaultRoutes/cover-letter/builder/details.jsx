import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCVContext } from "../../../../middleware/cv";

function JobDetails({ isLogged, data }) {
  const { setCVData } = useCVContext();
  const [errorMessage, setErrorMessage] = useState({
    companyName: "",
    jobPosition: "",
    email: "",
    fullName: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setCVData((prev) => ({
      ...prev,
      details: { ...prev.details, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkMail = data.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      ? true
      : false;

    if (!isLogged) {
      if (data.fullName.length <= 2) {
        return setErrorMessage((prev) => ({
          ...prev,
          fullName: "Please fill in your name",
        }));
      }

      if (!checkMail) {
        return setErrorMessage((prev) => ({
          ...prev,
          email: "Please fill in a valid email",
        }));
      }
    }

    if (data.jobPosition.length <= 2) {
      return setErrorMessage((prev) => ({
        ...prev,
        jobPosition: "Please fill in the job position",
      }));
    }

    if (data.companyName.length <= 2) {
      return setErrorMessage((prev) => ({
        ...prev,
        companyName: "Please fill in the company name",
      }));
    }

    if (
      data.companyName.length >= 2 &&
      data.jobPosition.length >= 2 &&
      data.fullName.length >= 2 &&
      checkMail
    ) {
      setErrorMessage({
        companyName: "",
        jobPosition: "",
        email: "",
        fullName: "",
      });
      return navigate("/cover-letter/job-description");
    }
  };

  return (
    <>
      <h2 className="py-2 font-bold text-2xl md:text-4xl leading-10">
        {isLogged ? (
          <span className="text-secondary-500">Job</span>
        ) : (
          <>
            <span className="text-secondary-500">Basic Info</span> & Job{" "}
          </>
        )}{" "}
        Details
      </h2>
      <span className="mt-2">
        {isLogged
          ? "To start, could you please share the job position you're applying for and the name of the company"
          : "First off, could you please provide your name, the job title you're pursuing, and the name of the company you're applying to?"}
      </span>
      <form onSubmit={handleSubmit} className="w-full mt-6 max-w-xl">
        {!isLogged && (
          <div className="flex gap-4">
            <div className="flex-col flex items-start w-full gap-2">
              <input
                type="text"
                placeholder="Full Name"
                id="fullName"
                value={data.fullName}
                onChange={(e) => {
                  handleInputChange("fullName", e.target.value);
                  setErrorMessage((prev) => ({ ...prev, fullName: "" }));
                }}
                onInput={(e) => {
                  handleInputChange("fullName", e.target.value);
                  setErrorMessage((prev) => ({ ...prev, fullName: "" }));
                }}
                className="px-4 py-3 text-[11px] w-full text-primary-400 border border-neutral-500 outline-0 bg-neutral-1000 focus:border-primary-500 focus:border-[1.5px]"
              />
              <label htmlFor="fullName" className="text-error-500 text-sm">
                {errorMessage.fullName && errorMessage.fullName}
              </label>
            </div>
            <div className="flex-col flex items-start w-full gap-2">
              <input
                type="text"
                placeholder="Email address"
                id="email"
                value={data.email}
                onChange={(e) => {
                  handleInputChange("email", e.target.value);
                  setErrorMessage((prev) => ({ ...prev, email: "" }));
                }}
                onInput={(e) => {
                  handleInputChange("email", e.target.value);
                  setErrorMessage((prev) => ({ ...prev, email: "" }));
                }}
                className="px-4 py-3 text-[11px] w-full text-primary-400 border border-neutral-500 outline-0 bg-neutral-1000 focus:border-primary-500 focus:border-[1.5px]"
              />
              <label htmlFor="email" className="text-error-500 text-sm">
                {errorMessage.email && errorMessage.email}
              </label>
            </div>
          </div>
        )}
        <div className="flex gap-4 mt-3">
          <div className="flex-col flex items-start w-full gap-2">
            <input
              type="text"
              placeholder="Job Position"
              id="jobPosition"
              value={data.jobPosition}
              onChange={(e) => {
                handleInputChange("jobPosition", e.target.value);
                setErrorMessage((prev) => ({ ...prev, jobPosition: "" }));
              }}
              onInput={(e) => {
                handleInputChange("jobPosition", e.target.value);
                setErrorMessage((prev) => ({ ...prev, jobPosition: "" }));
              }}
              className="px-4 py-3 text-[11px] w-full text-primary-400 border border-neutral-500 outline-0 bg-neutral-1000 focus:border-primary-500 focus:border-[1.5px]"
            />
            <label htmlFor="jobPosition" className="text-error-500 text-sm">
              {errorMessage.jobPosition && errorMessage.jobPosition}
            </label>
          </div>

          <div className="flex-col flex items-start w-full gap-2">
            <input
              type="text"
              placeholder="Company's name"
              id="companyName"
              value={data.companyName}
              onChange={(e) => {
                handleInputChange("companyName", e.target.value);
                setErrorMessage((prev) => ({ ...prev, companyName: "" }));
              }}
              onInput={(e) => {
                handleInputChange("companyName", e.target.value);
                setErrorMessage((prev) => ({ ...prev, companyName: "" }));
              }}
              className="px-4 py-3 text-[11px] w-full text-primary-400 border border-neutral-500 outline-0 bg-neutral-1000 focus:border-primary-500 focus:border-[1.5px]"
            />
            <label htmlFor="companyName" className="text-error-500 text-sm">
              {errorMessage.companyName && errorMessage.companyName}
            </label>
          </div>
        </div>

        <button
          type="submit"
          className=" text-white rounded-lg bg-primary-600 py-3 px-16 mt-6 "
        >
          Continue
        </button>
      </form>
    </>
  );
}

export default JobDetails;
