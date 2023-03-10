import { heroImage } from "../../../assets";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="flex flex-col gap-10 md:flex-row items-center justify-between">
      <div className="flex w-full md:w-1/2 flex-col gap-6 items-center text-center md:text-start md:items-start justify-center">
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-medium leading-tight">
          Take a step <br /> Closer to your <br />{" "}
          <font className="underdash">
            dream <font className="text-secondary-600">Job</font>
          </font>
        </h1>
        <p className="max-w-md md:max-w-lg">
          Get matched easily with recruiters who see value in your experience
          amidst other great Career oppurtunities. We offer you the best
          possible start to your new Career...
        </p>
        <div className="w-48 md:w-60">
          <Link
            to="/signup"
            className="block w-full py-2 bg-secondary-600 text-white text-center rounded-md"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={heroImage} alt="Get started with Konectin" />
      </div>
    </div>
  );
}

export default HeroSection;
