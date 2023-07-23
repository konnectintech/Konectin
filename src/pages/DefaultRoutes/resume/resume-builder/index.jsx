import { useState } from "react";
import { Link } from "react-router-dom";
import * as BsIcon from "react-icons/bs";
import { createResume, uploadResume, BuilderBg } from "../../../../assets";

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
      className="md:w-[400px] h-[240px] md:h-[270px] border mx-10 border-gray-400 rounded-lg p-5 cursor-pointer bg-cover relative overflow-hidden text-neutral-1000 hover:scale-110 duration-200"
    >
      <div
        className={`${
          selector === choice ? "bg-opacity-20" : "bg-opacity-40"
        } absolute left-0 top-0 bg-primary-600 bg-opacity-40 w-full h-full duration-500`}
      />
      <div
        className={`${
          selector === choice ? "top-0" : "-top-full"
        } absolute left-0 bg-secondary-500 w-full h-full duration-500`}
      />
      <div className="w-full h-full flex flex-col justify-center items-center relative">
        <div className="my-auto text-center">
          <h3 className="font-bold text-2xl mb-2">{title}</h3>
          <p className="text-[12px] text-center">{description}</p>
        </div>
        <BsIcon.BsCheckCircle
          className={`${
            selector === choice ? "opacity-100" : "hidden"
          } mt-auto mb-6 duration-500`}
        />
      </div>
    </div>
  );
};

const Options = () => {
  const [choice, setChoice] = useState("");

  const handleChoice = (choice) => {
    setChoice(choice);
  };

  return (
    <main
      className=""
      style={{
        backgroundImage: `linear-gradient(rgba(249, 249, 249, 0.81), rgba(249, 249, 249, 0.81)), url("${BuilderBg}")`,
        backgroundSize: "cover",
      }}
    >
      <div />
      <section className="w-11/12 h-full mx-auto max-w-screen-xl flex flex-col justify-center items-center gap-8">
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
          to={choice ? `/resume/${choice}` : "#"}
          className={`duration-500 px-12 py-3 rounded-md text-[#fff] mt-6${
            choice ? " bg-primary-600" : " bg-primary-200"
          }`}
        >
          Next
        </Link>
      </section>
    </main>
  );
};

export default Options;
