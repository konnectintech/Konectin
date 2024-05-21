import { FaPlus, FaPen, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTemplateContext } from "../../../../../../middleware/resume";
import SelectedTemplates from "../../resume-templates";
import NavigationButton from "../navigationButton";
import { onSectionComplete } from "../verification";

const EducationList = ({ data }) => {
  const { templateData, setTemplateData } = useTemplateContext();

  const navigate = useNavigate();

  useEffect(() => {
    setTemplateData((prev) => ({
      ...prev,
      currentEditedEducation: Object.keys(templateData.education).length,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // add another empty valued object into the education and navigates to the first job field
  const addCollege = () => {
    navigate("/services/resume/builder/education/");
  };

  // Controls the activities go back functions
  const goBack = () => {
    // if the array contains more than one object it goes to the basicInfo page otherwise goes to the job responsibility page
    if (Object.keys(data.education).length <= 1) {
      navigate("/services/resume/builder/education/college");
      return;
    }

    navigate("/services/resume/builder/employment-experience/job-activities");
  };

  const deleteCollege = (index) => {
    data.education.splice(index, 1);

    setTemplateData((prev) => ({
      ...prev,
      education: data.education,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-1 flex-col md:flex-row items-start justify-between self-center  gap-10">
        <div className="flex flex-col justify-center w-full">
          <h2 className="-mt-6 max-w-[30ch] text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
            University or college details
          </h2>
          <p className="text-neutral-300 text-sm tracking-[-0.01rem] my-3 max-w-2xl">
            Add, edit or delete your education details.
          </p>
          {templateData.education.map((data, index) => (
            <section
              key={index}
              className="w-full flex flex-col items-start mx-auto mb-4 gap-2"
            >
              <div className="flex flex-col md:justify-between md:flex-row">
                <p className="font-bold text-neutral-300 capitalize text-sm">
                  {data.schoolName === "" ? "" : data.schoolName}
                  {(data.city || data.state || data.country) && " | "}
                  <span className="font-medium">
                    {data.city}
                    {data.city && (data.state || data.country) && ", "}
                    {data.state}
                    {data.state && data.country && `, `}
                    {data.country}
                  </span>
                </p>
              </div>

              <div className="border w-full border-neutral-500 rounded-lg bg-white p-4">
                <div className="flex justify-between items-center gap-3">
                  <h3 className="font-semibold text-neutral-300 text-lg capitalize">
                    {data.degree}
                  </h3>
                  <div className="space-x-2 text-neutral-400 text-xs">
                    <button
                      onClick={() => {
                        setTemplateData((prev) => ({
                          ...prev,
                          currentEditedEducation: index + 1,
                        }));

                        navigate(
                          `/services/resume/builder/education/${data.type}`
                        );
                      }}
                    >
                      <FaPen size="1rem" />
                    </button>
                    <button
                      onClick={() => {
                        templateData.education.length <= 1
                          ? alert(
                              "You can't delete the last experience, edit it instead"
                            )
                          : deleteCollege(index);
                      }}
                    >
                      <FaTrash size="1rem" />
                    </button>
                  </div>
                </div>
                <p className="font-light text-neutral-300 text-sm leading-3 my-2">
                  {data.startMonth} {data.startYear} -
                  {data.current
                    ? " Present"
                    : ` ${data.endMonth} ${data.endYear}`}
                </p>
              </div>
            </section>
          ))}

          <div
            className="flex items-center border-none outline-none cursor-pointer"
            onClick={addCollege}
          >
            <div className="bg-primary-400 text-neutral-1000 p-2 border rounded-full">
              <FaPlus size="0.6rem" />
            </div>
            <span className="ml-3 font-extrabold text-sm text-neutral-400">
              Add Education
            </span>
          </div>

          {/* <button
            onClick={() => navigate("/resume/builder/education")}
            className="text-secondary-500 text-sm font-extralight tracking-[0.02rem] underline mt-8"
          >
            Skip this step
          </button> */}
        </div>

        <div className="max-md:hidden w-1/2">
          <div className="h-[360px] sm:h-[300px] md:h-[500px] lg:h-[580px] lg:w-[500px] flex items-center justify-center">
            <div className="md:scale-[42%] lg:scale-[50%] mt-10">
              <SelectedTemplates data={templateData} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <NavigationButton
          back={goBack}
          cont={() => {
            onSectionComplete(templateData);
            navigate("/services/resume/builder/skills");
          }}
        />
      </div>
    </div>
  );
};

export default EducationList;