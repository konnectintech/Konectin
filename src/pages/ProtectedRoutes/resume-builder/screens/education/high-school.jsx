import React from "react";
import { FaPlus } from "react-icons/fa";

const HighSchool = ({ data, next, previous }) => {
  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]";
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="mx-auto">
          <h2 className=" text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
            Add High School
          </h2>

          <form className="w-full mt-12">
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
        <div className=" hidden flex-col md:ml-10 md:flex">
          <div className=" w-[300px] h-[422px] border border-[#b2b3b4] shadow- rounded-lg"></div>
        </div>
      </section>
      <div className="w-8/12 flex flex-col justify-between mx-auto mt-12 gap-5 md:flex-row ">
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
    </>
  );
};

export default HighSchool;
