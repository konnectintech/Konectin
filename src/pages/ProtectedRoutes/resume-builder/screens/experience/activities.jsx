import { FaPlus, FaPen, FaTrash, FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../middleware/resume";
import { useEffect } from "react";

const JobActivities = ({ addCompany, goBack }) => {
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
      <p className="text-[#66666a] text-sm tracking-[-0.01rem] my-3 max-w-2xl">
        Add, edit or delete your work experience.
      </p>
      {templateData.jobExperience.map((data, index) => (
        <section
          key={index}
          className="w-full flex flex-col items-start mx-auto mb-4"
        >
          <div className="flex flex-col md:justify-between md:flex-row ">
            <p className="font-bold text-[#66666a] text-sm mb-4">
              {data.company} |{" "}
              <span className="font-medium">
                {data.city && `${data.city}, `}
                {data.state}
              </span>
            </p>
          </div>
          <div className="h-[200px] border border-[#b2b3b48a] rounded-lg bg-white p-4">
            <div className="flex justify-between">
              <h3 className="font-extrabold text-[#66666a] text-lg">
                {data.jobTitle}
              </h3>
              <div>
                <button className="mr-3">
                  <FaPen color="#b2b3b4" size="1rem" />
                </button>
                <button>
                  <FaTrash color="#b2b3b4" size="1rem" />
                </button>
              </div>
            </div>
            <p className="font-light text-[#66666a] text-sm leading-3 mt-3">
              {data.startMonth} {data.startYear} -
              {data.current ? " Present" : ` ${data.endMonth} ${data.endYear}`}
            </p>
            <div
              className="text-[#8C8C8F] text-xs job-desc ml-5 mt-3"
              dangerouslySetInnerHTML={{
                __html: data.workDesc,
              }}
            ></div>
            <button className="text-[#b2b3b4] text-xs font-extralight flex items-center mt-4">
              Show more
              <FaCaretDown className="ml-1" color="#b2b3b4" size="0.5rem" />
            </button>
          </div>
        </section>
      ))}

      <div
        className="flex items-center border-none outline-none cursor-pointer"
        onClick={addCompany}
      >
        <div className="bg-primary-400 p-2 border rounded-full">
          <FaPlus color="#f5f5f5" size="0.6rem" />
        </div>
        <span className=" ml-3 font-extrabold text-sm text-[#8c8c8f]">
          Add Company
        </span>
      </div>

      <div className="max-w-xl w-full flex flex-col max-md:justify-center mt-6 gap-5 md:flex-row">
        <button
          onClick={goBack}
          className="w-full md:w-fit max-w-xs border border-[#b2b3b48a] rounded-lg text-sm py-3 px-[4.5rem]"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/resume/builder/education")}
          type="submit"
          className="w-full md:w-fit max-w-xs border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] py-3 px-[4.5rem] bg-primary-500"
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
