import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import * as FaIcon from "react-icons/fa";
import { discussionTopics } from "./data";
import { ContactUSImage } from "../../../assets";
import Preloader from "../../../components/preloader";
import { CiSearch } from "react-icons/ci";

function Contact() {
  const [mailing, setMailing] = useState({
    mail: "",
    topic: "",
  });
  const [topics, setTopics] = useState("");
  const [submitable, setSubmitable] = useState(false);
  const [loading, setLoading] = useState(false);

  const url = import.meta.env.VITE_CLIENT_SERVER_RENDER_URL;

  const checkSubmitable = useCallback(() => {
    if (mailing.mail && (mailing.topic || topics)) {
      setSubmitable(true);
    } else {
      setSubmitable(false);
    }
  }, [mailing, topics]);

  useEffect(() => {
    checkSubmitable();
  }, [mailing, topics, checkSubmitable]);

  const handleChange = (name, value) => {
    setMailing((prevMailing) => {
      const updatedMailing = { ...prevMailing, [name]: value };
      return updatedMailing;
    });
  };

  useEffect(() => {
    checkSubmitable();
  }, [mailing, topics, checkSubmitable]);

  const sendEmail = (e) => {
    e.preventDefault();
    let body = { ...mailing, message: mailing.message.trim() };

    if (topics !== "" && mailing.topic === "") {
      body = { ...mailing, topic: topics };
    }

    setLoading(true);
    // Call Endpoint
    axios
      .post(`${url}/contact`, { ...body })
      .then(() => {
        setMailing({
          mail: "",
          topic: "",
        });

        toast.success(
          "Mail has been sent successfully, we will get back to you shortly"
        );
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        toast.error("Error... Try again later");
        console.error(err);
      });
  };

  return (
    <>
      {loading && <Preloader />}
      <div className=" mt-[4.5rem] bg-primary-50 h-24 flex items-center justify-center px-4 md:px-8">
        <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
          <input
            type="text"
            placeholder="Search the help center"
            className="bg-primary-50 w-full h-10 md:h-16 outline-none rounded-[10px] pl-6 pr-12 border border-[#191A1F] placeholder:text-[#191A1F] text-[#191A1F] font-avenir"
          />
          <button>
            <CiSearch className="w-4 h-4 md:w-8 md:h-8 text-[#2F3437] absolute right-6 top-1/2 transform -translate-y-1/2" />
          </button>
        </div>
      </div>

      <div className=" pt-16 pb-28 bg-primary-700">
        <div className="w-11/12 mx-auto max-w-screen-2xl">
          <h1 className="text-2xl lg:text-5xl font-bold text-primary-100 mb-8">
            Contact us
          </h1>
          <p className="text-lg lg:text-xl text-primary-100 leading-custom-30">
            Get in Touch with Konectin Inc <br />
            We're always eager to hear from you. Whether you have a question,
            suggestion, or just want to share your experience <br /> with our
            platform, don't hesitate to reach out. We value your feedback and
            are committed to providing you with <br /> the best possible
            service.
          </p>
        </div>
      </div>

      <div className="flex justify-between pb-24 w-11/12 mx-auto max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row z-50 lg:w-[90%] mt-[-70px] justify-between gap-12">
          <div className="shadow-2xl bg-white z-50 p-8 lg:p-12 lg:max-w-[60%]">
            <form onSubmit={sendEmail} className="space-y-3">
              <h2 className="text-lg font-extrabold font-avenir">
                Please, provide your Email address
              </h2>
              <input
                className="p-4 py-3 lg:px-6 placeholder:text-sm placeholder:font-normal font-normal placeholder:text-neutral-300 w-full mt-3 outline-none rounded-lg border border-neutral-400"
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={(e) => handleChange("mail", e.target.value)}
                value={mailing.mail}
              />

              <h2 className="text-lg font-extrabold font-avenir">
                Kindly select a topic for discussion:
              </h2>
              <div className="flex gap-3 sm:gap-5 flex-wrap mx-7">
                {discussionTopics.map((topic) => (
                  <div
                    key={topic.name}
                    className={`${
                      mailing.topic.length >= 4
                        ? "text-neutral-700 pointer-events-none"
                        : topics === topic.name
                        ? "text-white bg-primary-600"
                        : topics === ""
                        ? "border-neutral-grey hover:bg-primary-300 hover:text-white"
                        : "text-neutral-700 pointer-events-none"
                    } font-medium font-avenir text-sm shadow-custom-full rounded-full py-[.65rem] px-5 duration-500 cursor-pointer`}
                    onClick={() =>
                      setTopics((prev) =>
                        prev === topic.name ? "" : topic.name
                      )
                    }
                  >
                    {topic.name}
                  </div>
                ))}
              </div>

              {!topics ? (
                <>
                  <h2 className="text-lg font-extrabold font-avenir mt-5">
                    Or simply state what you require help with
                  </h2>
                  <input
                    className="p-4 py-3 lg:px-6 placeholder:text-sm font-normal placeholder:text-neutral-300 w-full mt-3 outline-none rounded-lg border border-neutral-400"
                    type="text"
                    name="topic"
                    placeholder="Enter a topic like “Account setup” "
                    onChange={(e) => {
                      handleChange("topic", e.target.value);
                      setTopics("");
                    }}
                    value={mailing.topic}
                  />
                  {mailing.topic.length >= 1 && mailing.topic.length <= 4 && (
                    <span className="text-red-500 text-xs my-2 block">
                      Give a reasonable topic
                    </span>
                  )}
                </>
              ) : (
                <div className="space-y-1">
                  <h2 className="font-black">Helpful resources</h2>
                  {discussionTopics
                    .filter((topic) => topic.name === topics)
                    .map((topic) =>
                      topic.resources.map((res, i) => (
                        <Link
                          key={res.link + topic.name + i}
                          to={res.link}
                          className="py-1 text-secondary-500 text-xs block"
                        >
                          {res.summary} -
                        </Link>
                      ))
                    )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center pt-2">
                <button
                  disabled={!submitable}
                  className={`${
                    submitable ? "hover:text-white hover:bg-primary-600" : null
                  } py-4 px-5 bg-neutral-900 text-neutral-400 font-medium text-xs rounded duration-500`}
                  type="submit"
                >
                  SEND US A MESSAGE
                </button>
                <p className="text-neutral-300 text-xs text-center">or</p>
                <a
                  href="https://wa.link/jbbtji"
                  target="_blank"
                  rel="noreferrer"
                  className="py-4 px-5 border-primary-600 hover:text-white hover:bg-primary-600 border text-xs rounded duration-500 text-center"
                >
                  START A LIVE CHAT
                </a>
              </div>
            </form>

            <div className="space-y-2">
              <h2 className="text-lg font-black mt-4">
                Contact us via email or social media for further assistance.
              </h2>
              <div className="w-full text-center text-primary-600 md:flex justify-between items-center">
                <div className="flex gap-4 items-center justify-center mb-6 md:mb-0">
                  <a
                    href="http://www.twitter.com/KonectinInc"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary-500"
                  >
                    <FaIcon.FaTwitter size="1.1rem" />
                  </a>
                  <a
                    href="https://web.facebook.com/people/Konectin-Inc/100091305090654/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary-500"
                  >
                    <FaIcon.FaFacebookF size="1rem" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/konectin/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary-500"
                  >
                    <FaIcon.FaLinkedinIn size="1rem" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-lg:hidden">
            <img src={ContactUSImage} alt="Contact us page" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
