import { useEffect, createContext, useContext } from "react";
// import axios from "axios";
import { useLocalStorage } from "./storage";

const TemplateContext = createContext();
const useTemplateContext = () => useContext(TemplateContext);

const TemplateProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useLocalStorage(
    "selectedTemplate",
    false
  );
  const {
    templateData,
    setTemplateData,
    onInputChange,
    onSectionComplete,
    finalizeData,
  } = useTemplateData();

  useEffect(() => {
    localStorage.setItem("selectedTemplate", selectedTemplate);
  }, [selectedTemplate]);

  return (
    <TemplateContext.Provider
      value={{
        setSelectedTemplate,
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
      phoneNumber: "",
      profession: "",
      state: "",
      zipCode: "",
    },
    jobExperience: [
      {
        city: "",
        company: "",
        current: false,
        country: "",
        endMonth: "",
        endYear: "",
        jobTitle: "",
        startMonth: "",
        startYear: "",
        state: "",
        workDesc: [{ summary: "" }],
      },
    ],
    education: [
      {
        schoolName: "",
        country: "",
        degree: "",
        state: "",
        city: "",
        graduated: false,
        graduationMonth: "",
        graduationYear: "",
      },
    ],
    skills: [{ skill: "" }],
    bio: "",
  });

  const onInputChange = (section, values) => {};

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
