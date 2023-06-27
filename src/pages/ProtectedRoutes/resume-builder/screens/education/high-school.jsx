/* eslint-disable react-hooks/exhaustive-deps */
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../middleware/resume";
import { useState, useEffect } from "react";

function HighSchool({ handleBack }) {
  const { templateData, setTemplateData } = useTemplateContext();
  const currentEditedEducation = templateData.currentEditedEducation;
  const [education, setEducation] = useState(
    templateData.education[currentEditedEducation - 1]
  );

  const navigate = useNavigate();

  useEffect(() => {
    setTemplateData((prev) => ({
      ...prev,
      education: Object.values(prev.education).map((obj, id) => {
        if (id === currentEditedEducation - 1) {
          return education;
        }
        return obj;
      }),
    }));
  }, [education]);

  const handleChange = (name, value) => {
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (templateData.education) {
      setEducation(templateData.education[currentEditedEducation - 1]);
    }
  }, [currentEditedEducation]);

  // const addEducation = (e) => {
  //   e.preventDefault();
  //   setEducation([
  //     ...education,
  //     {
  //       schoolName: "",
  //       country: "",
  //       degree: "",
  //       state: "",
  //       city: "",
  //       graduated: false,
  //       graduation_month: null,
  //       graduation_year: null,
  //     },
  //   ]);
  // };

  // const removeEducation = (index) => {
  //   const list = [...education];
  //   list.splice(index, 1);
  //   setEducation(list);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/resume/builder/skills");
  };

  return (
    <section className="mt-12 flex justify-between items-center gap-10">
      <div className="mx-auto">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Add High School
        </h2>

        <div className="w-full mt-12">
          <input
            className="input-container"
            type="text"
            placeholder="High School Name"
            name="schoolName"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            onInput={(e) => handleChange(e.target.name, e.target.value)}
          />
          <div className="flex gap-4">
            <input
              className="input-container"
              type="text"
              placeholder="Country"
              name="country"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
            />
            <input
              type="text"
              placeholder="State / Province"
              name="state"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
              className="input-container"
            />
            <input type="text" className="input-container" placeholder="City" />
          </div>

          <input
            className="input-container"
            type="text"
            placeholder="Graduated?"
            name="graduated"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            onInput={(e) => handleChange(e.target.name, e.target.value)}
          />

          <div className="flex gap-4">
            <input
              className="input-container"
              type="text"
              placeholder="Month"
              name="month"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
            />
            <input
              className="input-container"
              type="text"
              name="year"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
              placeholder="Year"
            />
          </div>
          <div>
            <input
              className="input-container"
              type="text"
              name="relevantCourse"
              placeholder="Relevant Course"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
            />
            <button className="flex items-center gap-3 border-none outline-none mb-6">
              <div className="bg-primary-400 text-neutral-1000 p-1 border rounded-full">
                <FaPlus size="0.8rem" />
              </div>
              <span className="font-extrabold text-sm text-neutral-400">
                Add Relevant Course
              </span>
            </button>
          </div>
          <div>
            <input
              className="input-container"
              type="text"
              placeholder="Award/Honour"
            />
            <button className="flex items-center gap-3 border-none outline-none mb-6">
              <div className="bg-primary-400 p-1 border rounded-full">
                <FaPlus size="0.8rem" />
              </div>
              <span className="font-extrabold text-sm text-neutral-400">
                Add Award/Honour
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-xl flex flex-col max-md:justify-center mt-16 gap-5 md:flex-row">
        <button
          onClick={handleBack}
          className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm py-3 px-[4.5rem]"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm text-neutral-1000 py-3 px-[4.5rem] bg-primary-600"
        >
          Continue
        </button>
      </div>
    </section>
  );
}

export default HighSchool;
