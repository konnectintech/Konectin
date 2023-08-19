import { useTemplateContext } from "../../../../../middleware/resume";
import { Route, Routes } from "react-router-dom";

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

  return (
    <div className="w-11/12 mx-auto">
      <Routes>
        {component_list.map((component) => (
          <Route
            key={component.link}
            path={component.link}
            element={
              <component.element
                data={templateData}
                onInputChange={onInputChange}
                updateResume={setTemplateData}
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default Builder;
