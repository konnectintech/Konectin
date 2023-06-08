import { useState } from "react";

import BasicInformation from "./basicinfo";
import Education from "./education";
import Skills from "./skills";
import Bio from "./bio";
import Preview from "./preview";
import Download from "./download";
import Footer from "../../../../layouts/footer";
import Header from "../../../../layouts/header";
import PreviousExperience from "./experience/previous-experience";
import { useTemplateContext } from "../../../../contexts/resume";
// import Responsibilities from "./experience/responsibilites";
// import JobActivities from "./experience/activities";
import {
  ResumeTemplateSample1Image,
  ResumeTemplateSampleImage,
} from "../../../../assets";

const Builder = () => {
  const { selectedTemplate } = useTemplateContext();
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
    setResumeData(data);
    setStep((prev) => prev + 1);
  };

  const previous = () => {
    setStep((prev) => prev - 1);
  };

  const resumeTemplate = () => {
    switch (selectedTemplate) {
      case "template0":
        return <img src={ResumeTemplateSample1Image} alt="resume template" />;
      case "template1":
        return <img src={ResumeTemplateSampleImage} alt="resume template" />;
      default:
        return null;
    }
  };

  const component_list = [
    <BasicInformation
      data={resume_data}
      template={resumeTemplate}
      handleChange={handleChange}
      next={next}
    />,
    <PreviousExperience
      data={resume_data}
      template={resumeTemplate}
      handleChange={handleChange}
      next={next}
      previous={previous}
    />,
    <Education
      data={resume_data}
      template={resumeTemplate}
      handleChange={handleChange}
      next={next}
      previous={previous}
    />,
    <Skills
      data={resume_data}
      template={resumeTemplate}
      handleChange={handleChange}
      next={next}
      previous={previous}
    />,
    <Bio
      data={resume_data}
      template={resumeTemplate}
      handleChange={handleChange}
      next={next}
      previous={previous}
    />,
    <Preview
      data={resume_data}
      next={next}
      previous={previous}
      template={resumeTemplate}
    />,
    <Download
      data={resume_data}
      previous={previous}
      template={resumeTemplate}
    />,
  ];

  return (
    <>
      <Header />
      <main className="bg-[#EEEEEE]">
        <div className=" w-11/12 mx-auto max-w-screen-xl">
          {component_list[step]}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Builder;
