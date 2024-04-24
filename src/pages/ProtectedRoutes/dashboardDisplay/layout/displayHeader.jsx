import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  chevronDownWhite,
  sliders,
  slidersBlack,
  plusCircle,
} from "../../../../assets";
import FilterDropdown from "./filterDropdown";
import ActionModal from "../../../../components/actionModal";
import * as CiIcons from "react-icons/ci";

function DisplayHeader({ searchQuery, handleSearch, handleSort }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isNewOpen, setIsNewOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleModal = () => {
    setIsNewOpen(!isNewOpen);
  };

  const createNewFn = () => {
    console.log("Create a new resume or cover letter!");
  };

  return (
    <div className="flex items-center w-full h-8 md:h-[70px] mx-auto justify-between bg-transparent md:bg-neutral-100 px-5 md:px-14">
      <div className="flex gap-4 text-black md:text-white text-sm font-bold whitespace-nowrap md:py-3.5">
        <NavLink
          to="/dashboard/display/resumes"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer pb-3 border-b-2 border-b-secondary-600"
              : "cursor-pointer pb-3"
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/dashboard/display/cover-letters"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer pb-3 border-b-2 border-b-secondary-600"
              : "cursor-pointer pb-3"
          }
        >
          Cover Letter
        </NavLink>
      </div>
      <div className="flex gap-2 md:gap-6">
        <div className="relative">
          <button
            onClick={toggleFilter}
            className="flex justify-between items-center gap-24 md:border rounded-md px-4 py-3"
          >
            <picture className="w-4">
              <source media="(max-width: 768px)" srcSet={slidersBlack} />
              <img src={sliders} alt="Filter" />
            </picture>
            <div className="flex gap-1 text-xs text-white max-md:hidden">
              Filter
              <img
                src={chevronDownWhite}
                alt={isFilterOpen ? "Show filter menu" : "Hide filter menu"}
                className={`transition-transform w-4 transform ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${
                  isFilterOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
          {isFilterOpen && (
            <FilterDropdown
              isFilterOpen={isFilterOpen}
              toggleFilter={toggleFilter}
              searchQuery={searchQuery}
              handleSearch={handleSearch}
              handleSort={handleSort}
            />
          )}
        </div>

        <button
          onClick={toggleModal}
          className="md:bg-primary-600 md:py-2 md:px-6 text-primary-700 md:text-white rounded flex items-center gap-1"
        >
          <CiIcons.CiCirclePlus size="1.5rem" />
          <span className="text-sm max-md:hidden">Create New</span>
        </button>
      </div>

      {isNewOpen && (
        <>
          <ActionModal
            isOpen={toggleModal}
            onClose={toggleModal}
            icon={plusCircle}
            header="Creating a new cover letter will erase the current information."
            body="Do you wish to create a new cover letter?"
            buttonText="Create New"
            btnColors="border-primary-600 bg-primary-500"
            actionFn={createNewFn}
          />
        </>
      )}
    </div>
  );
}

export default DisplayHeader;
