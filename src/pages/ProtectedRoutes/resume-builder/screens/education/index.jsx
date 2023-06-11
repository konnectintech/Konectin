import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import College from "./college";
import HighSchool from "./high-school";

const EducationOption = ({ title, toggleEducation }) => (
  <button
    onClick={toggleEducation}
    className=" w-full h-[200px] mt-4 mx-auto rounded bg-[#353535] text-[#d1d1d2] flex flex-col justify-center items-center"
  >
    <div className=" ">
      <h3 className=" font-bold text-2xl mb-2 text-[#f5f5f5]">{title}</h3>
    </div>
  </button>
);

const SelectEducation = ({ data, handleChange, template }) => {
  const [education, setEducation] = useState(false);
  let view;
  const [view_control, setViewControl] = useState(null);

  const toggleEducation = (type) => {
    setViewControl(type);
    setEducation(!education);
  };

  if (view_control === "college") {
    view = (
      <College template={template} data={data} handleChange={handleChange} />
    );
  }
  if (view_control === "high-school") {
    view = (
      <HighSchool template={template} data={data} handleChange={handleChange} />
    );
  }
  return (
    <main className="-mt-8 max-w-5xl mx-auto flex flex-col justify-between">
      {education ? (
        view
      ) : (
        <>
          <div className="flex">
            <h2 className="-mt-6 text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
              Add school
            </h2>
          </div>
          <div className=" w-full flex flex-col md:flex-row mx-auto gap-4 mt-10 md:mt-20">
            <EducationOption
              title="College/University"
              toggleEducation={() => toggleEducation("college")}
            />
            <EducationOption
              title="High School"
              toggleEducation={() => toggleEducation("high-school")}
            />
            <EducationOption title="Others" />
          </div>{" "}
        </>
      )}
    </main>
  );
};

const Education = ({ data, handleChange, template }) => {
  const [select_education, setSelectEducation] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/resume/builder/skills");
  };

  const toggleEducation = () => {
    setSelectEducation(!select_education);
  };

  return (
    <>
      {select_education ? (
        <main className="-mt-8 flex flex-col justify-between items-start md:mx-16">
          <div className="flex flex-col">
            <h2 className="-mt-6 text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
              Education
            </h2>
            <p className=" text-[#66666a] text-[12px] md:text-sm tracking-wider mt-3 mb-5 max-w-2xl">
              If you've graduated from, or are currently enrolled in a college
              or university, you should NOT include your high school.
            </p>
          </div>
          <div className=" bg-[#f7f7f7] flex items-center justify-center border border-dashed border-[#b2b3b48a] rounded-lg w-full h-[150px] md:h-[270px] mb-14 mt-6">
            <button
              onClick={toggleEducation}
              className="flex items-center border-none outline-none"
            >
              <div className=" bg-[#665d99] p-2 border rounded-full">
                <FaPlus color="#f5f5f5" size="0.6rem" />{" "}
              </div>
              <span className=" ml-3 font-extrabold text-sm text-[#8c8c8f]">
                Add Education
              </span>
            </button>
          </div>
          <div className="w-full md:max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0">
            <button
              onClick={() => navigate(-1)}
              className="border w-full border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-8"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] py-5 px-6 md:ml-8 bg-[#332A66]"
            >
              Continue
            </button>
          </div>
        </main>
      ) : (
        <SelectEducation
          template={template}
          data={data}
          handleChange={handleChange}
        />
      )}
    </>
  );
};

export default Education;
