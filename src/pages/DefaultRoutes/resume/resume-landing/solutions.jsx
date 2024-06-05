import { motion } from "framer-motion";
import "./index.css";
import { textVariantUp } from "../../../../utils/motion";
import SectionWrapper from "../../../../components/animation/sectionWrapper";
import { SolutionsCard } from "../../../../components/cards";
import {
  ResumeTemplateCrossImage,
  solution1,
  solution2,
  solution4,
} from "../../../../assets";

function SolutionSection() {
  const data = [
    {
      id: 1,
      title: "AI-Enhanced Content Refinement",
      desc: "Our AI energizes your work responsibilities with powerful action verbs, enhancing your content to beat ATS systems and impress recruiters.",
      img: solution1,
      color: "#FDE3D5",
    },
    {
      id: 2,
      title: "Real - Time Enhancements",
      desc: "Watch your resume evolve in real-time for unmatched control and flexibility.",
      img: solution2,
      color: "#DDE9FB",
    },
    {
      id: 3,
      title: "ATS Friendly Resume Templates",
      desc: "Choose from expertly designed templates, customizable to your unique profile, profession, and industry.",
      img: ResumeTemplateCrossImage,
      color: "#DDDCEC",
    },
    {
      id: 4,
      title: "Harmonious Cover Letters",
      desc: "Our AI crafts a matching cover letter for a consistent professional image.",
      img: solution4,
      color: "rgba(255, 193, 7, 0.15)",
    },
  ];

  return (
    <section
      id="solution-section"
      className="bg-gradient-to-b from-white from-40% to-whites-200"
    >
      <div className="w-11/12 mx-auto max-w-screen-2xl flex flex-col gap-1 md:gap-4 py-16">
        <motion.h1
          variants={textVariantUp()}
          className="text-3xl md:text-4xl !leading-snug font-semibold text-neutral-100 max-w-2xl"
        >
          Experience the <span className="text-secondary-500">Konectin</span>{" "}
          Advantage
        </motion.h1>
        <motion.p
          variants={textVariantUp(0.6)}
          className="w-10/12 text-neutral-200 max-w-lg"
        >
          Our platform is packed with unique features designed to make your job
          application stand out. With customizable templates, real-time editing,
          and AI-powered suggestions, you'll be in the top 2% of applicants who
          tailor their resume to the job.
        </motion.p>

        <div className="solutions flex flex-col gap-12 mt-12">
          {data.map((item, index) => (
            <SolutionsCard
              key={index}
              item={item}
              direction={index % 2 === 0 ? "ltr" : "rtl"}
              total={data.length}
              bgColor={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(SolutionSection, "solution-section");
