import React from "react";
import { template_images } from "../../assets/resume";
import { useTemplateContext } from "../../middleware/resume";

function ChangeTemplate() {
  const { templateData, setTemplateData } = useTemplateContext();

  const handleSelect = (value) => {
    setTemplateData((prev) => ({
      ...prev,
      selectedTemplate: value,
    }));
  };

  return (
    <div className="flex flex-col gap-2 overflow-y-auto max-h-[250px] snap-y">
      {template_images
        .filter((record) => record.category === "modern")
        .map((item, index) => {
          return (
            <div className="relative group">
              <img
                src={item.img}
                alt={`img_${index + 1}`}
                className="w-full h-full snap-start"
                onClick={() => handleSelect(`${item.category}_${index + 1}`)}
              />

              <div
                className={`${
                  templateData.selectedTemplate ===
                  `${item.category}_${index + 1}`
                    ? "absolute w-full h-full top-0 bg-primary-300 bg-opacity-60"
                    : "-top-full"
                } left-0 duration-500 flex items-center justify-center`}
              >
                {templateData.selectedTemplate ===
                  `${item.category}_${index + 1}` && (
                  <div className="bg-primary-600 text-white text-xs px-2 py-2 rounded absolute">
                    Selected
                  </div>
                )}
              </div>
              <div
                className={`${
                  templateData.selectedTemplate ===
                  `${item.category}_${index + 1}`
                    ? "-top-full"
                    : "absolute group-hover:w-full group-hover:h-full group-hover:top-0 bg-neutral-100 bg-opacity-60"
                } left-0 duration-500 flex items-center justify-center`}
              >
                <div
                  onClick={() => handleSelect(`${item.category}_${index + 1}`)}
                  className={` ${
                    templateData.selectedTemplate ===
                    `${item.category}_${index + 1}`
                      ? "hidden"
                      : "invisible absolute -top-full -translate-y-1/2 group-hover:top-1/2 group-hover:visible"
                  } bg-secondary-600 text-white text-xs px-2 py-2 rounded cursor-pointer `}
                >
                  Select Template
                </div>
              </div>
            </div>
          );
        })}
      {template_images
        .filter((record) => record.category === "artistic")
        .map((item, index) => {
          return (
            <div className="relative group">
              <img
                src={item.img}
                alt={`img_${index + 1}`}
                className="w-full h-full snap-start"
                onClick={() => handleSelect(`${item.category}_${index + 1}`)}
              />

              <div
                className={`${
                  templateData.selectedTemplate ===
                  `${item.category}_${index + 1}`
                    ? "absolute w-full h-full top-0 bg-primary-300 bg-opacity-60"
                    : "-top-full"
                } left-0 duration-500 flex items-center justify-center`}
              >
                {templateData.selectedTemplate ===
                  `${item.category}_${index + 1}` && (
                  <div className="bg-primary-600 text-white text-xs px-2 py-2 rounded absolute">
                    Selected
                  </div>
                )}
              </div>
              <div
                className={`${
                  templateData.selectedTemplate ===
                  `${item.category}_${index + 1}`
                    ? "-top-full"
                    : "absolute group-hover:w-full group-hover:h-full group-hover:top-0 bg-neutral-100 bg-opacity-60"
                } left-0 duration-500 flex items-center justify-center`}
              >
                <div
                  onClick={() => handleSelect(`${item.category}_${index + 1}`)}
                  className={` ${
                    templateData.selectedTemplate ===
                    `${item.category}_${index + 1}`
                      ? "hidden"
                      : "invisible absolute -top-full -translate-y-1/2 group-hover:top-1/2 group-hover:visible"
                  } bg-secondary-600 text-white text-xs px-2 py-2 rounded cursor-pointer `}
                >
                  Select Template
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ChangeTemplate;
