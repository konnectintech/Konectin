import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import { reviewHero } from "../../../../../assets";

function Hero() {
  return (
    <section className="bg-neutral-1000 w-full mx-auto max-w-screen-2xl flex flex-col md:flex-row md:justify-between gap-10 lg:gap-12 py-16 px-2 xxs:px-4 lg:px-16">
      <div className="space-y-2.5 md:space-y-16 md:w-7/12">
        <div className="flex flex-col gap-y-2.5">
          <div className="flex relative flex-col gap-y-2.5 md:gap-y-5">
            <p className="text-2xl sm:text-3xl lg:text-4xl leading-normal font-bold text-neutral-100">
              Get past{" "}
              <span className="text-primary-400">
                Applicant Tracking Systems (ATS)
              </span>{" "}
              and land an Interview fast
            </p>
            <p className="text-xl md:text-2xl md:font-bold leading-8">
              Explore remarkable opportunities for growth 
            </p>
            <p className="text-neutral-300 text-sm md:text-base ">
              Is your résumé not good enough? Our résumé review service can help
              turn your résumé into an interview magnet. We provide personalized
              feedback ensuring your resume stands out and accurately reflects
              your skills. Seize your opportunities; get interview-ready with us
              today!
            </p>
          </div>
        </div>
        <Link
          to="/signup"
          className="bg-primary-500 text-white w-fit px-5 md:px-11 py-3.5 md:py-5 md:font-bold md:text-lg flex items-center justify-center rounded-md"
        >
          Review your resume now
        </Link>
      </div>

      <div className="flex items-center justify-center md:w-5/12">
        <div className="flex items-center justify-center">
          <img
            src={reviewHero}
            alt="Hero"
            className="h-[550px] aspect-[3/4]"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
