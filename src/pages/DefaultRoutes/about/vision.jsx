import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { OurVisionImage } from "../../../assets";
import { slideIn, textVariantUp } from "../../../utils/motion";
import SectionWrapper from "../../../components/animation/sectionWrapper";

function Vision() {
  return (
    <section className="bg-primary-500 py-24">
      <div className="w-11/12 min-h-[50vh] mx-auto max-w-screen-xl flex flex-col gap-10 md:flex-row items-center justify-between">
        <div className="flex w-full md:w-1/2 flex-col gap-6 items-center text-center text-white md:text-start md:items-start justify-center">
          <div className="space-y-4">
            <motion.h1
              variants={textVariantUp()}
              className="text-5xl md:text-6xl lg:text-8xl leading-tight font-semibold md:leading-snug"
            >
              Our <font className="text-secondary-600">Vision</font>
            </motion.h1>
            <motion.p
              variants={textVariantUp(0.4)}
              className="text-sm max-w-md leading-normal"
            >
              We believe in a world where the hiring process is innovative,
              revolutionized, seamless and made efficient for every
              professional. Our vision is to ensure that every job seeker,
              recruiter and intern on our platform has a flawless and
              hassle-free experience in ensuring achievable targets.
            </motion.p>
          </div>
          <motion.div variants={textVariantUp(0.8)} className="w-fit">
            <Link
              to="/signup"
              className="w-fit py-2 px-8 bg-white text-primary-600  text-center rounded-sm"
            >
              Join Us
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("rtl", "spring", 0.1, 1.2)}
          className="w-full md:w-1/2 sm:[--left-right:150%] [--left-right:-150%]"
        >
          <img src={OurVisionImage} alt="Get started with Konectin" />
        </motion.div>
      </div>
    </section>
  );
}

export default SectionWrapper(Vision, "vision");
