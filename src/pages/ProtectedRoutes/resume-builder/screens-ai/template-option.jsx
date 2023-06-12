import { useTemplateContext } from "../../../../contexts/resume";

const TemplateOption = ({ templateId, image, index }) => {
  const { setSelectedTemplate } = useTemplateContext();

  const handleSelect = (id) => {
    localStorage.setItem("selectedTemplate", id);
    setSelectedTemplate(id);
  };

  return (
    <div>
      <img
        src={image}
        className={
          selectedDiv === index
            ? `h-[313px] lg:h-[535px] lg:w-[379px] border-4 border-indigo-600 transition duration-500 ease-in-out hover:cursor-pointer`
            : `h-[313px] lg:h-[535px] lg:w-[379px] hover:cursor-pointer`
        }
        alt={templateId}
        onClick={() => handleSelect(templateId)}
      />
    </div>
  );
};

export default TemplateOption;
