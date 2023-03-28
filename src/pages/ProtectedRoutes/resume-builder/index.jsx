import React from "react";
import { Link } from "react-router-dom";

const BuilderOption = ({ title, description, link }) => {
  return (
    <Link to={link}>
      <div className=" w-[320px] md:w-[400px] h-[270px] border-2 mx-10 border-gray-400 rounded-lg bg-[#353535] flex flex-col justify-center items-center p-5">
        <h3 className=" font-bold text-2xl mb-2 text-[#f5f5f5]">{title}</h3>
        <p className=" text-[12px] text-center text-[#f5f5f5]">{description}</p>
      </div>
    </Link>
  );
};

const Options = () => {
  return (
    <main className="bg-[#EEEEEE]">
      <section className="w-11/12 mx-auto max-w-screen-xl flex flex-col justify-center items-center gap-16 m-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center leading-tight font-semibold md:leading-snug">
          Ready to take your career to the next level?
        </h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <BuilderOption
            title="Create new resume"
            description="We will guide you on building a resume and getting started."
            link="/resume/start"
          />

          <BuilderOption
            title="Upload a resume"
            description="We access your existing resume and make neccessary adjustments."
            link="."
          />
        </div>
        <Link
          to="/resume/start"
          className=" gap-4 px-[70px] lg:px-[100px] py-[15px] flex items-center justify-center text-lg rounded text-[#fff] bg-[#332A66]"
        >
          Next
        </Link>
      </section>
    </main>
  );
};

export default Options;
