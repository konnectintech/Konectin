import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import { reviewHero } from "../../../../assets";
import { CustomButton } from "../../../../components/button";

function Hero() {
  return (
    <section className="bg-neutral-1000 w-full mx-auto max-w-screen-2xl flex flex-col md:flex-row md:justify-between md:items-center gap-10 py-14 px-2 xxs:px-4 lg:px-16">
      <div className="space-y-2.5 flex flex-col gap-8 md:gap-0 md:space-y-16 md:w-1/2">
        <div className="flex flex-col gap-y-2.5">
          <div className="flex relative flex-col gap-y-2.5 md:gap-y-5">
            <p className="text-center md:text-left text-3xl sm:text-4xl lg:text-5xl leading-normal font-bold text-neutral-100">
              Get Past{" "}
              <span className="text-primary-400">
                Applicant Tracking Systems (ATS)
              </span>{" "}
              And Land An Interview Fast
            </p>

            <p className="text-center md:text-left text-neutral-300 text-sm md:text-base ">
              Is your résumé not good enough? Our résumé review service can help
              turn your résumé into an interview magnet. We provide personalized
              feedback ensuring your resume stands out and accurately reflects
              your skills. Seize your opportunities; get interview-ready with us
              today!
            </p>
          </div>
        </div>
        <Link
          to="/services/resume/review"
          className="max-md:mx-auto md:w-72 block"
        >
          <CustomButton primary colorType="primary">
            Review Your Resume Now
          </CustomButton>
        </Link>
      </div>

      <div className="flex items-center justify-center md:w-7/12">
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
