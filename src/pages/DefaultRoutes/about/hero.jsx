import { Link } from "react-router-dom";
import { AboutHeroImage } from "../../../assets";

function HeroSection() {
  return (
    <section className="bg-white py-24 -translate-y-24">
      <div className="w-11/12 min-h-[50vh] mx-auto max-w-screen-xl flex flex-col gap-10 md:flex-row items-center justify-between">
        <div className="flex w-full md:w-1/2 flex-col gap-6 items-center text-center md:text-start md:items-start justify-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl leading-tight font-semibold md:leading-snug">
              <font className="text-secondary-600">Our</font> Mission
            </h1>
            <p className="text-sm max-w-sm leading-normal">
              <font className="font-semibold mt-2 mb-4 block">
                Who says job hunting has to be a drag?
              </font>
              At Konectin, we are on a mission to create a platform that offers
              jobs, learning opportunities, internships and useful tips to
              professionals globally
            </p>
          </div>
          <Link
            to="/signup"
            className="w-fit py-2 px-8 bg-secondary-600 text-center rounded-sm"
          >
            Join Us
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img src={AboutHeroImage} alt="Get started with Konectin" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
