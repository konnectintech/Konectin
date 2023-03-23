import React, { useState } from "react";
import TextEditor from "../../../../../components/editor";
import WorkExperience from "./work-experience";
import Suggestions from "./suggestions";

const Responsibilities = ({ data, next, previous }) => {
  const [experience, setExperience] = useState(true);

  const toggleExperience = () => {
    setExperience(!experience);
  };
  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]";
  return (
    <>
      {experience ? (
        <main className="-mt-8 flex flex-col justify-between items-start mx-16">
          <h2 className="-mt-6 max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
            Your work responsibilities
          </h2>
          <p className=" text-[#66666a] text-sm tracking-[-0.01rem] mt-3 mb-5 max-w-2xl">
            Try to include 3-6 work experience bullet points. Little is less and
            more is too much.
          </p>
          <section className="w-full h-[400px] flex justify-between mt-4">
            <div className="w-1/2">
              <p className="font-bold text-[#66666a] text-sm mb-3">
                Product Designer | Konectin
              </p>
              <div className="h-full rounded-lg border border-[#b2b3b459]">
                <TextEditor />
              </div>
            </div>
            <div className="w-1/2">
              <p className=" font-semibold text-[#66666a] text-xs mb-3 mt-1 ml-6 ">
                Let’s help your refine your job responsibilities with our top AI
                powered tool
              </p>
              <div className="h-full ml-6 border border-[#b2b3b48a] rounded-lg">
                <Suggestions />
              </div>
            </div>
          </section>
          <div className="w-full flex justify-between mt-20">
            <button
              onClick={previous}
              className="border w-1/4 font-extrabold border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 mr-4"
            >
              Back
            </button>
            <button
              onClick={toggleExperience}
              className=" w-1/4 border border-[#b2b3b48a] rounded-lg text-sm font-extrabold text-[#f5f5f5] py-5 px-6 bg-[#332A66]"
            >
              Continue
            </button>
          </div>
        </main>
      ) : (
        <WorkExperience />
      )}
    </>
  );
};

export default Responsibilities;
