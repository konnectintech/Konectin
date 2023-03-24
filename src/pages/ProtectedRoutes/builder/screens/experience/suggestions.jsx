import React from "react";
import { FaSearch } from "react-icons/fa";

const responsibilities_suggestions = [
  {
    suggestion:
      "To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.",
  },
  {
    suggestion:
      "To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.",
  },
  {
    suggestion:
      "To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.",
  },
  {
    suggestion:
      "To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.",
  },
];

const Suggestions = () => {
  return (
    <>
      <form className="flex position relative items-center">
        <input
          type="text"
          placeholder="Type your job responsibility"
          className="w-full border-b border-[#b2b3b48a] rounded-tl-lg rounded-tr-lg p-6 text-[11px] tracking-wide outline-none"
        />
        <button className="absolute right-10 ">
          <FaSearch siz="0.08rem" color="#d2d2d2" />
        </button>
      </form>
      <p className=" text-[#3f4044] font-extralight tracking-[-0.01em] text-sm mt-4 ml-6">
        Showing 3 results for{" "}
        <span className=" font-bold">Product Designer</span>
      </p>
      <section className=" border border-[#b2b3b48a] overflow-auto rounded m-6 h-64">
        {responsibilities_suggestions.map((item, index) => {
          const { suggestion } = item;
          return (
            <div
              key={index}
              className="p-5 w-full flex justify-between items-center border-b border-[#b2b3b48a]"
            >
              <button className=" bg-[#403580] text-white text-xs font-extralight tracking-wide p-2 rounded-lg">
                Add
              </button>
              <p className=" text-xs text-[#191a1f] font-light ml-6 mt-3">
                {suggestion}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Suggestions;
