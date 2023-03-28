import React, { useState } from "react";

const BasicInformation = ({ data, next }) => {
  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]";

  return (
    <main className=" max-w-4xl -mt-8 md:-mt-0 flex flex-col md:flex-row justify-between self-center items-center mx-auto">
      <div className="  -mt-8 flex flex-col justify-center">
        <h2 className=" text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Basic Information
        </h2>
        <p className=" text-[#66666a] text-sm tracking-wide mt-3 mb-5">
          This information will placed at the top of your resume.
        </p>

        <form className="w-full">
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

          <div className="w-full flex flex-col justify-center mx-auto mt-5 gap-5 md:flex-row">
            <button className="w-full border border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-4">
              Back
            </button>
            <button
              onClick={next}
              className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] mx-auto py-5 px-6 bg-[#332A66]"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
      <div className=" hidden flex-col md:ml-10 md:flex">
        <div className=" w-[300px] h-[422px] border border-[#b2b3b4] shadow- rounded-lg"></div>
      </div>
    </main>
  );
};

export default BasicInformation;
