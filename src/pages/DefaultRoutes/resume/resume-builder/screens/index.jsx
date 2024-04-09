/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import BasicInformation from "./basicinfo";
import EmploymentExperience from "./experience";
import Education from "./education";
import Skills from "./skills";
import Bio from "./bio";
import Preview from "./preview";

import { useAuthContext } from "../../../../../middleware/auth";
import { useTemplateContext } from "../../../../../middleware/resume";
import { useWalkthrough } from "../../../../../middleware/walkthrough";

import WelcomeWalkthrough from "../../../../../components/resume/walkthrough/welcomeWalkthrough";
import TipsWalkthrough from "../../../../../components/resume/walkthrough/tipsWalkthrough";
import DownloadWalkthrough from "../../../../../components/resume/walkthrough/downloadWalkthrough";
import FinishWalkthrough from "../../../../../components/resume/walkthrough/finishWalkthrough";
import AdditionInformation from "./additon_information";

function Builder() {
  const { templateData, onInputChange, setTemplateData } = useTemplateContext();

  const { currentModule } = useWalkthrough();

  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!templateData || user === null) {
      navigate("/resume/ai");
    } else if (user._id === (null || undefined)) {
      setTemplateData({
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
      });
      navigate("/resume/ai/template-selector");
    }
  }, [templateData, navigate, user]);

  const component_list = [
    {
      element: BasicInformation,
      link: "/",
    },
    {
      element: EmploymentExperience,
      link: "/employment-experience/*",
    },
    {
      element: Education,
      link: "/education/*",
    },
    {
      element: Skills,
      link: "/skills",
    },
    {
      element: Bio,
      link: "/bio",
    },
    {
      element: AdditionInformation,
      link: "/add_information/*",
    },
    {
      element: Preview,
      link: "/preview",
    },
  ];

  // Function to check if a step is completed
  // const isStepCompleted = (step) => {
  //   if (step === "") {
  //     return templateData.completed["basic_info"] === true;
  //   } else if (step === "employment-experience/*") {
  //     return templateData.completed["work_history"] === true;
  //   } else if (step === "education/*") {
  //     return templateData.completed["education"] === true;
  //   } else if (step === "add_information/*") {
  //     return true;
  //   } else if (step === "preview") {
  //     return true;
  //   } else if (step === "download") {
  //     return true;
  //   }
  //   return templateData.completed[step] === true;
  // };

  return (
    <div className="w-[calc(90%_-_88px)] mx-auto">
      {currentModule === 0 && <WelcomeWalkthrough />}
      {currentModule === 3 && <TipsWalkthrough />}
      {currentModule === 5 && <DownloadWalkthrough />}
      {currentModule === 6 && <FinishWalkthrough />}
      <Routes>
        {component_list.map((component) => {
          return (
            <Route
              key={component.link}
              path={component.link}
              element={
                <component.element
                  data={templateData}
                  onInputChange={onInputChange}
                  updateResume={setTemplateData}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default Builder;
