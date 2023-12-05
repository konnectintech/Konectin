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

function ResumeLeftbar() {
  const [active, setActive] = useState(false);
  return (
    <div className="bg-white group pt-[85px] hidden md:block transition-all duration-500 w-14 hover:w-56 overflow-hidden">
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
          <>
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
              item.options.map((option) => (
                <div className="hidden group-hover:flex px-4 text-sm  gap-2 items-center whitespace-nowrap">
                  <FaPlus />
                  {option.label}
                </div>
              ))}
          </>
        ))}
      </ul>
    </div>
  );
}

export default ResumeLeftbar;
