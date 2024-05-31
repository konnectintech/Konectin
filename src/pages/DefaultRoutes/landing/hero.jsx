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
    <div className="w-full mx-auto max-w-screen-2xl flex flex-col bg-neutral-1000 md:flex-row md:justify-between gap-10 lg:gap-12 py-16 px-2 xxs:px-4 lg:px-16">
      <div className="space-y-2.5 md:space-y-16 md:w-7/12">
        <div className="flex flex-col gap-y-2.5">
          <div className="flex relative flex-col gap-y-2.5 md:gap-y-5">
            <span className="absolute -top-4 -left-4">
              <img src={highlighter} width={39} height={43} alt="" />
            </span>
            <p className="py-5 text-2xl sm:text-3xl whitespace-nowrap lg:text-4xl md:h-28 leading-normal font-extrabold text-neutral-100 flex items-center justify-center bg-white rounded-lg border border-solid border-whites-100 md:border-white">
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
                    duration: 0.5,
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
              Explore remarkable opportunities for growth 
            </p>
            <p className="text-neutral-300 text-sm md:text-base ">
              Join our vibrant community of students, professionals, and
              employers. At Konectin, we're reshaping how education and work
              come together, making it a rewarding journey for all.
            </p>
          </div>
        </div>
        <Link
          to="/signup"
          className="bg-primary-500 text-white w-fit px-5 md:px-11 py-3.5 md:py-5 md:font-bold md:text-lg flex items-center justify-center rounded-md"
        >
          Get Started!
        </Link>
      </div>

      <div className="flex items-center justify-center md:w-5/12">
        {data.map((item, index) =>
          index === currentIndex ? (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.0625, 0.125, 0.25, 0.5, 1] }}
              exit={{ opacity: [1, 0.5, 0.25, 0.125, 0.0625] }}
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 0.8,
              }}
            >
              <motion.img
                src={item.src}
                alt="Hero"
                className="h-[550px] aspect-[3/4]"
                width={1920}
                height={1080}
              />
            </motion.div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Hero;
