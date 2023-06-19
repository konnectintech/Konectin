import { Route, Routes } from "react-router-dom";
import BasicInformation from "./basicinfo";
import EmploymentExperience from "./experience";
import Education from "./education";
import Skills from "./skills";
import Bio from "./bio";
import Preview from "./preview";
import Download from "./download";
import { useTemplateContext } from "../../../../middleware/resume";
import {
  ResumeTemplateSample1Image,
  ResumeTemplateSampleImage,
} from "../../../../assets";
import builderBg from "../../../../assets/images/builder-bg.png";

const Builder = () => {
  const { selectedTemplate, templateData, setTemplateData } =
    useTemplateContext();

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
                    data={templateData}
                    template={resumeTemplate}
                    updateResume={setTemplateData}
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
