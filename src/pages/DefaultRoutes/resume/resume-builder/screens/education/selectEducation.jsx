import { Link, useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../../middleware/resume";

function EducationOption({ title, link }) {
  const navigate = useNavigate();
  const { setTemplateData } = useTemplateContext();

  const handleEducation = () => {
    setTemplateData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        link === "college"
          ? {
              city: "",
              country: "",
              degree: "",
              startMonth: "",
              startYear: "",
              schoolName: "",
              state: "",
              endMonth: "",
              endYear: "",
            }
          : {
              awards: [{ name: "" }],
              city: "",
              country: "",
              endMonth: "",
              schoolName: "",
              state: "",
              relevantCourses: [{ name: "" }],
              endYear: "",
            },
      ],
      currentEditedEducation: prev.currentEditedEducation + 1,
    }));
    navigate(`/resume/builder/education/${link}`);
  };

  return (
    <div
      onClick={handleEducation}
      className="w-full h-[300px] mt-4 mx-auto rounded bg-neutral-200 text-neutral-600 flex flex-col justify-center items-center cursor-pointer"
    >
      <h3 className="font-bold text-2xl mb-2 text-neutral-1000">{title}</h3>
    </div>
  );
}

function SelectEducation({ data }) {
  return (
    <div className="w-full mx-auto flex flex-col justify-center gap-12">
      <div className="">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Education
        </h2>
        <p className="text-[#66666a] text-sm tracking-wide mt-3 mb-5">
          Start with the essentials. Who you are and how can employers connect
          with you.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row mx-auto gap-6">
        <EducationOption title="College/University" link="college" />
        <EducationOption title="High School" link="high-school" />
        <EducationOption title="Others" link="other" />
      </div>

      <div className="max-w-xl w-full flex flex-col gap-5 md:flex-row">
        <Link
          to="/resume/builder/employment-experience/job-activities"
          className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm py-3 px-[4.5rem]"
        >
          Back
        </Link>
        {data.currentEditedEducation >= 1 && (
          <Link
            to="/resume/builder/skills"
            className="w-fit max-w-xs bg-primary-600 text-white rounded-lg text-sm py-3 px-8 sm:px-[4.5rem]"
          >
            Go to Skills
          </Link>
        )}
      </div>
    </div>
  );
}

export default SelectEducation;
