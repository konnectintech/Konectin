import React, { useState, useEffect, createContext, useContext } from "react";

const TemplateContext = createContext();
const useTemplateContext = () => useContext(TemplateContext);

const TemplateProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    const storedTemplate = localStorage.getItem("selectedTemplate");
    return storedTemplate || "template0";
  });
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    localStorage.setItem("selectedTemplate", selectedTemplate);
  }, [selectedTemplate]);

  return (
    <TemplateContext.Provider
      value={{ selectedTemplate, setSelectedTemplate, selected, setSelected }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export { useTemplateContext, TemplateProvider };
