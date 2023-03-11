import { recruitImage } from "../../../assets";
import { Link } from "react-router-dom";

function RecruiterSection({ data }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="md:hidden">
        <img src={recruitImage} className="mx-auto" alt="Konectin Recruiters" />
      </div>
      <div className="header--text">
        <h1 className="text-3xl mb-2">
          What{" "}
          <font className="text-secondary-600">Jobseekers & Recruiters</font>{" "}
          gain from us
        </h1>
        <p>
          We have created an healthy and transparent community of Jobseekers and
          Recruiters.
        </p>
      </div>
      <div className="flex flex-col gap-10 md:flex-row items-center justify-between">
        <div className="hidden md:w-4/12 md:block">
          <img src={recruitImage} alt="Konectin Recruiters" />
        </div>
        <div className="md:w-8/12 flex flex-col gap-6">
          <div className="grid grid-col sm:grid-cols-2 gap-6">
            {data?.map((item, index) => (
              <div
                key={index}
                className="flex w-full flex-col gap-3 text-start items-start justify-center"
              >
                <div className="w-10 h-10 bg-secondary-200 rounded-sm flex flex-col items-center justify-center">
                  <img src={item.logo} alt={item.title} />
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-xs">{item.paragraph}</p>
              </div>
            ))}
          </div>
          <div className="w-full xs:w-fit flex flex-col xxs:flex-row gap-2 xs:gap-4 xs:items-center xs:justify-between text-sm">
            <button className="px-8 py-2 bg-transparent flex gap-2 items-center justify-center text-black-500 border-primary-500 border rounded-md">
              Learn More
            </button>
            <Link
              to="/signup"
              className="px-8 py-2 bg-primary-500 text-white text-center rounded-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruiterSection;
