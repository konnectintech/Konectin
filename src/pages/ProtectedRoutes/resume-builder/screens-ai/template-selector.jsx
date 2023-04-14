import React from "react";

import {
  ResumeTemplateSample1Image,
  ResumeTemplateSampleImage,
} from "../../../../assets";
import { Link } from "react-router-dom";

const TemplateSelector = ({ next, data, handleChange }) => {
  return (
    <main className="flex flex-col justify-center mx-auto items-center gap-10">
      <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mx-auto bg-slate-300">
        <img src="." alt="" />
      </div>
      <h2 className="text-2xl  lg:text-3xl font-extrabold text-center">
        Select a Resume Template for a{" "}
        <span className="text-[#FC670B]">{data.profession}</span>
      </h2>
      <p className="text-center text-sm text-[#3F4044] font-medium">
        I have listed below some resume templates which resonates with your
        profession
      </p>

      <section className="w- flex flex-col items-center gap-10 mt-8 lg:mt-16 lg:mx-16">
        <div className=" flex flex-col items-start justify-start gap-7">
          <h3 className="text-xl lg:text-2xl font-bold">Modern</h3>
          <div className="w-fit h-fit overflow-x-auto flex items-center justify-center gap-10">
            <img
              src={ResumeTemplateSample1Image}
              className=" h-[313px]  lg:h-[535px] lg:w-[379px]"
              alt="template 1"
            />
            <img
              src={ResumeTemplateSampleImage}
              className=" h-[313px]  lg:h-[535px] lg:w-[379px]"
              alt="template 2"
            />
            <img
              src={ResumeTemplateSample1Image}
              className=" h-[313px]  lg:h-[535px] lg:w-[379px]"
              alt="template 1"
            />
            <img
              src={ResumeTemplateSampleImage}
              className=" h-[313px]  lg:h-[535px] lg:w-[379px]"
              alt="template 2"
            />
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start gap-7">
          <h3 className="text-xl lg:text-2xl font-bold">Artistic</h3>
          <div className=" h-fit overflow-x-auto  flex items-center justify-center gap-10">
            <img
              src={ResumeTemplateSampleImage}
              className=" h-[313px] lg:h-[535px] lg:w-[379px] "
              alt="template 2"
            />
            <img
              src={ResumeTemplateSample1Image}
              className=" h-[313px]  lg:h-[535px] lg:w-[379px]"
              alt="template 1"
            />
          </div>
        </div>
      </section>

      <Link
        to="/resume/options"
        className=" bg-[#332a66] py-5 px-14 text-white"
      >
        Continue
      </Link>
    </main>
  );
};

export default TemplateSelector;
