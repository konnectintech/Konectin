import React from "react";
import scanImage from "../../../../../assets/images/scan.gif";
import "./scanResume.css";
import {  Circle } from "rc-progress";
import { useState, useEffect } from "react";

function PersonalDetails() {
  return (
    <div className="mt-3 text-center flex flex-col gap-4">
      <p className="text-secondary-600 font-bold">Personal Details</p>
      <p className="text-white text-sm">
        Stand out by completing your Profile and applying with it...
      </p>
    </div>
  );
}

const ScanResume = () => {
  const [progCount, setProgCount] = useState(0);
  const [circProgColor,setcircProgColor] = useState("#FC670B")

  useEffect(() => {
    const interval = setInterval(() => {
      if (progCount < 100) {
        setProgCount((prev) => prev + 1);
      } else{
        setcircProgColor("green")
      }
    }, 50);
    return () => clearInterval(interval);
  }, );

  return (
    <>
      <div className="m-auto my-4 items-center text-center">
        <h2 className="text-xl md:text-xl leading-tight font-semibold md:leading-snug">
          Scanning Resume
        </h2>
      </div>
      <div className="bg-white p-4 lg:p-10 flex flex-col lg:flex-row border border-black-100 items-center lg:items-start rounded-lg gap-20">
        <div className="flex flex-col md:flex-row gap-10">
          <div className=" bg-primary-500 rounded-lg p-10 min-h-[400px] max-w-[550px] lg:min-w-full flex flex-row justify-center items-center flex-wrap md:flex-nowrap mx-auto gap-5">
            <div className="flex flex-col items-center w-full m-auto">
              <div className="flex items-center justify-center h-[150px] w-[150px]">
                <Circle
                  className=" relative"
                  percent={progCount}
                  trailWidth={5}
                  trailColor="#fff"
                  strokeWidth={5}
                  strokeColor={circProgColor}
                />
                <h1 className="">{progCount}%</h1>
              </div>
              <PersonalDetails />
            </div>
            <div className="flex justify-center  w-full lg:w-1/2 items-center">
              <img
                src={scanImage}
                alt="scanImage"
                className="w-[150px] h-[150px] mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <span className="text-sm font-bold font-[Avenir] capitalize">
              personal details
            </span>
            <div className=" my-1 relative w-[15rem] md:w-[25rem] h-[0.625rem] rounded-full bg-[#CFD9FC]">
              <div
                style={{ width: `100%` }}
                className="h-full bg-[#1042F1] rounded-full "
              ></div>
            </div>
            <span className="text-sm font-[Avenir] font-medium ">100%</span>
          </div>
          <div>
            <span className="text-sm font-bold font-[Avenir] capitalize">
              Work History
            </span>
            <div className=" my-1 relative w-[15rem] md:w-[25rem] h-[0.625rem] rounded-full bg-[#CFD9FC]">
              <div
                style={{ width: `40%` }}
                className="h-full bg-[#1042F1] rounded-full"
              ></div>
            </div>
            <span className="text-sm font-[Avenir] font-medium ">40%</span>
          </div>
          <div>
            <span className="text-sm font-bold font-[Avenir] capitalize">
              Education
            </span>
            <div className=" my-1 relative  w-[15rem] md:w-[25rem] h-[0.625rem] rounded-full bg-[#CFD9FC]">
              <div
                style={{ width: `70%` }}
                className="h-full bg-[#1042F1] rounded-full "
              ></div>
            </div>
            <span className="text-sm font-[Avenir] font-medium ">70%</span>
          </div>
          <div>
            <span className="text-sm font-bold font-[Avenir] capitalize">
              Skills
            </span>
            <div className=" my-1 relative w-[15rem] md:w-[25rem] h-[0.625rem] rounded-full bg-[#CFD9FC]">
              <div
                style={{ width: `85%` }}
                className="h-full bg-[#1042F1] rounded-full "
              ></div>
            </div>
            <span className="text-sm font-[Avenir] font-medium ">85%</span>
          </div>
          <div>
            <span className="text-sm font-bold font-[Avenir] capitalize">
              Other Information
            </span>
            <div className=" my-1 relative w-[15rem] md:w-[25rem] h-[0.625rem] rounded-full bg-[#CFD9FC]">
              <div
                style={{ width: `0%` }}
                className="h-full bg-[#1042F1] rounded-full "
              ></div>
            </div>
            <span className="text-sm font-[Avenir] font-medium ">0%</span>
          </div>

          <div className=" mx-auto">
            <button
              //   onClick={handleSubmit}
              type="submit"
              className="bg-primary-500 rounded-md py-2 px-14 text-white self-end"
            >
              Continue
            </button>
          </div>
        </div>

        {/* <DropFileInput onFileChange={(files) => onFileChange(files)} /> */}
      </div>
    </>
  );
};

export default ScanResume;
