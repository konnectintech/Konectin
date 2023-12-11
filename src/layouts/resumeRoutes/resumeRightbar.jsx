import { useState } from "react";
import {
  download,
  droplet,
  eye,
  menu,
  page,
  profileadd,
  tips,
  tips2,
} from "../../assets";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import EditResumePhoto from "../../components/resumeRightSide/EditResumePhoto";
import StyleResume from "../../components/resumeRightSide/StyleResume";
import DownloadResume from "../../components/resumeRightSide/DownloadResume";
import RightSidebarWalkthrough from "../../components/walkthrough/RightSidebarWalkthrough";
import { useWalkthrough } from "../../context/WalkthroughContext";
import ChangeTemplate from "../../components/resumeRightSide/ChangeTemplate";

function ResumeRightbar() {
  const { currentModule } = useWalkthrough();
  const [isDownload, setIsDownload] = useState(false);
  const options = [
    {
      route: "",
      icon: eye,
      label: "Preview Resume",
    },
    { route: "", icon: page, label: "Change Template", option: true },
    { route: "", icon: profileadd, label: "Edit Resume Photo", option: true },
    { route: "", icon: menu, label: "Rearrange Sections" },
    {
      route: "",
      icon: droplet,
      label: "Style Resume",
      option: true,
    },
  ];

  return (
    <>
      {currentModule === 4 && <RightSidebarWalkthrough />}
      <div className="absolute top-0 right-0 bottom-0 z-10 bg-white group pt-20 hidden md:block transition-all duration-500 w-14 hover:w-56 overflow-hidden   ">
        <ul className="flex flex-col gap-4">
          <li className="relative cursor-pointer mb-4 py-1 px-2 ">
            <div className="flex items-center ">
              <div className="relative w-[32px] h-[32px] group/tips  bg-secondary-200 p-2 rounded-full hover:bg-secondary-600">
                <img
                  src={tips}
                  alt={"tips"}
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[24px] group-hover/tips:opacity-0 "
                />
                <img
                  src={tips2}
                  alt={"tips"}
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[24px] opacity-0 group-hover/tips:opacity-100 "
                />
              </div>
            </div>
          </li>
          {options.map((item) => (
            <RightBarOption key={item.label} item={item} />
          ))}
          <div>
            <li
              onClick={() => setIsDownload(!isDownload)}
              className="relative flex items-center justify-between cursor-pointer mt-8 py-3 px-4 hover:border-r-[3px] border-primary-600 hover:bg-gradient-to-r from-transparent to-primary-200 "
            >
              <div className="flex items-center  ">
                <img src={download} alt={"download"} className="min-w-[24px]" />
                <span className="ml-4  whitespace-nowrap text-sm hover:text-primary-600 font-semibold ">
                  Download Resume
                </span>
              </div>
              <div className="">
                {isDownload ? (
                  <FaChevronUp className="opacity-0 group-hover:opacity-100" />
                ) : (
                  <FaChevronDown className="opacity-0 group-hover:opacity-100" />
                )}
              </div>
            </li>
            {isDownload && <DownloadResume />}
          </div>
        </ul>
      </div>
    </>
  );
}

export default ResumeRightbar;

const RightBarOption = ({ item }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (option) => {
    if (activeItem === option) {
      setActiveItem(null);
    } else {
      setActiveItem(option);
    }
  };
  return (
    <div>
      <li
        className="relative cursor-pointer py-3 px-4 hover:border-l-[3px] border-primary-600 hover:bg-gradient-to-l from-transparent to-primary-200 "
        key={item.route}
        onClick={() => handleClick(item.label)}
      >
        <div className="flex items-center justify-between  ">
          <div className="flex items-center">
            <img src={item.icon} alt={item.label} className="min-w-[24px]" />
            <span className="ml-4  whitespace-nowrap text-sm hover:text-primary-600 font-semibold ">
              {item.label}
            </span>
          </div>
          {item.option ? (
            <div className="">
              {activeItem === item.label ? (
                <FaChevronUp className="opacity-0 group-hover:opacity-100" />
              ) : (
                <FaChevronDown className="opacity-0 group-hover:opacity-100" />
              )}
            </div>
          ) : null}
        </div>
      </li>
      {activeItem === "Change Template" && <ChangeTemplate />}
      {activeItem === "Edit Resume Photo" && <EditResumePhoto />}
      {activeItem === "Style Resume" && <StyleResume />}
    </div>
  );
};
