import { motion } from "framer-motion";
import { caseImage } from "../../assets";
import { textVariantUp } from "../../utils/motion";
import SectionWrapper from "../animation/sectionWrapper";

function MapSection() {
  return (
    <section className="flex flex-col gap-6 mt-16">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-10/12 mx-auto max-w-screen-lg text-center">
          <motion.h1 variants={textVariantUp()} className="text-3xl mb-2">
            How Others Have{" "}
            <font className="text-secondary-600">Benefited</font>
          </motion.h1>
          <motion.p variants={textVariantUp(0.4)}>
            Delve into the success stories of job seekers and recruiters who
            have leveraged Konectin's innovative features to their advantage.
          </motion.p>
        </div>
      </div>
      <motion.img variants={textVariantUp(0.6)} src={caseImage} alt="Map" />
    </section>
  );
}

export default SectionWrapper(MapSection, "map");
