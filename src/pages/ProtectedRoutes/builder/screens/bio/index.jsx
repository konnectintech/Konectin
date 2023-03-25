import React, { useState } from "react";

import { FaPlus } from "react-icons/fa";
import BioSummary from "./summary";

const Bio = ({ next, previous }) => {
  const [show_summary, setShowSummary] = useState(true);

  const toggleSummary = () => {
    setShowSummary(!show_summary);
  };
  return (
    <>
      {show_summary ? (
        <main className="-mt-8 flex flex-col justify-between items-start mx-36">
          <div className="w-full flex justify-between">
            <div className="flex flex-col">
              <h2 className="-mt-6 max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
                Bio
              </h2>
              <p className=" max-w-[40ch] font-extralight text-[#66666a] text-sm tracking-[-0.01rem] mt-3 mb-5">
                Bio is short for biographical information which is a summary of
                a person's professional and educational background. It is
                typically included at the top of a resume and gives employers a
                quick overview of the candidate's qualifications and experience.
              </p>
            </div>

            <div className=" w-[280px] h-[350px] border border-[#b2b3b4] shadow-lg rounded-lg mt-16"></div>
          </div>
          <div className="w-full flex justify-between mt-16">
            <button
              onClick={previous}
              className="border w-1/3 font-extrabold border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 mr-4"
            >
              Back
            </button>
            <button
              onClick={toggleSummary}
              className=" w-1/3 border border-[#b2b3b48a] rounded-lg text-sm font-extrabold text-[#f5f5f5] py-5 px-6 bg-[#332A66]"
            >
              Continue
            </button>
          </div>
          <button
            onClick={next}
            className="text-[#FC670B] text-sm font-extralight tracking-[0.02rem] underline mx-auto mt-8"
          >
            Skip this step
          </button>
        </main>
      ) : (
        <BioSummary next={next} previous={previous} />
      )}
    </>
  );
};

export default Bio;
