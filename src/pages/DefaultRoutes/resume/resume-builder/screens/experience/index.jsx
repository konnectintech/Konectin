/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import JobActivities from "./activities";
import Responsibilities from "./responsibilites";
import PreviousExperience from "./previous-experience";
import { useTemplateContext } from "../../../../../../middleware/resume";

const EmploymentExperience = ({ data, template }) => {
  const navigate = useNavigate();
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
            jobTitle: "",
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

  // add another empty valued object into the jobExperience and navigates to the first job field
  const addWorkExperience = () => {
    setTemplateData((prev) => ({
      ...prev,
      jobExperience: [
        ...data.jobExperience,
        {
          city: "",
          company: "",
          country: "",
          current: false,
          endMonth: "",
          endYear: "",
          jobTitle: "",
          startMonth: "",
          startYear: "",
          state: "",
          workDesc: "",
        },
      ],
      currentEditedJob: prev.currentEditedJob + 1,
    }));

    navigate("/resume/builder/employment-experience/");
  };

  // Controls the activities go back functions
  const goBack = () => {
    // if the array contains more than one object it goes to the basicInfo page otherwise goes to the job responsibility page
    if (Object.keys(data.jobExperience).length <= 1) {
      navigate("/resume/builder/employment-experience/responsibilities");
      return;
    }

    navigate("/resume/builder/");
  };

  // Controls the previous experience page go back functions
  const handleBack = () => {
    // if the array contains more than one object it goes to the job activities page and set the array back to the normal otherwise goes to the basicInfo page
    if (Object.keys(data.jobExperience).length >= 2) {
      if (jobExperience.workDesc.length <= 28) {
        data.jobExperience.splice(data.jobExperience.length - 1, 1);

        setTemplateData((prev) => ({
          ...prev,
          jobExperience: data.jobExperience,
        }));
      }

      navigate("/resume/builder/employment-experience/job-activities");
      return;
    }

    navigate("/resume/builder/");
  };

  const handleDelete = (index) => {
    data.jobExperience.splice(index, 1);

    setTemplateData((prev) => ({
      ...prev,
      jobExperience: data.jobExperience,
    }));
  };

  const employment_components = [
    { element: PreviousExperience, path: "/" },
    { element: Responsibilities, path: "/responsibilities" },
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
              addCompany={addWorkExperience}
              goBack={goBack}
              handleBack={handleBack}
              deleteExperience={handleDelete}
              template={template}
            />
          }
        />
      ))}
    </Routes>
  );
};

export default EmploymentExperience;
