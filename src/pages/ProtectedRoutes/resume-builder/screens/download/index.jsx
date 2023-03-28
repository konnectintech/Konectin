import React, { useState } from "react";

const Download = ({ previous }) => {
  return (
    <main className="-mt-8 flex flex-col justify-between items-start md:mx-36">
      <h2 className="-mt-6 max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
        Download Resume
      </h2>
      <div className="w-full flex flex-col justify-center items-center mx-auto md:flex-row ">
        <div className=" w-[350px] h-[450px] border border-[#b2b3b4] shadow-lg rounded-lg md:mr-10 mt-16"></div>
        <div className="flex flex-col ml-10">
          <button className="bg-[#332A66] text-white font-bold text-lg border border-[#665d99] rounded-lg px-10 py-4 mt-7">
            Download
          </button>
          <button className="bg-[#332A66] text-white font-bold text-lg border border-[#665d99] rounded-lg p-4 mt-7">
            Download
          </button>
          <button
            onClick={previous}
            className=" font-bold text-lg border border-[#665d99] rounded-lg p-4 mt-7"
          >
            Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default Download;
