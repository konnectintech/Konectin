import { useState } from "react";
import { Link } from "react-router-dom";
import { createResume, uploadResume } from "../../../assets";

const BuilderOption = ({
  title,
  description,
  selector,
  choice,
  handleChoice,
  image,
}) => {
  return (
    <div
      onClick={() => handleChoice(selector)}
      style={{ backgroundImage: `url("${image}")` }}
      className={`${
        selector === choice
          ? "border-primary-400 shadow-xl shadow-primary-200"
          : "border-gray-400"
      } md:w-[400px] h-[240px] md:h-[270px] border mx-10 border-gray-400 rounded-lg p-5 cursor-pointer bg-cover relative overflow-hidden  text-neutral-1000`}
    >
      <div
        className={`${
          selector === choice ? "bg-opacity-20" : "bg-opacity-40"
        } absolute left-0 top-0 bg-primary-600 bg-opacity-40 w-full h-full duration-500`}
      ></div>
      <div className="w-full h-full flex flex-col justify-center items-center relative">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <p className="text-[12px] text-center">{description}</p>
      </div>
    </div>
  );
};

const Options = () => {
  const [choice, setChoice] = useState("ai");

  const handleChoice = (choice) => {
    setChoice(choice);
  };

  return (
    <main className="bg-[#EEEEEE]">
      <section className="w-11/12 h-full min-h-[55vh] mx-auto max-w-screen-xl flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center leading-tight font-semibold md:leading-snug">
          Ready to take your career to the next level?
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-4">
          <BuilderOption
            title="Create new resume"
            description="We will guide you on building a resume and getting started."
            selector="ai"
            image={createResume}
            choice={choice}
            handleChoice={handleChoice}
          />

          <BuilderOption
            title="Upload a resume"
            description="We access your existing resume and make neccessary adjustments."
            image={uploadResume}
            selector="upload"
            choice={choice}
            handleChoice={handleChoice}
          />
        </div>
        <Link
          to={`/resume/${choice}`}
          className="px-12 py-3 rounded-md text-[#fff] bg-primary-100 hover:bg-primary-600 mt-6"
        >
          Next
        </Link>
      </section>
    </main>
  );
};

export default Options;
