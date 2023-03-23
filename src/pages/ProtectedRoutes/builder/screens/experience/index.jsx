import React, { useState } from "react";
import Responsibilities from "./responsibilites";

const EmploymentExperience = ({ next, previous }) => {
  const [activities, setActivities] = useState(true);

  const handleEmploymentActivities = (e) => {
    e.preventDefault();
    setActivities(!activities);
  };
  const form_classes =
    "p-4 mb-6 text-[11px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9]";
  return (
    <>
      {activities ? (
        <main className="-mt-8 flex justify-between items-start mx-16">
          <div>
            <h2 className="-mt-6 max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
              What recent employement experience do you have?
            </h2>

            <form className="w-10/12 mt-12">
              <input
                className={form_classes}
                type="text"
                placeholder="Job Title"
              />
              <input
                className={form_classes}
                type="text"
                placeholder="Company / Organiztion Name"
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
                <input
                  className={form_classes}
                  type="text"
                  placeholder="City"
                />
              </div>

              <div className="flex">
                <input
                  className={`${form_classes} mr-4`}
                  type="text"
                  placeholder="Start Month"
                />
                <input
                  className={form_classes}
                  type="text"
                  placeholder="Start Year"
                />
              </div>
              <div className="flex">
                <input
                  className={`${form_classes} mr-4`}
                  type="text"
                  placeholder="End Month"
                />
                <input
                  className={form_classes}
                  type="text"
                  placeholder="End Year"
                />
              </div>
              <div className=" flex items-center">
                <input type="checkbox" />
                <label
                  htmlFor="checkbox"
                  className=" ml-2 mt-[2px] text-sm font-light text-[#66666a]"
                >
                  I currently work here
                </label>
              </div>
            </form>
            <div className="w-full flex mt-10">
              <button
                onClick={previous}
                className="border w-full font-extrabold border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 mr-4"
              >
                Back
              </button>
              <button
                onClick={handleEmploymentActivities}
                className="w-full border border-[#b2b3b48a] rounded-lg text-sm font-extrabold text-[#f5f5f5] py-5 px-6 bg-[#332A66]"
              >
                Continue
              </button>
            </div>
          </div>
          <div className="flex flex-col mr-10">
            <div className=" w-[300px] h-[222px] mb-6 border border-[#b2b3b4] shadow-lg rounded-lg"></div>
            <div className=" w-[300px] h-[322px] border border-[#b2b3b4] shadow- rounded-lg"></div>
          </div>
        </main>
      ) : (
        <Responsibilities next={next} previous={previous} />
      )}
    </>
  );
};

export default EmploymentExperience;
