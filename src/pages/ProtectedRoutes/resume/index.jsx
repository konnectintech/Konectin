import { CustomButton, ResumeButton } from "../../../components/button";
import { Link } from "react-router-dom";
import {
  ResumeCTAImage,
  ResumeHeroImage,
  ResumeTemplateSampleImage,
  ResumeTemplateSample1Image,
  card3Image,
} from "../../../assets";
import { useEffect, useState } from "react";
import { FAQ, ResumeReview, SliderData } from "./resumeData";
import { FaStar } from "react-icons/fa";

function ResumeBuilder() {
  const [currentTemplate, setTemplate] = useState(0);
  const [isOpen, setOpen] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setTemplate((prev) => (prev < SliderData.length - 1 ? prev + 1 : 0));
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTemplate]);

  const handleFAQ = (index) => {
    setOpen((prev) => (prev === index ? null : index));
  };

  return (
    <main className="flex flex-col gap-2 bg-neutral-1000 text-neutral-100 relative">
      {/* Hero section */}
      <div className="bg-secondary-100 py-24 -translate-y-24">
        <div className="w-11/12 mx-auto max-w-screen-xl flex flex-col gap-10 md:flex-row items-center justify-between">
          <div className="flex w-full md:w-1/2 flex-col gap-6 items-center text-center md:text-start md:items-start justify-center">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight w-9/12 font-semibold md:leading-snug">
              Step up your job search with a Perfect Resume
            </h1>
            <p className="text-start text-neutral-300 max-w-md md:max-w-lg">
              Get matched easily with recruiters who see value in your
              experience amidst other great Career oppurtunities. We offer you
              the best possible start to your new Career...
            </p>
            <Link to="/signup" className="w-56 md:w-72">
              <CustomButton primary>Sign up to get started</CustomButton>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <img src={ResumeHeroImage} alt="build your resume" />
          </div>
        </div>
      </div>

      <section className="w-11/12 mx-auto max-w-screen-xl flex flex-col gap-16">
        {/* Resume Slider */}
        <div className="flex flex-col gap-12">
          <div className="flex items-center justify-between text-center gap-2 w-full max-w-screen-lg mx-auto">
            {SliderData.map((template, index) => (
              <div
                key={index}
                onClick={() => setTemplate(index)}
                className={`${
                  currentTemplate === index
                    ? "text-primary-400"
                    : "text-neutral-300"
                } w-[60%] cursor-pointer flex flex-col gap-1
              `}
                aria-current={currentTemplate === index ? "page" : undefined}
              >
                <h4 className="text-xs font-medium">{template.type}</h4>
                <small
                  className={
                    currentTemplate === index
                      ? "small w-[130px] sm:w-[150px]"
                      : "small w-[100px] sm:w-[130px]"
                  }
                >
                  {template.title}
                </small>
                <div
                  className={`
                  ${
                    currentTemplate === index
                      ? "w-3/4 bg-secondary-600"
                      : "w-7/12 bg-neutral-300"
                  }
                  mx-auto h-[1px] mt-2
                  `}
                ></div>
              </div>
            ))}
          </div>

          {SliderData.map((template, index) => (
            <div
              key={index}
              className={
                currentTemplate === index
                  ? "flex flex-col gap-8 md:flex-row md:justify-between md:items-center lg:justify-center"
                  : "hidden"
              }
            >
              <img
                className="w-3/4 md:w-1/2 lg:max-w-xl mr-auto lg:mx-0"
                src={template.image}
                alt={template.type}
              />

              <div className="flex flex-col gap-8">
                <h1 className="text-2xl font-semibold md:text-3xl md:leading-relaxed lg:text-4xl max-w-md">
                  {template.title}
                </h1>

                <p className="w-9/12 text-neutral-300">{template.body}</p>

                <ResumeButton />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-cta p-8 md:p-16 relative my-16">
        <div className="absolute left-0 top-0 w-full h-full">
          <img
            src={ResumeCTAImage}
            className="w-full h-full"
            alt="There's a great power in words, if you don't hitch too many of them
          together."
          />
        </div>
        <p className="relative z-10 w-3/4 mx-auto text-center space-y-3 text-white md:text-xl md:font-semibold">
          <q>
            There's a great power in words, if you don't hitch too many of them
            together.
          </q>
          <cite className="block">Josh Billings.</cite>
        </p>
      </section>

      {/* Choose from our professional template */}
      <section className="w-11/12 mx-auto max-w-screen-2xl flex flex-col gap-16">
        <div className="flex flex-col gap-10 md:flex-row items-center justify-between text-xm">
          <div className="flex w-full md:w-8/12 flex-col gap-4 md:gap-6 text-start items-start justify-center">
            <h1 className="text-2xl font-semibold md:text-3xl md:leading-relaxed">
              Choose from our professional template
            </h1>
            <p className="w-10/12 text-neutral-300">
              At konectin, we believe that first impresions matter, that’s why
              we make sure you put your best foot forward with eye-catching
              resume designs that stand out from the rest.
            </p>
            <ResumeButton />
          </div>
          <div className="w-full md:w-4/12 flex gap-4 overflow-hidden">
            <img
              src={ResumeTemplateSampleImage}
              className="mx-auto"
              alt="Get started with Konectin"
            />
            <img
              src={ResumeTemplateSample1Image}
              className="mx-auto"
              alt="Get started with Konectin"
            />
          </div>
        </div>

        {/* Follow useful tips from industry experts */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          <div className="w-3/4 md:w-full">
            <img src={card3Image} alt="useful tips" />
          </div>
          <div className="flex flex-col gap-4 w-11/12">
            <h1 className="text-2xl font-semibold mb-2 md:text-3xl md:leading-relaxed">
              Follow useful tips from industry experts
            </h1>
            <p className="text-neutral-300">
              At konectin, we believe that first impresions matter, that’s why
              we make sure you put your best foot forward with eye-catching
              resume designs that stand out from the rest
            </p>
            <ResumeButton />
          </div>
        </div>

        {/* Follow useful tips from industry experts */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold mb-2 md:text-3xl leading-relaxed">
            Loved & used by individuals <br /> across the globe.
          </h1>
          <div className="flex flex-col gap-2">
            <div className="grid sm:grid-cols-2 bg-white md:grid-cols-3 md:bg-neutral-1000 lg:grid-cols-4 lg:bg-white gap-2 shadow-lg">
              {ResumeReview.map((review, index) => (
                <div
                  className="flex flex-col justify-between gap-4 bg-neutral-1000 px-4 py-6"
                  key={index}
                >
                  <div className="justify-self-start flex items-center gap-1">
                    <FaStar color="#FBB040" size=".8rem" />
                    <FaStar color="#FBB040" size=".8rem" />
                    <FaStar color="#FBB040" size=".8rem" />
                    <FaStar color="#FBB040" size=".8rem" />
                    <FaStar color="#FBB040" size=".8rem" />
                  </div>
                  <p className="justify-self-center text-sm w-11/12">
                    {review.text}
                  </p>
                  <div className="justify-self-end flex items-center gap-4">
                    <img src={review.image} alt={review.name} />
                    <div className="flex flex-col text-sm">
                      <b>{review.name}</b>
                      <small className="text-neutral-300">
                        {review.location}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <small className="w-3/4 mt-3 text-neutral-200">
              Give us a Call 1-888-111-2222 and we can set you up, or{" "}
              <Link className="text-secondary-600 underline" to="/">
                check our pricing plans
              </Link>
            </small>
          </div>
        </div>

        {/* Konectin Resume */}
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-semibold mb-2 md:text-3xl md:leading-relaxed">
            <font className="text-secondary-600">Konectin</font> Resume Builder
            FAQ
          </h1>
          <div className="flex flex-col justify-stretch gap-8">
            {FAQ.map((accordion, index) => (
              <div
                className="flex gap-2 items-start border-red-600"
                onClick={() => handleFAQ(index)}
                key={index}
              >
                <div className="w-5 h-5 cursor-pointer rounded-sm flex items-center justify-center text-center border-2 border-black text-xl font-semibold px-2">
                  {isOpen !== index ? "+" : "-"}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="cursor-pointer select-none text-md font-semibold">
                    {accordion.question}?
                  </div>
                  {isOpen === index && (
                    <div className="text-sm w-[80%]">{accordion.answer}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ResumeBuilder;
