import * as BsIcon from "react-icons/bs";
import { useTemplateContext } from "../../../../middleware/resume";
import {
  ResumeTemplateSample1Image,
  ResumeTemplateSampleImage,
} from "../../../../assets";

const TemplateOption = ({ sectionName }) => {
  const { templateData, onInputChange } = useTemplateContext();

  const handleSelect = (value) => {
    onInputChange({ section: "selectedTemplate", values: value });
  };

  const template_images = [
    {
      img: ResumeTemplateSample1Image,
      category: "modern",
    },
    {
      img: ResumeTemplateSampleImage,
      category: "modern",
    },
    {
      img: ResumeTemplateSample1Image,
      category: "artistic",
    },
    {
      img: ResumeTemplateSampleImage,
      category: "artistic",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <h3 className="text-xl lg:text-2xl font-bold capitalize">
        {sectionName}
      </h3>
      <div className="w-fit h-fit overflow-x-auto flex items-center justify-center gap-10">
        {template_images
          .filter((record) => record.category === sectionName)
          .map((item, index) => {
            return (
              <div
                className="relative cursor-pointer h-[313px] lg:h-[535px] lg:w-[379px]"
                key={index}
              >
                <div
                  className={`
                ${
                  templateData.selectedTemplate ===
                  `${sectionName}_template_${index + 1}`
                    ? "absolute w-full h-full top-0 bg-neutral-100 bg-opacity-50"
                    : "-top-full"
                } left-0 duration-500 flex items-center justify-center`}
                >
                  {templateData.selectedTemplate ===
                    `${sectionName}_template_${index + 1}` && (
                    <BsIcon.BsCheckCircle
                      size="1.2rem"
                      className="absolute text-neutral-700 bg-primary-400 rounded-full"
                    />
                  )}
                </div>
                <img
                  src={item.img}
                  alt={`${sectionName}_template_${index + 1}`}
                  className="w-full h-full"
                  onClick={() =>
                    handleSelect(`${sectionName}_template_${index + 1}`)
                  }
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TemplateOption;
