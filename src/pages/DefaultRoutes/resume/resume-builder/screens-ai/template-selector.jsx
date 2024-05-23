import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TemplateOption from "./template-option";
import { TypeAnimation } from "react-type-animation";

const TemplateSelector = ({ data }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!data.profession) {
      navigate("/services/resume/ai/profession/");
    }
  }, [navigate, data]);

  return (
    <>
      <div>
        <h2 className="text-2xl max-w-lg leading-snug lg:text-3xl font-extrabold text-center">
          Select a Resume Template for a/an{" "}
          <span className="text-secondary-500 capitalize">
            {data.profession}
          </span>
        </h2>
        <p className="text-center text-sm text-[#3F4044] font-medium mt-3">
          <TypeAnimation
            cursor={false}
            sequence={[
              "I have listed below some resume templates which resonates with your profession",
              1000,
            ]}
          />
        </p>
      </div>

      <section className="flex flex-col w-full items-center gap-10 mt-3 lg:mt-6 lg:mx-16 pb-12">
        <TemplateOption sectionName="modern" />
        <TemplateOption sectionName="artistic" />
      </section>
    </>
  );
};

export default TemplateSelector;
