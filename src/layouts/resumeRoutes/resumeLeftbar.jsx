import React from "react";
import {
  basicInfo,
  bio,
  education,
  finalize,
  skill,
  workExperience,
} from "../../assets";
import LeftSidebarWalkthrough from "../../components/resume/walkthrough/leftSidebarWalkthrough";
import { useWalkthrough } from "../../middleware/walkthrough";
import Option from "../../components/resume/resumeLeftSide/Option";
import { useTemplateContext } from "../../middleware/resume";

function ResumeLeftbar() {
  const { templateData } = useTemplateContext();
  const { currentModule } = useWalkthrough();

  const routes = [
    { route: "/", icon: basicInfo, label: "Basic Info" },
    {
      route:
        Object.keys(
          templateData?.jobExperience ? templateData?.jobExperience : []
        ).length <= 0
          ? "/employment-experience"
          : "/employment-experience/job-activities",
      icon: workExperience,
      label: "Work Experience",
    },
    { route: "/education/*", icon: education, label: "Education" },
    { route: "/skills", icon: skill, label: "Skills" },
    { route: "/bio", icon: bio, label: "Bio" },
    {
      route: "/finalize",
      icon: finalize,
      label: "Finalize",
      options: [{ label: "Add Section" }],
    },
  ];

  return (
    <>
      {currentModule === 2 && <LeftSidebarWalkthrough />}
      <div className="absolute top-0 left-0 bottom-0 z-50 bg-white group pt-[85px] hidden md:block transition-all duration-500 w-14 hover:w-56 overflow-hidden">
        <ul className="flex flex-col gap-4">
          {routes.map((item) => (
            <Option item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ResumeLeftbar;
