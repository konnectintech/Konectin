import { Link } from "react-router-dom";

const EducationOption = ({ title, link }) => (
  <Link
    to={`/resume/builder/education/${link}`}
    className="w-full h-[300px] mt-4 mx-auto rounded bg-neutral-200 text-neutral-600 flex flex-col justify-center items-center"
  >
    <h3 className="font-bold text-2xl mb-2 text-neutral-1000">{title}</h3>
  </Link>
);

function SelectEducation() {
  return (
    <div className="w-full mx-auto flex flex-col justify-center gap-12">
      <div className="flex justify-center">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Add school
        </h2>
      </div>
      <div className="w-full flex flex-col md:flex-row mx-auto gap-4">
        <EducationOption title="College/University" link="college" />
        <EducationOption title="High School" link="high-school" />
      </div>

      <div className="max-w-xl w-full flex flex-col gap-5 md:flex-row">
        <Link
          to="/resume/builder/employment-experience/job-activities"
          className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm py-3 px-[4.5rem]"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default SelectEducation;
