import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { textVariantUp } from "../../../../utils/motion";
import SectionWrapper from "../../../../components/animation/sectionWrapper";

import { ResumeTemplateSample1Image } from "../../../../assets";

const slides = [
  {
    image: ResumeTemplateSample1Image,
    title: "Choose a Template",
    desc: "Begin your journey to a professionally crafted resume by selecting the perfect template that suits your style and industry. We offer a diverse range of templates, from classic to creative, so you can make a strong first impression.",
    color: "#E8F0FE",
  },
  {
    image: ResumeTemplateSample1Image,
    title: "Customize Content",
    desc: "Tailor your resume to your unique strengths and experiences. Our intuitive customisation options allow you to edit and format your content with ease. Use our editing tools to highlight your achievements and skills effectively.",
    color: "#FEE1CE",
  },
  {
    image: ResumeTemplateSample1Image,
    title: "Download & Share",
    desc: "Once you're satisfied with your resume, it's time to take action. Hit the \"Download\" button to save your resume in various formats such as PDF or Word. You can also share your resume online with potential employers through our sharing options.",
    color: "#FECECE",
  },
];

function SliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="w-11/12 mx-auto max-w-screen-2xl flex flex-col gap-12 py-16">
      <div className="space-y-4">
        <motion.h1
          variants={textVariantUp()}
          className="text-3xl md:text-4xl !leading-snug font-semibold text-neutral-100 max-w-xl"
        >
          Creating Impactful <span className="text-secondary-500">Resume</span>{" "}
          and <span className="text-secondary-500">Cover Letter</span> is Easy
        </motion.h1>
        <motion.p
          variants={textVariantUp(0.4)}
          className="w-10/12 text-neutral-200 max-w-lg"
        >
          With Konectin, creating a professional resume and cover letter is as
          simple as 1-2-3. Follow our guide and start making an impact in a
          market where 50% of applicants don't meet the job requirements.
        </motion.p>
      </div>

      <div className="w-full relative">
        <div className="flex justify-stretch gap-2 max-w-[10rem] xs:max-w-[14rem] w-full absolute top-12 left-6 md:top-16 md:left-12">
          {slides.map((_, bullets) => (
            <div
              key={bullets}
              className={`${
                currentSlide >= bullets
                  ? "flex-1 bg-neutral-200"
                  : "bg-neutral-600"
              } rounded-full h-1.5 w-[30px]`}
            />
          ))}
        </div>

        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <div
                style={{ background: slide.color }}
                key={slide.title + slide.id}
                className="rounded-3xl min-h-[300px] md:min-h-[400px] flex max-md:flex-col items-center px-6 py-24 md:p-12 gap-8 md:gap-16 select-none"
              >
                <div className="order-1 flex flex-col w-full relative z-10 gap-4">
                  <h5 className="text-3xl md:text-4xl font-semibold">
                    {slide.title}
                  </h5>
                  <p className="text-neutral-300 text-sm md:text-base max-w-lg">
                    {slide.desc}
                  </p>
                </div>

                <div className="order-2 relative w-full bg-white flex items-center justify-center py-8">
                  <img
                    className="h-[400px] aspect-auto"
                    src={slide.image}
                    alt={slide.title}
                  />
                </div>
              </div>
            )
        )}

        <div className="flex gap-3 w-full max-md:justify-center absolute bottom-6 md:bottom-16 md:left-12">
          <div
            className={`${
              currentSlide === 0 ? "bg-neutral-500" : "bg-neutral-200"
            } text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer`}
            onClick={() =>
              setCurrentSlide((currentId) =>
                currentId === 0 ? 0 : currentId - 1
              )
            }
          >
            <IoIosArrowBack size="1.4rem" />
          </div>
          <div
            className={`${
              currentSlide === slides.length - 1
                ? "bg-neutral-500"
                : "bg-neutral-200"
            } text-white rounded-full w-10 h-10 flex items-center cursor-pointer justify-center`}
            onClick={() =>
              setCurrentSlide((currentId) =>
                currentId === slides.length - 1
                  ? slides.length - 1
                  : currentId + 1
              )
            }
          >
            <IoIosArrowForward size="1.4rem" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(SliderSection, "slider-section");
