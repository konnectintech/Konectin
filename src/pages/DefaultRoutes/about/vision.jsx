import { Link } from "react-router-dom";
import { OurVisionImage } from "../../../assets";

function Vision() {
  return (
    <section className="bg-primary-500 py-24">
      <div className="w-11/12 min-h-[50vh] mx-auto max-w-screen-xl flex flex-col gap-10 md:flex-row items-center justify-between">
        <div className="flex w-full md:w-1/2 flex-col gap-6 items-center text-center text-white md:text-start md:items-start justify-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl leading-tight font-semibold md:leading-snug">
              Our <font className="text-secondary-600">Vision</font>
            </h1>
            <p className="text-sm max-w-md leading-normal">
              At Konectin, we believe in a world where everyone can find their
              dream career and unlock their full potential. Our vision is to to
              provide a platform that would connect recruiters and job seekers.
            </p>
          </div>
          <Link
            to="/signup"
            className="w-fit py-2 px-8 bg-white text-primary-600  text-center rounded-sm"
          >
            Join Us
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img src={OurVisionImage} alt="Get started with Konectin" />
        </div>
      </div>
    </section>
  );
}

export default Vision;
