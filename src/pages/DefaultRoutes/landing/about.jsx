import { Link } from "react-router-dom";
import { sideImage } from "../../../assets";

function AboutSection() {
  return (
    <div className="flex flex-col-reverse gap-10 md:flex-row items-center justify-between text-xm">
      <div className="flex w-full md:w-8/12 flex-col gap-6 md:gap-10 text-start items-start justify-center">
        <div className="header--text">
          <h1 className="text-3xl mb-2">
            About Our <font className="text-secondary-600">Company</font>
          </h1>
          <p>A brief Introduction to Konectin.</p>
        </div>
        <p>
          At Konectin, we're dedicated to empowering you throughout your career
          journey. We provide a range of resources, including internships, job
          postings, career talks, and blog posts, to help you succeed. Plus, our
          user-friendly resume builder makes it easy to showcase your skills and
          experience. Join us today to take the first step towards your dream
          job!
        </p>
        <Link
          to="/about"
          className="px-8 py-2 bg-transparent flex gap-2 items-center justify-center text-black-500 border-primary-500 border rounded-md"
        >
          Learn More
        </Link>
      </div>
      <div className="w-full md:w-4/12">
        <img
          src={sideImage}
          className="mx-auto"
          alt="Get started with Konectin"
        />
      </div>
    </div>
  );
}

export default AboutSection;
