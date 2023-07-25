import { ResumeTemplateSampleImage } from "../../../../../assets";
import { useTemplateContext } from "../../../../../middleware/resume";
import { TemplateOne } from "./template-1";
import { TemplateTwo } from "./template-2";

function GetResume({ template }) {
  const { templateData } = useTemplateContext();

  const resumeTemplate = () => {
    switch (templateData.selectedTemplate) {
      case "modern_template_1":
        return <TemplateOne data={templateData} />;
      case "modern_template_2":
        return <TemplateTwo data={templateData} />;
      default:
        return <img src={ResumeTemplateSampleImage} alt="resume template" />;
    }
  };

  return (
    <div className="max-md:hidden">
      <div className="doc-body">
        <div className="parent-container top-head no-scrollbar">
          <div className="main-content"></div>
          <div className="side-content"></div>
        </div>

        {resumeTemplate()}

        <div className="parent-container top-head no-scrollbar">
          <div className="main-content"></div>
          <div className="side-content"></div>
        </div>

        <div className="flex w-full justify-end items-center gap-2 mt-3 text-neutral-300">
          {/* <MdIcons.MdArrowBackIos
            onClick={previousPage}
            size="0.6rem"
            className="cursor-pointer text-neutral-200"
          />
          <span className="text-xs">
            {pageNumber} of {pageMax}
          </span>
          <MdIcons.MdArrowForwardIos
            onClick={nextPage}
            size="0.6rem"
            className="text-neutral-200 cursor-pointer"
          />
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default GetResume;
