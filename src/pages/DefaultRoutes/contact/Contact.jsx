import { useState } from "react";
import * as FaIcon from "react-icons/fa";
import img from "../../../assets/images/contact-us-img.png"

function Contact() {
  const [topicsCLicked, SetTopicsCLicked] = useState(false);
  const handleTopicClicked = () => {
    SetTopicsCLicked(!topicsCLicked);
  };

  return (
    <div>
      <div className=" mt-20 pt-16 pb-40 px-24 bg-primary-700 ">
        <h1 className=" font-[Merriweather] text-6xl font-bold text-primary-100 mb-2">
          Contact US{" "}
        </h1>
        <p className="font-[Avenir] font-bold text-2xl text-primary-100 ">
          Requests, error reports, suggestions, and questions. - we’re here to
          assist.
        </p>
      </div>
      <div className="flex justify-center pb-24 ">
        <div className="grid grid-cols-1 z-50 lg:grid-cols-2 w-[90%] mt-[-70px] justify-between gap-6 lg:gap-1 ">
          <div className="shadow-2xl bg-white z-50  p-16">
            <p className="font-[Avenir] text-lg font-black">
              Kindly select a topic for discussion:
            </p>
            <div className="py-4 flex gap-4 mb-2 flex-wrap">
              <button
                className={
                  topicsCLicked
                    ? `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 opacity-25`
                    : `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 `
                }
                onClick={handleTopicClicked}
              >
                Account setup
              </button>
              <button
                className={
                  topicsCLicked
                    ? `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 opacity-25`
                    : `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 `
                }
                onClick={handleTopicClicked}
              >
                Job search
              </button>
              <button
                className={
                  topicsCLicked
                    ? `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 opacity-25`
                    : `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 `
                }
                onClick={handleTopicClicked}
              >
                Resume building
              </button>
              <button
                className={
                  topicsCLicked
                    ? `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 opacity-25`
                    : `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 `
                }
                onClick={handleTopicClicked}
              >
                Profile optimization
              </button>
              <button
                className={
                  topicsCLicked
                    ? `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 opacity-25`
                    : `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 `
                }
                onClick={handleTopicClicked}
              >
                Job application status
              </button>
              <button
                className={
                  topicsCLicked
                    ? `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 opacity-25`
                    : `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 `
                }
                onClick={handleTopicClicked}
              >
                Interview preparation
              </button>
              <button
                className={
                  topicsCLicked
                    ? `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 opacity-25 `
                    : `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 `
                }
                onClick={handleTopicClicked}
              >
                Networking
              </button>
              <button
                className={
                  topicsCLicked
                    ? `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4 opacity-25 `
                    : `border-neutral-grey font-medium text-sm border rounded-full py-[.65rem] px-4`
                }
                onClick={handleTopicClicked}
                
              >
                Career advice
              </button>
            </div>

            <h2 className="font-[Avenir] text-lg font-black">
              Or simply state what you require help with
            </h2>
            <input
              className="py-3 px-8 placeholder:text-sm font-normal  w-full mt-4 outline-none rounded border "
              type="text"
              placeholder="Enter a topic like “Account setup” "
            />

            {topicsCLicked && (
              <div className=" font-[Avenir] py-8 ">
                <h2 className="font-black">Helpful resources</h2>
                <button className=" py-1 text-secondary-500 text-sm block ">
                  Tips for job search success -
                </button>
                <button className=" py-1 text-secondary-500 text-sm block ">
                  Creating a winning resume -
                </button>
                <button className=" py-1 text-secondary-500 text-sm block ">
                  Strategies for networking -
                </button>
                <button className=" py-1 text-secondary-500 text-sm block ">
                  Troubleshooting common account issues -
                </button>
              </div>
            )}

            {topicsCLicked && (
              <>
                <h2 className="font-[Avenir] text-lg font-black">
                  Kindly provide us with additional information to assist you better
                </h2>
                <input
                  className="py-3 px-8 placeholder:text-sm font-normal  w-full mt-4 outline-none rounded border "
                  type="text"
                  placeholder="Enter a topic like “resume upgrade”"
                />
              </>
            )}

            {topicsCLicked && (
              <div>
                <h1 className="my-4">Attach files (optional)</h1>
                <div className="flex justify-center items-center p-12 rounded-md border-dashed border-2 border-primary-300 mb-4 ">
                  <input type="file" name="" id="" />
                </div>
              </div>
            )}

            <section className="flex flex-col md:flex-row justify-between items-center w-3/4 md:w-1/2 lg:w-[65%] mt-4  font-[Avenir]">
              <button className="py-3 px-5 bg-neutral-900 text-sm ">
                SEND US A MESSAGE
              </button>
              <h2>or</h2>
              <button className="py-3 px-5 border-primary-600 border text-sm">
                START A LIVE CHAT
              </button>
            </section>

            <h2 className="font-[Avenir] text-lg font-black mt-4">
              Contact us via email or social media for further assistance.
            </h2> 
            <div className="w-full text-center text-primary-600 pb-10 md:py-6 md:flex justify-between items-center ">
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
          <div className=" flex items-center md:items-start justify-center w-full">
            <img src={img} alt="Group of people" className="h-[200px] w-[200px] md:h-[400px] md:w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
