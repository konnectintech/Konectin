import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const SectionWrapper = (Component, idName, amount) =>
  function HOC(props) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: amount ? amount : 0.25 }}
      >
        <span className="absolute" id={idName}>
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
