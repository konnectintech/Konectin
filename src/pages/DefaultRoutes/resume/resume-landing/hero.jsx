import { Link } from "react-router-dom";
import { ResumeHeroImage } from "../../../../assets";
import { CustomButton } from "../../../../components/button";

function HeroSection() {
  return (
    <div className="bg-secondary-100 pb-24 pt-28 -translate-y-28">
      <div className="w-11/12 mx-auto max-w-screen-lg flex flex-col gap-10 md:flex-row items-center justify-between">
        <div className="flex w-full md:w-1/2 flex-col gap-6 items-center text-center md:text-start md:items-start justify-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight w-9/12 font-semibold md:leading-snug">
            Step up your job search with a Perfect Resume
          </h1>
          <p className="text-start text-neutral-300 max-w-md md:max-w-lg">
            Stand out from the crowd and build an exquisite resume that gets you
            the attention of world-class recruiters.
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
