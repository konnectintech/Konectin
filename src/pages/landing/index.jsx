import { CustomButton } from "../../components/button";
import { Link } from "react-router-dom";
import {
  caseImage,
  googleIcon,
  heroImage,
  newsletterBg,
  recruitImage,
  sideImage,
} from "../../assets";
import { Blog, RecruitersGain } from "./data";

function Landing() {
  return (
    <div className="bg-primaryBg">
      <section className="w-11/12 mx-auto max-w-screen-2xl flex flex-col gap-16">
        {/* Hero section */}
        <div className="flex flex-col gap-10 md:flex-row items-center justify-between">
          <div className="flex w-full md:w-1/2 flex-col gap-6 items-center text-center md:text-start md:items-start justify-center">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-medium leading-tight">
              Take a step <br /> Closer to your <br /> dream{" "}
              <font className="text-primaryBtn">Job</font>
            </h1>
            <p className="max-w-md md:max-w-lg">
              Get matched easily with recruiters who see value in your
              experience amidst other great Career oppurtunities. We offer you
              the best possible start to your new Career...
            </p>
            <div className="w-48 md:w-60">
              <CustomButton primary>Get Started</CustomButton>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src={heroImage} alt="Get started with Konectin" />
          </div>
        </div>

        {/* Sign Up Prompt */}
        <div className="text-sm">
          <div className="border border-gray-400 rounded-lg p-3 xs:p-6 flex flex-col md:flex-row gap-3 xs:gap-6 items-center justify-between">
            <input
              className="w-full md:flex-1 bg-primaryBg border border-gray-400 px-4 xs:px-6 py-3 rounded-lg"
              type="text"
              placeholder="Enter your email address"
            />
            <div className="w-full xs:w-fit flex flex-col xxs:flex-row gap-2 xs:gap-6 items-center justify-center xs:justify-between">
              <button className="w-full xxs:w-fit px-4 xs:px-0 xs:w-32 py-3 bg-primaryBtn text-white text-center rounded-md">
                Sign Up
              </button>
              or
              <button className="w-full xxs:w-fit px-4 xs:px-0 xs:w-60 py-2 bg-transparent flex gap-2 items-center justify-center text-black-500 border-primaryBtn border rounded-md">
                <img src={googleIcon} alt="continue with google" /> Continue
                with Google
              </button>
            </div>
          </div>
          <div className="text-right mt-2">
            Have an account already?{" "}
            <Link to="/signin" className="text-primaryBtn">
              Login
            </Link>
          </div>
        </div>

        {/* Recruiters */}
        <div className="flex flex-col gap-8">
          <div className="md:hidden">
            <img
              src={recruitImage}
              className="mx-auto"
              alt="Konectin Recruiters"
            />
          </div>
          <div className="header--text">
            <h1 className="text-3xl mb-2">
              What{" "}
              <font className="text-primaryBtn">Jobseekers & Recruiters</font>{" "}
              gain from us
            </h1>
            <p>
              We have created an healthy and transparent community of Jobseekers
              and Recruiters.
            </p>
          </div>
          <div className="flex flex-col gap-10 md:flex-row items-center justify-between">
            <div className="hidden md:w-4/12 md:block">
              <img src={recruitImage} alt="Konectin Recruiters" />
            </div>
            <div className="md:w-8/12 flex flex-col gap-6">
              <div className="grid grid-col sm:grid-cols-2 gap-6">
                {RecruitersGain.map((item, index) => (
                  <div
                    key={index}
                    className="flex w-full flex-col gap-3 text-start items-start justify-center"
                  >
                    <div className="w-10 h-10 bg-secondaryBg rounded-sm flex flex-col items-center justify-center">
                      <img src={item.logo} alt={item.title} />
                    </div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-xs">{item.paragraph}</p>
                  </div>
                ))}
              </div>
              <div className="w-full xs:w-fit flex flex-col xxs:flex-row gap-2 xs:gap-4 items-center md:justify-center xs:justify-between text-sm">
                <button className="px-8 py-2 bg-transparent flex gap-2 items-center justify-center text-black-500 border-primaryBtn border rounded-md">
                  Learn More
                </button>
                <button className="px-8 py-2 bg-primaryBtn text-white text-center rounded-md">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About Us */}
        <div className="flex flex-col-reverse gap-10 md:flex-row items-center justify-between text-xm">
          <div className="flex w-full md:w-8/12 flex-col gap-6 md:gap-10 text-start items-start justify-center">
            <div className="header--text">
              <h1 className="text-3xl mb-2">
                About Our <font className="text-primaryBtn">Company</font>
              </h1>
              <p>A brief Introduction to Konectin.</p>
            </div>
            <p>
              At Konectin, We aim to create a friendly and transparent
              relationship between employers and employee. <br /> We guide job
              seekers on getting started in their careers at all levels, provide
              oppurtunities from internships to job openings, career talks,
              articles and blog posts. <br /> We also provide a comprehensive
              and user friendly resume builder to help you create that resume
              that will land you your dream job...
            </p>
            <button className="px-8 py-2 bg-transparent flex gap-2 items-center justify-center text-black-500 border-primaryBtn border rounded-md">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-4/12">
            <img
              src={sideImage}
              className="mx-auto"
              alt="Get started with Konectin"
            />
          </div>
        </div>

        {/* Konectin Blog */}
        <div className="flex flex-col gap-8 items-center">
          <div className="header--text text-center">
            <h1 className="text-3xl mb-2">
              <font className="text-primaryBtn">Konectin</font> Blog
            </h1>
            <p>
              Career talk, tips and advice, articles around the employment world
              and so much more.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Blog.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-xl flex flex-col gap-3 pb-4"
              >
                <img className="rounded-md" src={blog.image} alt={blog.title} />
                <div className="px-4 flex flex-col">
                  <h2 className="text-xl font-medium mb-3">{blog.title}</h2>
                  <div className="flex gap-2 items-center mt-auto">
                    <img
                      src={blog.info.bloggerImage}
                      alt={blog.info.bloggerName}
                    />
                    <small>{blog.info.bloggerName}</small>
                    <div className="w-2 h-2 rounded-xl bg-red-500"></div>
                    <small>{blog.info.date}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="px-8 py-2 bg-transparent flex gap-2 items-center justify-center text-black-500 border-primaryBtn border rounded-md">
            Learn More
          </button>
        </div>
      </section>

      {/* Map */}
      <section className="flex flex-col gap-6 mt-16">
        <div className="flex flex-col gap-8 items-center">
          <div className="w-10/12 mx-auto max-w-screen-lg text-center">
            <h1 className="text-3xl mb-2">
              What others have <font className="text-primaryBtn">gained</font>
            </h1>
            <p>
              Read all about how Konectin has impacted other job seekers,
              recruiters and helped them achieve their goals.
            </p>
          </div>
        </div>
        <img src={caseImage} alt="Map" />
      </section>

      {/* Newsletter */}
      <section className="relative w-11/12 xs:w-10/12 md:w-8/12 max-w-scrren-md h-screen mx-auto mt-16">
        <div className="absolute z-10 w-full left-1/2 h-[340px] -translate-x-1/2">
          <img className="w-full h-full" src={newsletterBg} alt="Newsletter" />
        </div>
        <div className="relative z-30 text-center pt-8 text-white px-4">
          <h1 className="text-lg xxs:text-2xl sm:text-3xl mb-3">
            Subscribe to our newsletter
          </h1>
          <p className="text-xs xxs:text-sm sm:text-md">
            Stay updated on our latest news. We promise only valuable mails and
            we will not spam you with irrelevant content.
          </p>
          <label
            htmlFor="newsletter"
            className="w-full xs:w-10/12 max-w-screen-md rounded-lg mx-auto flex gap-2 items-center justify-center pl-8 pr-4 py-3 bg-white mt-10"
          >
            <input
              id="newsletter"
              placeholder="Enter your email address"
              className="outline-0 border-0 xs:flex-1 text-secondaryBtn"
            />
            <button className="px-4 sm:px-8 py-2 bg-primaryBtn text-white text-center rounded-md">
              Subscribe
            </button>
          </label>
        </div>
      </section>
    </div>
  );
}

export default Landing;
