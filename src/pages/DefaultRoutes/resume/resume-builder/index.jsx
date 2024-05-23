import { useEffect, useState } from "react";
import * as BsIcon from "react-icons/bs";
import { createResume, uploadResume } from "../../../../assets";
import StartBuilder from "./start";
import { useNavigate } from "react-router";
import { parseJwt } from "../../../../middleware/auth";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <div
          className={`${
            selector === choice ? "opacity-100" : "hidden"
          } bg-success-400 rounded-full h-[20px] w-[20px] text-[16px] flex items-center justify-center mt-auto mb-6 duration-500`}
        >
          <BsIcon.BsCheck />
        </div>
      </div>
    </div>
  );
};

const Options = () => {
  const [choice, setChoice] = useState("");
  const [editable, setEditable] = useState(false);
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    setChoice(choice);

    if (choice === "ai") {
      navigate(`/services/resume/${choice}`);
    }
  };

  useEffect(() => {
    const { currentStage } =
      JSON.parse(localStorage.getItem("konectin-profiler-data-template")) || "";
    const { token } =
      JSON.parse(localStorage.getItem("konectin-profiler-user")) || "";
    // Do not delete this code... Should be used when the user prompt is meant to be once
    // const prompted = JSON.parse(
    //   sessionStorage.getItem("konectin-profiler-recent-prompt")
    // );

    // if (!token || prompted) {
    //   setEditable(false);
    //   sessionStorage.setItem("konectin-profiler-recent-prompt", false);
    //   return;
    // }

    // const decodedJwt = parseJwt(token);

    // if (!currentStage || decodedJwt.exp * 1000 < Date.now()) {
    //   setEditable(false);
    //   sessionStorage.setItem("konectin-profiler-recent-prompt", false);
    // } else {
    //   setEditable(true);
    //   sessionStorage.setItem("konectin-profiler-recent-prompt", true);
    // }

    if (!token) {
      setEditable(false);
      return;
    }

    const decodedJwt = parseJwt(token);

    if (!currentStage || decodedJwt.exp * 1000 < Date.now()) {
      setEditable(false);
    } else {
      setEditable(true);
    }
  }, []);

  return editable ? (
    <StartBuilder />
  ) : (
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
          title={choice === "upload" ? "Coming soon" : "Upload a resume"}
          description={
            choice === "upload"
              ? "We have our developers working on this. We should have it running as soon as possible"
              : "We access your existing resume and make neccessary adjustments."
          }
          image={uploadResume}
          selector="upload"
          choice={choice}
          handleChoice={handleChoice}
        />
      </div>

      <div className="font-medium flex items-center gap-2 text-base">
        I want to build a cover letter
        <Link
          to="/services/cover-letter"
          className="font-bold text-secondary-600 flex items-center"
        >
          Cover Letter <FaChevronRight />
        </Link>
      </div>
    </section>
  );
};

export default Options;
