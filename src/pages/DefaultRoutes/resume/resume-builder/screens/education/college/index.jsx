import { Route, Routes, useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../../../middleware/resume";
import { useEffect, useState } from "react";
import CollegeForm from "./collegeForm";
import CollegeList from "./collegeList";

const College = ({ data }) => {
  const navigate = useNavigate();
  const { setTemplateData } = useTemplateContext();

  useEffect(() => {
    if (data.currentEditedEducation === 0) {
      setTemplateData((prev) => ({
        ...prev,
        education: [
          {
            schoolName: "",
            country: "",
            degree: "",
            state: "",
            city: "",
            graduated: false,
            graduation_month: null,
            graduation_year: null,
          },
        ],
        currentEditedEducation: 1,
      }));
    }
  }, []);

  // Set the job Experience being edited to the exact one using the currentEditedEducation state
  const [education, seteducation] = useState(
    data.education[data.currentEditedEducation - 1]
  );

  // A re-effect to update the job Experience according to the exact job being edited whenever the currentEditedEducation is updated
  useEffect(() => {
    if (data.education) {
      seteducation(data.education[data.currentEditedEducation - 1]);
    }
  }, [data.currentEditedEducation]);

  // Updates the storage whenever job experience data changes
  useEffect(() => {
    setTemplateData((prev) => ({
      ...prev,
      education: Object.values(prev.education).map((obj, id) => {
        if (id === data.currentEditedEducation - 1) {
          return education;
        }
        return obj;
      }),
    }));
  }, [education]);

  // Updates the job experience data whenever inputs changes
  const handleStateChange = (name, value) => {
    seteducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // add another empty valued object into the education and navigates to the first job field
  const addEducation = () => {
    setTemplateData((prev) => ({
      ...prev,
      education: [
        ...data.education,
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
      currentEditedEducation: prev.currentEditedEducation + 1,
    }));

    navigate("/resume/builder/employment-experience/");
  };

  // Controls the activities go back functions
  const goBack = () => {
    // if the array contains more than one object it goes to the basicInfo page otherwise goes to the job responsibility page
    if (Object.keys(data.education).length <= 1) {
      navigate("/resume/builder/employment-experience/responsibilities");
      return;
    }

    navigate("/resume/builder/");
  };

  // Controls the previous experience page go back functions
  const handleBack = () => {
    // if the array contains more than one object it goes to the job activities page and set the array back to the normal otherwise goes to the basicInfo page
    if (Object.keys(data.education).length >= 2) {
      if (education.workDesc.length <= 28) {
        data.education.splice(data.education.length - 1, 1);

        setTemplateData((prev) => ({
          ...prev,
          education: data.education,
        }));
      }

      navigate("/resume/builder/employment-experience/job-activities");
      return;
    }

    navigate("/resume/builder/");
  };

  const handleDelete = (index) => {
    data.education.splice(index, 1);

    setTemplateData((prev) => ({
      ...prev,
      education: data.education,
    }));
  };

  const education_components = [
    { element: CollegeForm, path: "/" },
    { element: CollegeList, path: "/college-list" },
  ];

  return (
    <Routes>
      {education_components.map((route) => {
        console.log("fdgd", route);
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <route.element
                data={education}
                handleInputChange={handleStateChange}
                addCompany={addEducation}
                goBack={goBack}
                handleBack={handleBack}
                deleteExperience={handleDelete}
              />
            }
          />
        );
      })}
    </Routes>
  );
};

export default College;
