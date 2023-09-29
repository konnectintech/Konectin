import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AboutHeroImage } from "../../../assets";
import { slideIn, textVariantUp } from "../../../utils/motion";
import SectionWrapper from "../../../components/animation/sectionWrapper";

function HeroSection() {
  return (
    <section className="bg-white py-24 -translate-y-28">
      <div className="w-11/12 min-h-[50vh] mx-auto max-w-screen-xl flex flex-col gap-10 md:flex-row items-center justify-between">
        <div className="flex w-full md:w-1/2 flex-col gap-6 items-center text-center md:text-start md:items-start justify-center">
          <div>
            <motion.h1
              variants={textVariantUp()}
              className="text-5xl md:text-6xl lg:text-8xl leading-tight font-semibold md:leading-snug"
            >
              <font className="text-secondary-600">Our</font> Mission
            </motion.h1>
            <motion.p
              variants={textVariantUp(0.4)}
              className="text-sm max-w-sm leading-normal"
            >
              <font className="font-semibold mt-2 mb-4 block">
                Who says job hunting has to be a drag?
              </font>
              At Konectin, we aim at giving every professional, be it job
              seekers or recruiters the best experience in this career sphere.
              We know that the job sector can be overwhelming and burdensome,
              that's why we have created a platform to help simplify and give a
              seamless experience. So join us in our quest to help experts in
              the job market actualize their dreams.
            </motion.p>
          </div>

          <motion.div variants={textVariantUp(0.8)} className="w-fit">
            <Link
              to="/signup"
              className="w-fit py-2 px-8 text-white bg-secondary-600 text-center rounded-sm"
            >
              Join Us
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("rtl", "spring", 0.1, 1.2)}
          className="w-full md:w-1/2 sm:[--left-right:150%] [--left-right:-150%]"
        >
          <img src={AboutHeroImage} alt="Get started with Konectin" />
        </motion.div>
      </div>
    </section>
  );
}

export default SectionWrapper(HeroSection, "about-hero");
