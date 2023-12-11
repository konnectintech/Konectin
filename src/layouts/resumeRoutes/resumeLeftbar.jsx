import React, { useState } from "react";
import {
  basicInfo,
  bio,
  education,
  finalize,
  skill,
  workExpirience,
} from "../../assets";
import { FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";
import LeftSidebarWalkthrough from "../../components/walkthrough/LeftSidebarWalkthrough";
import { useWalkthrough } from "../../context/WalkthroughContext";
import { useTemplateContext } from "../../middleware/resume";
import { Link } from "react-router-dom";

function ResumeLeftbar() {
  const { templateData } = useTemplateContext();
  const { currentModule } = useWalkthrough();
  const [active, setActive] = useState(false);

  return (
    <>
      {currentModule === 2 && <LeftSidebarWalkthrough />}
      <div className="absolute top-0 left-0 bottom-0 z-50 bg-white group pt-[85px] hidden md:block transition-all duration-500 w-14 hover:w-56 overflow-hidden">
        <ul className="flex flex-col gap-4">
          {[
            { route: "/basic_info", icon: basicInfo, label: "Basic Info" },
            {
              route: "/work_history",
              icon: workExpirience,
              label: "Work Experience",
            },
            { route: "/education", icon: education, label: "Education" },
            { route: "/skills", icon: skill, label: "Skills" },
            { route: "/bio", icon: bio, label: "Bio" },
            {
              route: "/finalize",
              icon: finalize,
              label: "Finalize",
              options: [{ label: "Add Section" }],
            },
          ].map((item) => (
            <React.Fragment key={item.label}>
              <li
                className="relative cursor-pointer py-3 px-4 hover:border-r-[3px] border-primary-600 hover:bg-gradient-to-r from-transparent to-primary-200 "
                key={item.route}
                onClick={() => setActive(!active)}
              >
                <div className="flex items-center  ">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="min-w-[24px]"
                  />
                  <span className="ml-4  whitespace-nowrap text-sm hover:text-primary-600 font-semibold ">
                    {item.label}
                  </span>
                  {item.options ? (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      {active ? (
                        <FaChevronUp className="opacity-0 group-hover:opacity-100" />
                      ) : (
                        <FaChevronDown className="opacity-0 group-hover:opacity-100" />
                      )}
                    </div>
                  ) : null}
                </div>
              </li>
              {active &&
                item.options &&
                item.options.map((option) => {
                  return (
                    <div>
                      {templateData.additionalInformation &&
                        Object.keys(templateData.additionalInformation).map(
                          (sectionName) => (
                            <div key={sectionName}>
                              <Link
                                className="capitalize px-4 text-sm cursor-pointer"
                                to={`/resume/builder/add_information/${sectionName}`}
                              >
                                {sectionName}
                              </Link>
                            </div>
                          )
                        )}
                      <div className="hidden group-hover:flex px-4 mt-2 font-medium text-sm  gap-2 items-center whitespace-nowrap">
                        <FaPlus />
                        {option.label}
                      </div>
                    </div>
                  );
                })}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ResumeLeftbar;
