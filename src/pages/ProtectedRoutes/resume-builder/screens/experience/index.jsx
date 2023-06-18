import { useState } from "react";
import Responsibilities from "./responsibilites";
import JobActivities from "./activities";
import PreviousExperience from "./previous-experience";

const EmploymentExperience = ({ data, template, updateResume }) => {
  const [step, setStep] = useState(0);
  const [workUploaded, setWorkUploaded] = useState(1);

  const handleStep = (stepNumber) => {
    setStep(stepNumber);
  };

  const addWorkExperience = () => {
    setStep(0);
    setWorkUploaded((prev) => prev + 1);
    const jobExperience = [
      data.jobExperience,
      {
        jobTitle: "",
        company: "",
        country: "",
        city: "",
        state: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        workDesc: [{ summary: "" }],
        current: false,
      },
    ];
    updateResume((prev) => ({ ...prev, jobExperience: jobExperience }));
  };

  const employment_components = [
    <PreviousExperience
      handleStep={handleStep}
      data={data}
      template={template}
      workId={workUploaded}
    />,
    <Responsibilities
      handleStep={handleStep}
      data={data}
      workId={workUploaded}
    />,
    <JobActivities
      handleStep={handleStep}
      data={data}
      template={template}
      addCompany={addWorkExperience}
    />,
  ];

  return employment_components[step];
};

export default EmploymentExperience;
