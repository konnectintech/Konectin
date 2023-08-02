/* eslint-disable react-hooks/exhaustive-deps */
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../../middleware/resume";
import { useState, useEffect } from "react";
import NavigationButton from "../navigationButton";

function HighSchool() {
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

  const handleArrayChange = (sub, index, value) => {
    setEducation((prev) => ({
      ...prev,
      [sub]: prev[sub].map((obj, id) => (id === index ? value : obj)),
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

  const cancelEdu = () => {
    templateData.education.splice(currentEditedEducation - 1, 1);

    setTemplateData((prev) => ({
      ...prev,
      education: templateData.education,
      currentEditedEducation: Object.keys(templateData.education).length - 1,
    }));

    navigate("/resume/builder/education/select-edu");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/resume/builder/skills");
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="mx-auto">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          Add High School
        </h2>

        <div className="w-full mt-6">
          <input
            type="text"
            name="schoolName"
            value={education.schoolName}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            onInput={(e) => handleChange(e.target.name, e.target.value)}
            className="input-container"
            placeholder="High School Name"
          />
          <div className="flex gap-4">
            <input
              className="input-container"
              type="text"
              placeholder="Country"
              name="country"
              value={education.country}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
            />
            <input
              type="text"
              placeholder="State / Province"
              name="state"
              value={education.state}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
              className="input-container"
            />
            <input
              type="text"
              className="input-container"
              placeholder="City"
              name="city"
              value={education.city}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <input
              className="input-container"
              type="text"
              placeholder="Graduation Month"
              name="month"
              value={education.month}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
            />
            <input
              className="input-container"
              type="text"
              name="year"
              value={education.year}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
              placeholder="Graduation Year"
            />
          </div>
          <div>
            {education?.relevantCourses.map((course, index) => (
              <input
                key={course + index}
                className="input-container"
                type="text"
                name="relevantCourse"
                placeholder="Relevant Course"
                value={course}
                onChange={(e) =>
                  handleArrayChange("relevantCourses", index, e.target.value)
                }
                onInput={(e) =>
                  handleArrayChange("relevantCourses", index, e.target.value)
                }
              />
            ))}
            <button
              onClick={() =>
                setEducation((prev) => ({
                  ...prev,
                  relevantCourses: [...prev.relevantCourses, ""],
                }))
              }
              className="flex items-center gap-3 border-none outline-none mb-6"
            >
              <div className="bg-primary-400 text-neutral-1000 w-6 h-6 flex items-center justify-center rounded-full">
                <FaPlus size="0.7rem" />
              </div>
              <span className="font-extrabold text-sm text-neutral-400">
                Add Relevant Course
              </span>
            </button>
          </div>
          <div>
            {education?.awards.map((award, index) => (
              <input
                key={award + index}
                className="input-container"
                type="text"
                placeholder="Award/Honour"
                value={award}
                onChange={(e) =>
                  handleArrayChange("awards", index, e.target.value)
                }
                onInput={(e) =>
                  handleArrayChange("awards", index, e.target.value)
                }
              />
            ))}
            <button
              onClick={() =>
                setEducation((prev) => ({
                  ...prev,
                  awards: [...prev.awards, ""],
                }))
              }
              className="flex items-center gap-3 border-none outline-none mb-6"
            >
              <div className="bg-primary-400 text-neutral-1000 w-6 h-6 flex items-center justify-center rounded-full">
                <FaPlus size="0.7rem" />
              </div>
              <span className="font-extrabold text-sm text-neutral-400">
                Add Award/Honour
              </span>
            </button>
          </div>
        </div>
      </div>

      <NavigationButton back={cancelEdu} cont={handleSubmit} />
    </section>
  );
}

export default HighSchool;
