import { createContext, useContext, useState } from "react";

const WalkthroughContext = createContext();

export function WalkthroughProvider({ children }) {
  const totalModules = 7;
  const [currentModule, setCurrentModule] = useState(0);

  const nextModule = () => {
    if (currentModule < totalModules - 1) {
      setCurrentModule(currentModule + 1);
    }
  };

  const prevModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
    }
  };

  const skipWalkthrough = () => {
    setCurrentModule(totalModules);
  };

  const contextValue = {
    totalModules,
    currentModule,
    prevModule,
    nextModule,
    skipWalkthrough,
  };

  return (
    <WalkthroughContext.Provider value={contextValue}>
      {children}
    </WalkthroughContext.Provider>
  );
}

export function useWalkthrough() {
  const context = useContext(WalkthroughContext);
  if (!context) {
    throw new Error("useWalkthrough must be used within a WalkthroughProvider");
  }
  return context;
}
