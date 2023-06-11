import React, { useState } from "react";

import { ResumeTemplateSample1Image } from "../../../../../assets";
import BioSummary from "./summary";

const Bio = ({ next, previous, data, handleChange, template }) => {
  const [show_summary, setShowSummary] = useState(true);

  const toggleSummary = () => {
    setShowSummary(!show_summary);
  };
  return (
    <>
      {show_summary ? (
        <main className="-mt-8 flex flex-col justify-between items-start mx-auto md:mx-16">
          <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start md:gap-20">
            <div className="flex flex-col">
              <h2 className="-mt-6 max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
                Bio
              </h2>
              <p className=" max-w-[45ch] font-extralight text-[#66666a] text-[12px] tracking-[-0.01rem] mt-3 mb-5">
                Bio is short for biographical information which is a summary of
                a person's professional and educational background. It is
                typically included at the top of a resume and gives employers a
                quick overview of the candidate's qualifications and experience.
              </p>
            </div>

            <div className=" w-[280px] h-[350px] shadow-lg rounded-lg">
              {/* <img src={ResumeTemplateSample1Image} alt="template" /> */}
              {template()}
            </div>
          </div>
          <div className="w-8/12 md:max-w-4xl flex flex-col justify-center mx-auto mt-24 gap-5 md:flex-row">
            <button
              onClick={previous}
              className="w-full border border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-4"
            >
              Back
            </button>
            <button
              onClick={toggleSummary}
              className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] mx-auto py-5 px-6 bg-[#332A66]"
            >
              Continue
            </button>
          </div>
          <button
            onClick={() => next(data)}
            className="text-[#FC670B] text-sm font-extralight tracking-[0.02rem] underline mx-auto mt-8"
          >
            Skip this step
          </button>
        </main>
      ) : (
        <BioSummary
          next={next}
          previous={previous}
          data={data}
          handleChange={handleChange}
        />
      )}
    </>
  );
};

export default Bio;
