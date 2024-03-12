import { createContext, useContext, useEffect } from "react";
// import axios from "axios";
import { useLocalStorage } from "./storage";

const TemplateContext = createContext();

const useTemplateContext = () => useContext(TemplateContext);

const TemplateProvider = ({ children }) => {
  const { templateData, setTemplateData, onInputChange, onSectionComplete } =
    useTemplateData();

  return (
    <TemplateContext.Provider
      value={{
        templateData,
        setTemplateData,
        onInputChange,
        onSectionComplete,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export { useTemplateContext, TemplateProvider };

export const useTemplateData = () => {
  const [templateData, setTemplateData] = useLocalStorage(
    "konectin-profiler-data-template",
    {
      completed: {
        basic_info: false,
        work_history: false,
        education: false,
        skills: false,
        bio: false,
      },
      basicInfo: {
        city: "",
        country: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        phoneCode: "",
        profession: "",
        state: "",
        zipCode: "",
      },
      theme: {
        color: "blue",
        font: "",
      },
      currentEditedJob: 0,
      currentEditedEducation: 0,
      jobExperience: [],
      education: [],
      skills: [],
      additionalInformation: {},
      bio: "",
      selectedTemplate: "",
      currentStage: 0,
    }
  );

  const onInputChange = ({ section, subsection, values }) => {
    if (subsection) {
      setTemplateData({
        ...templateData,
        [section]: {
          ...templateData[section],
          [subsection]: values,
        },
      });
    } else {
      setTemplateData({ ...templateData, [section]: values });
    }
  };

  useEffect(() => {
    if (
      templateData.basicInfo.firstName === "" ||
      templateData.basicInfo.lastName === "" ||
      templateData.basicInfo.email === "" ||
      templateData.basicInfo.country === ""
    ) {
      setTemplateData((prev) => ({
        ...prev,
        completed: { ...prev.completed, basic_info: false },
      }));
    } else {
      setTemplateData((prev) => ({
        ...prev,
        completed: { ...prev.completed, basic_info: true },
      }));
    }

    if (templateData.currentEditedJob >= 1) {
      const jobArray =
        templateData.jobExperience[templateData.currentEditedJob - 1];

      if (
        jobArray?.jobTitle === "" ||
        jobArray?.company === "" ||
        jobArray?.workDesc.length <= 30 ||
        jobArray?.startYear === "" ||
        (!jobArray?.current && jobArray?.endYear === "")
      ) {
        setTemplateData((prev) => ({
          ...prev,
          completed: { ...prev.completed, work_history: false },
        }));
      } else {
        setTemplateData((prev) => ({
          ...prev,
          completed: { ...prev.completed, work_history: true },
        }));
      }
    }

    if (templateData.currentEditedEducation >= 1) {
      const eduArray =
        templateData.education[templateData.currentEditedJob - 1];

      if (eduArray?.schoolName === "" || eduArray?.country === "") {
        setTemplateData((prev) => ({
          ...prev,
          completed: { ...prev.completed, education: false },
        }));
      } else {
        setTemplateData((prev) => ({
          ...prev,
          completed: { ...prev.completed, education: true },
        }));
      }
    }

    if (templateData.skills.length <= 0) {
      setTemplateData((prev) => ({
        ...prev,
        completed: { ...prev.completed, skills: false },
      }));
    } else {
      setTemplateData((prev) => ({
        ...prev,
        completed: { ...prev.completed, skills: true },
      }));
    }

    if (templateData.bio.length <= 30) {
      setTemplateData((prev) => ({
        ...prev,
        completed: { ...prev.completed, bio: false },
      }));
    } else {
      setTemplateData((prev) => ({
        ...prev,
        completed: { ...prev.completed, bio: true },
      }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    templateData.basicInfo,
    templateData.skills,
    templateData.jobExperience,
    templateData.education,
    templateData.bio,
  ]);

  return {
    templateData,
    setTemplateData,
    onInputChange,
  };
};
