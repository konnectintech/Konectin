import { useState } from "react";
import { motion } from "framer-motion";
import TeamExpandedCard from "./teamExpandedCard";
import TeamCollapsedCard from "./teamCollapsedCard";
import { textVariantUp } from "../../../../utils/motion";
import SectionWrapper from "../../../../components/animation/sectionWrapper";

function Team({ data }) {
  const [teammate, setTeammate] = useState();

  const openModal = (id) => {
    document.body.style.overflow = "hidden";
    setTeammate(id);
  };

  const closeModal = () => {
    document.body.style.overflow = "";
    setTeammate();
  };

  return (
    <section className="flex flex-col gap-16">
      <div className="w-9/12 mx-auto max-w-screen-lg flex flex-col gap-12 pt-16 text-center">
        <motion.h2 variants={textVariantUp()} className="text-3xl font-bold">
          <font className="text-secondary-600">Our Remarkable Team:</font> Meet
          The Amazing Talents Behind Our Brand.
        </motion.h2>
        <motion.p variants={textVariantUp(0.4)} className="px-6">
          Our product is designed to connect job seekers with potential
          employers around the globe and our team is passionate together to make
          this happen. We are a group of dedicated professionals, each bringing
          a range of skills and expertise to the table. From software
          development to marketing and customer support, we have the resources
          necessary to create a platform that benefits both job seekers and
          employers alike. Get to know the people behind the scenes, who work
          tirelessly to make our product the best it can be in the market.
        </motion.p>
      </div>
      <div className="bg-primary-100">
        <TeamCollapsedCard data={data} onCardClick={openModal} />
        <TeamExpandedCard
          data={data}
          selected={teammate}
          onClose={closeModal}
        />
      </div>
    </section>
  );
}

export default SectionWrapper(Team, "team");
