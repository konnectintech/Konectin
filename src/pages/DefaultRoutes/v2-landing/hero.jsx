import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { hero_0, hero_1, hero_2, hero_3, headline_bg } from "../../../assets";
import About from "../about";

const heroData = [
  {
    caption: "Unleash",
    src: hero_0,
  },
  {
    caption: "Discover",
    src: hero_1,
  },
  {
    caption: "Ignite",
    src: hero_2,
  },
  {
    caption: "Harness",
    src: hero_3,
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [animateState, cycleAnimation] = useCycle("idle", "animate");
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (prevIndex !== currentIndex) {
      setPrevIndex(currentIndex);
    }
  }, [currentIndex, prevIndex]);

  return (
    <div className="p-6 md:px-20 flex gap-y-12 flex-col bg-neutral-1000 md:bg-white md:flex-row md:justify-between md:bg-hero md:bg-[length:90%_70%] md:bg-no-repeat">
      <div className="flex flex-col gap-y-2.5 md:gap-y-16 md:w-1/2">
        <div className="flex flex-col gap-y-2.5 ">
          <div className="flex relative flex-col gap-y-2.5 md:gap-y-5">
            <span className="absolute -top-4 -left-4">
              <img src={headline_bg} width={39} height={43} alt="" />
            </span>
            <p className="font-extrabold text-3xl md:text-4xl md:h-28 leading-normal text-neutral-100 flex items-center justify-center p-3.5 bg-white rounded-lg border border-solid border-off_white">
              {heroData.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 35, display: "none" }}
                  animate={
                    currentIndex === index
                      ? { y: 0, opacity: 1, display: "flex" }
                      : { y: 35, opacity: 0 }
                  }
                  exit={{ y: [0, 8.75, 17.5, 35], display: "none" }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.4,
                  }}
                  className={`${
                    index === currentIndex ? "block" : "hidden"
                  } odd:text-primary-400 even:text-secondary-400 `}
                >
                  {item.caption}
                </motion.span>
              ))}
              &nbsp;Your Career
            </p>
            <p className="text-xl md:text-2xl md:font-bold leading-8">
              Discover transformative solutions for growth
            </p>
            <p className="text-neutral-300 text-sm md:text-base md:-mt-1">
              Join the ever-expanding community of students, professionals, and
              employers leveraging Konectin's innovative platform. We're
              revolutionizing the way education and employment intersect,
              creating a seamless and enriching journey for all.
            </p>
          </div>
        </div>
        <Link to={About} className="bg-primary-500 text-white w-fit px-5 md:px-11 py-3.5 md:py-5 md:font-bold md:text-lg flex items-center justify-center rounded-md">
          Learn More
        </Link>
      </div>

      {heroData.map((item, index) => (
        <div
          key={index}
          className={`${
            index === currentIndex ? "flex" : "hidden"
          } items-center justify-center`}
        >
          <motion.img
            src={item.src}
            alt="Hero"
            className="w-[380px] h-[500px] md:w-[510px] md:h-[666px]"
            width={1920}
            height={1080}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.25, 0.5, 0.75, 1], scale: 1 }}
            exit={{ opacity: [1, 0.75, 0.5, 0.25, 0], scale: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.8,
              delay: 0.4,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Hero;
