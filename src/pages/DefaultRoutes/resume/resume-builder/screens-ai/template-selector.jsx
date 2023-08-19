import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TemplateOption from "./template-option";

const TemplateSelector = ({ data }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!data.profession) {
      navigate("/resume/ai/profession/");
      return;
    }
  }, [navigate, data]);

  return (
    <>
      <div>
        <h2 className="text-2xl max-w-lg leading-snug lg:text-3xl font-extrabold text-center">
          Select a Resume Template for a{" "}
          <span className="text-secondary-500 capitalize">
            {data.profession}
          </span>
        </h2>
        <p className="text-center text-sm text-[#3F4044] font-medium mt-3">
          I have listed below some resume templates which resonates with your
          profession
        </p>
      </div>

      <section className="flex flex-col w-full items-center gap-10 mt-3 lg:mt-6 lg:mx-16 pb-12">
        <TemplateOption sectionName="modern" />
        <TemplateOption sectionName="artistic" />
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
