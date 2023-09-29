import { useNavigate } from "react-router-dom";
import { ResumeHeroImage } from "../../../../assets";
import { CustomButton } from "../../../../components/button";
import { slideIn, textVariantUp } from "../../../../utils/motion";
import { motion } from "framer-motion";
import SectionWrapper from "../../../../components/animation/sectionWrapper";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-900 pb-24 pt-28 -translate-y-28">
      <div className="w-11/12 mx-auto max-w-screen-lg flex flex-col gap-10 md:flex-row items-center justify-between">
        <div className="flex w-full md:w-1/2 flex-col gap-6 items-center text-center md:text-start md:items-start justify-center">
          <motion.h1
            variants={textVariantUp()}
            className="text-4xl lg:text-5xl xl:text-6xl leading-tight w-9/12 font-semibold md:leading-snug"
          >
            Step up your job search with a Perfect Resume
          </motion.h1>
          <motion.p
            variants={textVariantUp(0.4)}
            className="text-start text-neutral-300 max-w-md md:max-w-lg"
          >
            Stand out from the crowd and build an exquisite resume that gets you
            the attention of world-class recruiters.
          </motion.p>
          <motion.div
            variants={textVariantUp(0.6)}
            onClick={() => navigate("/signup")}
            className="w-56 md:w-72"
          >
            <CustomButton primary colorType="secondary">
              Sign up to get started
            </CustomButton>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("rtl", "spring", 0.1, 1.2)}
          className="w-full md:w-1/2 sm:[--left-right:150%] [--left-right:-150%]"
        >
          <img src={ResumeHeroImage} alt="build your resume" />
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWrapper(HeroSection, "resume-hero");
