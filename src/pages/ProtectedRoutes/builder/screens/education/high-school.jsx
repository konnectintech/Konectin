import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const HighSchool = ({ data, next, previous }) => {
  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]";
  return (
    <>
      <section className="flex justify-between items-center">
        <div>
          <h2 className="-mt-6 text-3xl leading-tight font-semibold md:leading-snug">
            Add High School
          </h2>

          <form className="w-10/12  mt-12">
            <input
              className={form_classes}
              type="text"
              placeholder="High School Name"
            />
            <div className=" flex">
              <input
                className={`mr-4  ${form_classes}`}
                type="text"
                placeholder="Country"
              />
              <input
                type="text"
                placeholder="State / Province"
                className={`mr-4 ${form_classes}`}
              />
              <input type="text" className={form_classes} placeholder="City" />
            </div>

            <input
              className={form_classes}
              type="text"
              placeholder="Graduated?"
            />

            <div className="flex">
              <input
                className={`${form_classes} mr-4`}
                type="text"
                placeholder="Month"
              />
              <input className={form_classes} type="text" placeholder="Year" />
            </div>
            <div>
              <input
                className={form_classes}
                type="text"
                placeholder="Relevant Course"
              />
              <button className="flex items-center border-none outline-none mb-6">
                <div className=" bg-[#665d99] p-1 border rounded-full">
                  <FaPlus color="#f5f5f5" size="0.8rem" />{" "}
                </div>
                <span className=" ml-3 font-extrabold text-sm text-[#8c8c8f]">
                  Add Relevant Course
                </span>
              </button>
            </div>
            <div>
              <input
                className={form_classes}
                type="text"
                placeholder="Award/Honour"
              />
              <button className="flex items-center border-none outline-none mb-6">
                <div className=" bg-[#665d99] p-1 border rounded-full">
                  <FaPlus color="#f5f5f5" size="0.8rem" />{" "}
                </div>
                <span className=" ml-3 font-extrabold text-sm text-[#8c8c8f]">
                  Add Award/Honour
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col mr-10">
          <div className=" w-[300px] h-[222px] mb-6 border border-[#b2b3b4] shadow-lg rounded-lg"></div>
        </div>
      </section>
      <div className="w-8/12 mx-auto flex items-center justify-center">
        <button
          onClick={previous}
          className="border w-10/12 font-semibold border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 mr-8"
        >
          Back
        </button>
        <button
          onClick={next}
          className="w-10/12 border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] font-semibold py-5 px-6 ml-8 bg-[#332A66]"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default HighSchool;
