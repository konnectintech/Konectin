import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTemplateContext } from "../../../middleware/resume";

function Option({ item }) {
  const { templateData } = useTemplateContext();
  const [active, setActive] = useState(false);
  console.log(templateData);
  return (
    <React.Fragment key={item.label}>
      <li
        className="relative cursor-pointer py-3 px-4 hover:border-r-[3px] border-primary-600 hover:bg-gradient-to-r from-transparent to-primary-200 "
        key={item.route}
        onClick={() => setActive(!active)}
      >
        <div className="flex items-center  ">
          <img src={item.icon} alt={item.label} className="min-w-[24px]" />
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
              {templateData?.additionalInformation &&
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
  );
}

export default Option;
