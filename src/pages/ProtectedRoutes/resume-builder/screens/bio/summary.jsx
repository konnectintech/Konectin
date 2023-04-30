import Suggestions from "./suggestions";
import { ResumeTemplateSample1Image } from "../../../../../assets";
// import TextEditor from "../../../../../components/editor";

const BioSummary = ({ next, previous, data, handleChange }) => {
  return (
    <main className=" -mt-8 flex flex-col xl:mx-10">
      <div className="w-full flex flex-col justify-center items-center mx-auto ">
        <div className="flex flex-col self-start">
          <h2 className="-mt-6 max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
            Bio
          </h2>
          <p className=" max-w-[85ch] font-extralight text-[#66666a] text-[12px] tracking-[-0.01rem] mt-3 mb-5">
            Bio is short for biographical information which is a summary of a
            person's professional and educational background. It is typically
            included at the top of a resume and gives employers a quick overview
            of the candidate's qualifications and experience.
          </p>
        </div>

        <div className="w-9/12 xl:w-11/12 xl:grid xl:grid-cols-3 items-center gap-4 mt-8">
          <Suggestions />
          <div className="-mt-4">
            <p className=" font-semibold text-[#66666a] text-xs mb-3 mt-1">
              This is a brief description of you job background
            </p>
            <textarea
              value={data.bio}
              onChange={handleChange("bio")}
              className="p-4 mb-6 text-[14px] w-full text-[#8C8C8F] border border-[#b2b3b48a] outline-0 rounded-[4px] bg-[#f9f9f9] resize-none h-52 xl:h-64"
            />
          </div>
          <div className=" w-[280px] h-[300px] border border-[#b2b3b4] shadow-lg rounded-lg -mt-32 ml-16 hidden xl:block">
            {" "}
            <img src={ResumeTemplateSample1Image} alt="template" />
          </div>
        </div>
      </div>
      <div className="w-8/12 md:max-w-4xl flex flex-col justify-center mx-auto mt-10 gap-5 md:flex-row">
        <button
          onClick={previous}
          className="w-full border border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-4"
        >
          Back
        </button>
        <button
          onClick={() => next(data)}
          className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] mx-auto py-5 px-6 bg-[#332A66]"
        >
          Continue
        </button>
      </div>
      <button
        onClick={() => next(data)}
        className="text-[#FC670B] text-sm font-extralight tracking-[0.02rem] underline mx-auto mt-8"
      >
        Skip this step
      </button>
    </main>
  );
};

export default BioSummary;
