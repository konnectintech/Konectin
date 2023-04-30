import React, { useState } from "react";

import BasicInformation from "./basicinfo";
import Education from "./education";
import Skills from "./skills";
import Bio from "./bio";
import Preview from "./preview";
import Download from "./download";
import Footer from "../../../../layouts/footer";
import Header from "../../../../layouts/header";
import PreviousExperience from "./experience/previous-experience";
// import Responsibilities from "./experience/responsibilites";
// import JobActivities from "./experience/activities";

const Builder = () => {
  const [resume_data, setResumeData] = useState({
    bio: "",
    firstName: "",
    lastName: "",
    profession: "",
    company: "",
    phoneNumber: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    education: [
      {
        schoolName: "",
        country: "",
        degree: "",
        state: "",
        city: "",
        graduated: false,
        graduationMonth: "",
        graduationYear: "",
      },
    ],
    jobExperience: [
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
    ],
    skills: [{ skill: "" }],
  });
  const [step, setStep] = useState(0);

  const handleChange = (input) => (e) => {
    setResumeData({ ...resume_data, [input]: e.target.value });
  };

  const next = (data) => {
    console.log(data);
    setResumeData(data);
    setStep((prev) => prev + 1);
  };

  const previous = () => {
    setStep((prev) => prev - 1);
  };

  const component_list = [
    <BasicInformation
      data={resume_data}
      handleChange={handleChange}
      next={next}
    />,
    <Education
      data={resume_data}
      handleChange={handleChange}
      next={next}
      previous={previous}
    />,
    <PreviousExperience
      data={resume_data}
      handleChange={handleChange}
      next={next}
      previous={previous}
    />,
    <Skills
      data={resume_data}
      handleChange={handleChange}
      next={next}
      previous={previous}
    />,
    <Bio
      data={resume_data}
      handleChange={handleChange}
      next={next}
      previous={previous}
    />,
    <Preview data={resume_data} next={next} previous={previous} />,
    <Download data={resume_data} previous={previous} />,
  ];

  return (
    <>
      <Header />
      <main className="bg-[#EEEEEE] ">
        <div className=" w-11/12 mx-auto">{component_list[step]}</div>
      </main>
      <Footer />
    </>
  );
};

export default Builder;
