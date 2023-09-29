import { motion } from "framer-motion";
import { useState } from "react";
import { slideIn, textVariantUp } from "../../../../utils/motion";
import SectionWrapper from "../../../../components/animation/sectionWrapper";

function FAQSection({ data }) {
  const [isOpen, setOpen] = useState();

  const handleFAQ = (index) => {
    setOpen((prev) => (prev === index ? null : index));
  };
  return (
    <div className="flex flex-col gap-8">
      <motion.h1
        variants={textVariantUp()}
        className="text-2xl font-semibold mb-2 md:text-3xl md:leading-relaxed"
      >
        <font className="text-secondary-600">Konectin</font> Resume Builder FAQ
      </motion.h1>
      <div className="flex flex-col justify-stretch gap-8">
        {data?.map((accordion, index) => (
          <motion.div
            variants={slideIn("ltr", "spring", 0.1, 0.7 * index)}
            className="flex gap-2 items-start border-red-600"
            onClick={() => handleFAQ(index)}
            key={index}
          >
            <div className="w-5 h-5 cursor-pointer rounded-sm flex items-center justify-center text-center border-2 border-black text-xl font-semibold px-2 pt-0.5">
              {isOpen !== index ? "+" : "-"}
            </div>
            <div className="flex flex-col gap-2">
              <div className="cursor-pointer select-none text-md font-semibold">
                {accordion.question}
              </div>
              {isOpen === index && (
                <div className="text-sm w-[80%]">{accordion.answer}</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(FAQSection, "faq-section");
