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
              month: "",
              schoolName: "",
              state: "",
              year: "",
            }
          : {
              awards: [""],
              city: "",
              country: "",
              month: "",
              schoolName: "",
              state: "",
              relevantCourses: [""],
              year: "",
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
          to="/resume/builder/education"
          className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm py-3 px-[4.5rem]"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default SelectEducation;
