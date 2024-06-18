import { Link } from "react-router-dom";
import { arrowRight } from "../../assets";
import { slideIn, textVariantUp } from "../../utils/motion";
import { motion } from "framer-motion";

function SolutionsCard({ item, total, bgColor, direction }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="group flex flex-col md:flex-row justify-between gap-4 md:gap-16 lg:gap-24"
    >
      <div className="md:group-odd:order-2 flex flex-1 flex-col justify-center gap-4">
        <motion.p
          variants={textVariantUp()}
          className="text-xs md:text-sm text-neutral-200"
        >
          <span>{item.id}</span> of <span>{total}</span>
        </motion.p>
        <motion.h5
          variants={textVariantUp(0.4)}
          className="text-xl text-neutral-100 md:text-4xl !leading-tight font-semibold"
        >
          {item.title}
        </motion.h5>
        <motion.p variants={textVariantUp(0.8)} className="text-neutral-200">
          {item.desc}
        </motion.p>
        {item.cta && (
          <motion.div variants={textVariantUp(1.2)} className="w-fit">
            <Link to={item.href} className="flex gap-2.5 items-center w-fit">
              <span className="text-secondary-600 font-semibold">
                {item.cta}
              </span>
              <img src={arrowRight} className="w-5" alt="" />
            </Link>
          </motion.div>
        )}
      </div>

      <motion.div
        variants={slideIn(direction, "spring", 0.1, 1.2)}
        className={`md:group-odd:order-1 flex-1 rounded-lg md:rounded-2xl p-5 md:py-16 md:px-10 ${
          direction === "rtl"
            ? " sm:[--left-right:150%] [--left-right:-150%]"
            : ""
        }`}
        style={{ background: bgColor }}
      >
        <img src={item.img} alt={item.title} />
      </motion.div>
    </motion.div>
  );
}

export default SolutionsCard;
