import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function AddType({ data }) {
  return (
    <div className="w-full flex flex-col justify-center items-start">
      <div className="flex flex-col">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Education
        </h2>
        <p className="text-neutral-300 text-[12px] md:text-sm tracking-wider mt-3 mb-5 max-w-2xl">
          If you've graduated from, or are currently enrolled in a college or
          university, you should NOT include your high school.
        </p>
      </div>
      <Link
        to="select-edu"
        className="bg-neutral-1000 flex items-center justify-center border border-dashed border-neutral-500 rounded-lg w-full h-[150px] md:h-[270px]"
      >
        <div className="flex items-center gap-1">
          <div className="bg-primary-400 text-neutral-1000 p-2 border rounded-full">
            <FaPlus size="0.6rem" />
          </div>
          <span className="ml-3 font-extrabold text-sm text-primary-200">
            Add Education
          </span>
        </div>
      </Link>
      <div className="max-w-xl w-full flex flex-col mt-12 gap-5 md:flex-row">
        <Link
          to="/resume/builder/employment-experience/job-activities"
          className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm py-3 px-[4.5rem]"
        >
          Back
        </Link>
        {data.currentEditedEducation >= 2 && (
          <Link
            to="/resume/builder/skills"
            className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm py-3 px-[4.5rem]"
          >
            Go to Skills
          </Link>
        )}
      </div>
    </div>
  );
}

export default AddType;
