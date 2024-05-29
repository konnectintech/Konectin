import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  heroImage,
  heroImage1,
  heroImage2,
  heroImage3,
  highlighter,
} from "../../../assets";
import About from "../about";

const data = [
  {
    caption: "Empower",
    src: heroImage,
  },
  {
    caption: "Boost",
    src: heroImage1,
  },
  {
    caption: "Ignite",
    src: heroImage2,
  },
  {
    caption: "Advance",
    src: heroImage3,
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (prevIndex !== currentIndex) {
      setPrevIndex(currentIndex);
    }
  }, [currentIndex, prevIndex]);

  return (
    <div className="w-full lg:w-11/12 relative z-10 mx-auto max-w-screen-2xl flex flex-col bg-neutral-1000 md:bg-white md:flex-row md:justify-between gap-10 lg:gap-12 py-16 px-2 xxs:px-4 lg:px-0">
      <div className="space-y-2.5 md:space-y-16 flex-1">
        <div className="flex flex-col gap-y-2.5">
          <div className="flex relative flex-col gap-y-2.5 md:gap-y-5">
            <span className="absolute -top-4 -left-4">
              <img src={highlighter} width={39} height={43} alt="" />
            </span>
            <p className="font-extrabold text-3xl md:text-4xl md:h-28 leading-normal text-neutral-100 flex items-center justify-center bg-white rounded-lg border border-solid border-whites-100">
              {data.map((item, index) => (
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
        <Link
          to={About}
          className="bg-primary-500 text-white w-fit px-5 md:px-11 py-3.5 md:py-5 md:font-bold md:text-lg flex items-center justify-center rounded-md"
        >
          Learn More
        </Link>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className={`${
            index === currentIndex ? "flex" : "hidden"
          } items-center justify-center flex-1`}
        >
          <motion.img
            src={item.src}
            alt="Hero"
            className="w-[380px] h-[500px] md:w-[510px] md:h-[666px] aspect-auto"
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
