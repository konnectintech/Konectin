import React, { useState } from "react";

const BasicInformation = ({ data, next }) => {
  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]";
  return (
    <main className=" max-w-6xl -mt-8 flex justify-between self-center  items-center mx-auto">
      <div>
        <h2 className="-mt-6 text-3xl leading-tight font-semibold md:leading-snug">
          How should employers reach you?
        </h2>
        <p className=" text-[#66666a] text-sm tracking-wide mt-3 mb-5">
          This information will placed at the top of your resume.
        </p>

        <form className="w-10/12">
          <div className=" flex">
            <input
              className={`mr-4  ${form_classes}`}
              type="text"
              placeholder="First Name"
            />
            <input
              type="text"
              placeholder="Last Name"
              className={`${form_classes}`}
            />
          </div>
          <input className={form_classes} type="text" placeholder="Job Title" />
          <input className={form_classes} type="text" placeholder="Phone" />
          <div className="flex">
            <input
              className={`${form_classes} mr-4`}
              type="text"
              placeholder="Country"
            />
            <input className={form_classes} type="text" placeholder="City" />
          </div>
          <div className="flex">
            <input
              className={`${form_classes} mr-4`}
              type="text"
              placeholder="State / Province"
            />
            <input
              className={form_classes}
              type="text"
              placeholder="Zip Code"
            />
          </div>
          <input className={form_classes} type="email" placeholder="Email*" />

          <div className="w-full flex">
            <button className="border w-full border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 mr-4">
              Back
            </button>
            <button
              onClick={next}
              className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] py-5 px-6 bg-[#332A66]"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col mr-10">
        <div className=" w-[300px] h-[222px] mb-6 border border-[#b2b3b4] shadow-lg rounded-lg"></div>
        <div className=" w-[300px] h-[322px] border border-[#b2b3b4] shadow- rounded-lg"></div>
      </div>
    </main>
  );
};

export default BasicInformation;
