import { motion } from "framer-motion";
import {
  card3Image,
  ResumeTemplateSample1Image,
  ResumeTemplateSampleImage,
} from "../../../../assets";
import { ResumeButton } from "../../../../components/button";
import InfiniteLooper from "../../../../components/infiniteScroller";
import "./index.css";
import { slideIn, textVariantUp } from "../../../../utils/motion";
import SectionWrapper from "../../../../components/animation/sectionWrapper";

function TipSection() {
  return (
    <>
      <div
        id="resume_templates"
        className="flex flex-col gap-10 md:flex-row items-center justify-between text-xm"
      >
        <div className="flex w-full md:w-7/12 lg:w-8/12 flex-col gap-4 text-start items-start justify-center">
          <motion.h1
            variants={textVariantUp(0.4)}
            className="text-2xl font-semibold md:text-3xl md:leading-relaxed"
          >
            Choose from our professional template
          </motion.h1>
          <motion.p
            variants={textVariantUp(0.6)}
            className="w-10/12 text-neutral-300 mb-2"
          >
            Do you worry about how your resume should look? At Konectin, we have
            structured amazing templates to ease you of the stress of worrying
            about how your resume should appear. We have a wide array of
            organized and professional templates you can choose from.
          </motion.p>
          <motion.div variants={textVariantUp(0.8)} className="w-fit">
            <ResumeButton />
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("rtl", "spring", 0.1, 1.2)}
          className="w-full md:w-5/12 lg:w-4/12 overflow-hidden sm:[--left-right:150%] [--left-right:-150%]"
        >
          <InfiniteLooper speed="12" direction="left">
            <img
              src={ResumeTemplateSampleImage}
              className="mx-auto"
              alt="Get started with Konectin"
            />
            <img
              src={ResumeTemplateSample1Image}
              className="mx-auto"
              alt="Get started with Konectin"
            />
          </InfiniteLooper>
        </motion.div>
      </div>

      <motion.div
        id="resume_examples"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-8 mt-10 md:flex-row md:justify-between md:items-center"
      >
        <motion.div
          variants={slideIn("ltr", "spring", 0.1, 1.2)}
          className="w-3/4 md:w-full"
        >
          <img src={card3Image} alt="useful tips" />
        </motion.div>
        <div className="flex flex-col gap-1 w-11/12">
          <motion.h1
            variants={textVariantUp()}
            className="text-2xl font-semibold mb-2 md:text-3xl md:leading-relaxed"
          >
            Follow <font className="text-secondary-600">useful tips</font> from
            industry experts around the globe
          </motion.h1>
          <motion.p
            variants={textVariantUp(0.4)}
            className="text-neutral-300 mb-2"
          >
            Enter your email below to stay up-to-date with helpful information
            that has been tested and trusted to give you desired results in your
            career.
          </motion.p>
          <motion.div variants={textVariantUp(0.8)} className="w-fit">
            <ResumeButton />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default SectionWrapper(TipSection, "tip-section");
