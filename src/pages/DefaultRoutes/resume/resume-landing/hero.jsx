import { Link } from "react-router-dom";
import { ResumeHeroImage } from "../../../../assets";
import { CustomButton } from "../../../../components/button";

function HeroSection() {
  return (
    <div className="bg-secondary-100 py-24 -translate-y-24">
      <div className="w-11/12 mx-auto max-w-screen-xl flex flex-col gap-10 md:flex-row items-center justify-between">
        <div className="flex w-full md:w-1/2 flex-col gap-6 items-center text-center md:text-start md:items-start justify-center">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight w-9/12 font-semibold md:leading-snug">
            Step up your job search with a Perfect Resume
          </h1>
          <p className="text-start text-neutral-300 max-w-md md:max-w-lg">
            Get matched easily with recruiters who see value in your experience
            amidst other great Career oppurtunities. We offer you the best
            possible start to your new Career...
          </p>
          <Link to="/signup" className="w-56 md:w-72">
            <CustomButton primary colorType="secondary">
              Sign up to get started
            </CustomButton>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img src={ResumeHeroImage} alt="build your resume" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
