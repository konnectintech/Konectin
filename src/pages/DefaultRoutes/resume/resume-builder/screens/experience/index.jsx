/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import JobActivities from "./activities";
import PreviousExperience from "./previous-experience";
import { useTemplateContext } from "../../../../../../middleware/resume";

const EmploymentExperience = ({ data }) => {
  const { setTemplateData } = useTemplateContext();

  useEffect(() => {
    if (data.currentEditedJob === 0) {
      setTemplateData((prev) => ({
        ...prev,
        jobExperience: [
          {
            city: "",
            company: "",
            country: "",
            current: false,
            endMonth: "",
            endYear: "",
            jobTitle: data?.basicInfo?.profession || "",
            startMonth: "",
            startYear: "",
            state: "",
            workDesc: "",
          },
        ],
        currentEditedJob: 1,
      }));
    }
  }, []);

  // Set the job Experience being edited to the exact one using the currentEditedJob state
  const [jobExperience, setJobExperience] = useState(
    data.jobExperience[data.currentEditedJob - 1]
  );

  // A re-effect to update the job Experience according to the exact job being edited whenever the currentEditedjob is updated
  useEffect(() => {
    if (data.jobExperience) {
      setJobExperience(data.jobExperience[data.currentEditedJob - 1]);
    }
  }, [data.currentEditedJob]);

  // Updates the storage whenever job experience data changes
  useEffect(() => {
    setTemplateData((prev) => ({
      ...prev,
      jobExperience: Object.values(prev.jobExperience).map((obj, id) => {
        if (id === data.currentEditedJob - 1) {
          return jobExperience;
        }
        return obj;
      }),
    }));
  }, [jobExperience]);

  // Updates the job experience data whenever inputs changes
  const handleStateChange = (name, value) => {
    setJobExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const employment_components = [
    { element: PreviousExperience, path: "/" },
    { element: JobActivities, path: "/job-activities" },
  ];

  return (
    <Routes>
      {employment_components.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <route.element
              data={jobExperience}
              handleInputChange={handleStateChange}
            />
          }
        />
      ))}
    </Routes>
  );
};

export default EmploymentExperience;
