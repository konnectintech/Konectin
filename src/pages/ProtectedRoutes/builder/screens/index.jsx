import React, { useState } from "react";
import { Link } from "react-router-dom";

import BasicInformation from "./basic";
import Education from "./education";
import EmploymentExperience from "./experience";

const Builder = () => {
  const [resume_data, setResumeData] = useState({
    first_name: "",
    last_name: "",
    job_title: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    zip_code: "",
    email: "",
  });
  const [step, setStep] = useState(0);

  const next = (data) => {
    setResumeData(data);
    setStep((prev) => prev + 1);
  };

  const previous = () => {
    setStep((prev) => prev - 1);
  };

  const component_list = [
    <BasicInformation data={resume_data} next={next} />,
    <Education data={resume_data} next={next} previous={previous} />,
    <EmploymentExperience data={resume_data} next={next} previous={previous} />,
  ];

  return (
    <main className="bg-[#EEEEEE] ">
      <div className=" w-11/12 mx-auto">{component_list[step]}</div>
    </main>
  );
};

export default Builder;
