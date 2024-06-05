import { motion } from "framer-motion";
import { ResumeCTAImage } from "../../../../assets";
import { textVariantUp } from "../../../../utils/motion";
import SectionWrapper from "../../../../components/animation/sectionWrapper";
import { CustomButton } from "../../../../components/button";

function CTASection() {
  return (
    <motion.section
      variants={textVariantUp()}
      className="resume-cta p-8 md:p-16 relative min-h-[40vh] flex items-center justify-center"
    >
      <div className="absolute left-0 top-0 w-full h-full">
        <img
          src={ResumeCTAImage}
          className="w-full h-full"
          alt="There's a great power in words, if you don't hitch too many of them
    together."
        />
      </div>
      <div className="relative z-10 w-3/4 mx-auto text-center space-y-10 text-white md:font-semibold">
        <h4 className="text-3xl max-w-xl mx-auto">
          Over <span className="text-secondary-500">50+</span> Industry-Specific
          Resumes and Cover Letters
        </h4>
        <div className="max-w-[10rem] mx-auto">
          <CustomButton primary colorType="secondary">
            Get Started
          </CustomButton>
        </div>
      </div>
    </motion.section>
  );
}

export default SectionWrapper(CTASection, "cta-section");
