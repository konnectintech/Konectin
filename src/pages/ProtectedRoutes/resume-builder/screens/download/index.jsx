import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { TemplateOne } from "../../resume-templates/template-1";
import { ResumeTemplateSample1Image } from "../../../../../assets";

const Download = ({ previous, data }) => {
  const resumeRef = useRef();

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

        <div className="w-8/12 lg:max-w-4xl flex flex-col justify-center mx-auto mt-24 gap-5 md:flex-row">
          <button
            onClick={handlePrint}
            className="w-full border border-[#b2b3b48a] rounded-lg font-extrabold text-lg text-[#f5f5f5] mx-auto py-5 px-6 bg-[#332A66]"
          >
            Download
          </button>
          <button
            onClick={previous}
            className="w-full border border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-4"
          >
            Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default Download;
