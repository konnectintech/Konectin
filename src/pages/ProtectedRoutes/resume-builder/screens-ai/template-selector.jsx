import {
  ResumeTemplateSample1Image,
  ResumeTemplateSampleImage,
} from "../../../../assets";

import { Link } from "react-router-dom";
// import TemplateOption from "./template-option";
import { useState } from "react";
import { useTemplateContext } from "../../../../contexts/resume";

const template_images = [
  {
    img: ResumeTemplateSample1Image,
    category: "modern",
    id:0
  },
  {
    img: ResumeTemplateSampleImage,
    category: "modern",
    id:1
  },
  {
    img: ResumeTemplateSample1Image,
    category: "artistic",
    id:2
  },
  {
    img: ResumeTemplateSampleImage,
    category: "artistic",
    id:3
  },
];


const TemplateSelector = ({ data }) => {
   const { setSelectedTemplate } = useTemplateContext();
  const [selectedItem, setSelectedItem] = useState();

  
const handleSelect = (id, index) => {
   
     localStorage.setItem("selectedTemplate", id);
    setSelectedTemplate(id);
    
    setSelectedItem(index)
    
  };


  return (
    <main className="flex flex-col justify-center mx-auto items-center gap-10">
      <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mx-auto bg-slate-300">
        <img src="." alt="" />
      </div>
      <h2 className="text-2xl  lg:text-3xl font-extrabold text-center">
        Select a Resume Template for a{" "}
        <span className="text-[#FC670B]">{data.profession}</span>
      </h2>
      <p className="text-center text-sm text-[#3F4044] font-medium">
        I have listed below some resume templates which resonates with your
        profession
      </p>

      <section className="w- flex flex-col items-center gap-10 mt-8 lg:mt-16 lg:mx-16">
        <div className=" flex flex-col items-start justify-start gap-7">
          <h3 className="text-xl lg:text-2xl font-bold">Modern</h3>
          <div className="w-fit h-fit overflow-x-auto flex items-center justify-center gap-10">
            {template_images.filter((record) => record.category === "modern").map((item, index) => {
           return (
                <div>
                    <img
                      key={index}
                      
                      src={item.img}
                      alt={`template${item.id}`}
                      
                      className={selectedItem===item.id ? `h-[313px]  lg:h-[535px] lg:w-[379px] border-4 border-[#332a66] transition duration-500 ease-in-out hover:cursor-pointer`:`h-[313px]  lg:h-[535px] lg:w-[379px]  hover:cursor-pointer`}
                      onClick={() => handleSelect(`template${index}`, item.id)}
                  />
               </div>
              )
            })}
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start gap-7">
          <h3 className="text-xl lg:text-2xl font-bold">Artistic</h3>
          <div className=" h-fit overflow-x-auto  flex items-center justify-center gap-10">
         {template_images.filter((record) => record.category === "artistic").map((item, index) => {
           return (
                <div>
                    <img
                      key={index}
                      
                      src={item.img}
                      alt={`template${item.id}`}
                      
                      className={selectedItem===item.id ? `h-[313px]  lg:h-[535px] lg:w-[379px] border-4 border-[#332a66] transition duration-500 ease-in-out hover:cursor-pointer`:`h-[313px]  lg:h-[535px] lg:w-[379px]  hover:cursor-pointer`}
                      onClick={() => handleSelect(`template${index}`, item.id)}
                  />
               </div>
              )
            })}
           
          </div>
        </div>
      </section>

      <Link
        // to="/resume/options"
        to="/resume/builder"
        className=" bg-[#332a66] py-5 px-14 text-white"
      >
        Continue
      </Link>
    </main>
  );
};

export default TemplateSelector;
