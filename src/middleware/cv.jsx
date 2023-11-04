import { useContext, createContext } from "react";
import { useLocalStorage } from "./storage";

const CVContext = createContext();

const useCVContext = () => useContext(CVContext);

const CVProvider = ({ children }) => {
  const {
    CVData,
    setCVData,
    onInputChange,
  } = useCVData();

  return (
    <CVContext.Provider
      value={{
        CVData,
        setCVData,
        onInputChange,
      }}
    >
      {children}
    </CVContext.Provider>
  );
};

export { useCVContext, CVProvider };

export const useCVData = () => { 
    const [CVData, setCVData] = useLocalStorage("cv_data", {
        details: { companyName: "", jobPosition: "", email: "", fullName: "" },
        description: { company: "", job: "" },
        bio: "",
        relatedResume: ""
    });

    const onInputChange = ({ section, subsection, values }) => {
      if (subsection) {
        setCVData({
          ...CVData,
          [section]: {
            ...CVData[section],
            [subsection]: values,
          },
        });
      } else {
        CVData({ ...CVData, [section]: values });
      }
    };

    return {
      CVData,
      setCVData,
      onInputChange,
    };
}