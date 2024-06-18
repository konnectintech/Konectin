import { useEffect, useState } from "react";
import {
  artisticTemplates,
  modernTemplates,
} from "../resume-builder/resume-templates/data";
import { TemplateOne } from "../resume-builder/resume-templates/modern-template";
import { CustomButton } from "../../../../components/button";

function TemplateSelector() {
  const [customTemplate, setCustomTemplate] = useState({
    basicInfo: {
      city: "",
      country: "Indonesia",
      email: "hani.husa@gmail.com",
      firstName: "Hani",
      lastName: "Husamuddin",
      phoneNumber: "822 2045 4652",
      phoneCode: " 62",
      profession: "Frontend Developer",
      profileUrl: "",
      state: "Yogakarta",
      zipCode: "33323D",
    },
    theme: {
      color: "blue",
      fontSize: "",
      fontStyle: "",
    },
    image: {
      show: false,
      value: "",
    },
    currentEditedJob: 1,
    currentEditedEducation: 1,
    jobExperience: [
      {
        jobTitle: "Web Strategist",
        company: "Freelance",
        country: "Indonesia",
        city: "Yogakatra",
        state: "",
        startMonth: "April",
        startYear: "2010",
        endMonth: "November",
        endYear: "2011",
        workDesc:
          "<ul><li>Implemented brand positioning strategy for two public institutions that increased brand awareness by 25% within two quarters</li><li>Redesigned&nbsp; a comprehensive brand guideline for an organisation resulting in a 30% increase in brand recognition within six months&nbsp;</li><li>Scrutinized ongoing brand communications by collaborators to achieve consistency and effective delivery.&nbsp;&nbsp;</li></ul>",
        current: false,
      },
    ],
    education: [
      {
        city: "Accra",
        country: "Indonesia",
        degree: "M.A Business Psychology ",
        startMonth: "February",
        startYear: 2034,
        schoolName: "University of Management, Poland",
        state: "",
        endMonth: "April",
        endYear: 2036,
        awards: [],
        relevantCourses: [],
      },
    ],
    skills: [
      { name: "REACT", lvl: "100" },
      { name: "Vue js", lvl: "60" },
      { name: "Assembly Language", lvl: "10" },
      { name: "JAVA", lvl: "45" },
    ],
    additionalInformation: {},
    bio: "See for yourself how Konectin can transform your job application. Check out samples of professional resumes that have landed users interviews with top companies.",
    selectedTemplate: "modern_1",
    currentStage: 0,
  });

  const [template, setTemplate] = useState({
    element: TemplateOne,
    name: "Tabulio",
    about:
      "When you know you're a natural fit, the conversation is warm, you get that fuzzy feeling, and every fiber of your being says you're perfect for this job, there's no better design than Tabulio",
    themeColors: ["#2F635A", "#FECB00"],
  });

  useEffect(() => {
    const [templateType, templateIndex] =
      customTemplate.selectedTemplate.split("_");

    const [ExactTemplate] =
      templateType === "modern"
        ? modernTemplates.filter((_, index) => index === templateIndex - 1)
        : artisticTemplates.filter((_, index) => index === templateIndex - 1);

    setTemplate(ExactTemplate);

    setCustomTemplate((prev) => ({
      ...prev,
      theme: { ...prev.theme, color: ExactTemplate.themeColors[0] },
    }));
  }, [customTemplate.selectedTemplate]);

  return (
    <>
      <div className="w-full lg:w-11/12 relative mx-auto max-w-screen-2xl flex flex-col gap-10 lg:gap-12 pt-16 px-2 xxs:px-4 sm:py-16 lg:px-0">
        <div className="text-center flex flex-col items-center justify-center gap-1">
          <h4 className="font-semibold text-3xl leading-10 max-w-lg">
            Over <span className="text-secondary-500">0+</span> Konectin Resumes
            Downloaded By Top Professionals
          </h4>
          <p className="text-neutral-200 max-w-2xl">
            See for yourself how Konectin can transform your job application.
            Check out samples of professional resumes that have landed users
            interviews with top companies.
          </p>
        </div>

        <div className="flex max-md:flex-col-reverse mb-4 items-stretch justify-between gap-10">
          <div className="flex flex-col justify-center w-full gap-4">
            <div className="flex items-center gap-2">
              <h4 className="text-2xl font-bold">{template.name}</h4>
              <div className="flex items-center gap-1 md:hidden">
                {template.themeColors.map((theme) => (
                  <div
                    key={theme}
                    onClick={() =>
                      setCustomTemplate((prev) => ({
                        ...prev,
                        theme: { ...prev.theme, color: theme },
                      }))
                    }
                    style={{
                      background: theme,
                      border:
                        customTemplate.theme.color === theme
                          ? "2px solid #191a1f"
                          : "2px solid transparent",
                    }}
                    className="w-6 h-6 rounded cursor-pointer"
                  />
                ))}
              </div>

              <div className="cursor-pointer min-w-[8rem] md:hidden ml-auto text-xs">
                <CustomButton primary colorType="primary">
                  Select this template
                </CustomButton>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm max-w-sm">{template.about}</p>
              <div className="flex items-center gap-1 max-md:hidden">
                {template.themeColors.map((theme) => (
                  <div
                    key={theme}
                    onClick={() =>
                      setCustomTemplate((prev) => ({
                        ...prev,
                        theme: { ...prev.theme, color: theme },
                      }))
                    }
                    style={{
                      background: theme,
                      border:
                        customTemplate.theme.color === theme
                          ? "2px solid #191a1f"
                          : "2px solid transparent",
                    }}
                    className="w-8 h-8 rounded cursor-pointer"
                  />
                ))}
              </div>
              <div className="cursor-pointer max-w-[14rem] max-md:hidden">
                <CustomButton primary colorType="primary">
                  Select this template
                </CustomButton>
              </div>
              <small className="max-md:hidden">
                You can always change your template later.
              </small>
            </div>
          </div>
          <div className="w-4/5 max-md:mx-auto md:w-1/2">
            <div className="h-[360px] md:h-[400px] flex items-center justify-center">
              <div className="scale-[36%] md:mt-10">
                {template.element ? template.element(customTemplate) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-stretch">
        {modernTemplates.concat(artisticTemplates).map((templates) => (
          <div
            key={templates.name}
            className="h-[200px] flex items-center justify-center w-[150px] bg-neutral-600 group relative cursor-pointer"
          >
            <div
              className={`bg-neutral-100 bg-opacity-70 absolute w-full h-full z-10 hidden group-hover:flex justify-center items-center ${
                template.name === templates.name ? "!flex" : "hidden"
              }`}
            >
              <div
                className={`${
                  template.name === templates.name
                    ? "bg-success-400"
                    : "bg-secondary-600"
                } text-xs px-3 py-2 text-white rounded`}
                onClick={() =>
                  setCustomTemplate((prev) => ({
                    ...prev,
                    selectedTemplate: templates.id,
                  }))
                }
              >
                {template.name === templates.name
                  ? "Selected"
                  : "View Template"}
              </div>
            </div>
            <div className="scale-[15%]">
              {templates.element
                ? templates.element({
                    ...customTemplate,
                    theme: { ...customTemplate.theme, color: "" },
                  })
                : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TemplateSelector;
