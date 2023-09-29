import { recruitImage } from "../../../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideIn, textVariantUp } from "../../../utils/motion";
import SectionWrapper from "../../../components/animation/sectionWrapper";

function RecruiterSection({ data }) {
  return (
    <div className="flex flex-col gap-8">
      <motion.div
        variants={slideIn("ltr", "spring", 0.1, 1)}
        className="md:hidden"
      >
        <img src={recruitImage} className="mx-auto" alt="Konectin Recruiters" />
      </motion.div>
      <div className="header--text">
        <motion.h1 variants={textVariantUp()} className="text-3xl mb-2">
          What{" "}
          <font className="text-secondary-600">Jobseekers & Recruiters</font>{" "}
          gain from us
        </motion.h1>
        <motion.p variants={textVariantUp(0.4)}>
          We have created an healthy and transparent community of Jobseekers and
          Recruiters.
        </motion.p>
      </div>
      <div className="flex flex-col gap-10 md:flex-row items-center justify-between">
        <motion.div
          variants={slideIn("ltr", "spring", 0.1, 1)}
          className="hidden md:w-4/12 md:block"
        >
          <img src={recruitImage} alt="Konectin Recruiters" />
        </motion.div>
        <motion.div
          variants={slideIn("rtl", "spring", 0, 1)}
          className="md:w-8/12 flex flex-col gap-6
          sm:[--left-right:150%] [--left-right:-150%]"
        >
          <div className="w-full grid grid-col sm:grid-cols-2 gap-6">
            {data?.map((item, index) => (
              <motion.div
                variants={slideIn("rtl", "spring", 0.3 * index, 1.2)}
                key={index}
                className="flex w-full flex-col gap-3 text-start items-start justify-center 
                sm:[--left-right:150%] [--left-right:-150%]"
              >
                <div className="w-10 h-10 bg-secondary-200 rounded-sm flex flex-col items-center justify-center">
                  <img src={item.logo} alt={item.title} />
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-xs">{item.paragraph}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={textVariantUp(1.2)}
            className="w-full xs:w-fit flex flex-col xxs:flex-row gap-2 xs:gap-4 xs:items-center xs:justify-between text-sm"
          >
            <button className="px-8 py-2 bg-transparent flex gap-2 items-center justify-center text-black-500 border-primary-500 border rounded-md">
              Learn More
            </button>
            <Link
              to="/signup"
              className="px-8 py-2 bg-primary-500 text-white text-center rounded-md"
            >
              Sign Up
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWrapper(RecruiterSection, "recruiters");
