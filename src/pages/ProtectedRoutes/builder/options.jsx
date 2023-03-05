import React from "react";
import { Link } from "react-router-dom";

const BuilderOption = ({ title, description, link }) => {
  return (
    <Link to={link}>
      <div className=" w-[440px] h-[300px] border-2 mx-10 border-gray-400 rounded-lg bg-[#353535] flex flex-col justify-center items-center">
        <h3 className=" font-bold text-2xl mb-2 text-[#f5f5f5]">{title}</h3>
        <p className=" text-[12px] text-[#f5f5f5]">{description}</p>
      </div>
    </Link>
  );
};

const Options = () => {
  return (
    <main className="bg-[#EEEEEE]">
      <section className="w-11/12 mx-auto max-w-screen-xl flex flex-col justify-center items-center gap-16 m-16">
        <h1 className="text-4xl lg:text-5xl leading-tight font-semibold md:leading-snug">
          Let us know where you belong
        </h1>
        <div className="flex">
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
          className=" gap-4 px-[60px] py-[6px] flex items-center justify-center text-lg rounded text-[#191a1f] bg-[#fc670b]"
        >
          Next
        </Link>
      </section>
    </main>
  );
};

export default Options;
