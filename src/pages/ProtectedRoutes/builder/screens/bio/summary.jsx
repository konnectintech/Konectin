import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import Suggestions from "./suggestions";
import TextEditor from "../../../../../components/editor";

const BioSummary = ({ next, previous }) => {
  return (
    <main className="-mt-8 flex flex-col justify-between items-start mx-10">
      <div className="w-full">
        <div className="flex flex-col ml-6">
          <h2 className="-mt-6 max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
            Bio Summary
          </h2>
          <p className=" max-w-[80ch] font-extralight text-[#66666a] text-sm tracking-[-0.01rem] leading-6 mt-3 mb-5">
            Bio is short for biographical information which is a summary of a
            person's professional and educational background. It is typically
            included at the top of a resume and gives employers a quick overview
            of the candidate's qualifications and experience.
          </p>
        </div>

        <div className="w-full grid grid-cols-3 items-center gap-4 mt-8">
          <Suggestions />
          <div className="-mt-4">
            <p className=" font-semibold text-[#66666a] text-xs mb-3 mt-1">
              This is a brief description of you job background
            </p>
            <TextEditor />
          </div>
          <div className=" w-[280px] h-[300px] border border-[#b2b3b4] shadow-lg rounded-lg -mt-32 ml-16"></div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-16">
        <button
          onClick={previous}
          className="border w-1/3 font-extrabold border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 mr-4"
        >
          Back
        </button>
        <button
          onClick={next}
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
  );
};

export default BioSummary;
