import { internHero } from "../../../assets";
import "./index.css";
import { motion } from "framer-motion";
import SectionWrapper from "../../../components/animation/sectionWrapper";
import { slideIn, textVariantUp } from "../../../utils/motion";
import { Link } from "react-router-dom";
import { useSessionStorage } from "../../../middleware/storage";

function Internship() {
  const [form, setForm] = useSessionStorage("internData", {
    basicDetails: {
      fullName: "",
      email: "",
      country_code: "",
      phone_number: "",
      country: "",
      gender: "",
      ageRange: "",
    },
    upload: [],
    education: {
      name: "",
      options: {
        option1: "",
        option2: "",
        option3: "",
      },
    },
    internType: {
      type: "",
      field: "",
    },
  });

  return (
    <section className="min-h-[70vh] overflow-hidden">
      <div className="w-11/12 mx-auto max-w-screen-2xl min-h-[70vh] flex flex-col md:gap-16 lg:gap-48 md:flex-row items-center py-32">
        <div className="flex flex-col gap-6 w-full my-auto md:w-9/12 lg:w-6/12">
          <div data-set={form} data-control={setForm}>
            <motion.p
              variants={textVariantUp()}
              className="text-primary-600 flex gap-2 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="10"
                viewBox="0 0 34 10"
                fill="none"
              >
                <rect
                  width="34"
                  height="10"
                  transform="translate(0 0.892578)"
                  fill="white"
                />
                <line
                  x1="7.75"
                  y1="5"
                  x2="26.25"
                  y2="5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>{" "}
              Experience, Learn, Innovate Across All Domains.
            </motion.p>
            <motion.h1
              variants={textVariantUp(0.4)}
              className="text-4xl md:text-5xl font-semibold !leading-tight mt-2"
            >
              Ignite Your Career with{" "}
              <span className="text-secondary-500">Konectin's</span> Internship
              Program
            </motion.h1>
          </div>
          <motion.p variants={textVariantUp(0.6)}>
            Join Konectin's Internship Program and embark on a journey of
            learning and growth. Gain practical experience, work with seasoned
            professionals, and contribute to our mission of revolutionizing the
            tech landscape in Africa. Are you ready to make your mark and
            accelerate your career?
          </motion.p>
          <motion.div variants={textVariantUp(0.8)}>
            <Link
              className="rounded-md w-fit block bg-secondary-500 py-4 px-6 text-white"
              to="intern-application"
            >
              Begin Your Journey Now
            </Link>
          </motion.div>
        </div>

        <motion.picture
          variants={slideIn("rtl", "spring", 0.1, 1)}
          className="hidden md:block sm:[--left-right:150%] [--left-right:-150%]"
        >
          <img src={internHero} alt="Konectin Internship" />
        </motion.picture>
      </div>
    </section>
  );
}

export default SectionWrapper(Internship, "internship");
