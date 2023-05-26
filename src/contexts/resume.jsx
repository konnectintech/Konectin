import React, { useState, useEffect, createContext } from "react";

const TemplateContext = createContext();

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

export { TemplateContext, TemplateProvider };
