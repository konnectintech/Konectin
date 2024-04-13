import CoverLetterComponent from "./template-component";
import { chevronDownWhite, sliders, chevronUpArrow } from "../../../../assets";
import FilterMenu from "./filterMenu";

export default function DisplayCoverLetter() {
  return (
    <div className="w-full min-h-screen h-full -my-4">
      <nav className="h-[70px] mx-auto flex justify-between items-center gap-16 px-14 py-3.5 bg-neutral-100 text-white">
        <ul className="no-underline flex gap-6 h-full">
          <li className="font-bold cursor-pointer">Resume</li>
          <li className="border-b-2 border-b-secondary-600 font-bold cursor-pointer">
            Cover Letter
          </li>
        </ul>
        <div className="flex gap-6">
          <button className="flex justify-between items-center gap-4 border border-solid border-white rounded-lg px-4 py-2 w-56">
            <div>
              <img src={sliders} alt="Filter" />
            </div>
            <div className="flex gap-1">
              Filter
              <img src={chevronDownWhite} alt="Show filter menu" />
              <img src={chevronUpArrow} alt="Hide filter menu" />
            </div>
          </button>
          <button className="flex justify-center items-center font-bold px-4 py-2 border border-solid border-primary-600 bg-primary-500 w-44 rounded-lg">
            Create New
          </button>
        </div>
      </nav>
      <FilterMenu />
      <div className="px-14 pt-14 flex justify-between gap-x-20 gap-y-14 flex-wrap">
        <CoverLetterComponent />
        <CoverLetterComponent />
        <CoverLetterComponent />
        <CoverLetterComponent />
      </div>
    </div>
  );
}
