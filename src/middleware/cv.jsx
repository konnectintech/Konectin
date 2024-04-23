import { useContext, createContext } from "react";
import { useLocalStorage } from "./storage";

const CVContext = createContext();

const useCVContext = () => useContext(CVContext);

const CVProvider = ({ children }) => {
  const { CVData, setCVData } = useCVData();

  return (
    <CVContext.Provider
      value={{
        CVData,
        setCVData,
      }}
    >
      {children}
    </CVContext.Provider>
  );
};

export { useCVContext, CVProvider };

const useCVData = () => {
  const [CVData, setCVData] = useLocalStorage(
    "konectin-profiler-coverLetter-data",
    {
      details: { companyName: "", jobPosition: "", email: "", fullName: "" },
      description: { companyInfo: "", jobDescription: "" },
      professionalBio: "",
      content: "",
      chats: [],
    }
  );

  return {
    CVData,
    setCVData,
  };
};
