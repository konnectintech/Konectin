import { useNavigate } from "react-router-dom";
import { ResumeHeroImage } from "../../../../assets";
import { CustomButton } from "../../../../components/button";
import { slideIn, textVariantUp } from "../../../../utils/motion";
import { motion } from "framer-motion";
import SectionWrapper from "../../../../components/animation/sectionWrapper";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-white from-40% to-whites-200 pt-12">
      <div className="w-11/12 mx-auto max-w-screen-2xl flex flex-col gap-10 md:flex-row items-center justify-between">
        <div className="flex w-full md:w-1/2 flex-col gap-6 items-center text-center md:text-start md:items-start justify-center">
          <motion.h1
            variants={textVariantUp()}
            className="text-4xl lg:text-[45px] lg:leading-tight tracking-tight font-semibold"
          >
            Create Professional
            <span className="text-primary-500 block">
              ATS Standard Resumes
              {/* Compelling Cover Letters ATS Standard Resumes
              Compelling Cover Letters ATS Standard Resumes Compelling Cover
              Letters */}
            </span>
            With AI Technology
          </motion.h1>
          <motion.p
            variants={textVariantUp(0.4)}
            className="text-start text-neutral-300 max-w-md md:max-w-lg"
          >
            In a market where 75% of resumes are never read by a human, Konectin
            helps you break through. Craft professional resumes and cover
            letters that get noticed.
          </motion.p>
          <motion.div
            variants={textVariantUp(0.6)}
            onClick={() => navigate("/services/resume/options")}
            className="w-56 md:w-72"
          >
            <CustomButton primary colorType="primary">
              Start Building Now
            </CustomButton>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("rtl", "spring", 0.1, 1.2)}
          className="w-full md:w-1/2 sm:[--left-right:150%] [--left-right:-150%]"
        >
          <img
            className="w-[150%]"
            src={ResumeHeroImage}
            alt="build your resume"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWrapper(HeroSection, "resume-hero");
