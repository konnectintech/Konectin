import { Link } from "react-router-dom";
import img from "../../../../assets/images/bot/bot.svg";

function StartedBuilding({ isLogged, name }) {
  return (
    <div className="flex flex-col items-center lg:w-3/4 px-12 lg:px-32 text-center">
      <img src={img} alt="bot__image" width={180} height={180} />

      <h2 className="py-4 font-bold text-2xl md:text-4xl !leading-normal">
        Hello {isLogged && name}! Welcome back to our
        <span className="text-secondary-500"> AI-powered</span> Cover Letter
        Builder
      </h2>
      <span>
        Let's create a cover letter that makes you stand out. Ready to get
        started?
      </span>
      <Link
        to={`/cover-letter/job-details`}
        className="text-white rounded-lg bg-primary-600 py-3 px-16 mt-6"
      >
        Get Started
      </Link>
      <span className="mt-6">
        I want to build a resume{" "}
        <Link to={`/resume/options`} className="text-secondary-500">
          Resume Builder
        </Link>
      </span>
    </div>
  );
}

export default StartedBuilding;
