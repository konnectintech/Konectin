import React, { useState } from "react";
import TextEditor from "../../../../../components/editor";
import Suggestions from "./suggestions";
import JobActivities from "./activities";

const Responsibilities = ({ data, next, previous }) => {
  const [experience, setExperience] = useState(true);

  const toggleExperience = () => {
    setExperience(!experience);
  };

  return (
    <>
      {experience ? (
        <main className="-mt-8 flex flex-col justify-between items-start mx-auto md:mx-16">
          <h2 className="-mt-6 md:max-w-[30ch] text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
            Your work responsibilities
          </h2>
          <p className=" text-[#66666a] text-sm tracking-[-0.01rem] mt-3 mb-5 max-w-2xl">
            Try to include 3-6 work experience bullet points. Little is less and
            more is too much.
          </p>
          <section className="w-full h-[400px] flex justify-between mt-4">
            <div className="w-full md:w-1/2">
              <p className="font-bold text-[#66666a] text-sm mb-3">
                Product Designer | Konectin
              </p>
              <div className="h-full rounded-lg border border-[#b2b3b459]">
                <TextEditor />
              </div>
            </div>
            <div className="w-1/2 hidden md:block">
              <p className=" font-semibold text-[#66666a] text-xs mb-3 mt-1 ml-6 ">
                Let’s help your refine your job responsibilities with our top AI
                powered tool
              </p>
              <div className="h-full ml-6 border border-[#b2b3b48a] rounded-lg">
                <Suggestions />
              </div>
            </div>
          </section>
          <div className="w-8/12 lg:max-w-4xl flex flex-col justify-center mx-auto mt-12 gap-5 md:flex-row">
            <button
              onClick={previous}
              className="w-full border border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-4"
            >
              Back
            </button>
            <button
              onClick={toggleExperience}
              className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] mx-auto py-5 px-6 bg-[#332A66]"
            >
              Continue
            </button>
          </div>
        </main>
      ) : (
        <JobActivities next={next} previous={previous} />
      )}
    </>
  );
};

export default Responsibilities;
