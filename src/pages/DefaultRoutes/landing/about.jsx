import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { sideImage } from "../../../assets";
import SectionWrapper from "../../../components/animation/sectionWrapper";
import { slideIn, textVariantUp } from "../../../utils/motion";

function AboutSection() {
  return (
    <div className="flex flex-col-reverse gap-10 md:flex-row items-center justify-between text-xm">
      <div className="flex w-full md:w-8/12 flex-col gap-6 md:gap-10 text-start items-start justify-center">
        <div className="header--text">
          <motion.h1 variants={textVariantUp()} className="text-3xl mb-2">
            About Our <font className="text-secondary-600">Company</font>
          </motion.h1>
          <motion.p variants={textVariantUp(0.4)}>
            A brief Introduction to Konectin.
          </motion.p>
        </div>
        <motion.p variants={textVariantUp(0.6)}>
          At Konectin, we're dedicated to empowering you throughout your career
          journey. We provide a range of resources, including internships, job
          postings, career talks, and blog posts, to help you succeed. Plus, our
          user-friendly resume builder makes it easy to showcase your skills and
          experience. Join us today to take the first step towards your dream
          job!
        </motion.p>
        <motion.div variants={textVariantUp(1)}>
          <Link
            to="/about"
            className="px-8 py-2 bg-transparent flex gap-2 items-center justify-center text-black-500 border-primary-500 border rounded-md"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("rtl", "spring", 0.1, 1)}
        className="w-full md:w-4/12
        sm:[--left-right:150%] [--left-right:-150%]"
      >
        <img
          src={sideImage}
          className="mx-auto"
          alt="Get started with Konectin"
        />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(AboutSection, "about");
