import { useTemplateContext } from "../../../../../middleware/resume";
import { Route, Routes, Navigate } from "react-router-dom";
import BasicInformation from "./basicinfo";
import EmploymentExperience from "./experience";
import Education from "./education";
import Skills from "./skills";
import Bio from "./bio";
import Preview from "./preview";
import Download from "./download";

function Builder() {
  const { templateData, onInputChange, setTemplateData } = useTemplateContext();

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

  // Function to check if a step is completed
  const isStepCompleted = (step) => {
    if (step === "") {
      return templateData.completed["basic_info"] === true;
    } else if (step === "employment-experience/*") {
      return templateData.completed["work_history"] === true;
    } else if (step === "education/*") {
      return templateData.completed["education"] === true;
    } else if (step === "preview" || step === "download") {
      return true;
    }
    return templateData.completed[step] === true;
  };

  return (
    <div className="w-11/12 mx-auto">
      <Routes>
        {component_list.map((component, index) => (
          <Route
            key={component.link}
            path={component.link}
            element={
              index === 0 ||
              isStepCompleted(component_list[index - 1].link.substring(1)) ? (
                <component.element
                  data={templateData}
                  onInputChange={onInputChange}
                  updateResume={setTemplateData}
                />
              ) : (
                <Navigate
                  to={"/resume/builder" + component_list[index - 1].link}
                  replace
                />
              )
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default Builder;
