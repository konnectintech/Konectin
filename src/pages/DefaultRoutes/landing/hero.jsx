import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { heroImage } from "../../../assets";
import { slideIn, textVariantUp } from "../../../utils/motion";
import SectionWrapper from "../../../components/animation/sectionWrapper";

function HeroSection() {
  return (
    <div className="flex flex-col gap-10 md:flex-row items-center justify-between">
      <div className="flex w-full md:w-1/2 flex-col gap-6 items-center text-center md:text-start md:items-start justify-center">
        <motion.h1
          variants={textVariantUp()}
          className="text-4xl lg:text-6xl xl:text-7xl font-medium leading-tight"
        >
          Take a step <br /> Closer to your <br />{" "}
          <font className="underdash">
            dream <font className="text-secondary-600">Job</font>
          </font>
        </motion.h1>
        <motion.p
          variants={textVariantUp(0.4)}
          className="max-w-md md:max-w-lg md:mt-4"
        >
          Land your dream job with Konectin! Get access to the greatest career
          opportunities by connecting with recruiters that value your
          experience. Join us today to take the first step towards a fulfilling
          career
        </motion.p>
        <motion.div variants={textVariantUp(0.6)} className="w-48 md:w-60">
          <Link
            to="/signup"
            className="block w-full py-2 bg-secondary-600 text-white text-center rounded-md"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("rtl", "spring", 0.1, 1)}
        className="w-full md:w-1/2 sm:[--left-right:150%] [--left-right:-150%]"
      >
        <img src={heroImage} alt="Get started with Konectin" />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(HeroSection, "hero-section");
