import React, { useState } from "react";
import SkillsForm from "./form";
import { FaPlus } from "react-icons/fa";

const Skills = ({ next, previous }) => {
  return (
    <main className="-mt-8 flex flex-col justify-between items-start  md:mx-36">
      <div className="w-full flex flex-col md:flex-row md:justify-center md:gap-20">
        <div className="flex flex-col ">
          <h2 className="-mt-6 max-w-[30ch] text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
            Skills
          </h2>
          <p className=" font-extralight text-[#66666a] text-sm tracking-[-0.01rem] mt-3 mb-5max-w-2xl">
            Try to add 6-10 skills that are relevant to your desired job.
          </p>

          <SkillsForm />

          <div className="mt-4">
            <button className="flex items-center border-none outline-none">
              <div className=" bg-[#665d99] p-2 border rounded-full">
                <FaPlus color="#f5f5f5" size="0.6rem" />{" "}
              </div>
              <span className=" ml-3  font-extrabold text-sm text-[#8c8c8f]">
                Add another skill
              </span>
            </button>
          </div>
        </div>

        <div className=" w-[280px] h-[350px] border border-[#b2b3b4] shadow-lg rounded-lg mt-16 hidden md:block"></div>
      </div>
      <div className="w-8/12 md:max-w-6xl flex flex-col justify-center mx-auto mt-12 gap-5 md:flex-row">
        <button
          onClick={previous}
          className="w-full border border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-4"
        >
          Back
        </button>
        <button
          onClick={next}
          className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] mx-auto py-5 px-6 bg-[#332A66]"
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

export default Skills;
