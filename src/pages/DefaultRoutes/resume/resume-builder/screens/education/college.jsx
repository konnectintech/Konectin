/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
import { months } from "../../../../../../assets/data/months";
import { years } from "../../../../../../assets/data/years";
import { useNavigate } from "react-router-dom";
import { useTemplateContext } from "../../../../../../middleware/resume";
import NavigationButton from "../navigationButton";

function College() {
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
    <section className="max-w-6xl flex flex-col justify-between gap-10 mt-8">
      <div className="w-full mx-auto self-center">
        <h2 className="text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
          What’s your college or university?
        </h2>

        <form className="w-full mt-12">
          <div className="mt-6">
            <input
              className="input-container"
              value={education.schoolName}
              name="schoolName"
              type="text"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
              placeholder="College / University Name"
            />
            <input
              className="input-container"
              value={education.degree}
              name="degree"
              type="text"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onInput={(e) => handleChange(e.target.name, e.target.value)}
              placeholder="Degree"
            />
            <div className="flex gap-4">
              <input
                type="text"
                value={education.country}
                placeholder="Country"
                name="country"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                onInput={(e) => handleChange(e.target.name, e.target.value)}
                className="input-container"
              />
              <input
                type="text"
                value={education.state}
                name="state"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                onInput={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="State / Province"
                className="input-container"
              />
              <input
                type="text"
                value={education.city}
                name="city"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                onInput={(e) => handleChange(e.target.name, e.target.value)}
                className="input-container"
                placeholder="City"
              />
            </div>

            <div className="flex gap-4">
              <select
                value={education.month}
                name="month"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                onInput={(e) => handleChange(e.target.name, e.target.value)}
                className="input-container"
                placeholder="Graduation Month"
              >
                {months.map((month) => (
                  <option key={month.label} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
              <select
                value={education.year}
                name="year"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                onInput={(e) => handleChange(e.target.name, e.target.value)}
                className="input-container"
                placeholder="Graduation Year"
              >
                {years.map((year) => (
                  <option key={year.label} value={year.value}>
                    {year.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>

      <NavigationButton back={cancelEdu} cont={handleSubmit} />
    </section>
  );
}

export default College;
