import {
  ResumeTemplateSample1Image,
  ResumeTemplateSampleImage,
} from "../../../../assets";
import { Link } from "react-router-dom";
import TemplateOption from "./template-option";

const template_images = [
  {
    img: ResumeTemplateSample1Image,
  },
  {
    img: ResumeTemplateSampleImage,
  },
];

const TemplateSelector = ({ data }) => {
  return (
    <>
      <div>
        <h2 className="text-2xl max-w-lg leading-snug lg:text-3xl font-extrabold text-center">
          Select a Resume Template for a{" "}
          <span className="text-[#FC670B]">{data.profession}</span>
        </h2>
        <p className="text-center text-sm text-[#3F4044] font-medium mt-3">
          I have listed below some resume templates which resonates with your
          profession
        </p>
      </div>

      <section className="flex flex-col items-center gap-10 mt-3 lg:mt-6 lg:mx-16 pb-12">
        <div className=" flex flex-col items-start justify-start gap-7">
          <h3 className="text-xl lg:text-2xl font-bold">Modern</h3>
          <div className="w-fit h-fit overflow-x-auto flex items-center justify-center gap-10">
            {template_images.map((image, index) => (
              <TemplateOption
                key={index}
                templateId={`template${index}`}
                image={image.img}
              />
            ))}
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start gap-7">
          <h3 className="text-xl lg:text-2xl font-bold">Artistic</h3>
          <div className=" h-fit overflow-x-auto  flex items-center justify-center gap-10">
            <img
              src={ResumeTemplateSampleImage}
              className=" h-[313px] lg:h-[535px] lg:w-[379px] "
              alt="template 2"
            />
            <img
              src={ResumeTemplateSample1Image}
              className=" h-[313px]  lg:h-[535px] lg:w-[379px]"
              alt="template 1"
            />
          </div>
        </div>
        <Link
          to="/resume/builder"
          className="self-end bg-primary-500 rounded-md py-3 px-14 text-white"
        >
          Continue
        </Link>
      </section>
    </>
  );
};

export default TemplateSelector;
