import { FaPlus, FaPen, FaTrash, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../../middleware/resume";
import { useEffect, useState } from "react";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";
import { onSectionComplete } from "../verification";

const JobActivities = ({ addCompany, goBack, deleteExperience }) => {
  const { templateData, setTemplateData } = useTemplateContext();
  const [showMore, setShowMore] = useState(-1);

  const navigate = useNavigate();

  useEffect(() => {
    setTemplateData((prev) => ({
      ...prev,
      currentEditedJob: Object.keys(templateData.jobExperience).length,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-start justify-between self-center gap-10 w-full">
        <div className="mt-8 flex flex-col justify-center w-full">
          <h2 className="-mt-6 md:max-w-[30ch] text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
            Work Experience
          </h2>
          <p className="text-neutral-300 text-sm tracking-[-0.01rem] my-3 max-w-2xl w-full">
            Add, edit or delete your work experience.
          </p>
          {templateData.jobExperience.map((data, index) => (
            <section
              key={index}
              className="w-full flex flex-col items-start mx-auto mb-4"
            >
              <div className="flex flex-col md:justify-between md:flex-row ">
                <p className="font-bold text-neutral-300 capitalize text-sm mb-4">
                  {data.company}
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
                <div className="flex justify-between items-center gap-3 md:gap-6">
                  <h3 className="font-extrabold text-neutral-300 text-lg capitalize">
                    {data.jobTitle}
                  </h3>
                  <div className="text-neutral-400 flex gap-2 items-center">
                    <button
                      onClick={() => {
                        setTemplateData((prev) => ({
                          ...prev,
                          currentEditedJob: index + 1,
                        }));

                        navigate(
                          "/services/resume/builder/employment-experience"
                        );
                      }}
                    >
                      <FaPen size="1rem" />
                    </button>
                    <button
                      onClick={() => {
                        templateData.jobExperience.length <= 1
                          ? alert(
                              "You can't delete the last experience, edit it instead"
                            )
                          : deleteExperience(index);
                      }}
                    >
                      <FaTrash size="1rem" />
                    </button>
                  </div>
                </div>
                <p className="font-light text-neutral-300 text-sm leading-3 mt-3">
                  {(data.startMonth || data.startYear) &&
                    (data.endMonth || data.endYear) &&
                    `
                    ${data.startMonth} ${data.startYear} -
                    ${
                      data.current
                        ? " Present"
                        : ` ${data.endMonth} ${data.endYear}`
                    }`}
                </p>
                <div
                  className={`text-neutral-400 text-xs ${
                    showMore === index ? "line-clamp-none" : "line-clamp-4"
                  } job-desc mt-3`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.workDesc,
                    }}
                  />
                </div>
                <button
                  onClick={() =>
                    setShowMore((prev) => (prev === index ? -1 : index))
                  }
                  className="text-neutral-500 text-xs font-extralight flex items-center mt-4"
                >
                  {showMore === index ? (
                    <>
                      Show less
                      <FaCaretUp className="ml-1" size="0.5rem" />
                    </>
                  ) : (
                    <>
                      Show more
                      <FaCaretDown className="ml-1" size="0.5rem" />
                    </>
                  )}
                </button>
              </div>
            </section>
          ))}

          <div
            className="flex items-center border-none outline-none cursor-pointer"
            onClick={addCompany}
          >
            <div className="bg-primary-400 text-neutral-1000 p-2 border rounded-full">
              <FaPlus size="0.6rem" />
            </div>
            <span className=" ml-3 font-extrabold text-sm text-neutral-400">
              Add Company
            </span>
          </div>

          {/* <button
            onClick={() => navigate("/resume/builder/education")}
            className="text-secondary-500 text-sm font-extralight tracking-[0.02rem] underline mt-8"
          >
            Skip this step
          </button> */}
        </div>

        <div className="max-lg:hidden w-1/2">
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
            onSectionComplete(templateData, 3);
            navigate(
              Object.keys(templateData?.education || []).length <= 0
                ? "/resume/builder/education"
                : "/resume/builder/education/list"
            );
          }}
        />
      </div>
    </div>
  );
};

export default JobActivities;
