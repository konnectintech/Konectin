import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BasicInformation from "./basicinfo";
import EmploymentExperience from "./experience";
import Education from "./education";
import Skills from "./skills";
import Bio from "./bio";
import Preview from "./preview";
import Download from "./download";
import { useTemplateContext } from "../../../../contexts/resume";
import {
  ResumeTemplateSample1Image,
  ResumeTemplateSampleImage,
} from "../../../../assets";
import builderBg from "../../../../assets/images/builder-bg.png";

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

  // const handleChange = (input) => (e) => {
  //   setResumeData({ ...resume_data, [input]: e.target.value });
  // };

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
    {
      element: BasicInformation,
      link: "/",
    },
    {
      element: EmploymentExperience,
      link: "/employment-experience/*",
    },
    {
      element: Education,
      link: "/education",
    },
    {
      element: Skills,
      link: "/skills",
    },
    {
      element: Bio,
      link: "/bio",
    },
    {
      element: Preview,
      link: "/preview",
    },
    {
      element: Download,
      link: "/download",
    },
  ];

  return (
    <>
      <main
        className=""
        style={{
          backgroundImage: `linear-gradient(rgba(249, 249, 249, 0.81), rgba(249, 249, 249, 0.81)), url("${builderBg}")`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-11/12 mx-auto">
          <Routes>
            {component_list.map((component) => (
              <Route
                key={component.link}
                path={component.link}
                element={
                  <component.element
                    data={resume_data}
                    template={resumeTemplate}
                    updateResume={setResumeData}
                  />
                }
              />
            ))}
          </Routes>
        </div>
      </main>
    </>
  );
};

export default Builder;
