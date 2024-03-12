import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { slideIn, textVariantUp } from "../../../../utils/motion";
import SectionWrapper from "../../../../components/animation/sectionWrapper";

function TestimonialSection({ data }) {
  return (
    <div className="flex flex-col gap-4">
      <motion.h1
        variants={textVariantUp()}
        className="text-2xl font-semibold mb-2 md:text-3xl leading-relaxed"
      >
        Loved & used by individuals <br /> across the globe.
      </motion.h1>
      <div className="flex flex-col gap-2">
        <div className="grid sm:grid-cols-2 bg-white md:grid-cols-3 md:bg-neutral-1000 lg:grid-cols-4 lg:bg-white gap-2 shadow-lg">
          {data?.map((review, index) => (
            <motion.div
              variants={slideIn("ltr", "spring", 0.2, 1.2 * index)}
              className="flex flex-col justify-between gap-4 bg-neutral-1000 px-4 py-6"
              key={index}
            >
              <div className="justify-self-start flex items-center gap-1">
                {new Array(5).fill("").map((_, index) => (
                  <FaStar key={index} color="#FBB040" size="1rem" />
                ))}
              </div>
              <p className="justify-self-center text-sm w-11/12">
                {review.text}
              </p>
              <div className="justify-self-end flex items-center gap-4">
                <img src={review.image} alt={review.name} />
                <div className="flex flex-col text-sm">
                  <b>{review.name}</b>
                  <small className="text-neutral-300">{review.location}</small>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <small className="w-3/4 mt-3 text-neutral-200">
          Contact our Customer Support if you have any question(s) or encounter
          any issue. We are always ready to help.
        </small>
        <Link
          to="/contact"
          className="self-start text-sm px-2 py-1 bg-white flex gap-2 items-center justify-center text-neutral-200 border-neutral-200 border rounded-sm hover:bg-primary-500 hover:text-white"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default SectionWrapper(TestimonialSection, "testimonial");
