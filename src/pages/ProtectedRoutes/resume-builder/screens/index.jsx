import { useEffect } from "react";
import builderBg from "../../../../assets/images/builder-bg.png";
import { useTemplateContext } from "../../../../middleware/resume";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ResumeTemplateSampleImage } from "../../../../assets";

import BasicInformation from "./basicinfo";
import EmploymentExperience from "./experience";
import Education from "./education";
import Skills from "./skills";
import Bio from "./bio";
import Preview from "./preview";
import Download from "./download";
import { TemplateOne } from "../resume-templates/template-1";
import { TemplateTwo } from "../resume-templates/template-2";

const Builder = () => {
  const { templateData, onInputChange, setTemplateData } = useTemplateContext();

  const resumeTemplate = () => {
    switch (templateData.selectedTemplate) {
      case "modern_template_1":
        return <TemplateOne data={templateData} />;
      case "modern_template_2":
        return <TemplateTwo data={templateData} />;
      default:
        return <img src={ResumeTemplateSampleImage} alt="resume template" />;
    }
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      !templateData.basicInfo.fullName &&
      !templateData.basicInfo.profession
    ) {
      navigate("/resume/ai");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

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
      link: "/education/*",
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
    <main
      style={{
        backgroundImage: `linear-gradient(rgba(249, 249, 249, 0.81), rgba(249, 249, 249, 0.91)), url("${builderBg}")`,
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
                  data={templateData}
                  template={resumeTemplate}
                  onInputChange={onInputChange}
                  updateResume={setTemplateData}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </main>
  );
};

export default Builder;
