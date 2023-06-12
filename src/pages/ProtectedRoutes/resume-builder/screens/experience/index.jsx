import { Route, Routes } from "react-router-dom";
import Responsibilities from "./responsibilites";
import JobActivities from "./activities";
import PreviousExperience from "./previous-experience";

const EmploymentExperience = ({ data, template }) => {
  const employment_components = [
    {
      element: PreviousExperience,
      link: "/",
    },
    {
      element: Responsibilities,
      link: "/responsibilities",
    },
    {
      element: JobActivities,
      link: "/job-activities",
    },
  ];

  return (
    <Routes>
      {employment_components.map((component) => (
        <Route
          key={component.link}
          path={component.link}
          element={<component.element template={template} data={data} />}
        />
      ))}
    </Routes>
  );
};

export default EmploymentExperience;
