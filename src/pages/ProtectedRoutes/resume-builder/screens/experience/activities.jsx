import { FaPlus, FaPen, FaTrash, FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../middleware/resume";
import { useEffect } from "react";

const JobActivities = ({ addCompany, goBack, deleteExperience }) => {
  const { templateData, setTemplateData } = useTemplateContext();
  const navigate = useNavigate();

  useEffect(() => {
    setTemplateData((prev) => ({
      ...prev,
      currentEditedJob: Object.keys(templateData.jobExperience).length,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-8 flex flex-col justify-center">
      <h2 className="-mt-6 max-w-[30ch] text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
        Work Experience
      </h2>
      <p className="text-neutral-300 text-sm tracking-[-0.01rem] my-3 max-w-2xl">
        Add, edit or delete your work experience.
      </p>
      {templateData.jobExperience.map((data, index) => (
        <section
          key={index}
          className="w-full flex flex-col items-start mx-auto mb-4"
        >
          <div className="flex flex-col md:justify-between md:flex-row ">
            <p className="font-bold text-neutral-300 capitalize text-sm mb-4">
              {data.company} |{" "}
              <span className="font-medium">
                {data.city && `${data.city}, `}
                {data.state}
              </span>
            </p>
          </div>
          <div className="border border-neutral-500 rounded-lg bg-white p-4">
            <div className="flex justify-between">
              <h3 className="font-extrabold text-neutral-300 text-lg">
                {data.jobTitle}
              </h3>
              <div className="space-x-2 text-neutral-400">
                <button
                  onClick={() => {
                    setTemplateData((prev) => ({
                      ...prev,
                      currentEditedJob: index + 1,
                    }));

                    navigate("/resume/builder/employment-experience");
                  }}
                >
                  <FaPen size="1rem" />
                </button>
                <button
                  onClick={() => {
                    templateData.jobExperience.length <= 1
                      ? alert(
                          "You can't delete the last experience edit it instead"
                        )
                      : deleteExperience(index);
                  }}
                >
                  <FaTrash size="1rem" />
                </button>
              </div>
            </div>
            <p className="font-light text-neutral-300 text-sm leading-3 mt-3">
              {data.startMonth} {data.startYear} -
              {data.current ? " Present" : ` ${data.endMonth} ${data.endYear}`}
            </p>
            <div className="text-neutral-400 text-xs job-desc px-4 mt-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.workDesc,
                }}
              />
            </div>
            <button className="text-neutral-500 text-xs font-extralight flex items-center mt-4">
              Show more
              <FaCaretDown className="ml-1" size="0.5rem" />
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

      <div className="max-w-xl w-full flex flex-col max-md:justify-center mt-6 gap-5 md:flex-row">
        <button
          onClick={goBack}
          className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm py-3 px-[4.5rem]"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/resume/builder/education")}
          type="submit"
          className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm text-neutral-1000 py-3 px-[4.5rem] bg-primary-500"
        >
          Continue
        </button>
      </div>
      <button
        onClick={() => navigate("/resume/builder/education")}
        className="text-secondary-500 text-sm font-extralight tracking-[0.02rem] underline mt-8"
      >
        Skip this step
      </button>
    </div>
  );
};

export default JobActivities;
