import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { TemplateOne } from "../../resume-templates/template-1";
import { ResumeTemplateSample1Image } from "../../../../../assets";

const Download = ({ data }) => {
  const resumeRef = useRef();
  const navigate = useNavigate();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: `${data.firstName}_${data.lastName}_Resume`,
    onAfterPrint: () => alert("Resume downloaded"),
  });
  return (
    <main className="max-w-6xl flex mx-auto flex-col">
      <h2 className="-mt-6 max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug mb-20">
        Download Resume
      </h2>
      <div ref={resumeRef} className="hidden md:block">
        <TemplateOne data={data} />
      </div>
      <div className="w-full flex flex-col justify-center items-center mx-auto md:flex-row ">
        <div className="block md:hidden w-[350px] h-[450px] shadow-lg rounded-lg md:mr-10 mt-16">
          <img src={ResumeTemplateSample1Image} alt="template" />
        </div>
      </div>
      <div className="max-w-xl w-full flex flex-col max-md:justify-center mt-16 gap-5 md:flex-row">
        <button
          onClick={handlePrint}
          type="submit"
          className="w-full md:w-fit max-w-xs border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] py-3 px-[4.5rem] bg-[#332A66]"
        >
          Download
        </button>
        <button
          onClick={() => navigate(-1)}
          className="w-full md:w-fit max-w-xs border border-[#b2b3b48a] rounded-lg text-sm py-3 px-[4.5rem]"
        >
          Back
        </button>
      </div>
    </main>
  );
};

export default Download;
