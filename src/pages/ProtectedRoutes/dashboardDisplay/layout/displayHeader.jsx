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
    <>
      <div className="flex items-center w-full h-8 md:h-[70px] mx-auto justify-between bg-transparent md:bg-neutral-100 text-white px-5 md:px-14">
        <div className="flex gap-6 h-full text-black md:text-white text-sm md:text-base font-bold whitespace-nowrap md:py-3.5">
          <NavLink
            to="/dashboard/display/resumes"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer border-b-2 border-b-secondary-600"
                : "cursor-pointer"
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/dashboard/display/cover-letters"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer border-b-2 border-b-secondary-600"
                : "cursor-pointer"
            }
          >
            Cover Letter
          </NavLink>
        </div>
        <div className="flex gap-10 md:gap-6">
          <button
            onClick={toggleFilter}
            className="flex justify-center items-center md:hidden"
          >
            <img src={slidersBlack} alt="Filter" />
          </button>
          <button
            onClick={toggleFilter}
            className="hidden md:flex justify-between items-center gap-4 border border-solid border-white rounded-lg px-4 py-2 w-56"
          >
            <div>
              <img src={sliders} alt="Filter" />
            </div>
            <div className="flex gap-1">
              Filter
              <img
                src={chevronDownWhite}
                alt={isFilterOpen ? "Show filter menu" : "Hide filter menu"}
                className={`transition-transform transform ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${
                  isFilterOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
          <button
            onClick={toggleModal}
            className="flex justify-center items-center md:hidden"
          >
            <img src={plusCircle} alt="New" />
          </button>
          <button
            onClick={toggleModal}
            className="hidden md:flex justify-center items-center font-bold px-4 py-2 border border-solid border-primary-600 bg-primary-500 w-44 rounded-lg"
          >
            Create New
          </button>
        </div>
      </div>
      {isFilterOpen && (
        <FilterDropdown
          isFilterOpen={isFilterOpen}
          toggleFilter={toggleFilter}
          searchQuery={searchQuery}
          handleSearch={handleSearch}
          handleSort={handleSort}
        />
      )}
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
    </>
  );
}

export default DisplayHeader;
