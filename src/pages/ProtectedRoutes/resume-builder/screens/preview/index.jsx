import { useNavigate } from "react-router-dom";
import { TemplateOne } from "../../resume-templates/template-1";
import { ResumeTemplateSample1Image } from "../../../../../assets";

const Preview = ({ data }) => {
  const navigate = useNavigate();

  return (
    <main className=" max-w-6xl flex mx-auto flex-col md:mx-16">
      <h2 className="-mt-6 md:mb-16 max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
        Preview Resume
      </h2>
      <TemplateOne data={data} />
      <div className="w-full flex flex-col justify-around items-center md:flex-row gap-10">
        <div className=" w-[300px] lg:hidden h-[400px] shadow-lg rounded-lg mt-16">
          <img src={ResumeTemplateSample1Image} alt="template" />
        </div>
        <div className="md:mt-10">
          <p className="max-w-[43ch] font-bold text-[#66666a] text-sm lg:text-center tracking-[-0.01rem] mt-3 mb-5">
            Before downloading your resume, we recommend previewing it to ensure
            it meets your expectations. If you would like to try a different
            resume template, you can easily make changes before finalizing your
            download. Thank you for using our resume builder!
          </p>
          <button className="bg-[#FC670B] font-bold  border border-black rounded-lg w-full md:w-fit max-w-xs text-sm text-white py-3 px-[3.5rem] ">
            Change resume template
          </button>
        </div>
      </div>
      <div className="max-w-xl w-full flex flex-col justify-center mt-8 lg:mt-16 md:mt-8  gap-5 md:flex-row mx-auto ">
        <button
          onClick={() => navigate(-1)}
          className="w-full md:w-fit max-w-xs border border-[#b2b3b48a] rounded-lg text-sm py-3 px-[4.5rem]"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/resume/builder/download")}
          type="submit"
          className="w-full md:w-fit max-w-xs border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] py-3 px-[4.5rem] bg-[#332A66]"
        >
          Continue
        </button>
      </div>
    </main>
  );
};

export default Preview;
