import { NavLink } from "react-router-dom";
import { chevronDownWhite, sliders, chevronUpArrow, slidersBlack, plusCircle } from "../../../../assets";
// import FilterMenu from "./filterMenu";

function DisplayHeader() {
  console.log(sliders)
  return (
    <div className="flex items-center w-full h-8 md:h-[70px] mx-auto justify-between bg-transparent md:bg-neutral-100 text-white px-14">
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
        <button className="flex justify-center items-center md:hidden">
          <img src={slidersBlack} alt="Filter" />
        </button>
        <button className="hidden md:flex justify-between items-center gap-4 border border-solid border-white rounded-lg px-4 py-2 w-56">
          <div>
            <img src={sliders} alt="Filter" />
          </div>
          <div className="flex gap-1">
            Filter
            <img src={chevronDownWhite} alt="Show filter menu" />
            <img src={chevronUpArrow} alt="Hide filter menu" />
          </div>
        </button>
        <button className="flex justify-center items-center md:hidden">
          <img src={plusCircle} alt="New" />
        </button>
        <button className="hidden md:flex justify-center items-center font-bold px-4 py-2 border border-solid border-primary-600 bg-primary-500 w-44 rounded-lg">
          Create New
        </button>
      </div>
    </div>
  );
}

export default DisplayHeader;
