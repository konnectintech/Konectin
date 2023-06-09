import React, { useState } from "react";
import Responsibilities from "./responsibilites";
import { months } from "../../../../../assets/data/months";
import { years } from "../../../../../assets/data/years";
import JobActivities from "./activities";
import PreviousExperience from "./previous-experience";

const EmploymentExperience = ({ next, previous, data }) => {
  const [step, setStep] = useState(0);
  const [jobData, setJobData] = useState(data);

  const nextStep = (data) => {
    setJobData(data);
    setStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setStep((prev) => prev - 1);
  };

  const employement_components = [
    <PreviousExperience next={nextStep} previous={previous} data={jobData} />,
    <Responsibilities next={nextStep} previous={previousStep} data={jobData} />,
    <JobActivities
      next={next}
      previous={previousStep}
      data={jobData}
      resume_data={data}
    />,
  ];

  return <>{employement_components[step]}</>;
};

export default EmploymentExperience;
