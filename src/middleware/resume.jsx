import { createContext, useContext } from "react";
// import axios from "axios";
import { useLocalStorage } from "./storage";

const TemplateContext = createContext();
const useTemplateContext = () => useContext(TemplateContext);

const TemplateProvider = ({ children }) => {
  const {
    templateData,
    setTemplateData,
    onInputChange,
    onSectionComplete,
    finalizeData,
  } = useTemplateData();

  return (
    <TemplateContext.Provider
      value={{
        templateData,
        setTemplateData,
        onInputChange,
        onSectionComplete,
        finalizeData,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export { useTemplateContext, TemplateProvider };

export const useTemplateData = () => {
  const [templateData, setTemplateData] = useLocalStorage("templateData", {
    basicInfo: {
      city: "",
      country: "",
      email: "",
      fullName: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      profession: "",
      state: "",
      zipCode: "",
    },
    currentEditedJob: 1,
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
    education: [
      {
        city: "",
        country: "",
        degree: "",
        endMonth: "",
        endYear: "",
        graduated: false,
        startMonth: "",
        startYear: "",
        schoolName: "",
        state: "",
      },
    ],
    skills: [""],
    bio: "",
    selectedTemplate: "",
  });

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

  const onSectionComplete = (section, values) => {};

  const finalizeData = (section, values) => {};

  return {
    templateData,
    setTemplateData,
    onInputChange,
    onSectionComplete,
    finalizeData,
  };
};
