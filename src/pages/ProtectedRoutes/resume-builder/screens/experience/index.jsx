import { useState } from "react";
import Responsibilities from "./responsibilites";
import JobActivities from "./activities";
import PreviousExperience from "./previous-experience";

const EmploymentExperience = ({ data, template }) => {
  const [step, setStep] = useState(0);
  const [workUploaded, setWorkUploaded] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setStep((prev) => prev - 1);
  };

  const addWorkExperience = () => {
    setStep(0);
    setWorkUploaded((prev) => prev + 1);
  };

  const employment_components = [
    <PreviousExperience
      next={nextStep}
      data={data}
      template={template}
      workId={workUploaded}
    />,
    <Responsibilities
      next={nextStep}
      data={data}
      previous={previousStep}
      workId={workUploaded}
    />,
    <JobActivities
      previous={previousStep}
      data={data}
      template={template}
      addCompany={addWorkExperience}
    />,
  ];

  return employment_components[step];
};

export default EmploymentExperience;
