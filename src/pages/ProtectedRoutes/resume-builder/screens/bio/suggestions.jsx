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
    <section className=" max-w-[350px] mx-auto">
      <form className="w-full flex position relative items-center">
        <input
          type="text"
          placeholder="Product designer"
          className="w-full border-b border-[#b2b3b48a] rounded p-6 text-[#8C8C8F] text-[11px] tracking-wide border-none outline-none"
        />
        <button className="absolute right-10 ">
          <FaSearch siz="0.08rem" color="#d2d2d2" />
        </button>
      </form>
      <p className=" text-[#3f4044] font-bold tracking-[-0.01em] text-sm mt-4 md:ml-6">
        Choose one from the list below
      </p>
      <section className=" w-full border border-[#b2b3b48a] overflow-auto no-scrollbar rounded self-center flex flex-col justify-center item-center mt-4 mb-10 h-72">
        {responsibilities_suggestions.map((item, index) => {
          const { suggestion } = item;
          return (
            <div
              key={index}
              className="p-2 md:p-4 w-full flex justify-between items-center border-b border-[#b2b3b48a]"
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
    </section>
  );
};

export default Suggestions;
