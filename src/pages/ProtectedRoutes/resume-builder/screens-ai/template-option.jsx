import { useTemplateContext } from "../../../../contexts/resume";

const TemplateOption = ({ templateId, image }) => {
  const { setSelectedTemplate } = useTemplateContext();

  const handleSelect = (id) => {
    console.log(id, image)
    // localStorage.setItem("selectedTemplate", id);
    setSelectedTemplate(id);
  };

 

  return (
    <div onClick={() => handleSelect(templateId, image)}>
      <img
        src={image}
        className=" h-[313px]  lg:h-[535px] lg:w-[379px] transition duration-500 ease-in-out hover:border-b-2  border-[#332a66] cursor-pointer"
        // alt="template 1"
        alt={templateId}
        
        onClick={()=>selectedImage(templateId)}
      />
    </div>
  );
};

export default TemplateOption;
