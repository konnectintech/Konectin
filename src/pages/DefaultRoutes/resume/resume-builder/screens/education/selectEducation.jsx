import { Link, useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../../middleware/resume";
import {
  educationImage,
  educationImage1,
  educationImage2,
} from "../../../../../../assets";

function EducationOption({ title, link, image }) {
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
              type: "college",
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
              type: "high-school",
            },
      ],
      currentEditedEducation: prev.currentEditedEducation + 1,
    }));
    navigate(`/services/resume/builder/education/${link}`);
  };

  return (
    <div
      onClick={handleEducation}
      className="w-full h-[300px] mx-auto rounded bg-neutral-200 text-neutral-600 flex flex-col justify-center items-center cursor-pointer px-6 relative"
    >
      <img className="absolute w-full h-full -z-0" src={image} alt={title} />
      <div className="absolute w-full h-full -z-0 bg-primary-900 opacity-70" />
      <h3 className="font-bold text-2xl mb-2 text-neutral-1000 relative">
        {title}
      </h3>
    </div>
  );
}

function SelectEducation({ data }) {
  return (
    <div className="w-full mx-auto flex flex-col justify-center gap-2">
      <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
        Education
      </h2>
      <p className="text-neutral-300 text-sm tracking-wide mb-5">
        Start with the essentials. Who you are and how can employers connect
        with you.
      </p>

      <div className="w-full flex flex-col lg:flex-row mx-auto gap-6 mb-6">
        <EducationOption
          image={educationImage}
          title="College/University"
          link="college"
        />
        <EducationOption
          image={educationImage1}
          title="High School"
          link="high-school"
        />
        <EducationOption image={educationImage2} title="Others" link="other" />
      </div>

      <div className="max-w-xl w-full flex flex-col gap-5 md:flex-row max-md:justify-center items-center">
        <Link
          to="/services/resume/builder/employment-experience/job-activities"
          className="w-fit max-w-xs text-center border border-neutral-500 rounded-lg text-sm py-3 px-[4.5rem]"
        >
          Back
        </Link>
        {data.currentEditedEducation >= 1 && (
          <Link
            to="/services/resume/builder/skills"
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
