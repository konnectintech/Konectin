import useMeasure from "react-use-measure";
import { person1, person2, person3, person4 } from "../../../assets";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const data = [
    {
      src: person1,
      name: "Chimwe Obi",
      job: "Fullstack Developer",
      review:
        "Konectin was a game-changer for me. The intuitive resume builder and AI-powered suggestions helped me highlight my strengths in unique ways. I landed my dream job at a top tech company within weeks of using Konectin. Highly recommended.",
    },
    {
      src: person2,
      name: "Kwame Mensah",
      job: "Fullstack Developer",
      review:
        "I was struggling with my job search until I discovered Konectin. The platform is easy to use, and the templates are professional and customizable. I created a standout resume and cover letter, and I got a job offer from a leading marketing firm. Thank you, Konectin.",
    },
    {
      src: person3,
      name: "Amina Yusuf",
      job: "Fullstack Developer",
      review:
        "Konectin made the daunting task of resume and cover letter creation a breeze. The real-time editing feature and the ability to import information from LinkedIn saved me so much time. I secured a job at a prestigious financial institution thanks to Konectin. It's a must-use platform for job seekers!",
    },
    {
      src: person4,
      name: "Hudson Oboh",
      job: "Fullstack Developer",
      review:
        "Konectin made the daunting task of resume and cover letter creation a breeze. The real-time editing feature and the ability to import information from LinkedIn saved me so much time. I secured a job at a prestigious financial institution thanks to Konectin. It's a must-use platform for job seekers!",
    },
  ];

  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTranslation1 = useMotionValue(0);
  const xTranslation2 = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls1, controls2;
    let finalPosition1 = -width / 2 - 4;
    let finalPosition2 = width / 2 + 4;

    if (mustFinish) {
      controls1 = animate(
        xTranslation1,
        [xTranslation1.get(), finalPosition1],
        {
          ease: "linear",
          duration: duration * (1 - xTranslation1.get() / finalPosition1),
          onComplete: () => {
            setMustFinish(false);
            setRerender(!rerender);
          },
        }
      );
      controls2 = animate(
        xTranslation2,
        [xTranslation2.get(), -finalPosition2],
        {
          ease: "linear",
          duration: duration * (1 - xTranslation2.get() / -finalPosition1),
          onComplete: () => {
            setMustFinish(false);
            setRerender(!rerender);
          },
        }
      );
    } else {
      controls1 = animate(xTranslation1, [0, finalPosition1], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
      controls2 = animate(xTranslation2, [0, -finalPosition2], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return () => {
      controls1?.stop();
      controls2?.stop();
    };
  }, [xTranslation1, xTranslation2, width, duration, mustFinish, rerender]);

  return (
    <div className="flex flex-col gap-24 py-16 px-6 md:p-28">
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="hidden md:block text-secondary-500 font-medium text-lg">
          Success Stories from Our Users
        </p>
        <div className="flex flex-col md:items-center justify-center gap-1 md:gap-2">
          <p className="md:hidden font-extrabold text-3xl leading-10">
            Our Testimonials
          </p>
          <p className="hidden md:block text-5xl font-bold">
            Real Stories from Real People
          </p>
          <p className="md:hidden text-neutral-200">
            Nothing speaks louder than success. Hear from our users who have
            transformed their career journey with Konectin. From crafting
            compelling resumes to landing their dream jobs, their stories are
            sure to inspire you.
          </p>
          <p className="hidden md:block text-center text-xl w-[76ch]">
            Explore the inspiring journeys of job seekers and recruiters who
            have benefitted from Konectin's innovative solution. .
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7 md:hidden">
        {data.map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-11 -mx-28">
        <motion.div
          className="hidden md:flex gap-8"
          ref={ref}
          style={{ x: xTranslation1 }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...data, ...data].map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </motion.div>
        <motion.div
          className="hidden md:flex gap-8"
          ref={ref}
          style={{ x: xTranslation2 }}
          onHoverStart={() => setDuration(SLOW_DURATION)}
          onHoverEnd={() => setDuration(FAST_DURATION)}
        >
          {[...data, ...data].map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function TestimonialCard({ item }) {
  return (
    <motion.div className="relative flex flex-col md:flex-row md:px-9 md:py-10 md:w-[850px]  md:h-52 bg-neutral-900 gap-4 md:gap-6 rounded-lg md:rounded items-center justify-center hover:bg-neutral-700 hover:shadow-xl">
      <div className="md:w-[500px] md:grow md:order-3 h-full flex items-center justify-center px-6 py-7">
        <p className="text-sm md:text-base font-medium text-neutral-300 hover:text-neutral-100">
          {item.review}
        </p>
      </div>

      <div className="hidden md:flex md:order-2 h-full border-l-2 border-solid border-neutral-700 hover:border-neutral-600"></div>
      <div className="h-full md:w-72 md:p-0 border-t border-solid border-neutral-700 md:border-t-0 rounded-b-lg md:rounded-sm w-full flex  items-center md:justify-center bg-whites-200 px-8 py-7 hover:bg-neutral-900">
        <div className="flex items-center gap-2.5">
          <img
            className="w-12 h-12 rounded-md md:w-14 md:h-14 md:rounded-lg"
            src={item.src}
            alt={item.name}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <div className="md:order-1 flex flex-col w-full">
            <p className="font-bold md:text-lg whitespace-nowrap">
              {item.name}
            </p>
            <p className="text-sm md:text-base whitespace-nowrap">{item.job}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
