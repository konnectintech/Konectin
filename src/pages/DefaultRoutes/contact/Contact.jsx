import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as FaIcon from "react-icons/fa";
import img from "../../../assets/images/Group 48095546.png";
import { Link } from "react-router-dom";


function Contact() {
  const [topicsCLicked, SetTopicsCLicked] = useState(false);

  const handleTopicClicked = (e) => {
    e.preventDefault();
    SetTopicsCLicked(true);
  };

  // YUP VALIDATION
  const validationSchema = Yup.object({
    topic: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    message: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      topic: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
    },
    validationSchema,
  });

  const form = useRef();
  const sendEmail = (e) => {
    var isEmpty = Object.getOwnPropertyNames(formik.errors).length === 0;
    e.preventDefault();
    if (
      formik.values.topic &&
      formik.values.email &&
      formik.values.message &&
      isEmpty
    ) {

      emailjs.sendForm(
          "service_pxhna2k",
          "template_jrgtxtl",
          form.current,
          "02ug9Lx-dB3lcnHWp")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    formik.handleSubmit();
  };

  // Dynamic Styling for topics Btn
  const topicsBtnStyle = topicsCLicked
    ? `border-neutral-grey font-medium text-xs border rounded-full py-[.65rem] px-4 opacity-25`
    : `border-neutral-grey font-medium text-xs border rounded-full py-[.65rem] px-4 `;

  return (
    <div>
      <div className=" mt-20 pt-16 pb-40 px-16 lg:px-24 bg-primary-700 ">
        <h1 className="text-3xl lg:text-6xl font-bold text-primary-100 mb-2">
          Contact US
        </h1>
        <p className="font-bold text-lg lg:text-2xl text-primary-100 ">
          Requests, error reports, suggestions, and questions. - we’re here to
          assist.
        </p>
      </div>
      <div className="flex justify-center pb-24 ">
        <div className="grid grid-cols-1 z-50 lg:grid-cols-2 w-[90%] mt-[-70px] justify-between gap-6 lg:gap-1 ">
          <div className="shadow-2xl bg-white z-50 p-8 lg:p-14">
            <h2 className="text-lg font-black">
              Kindly select a topic for discussion:
            </h2>
            <div className="py-4 flex gap-1 lg:gap-4 mb-2 flex-wrap">
              <button className={topicsBtnStyle} onClick={handleTopicClicked}>
                Account setup
              </button>
              <button className={topicsBtnStyle} onClick={handleTopicClicked}>
                Job search
              </button>
              <button className={topicsBtnStyle} onClick={handleTopicClicked}>
                Resume building
              </button>
              <button className={topicsBtnStyle} onClick={handleTopicClicked}>
                Profile optimization
              </button>
              <button className={topicsBtnStyle} onClick={handleTopicClicked}>
                Job application status
              </button>
              <button className={topicsBtnStyle} onClick={handleTopicClicked}>
                Interview preparation
              </button>
              <button className={topicsBtnStyle} onClick={handleTopicClicked}>
                Networking
              </button>
              <button className={topicsBtnStyle} onClick={handleTopicClicked}>
                Career advice
              </button>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <h2 className="text-lg font-black">
                Or simply state what you require help with
              </h2>
              <input
                className="p-4 py-3 lg:px-8 text placeholder:text-xs font-normal  w-full mt-4 outline-none rounded border "
                type="text"
                name="topic"
                placeholder="Enter a topic like “Account setup” "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.topic}
              />
              {formik.errors.topic && formik.touched.topic ? (
                <h1 className="text-red-500 text-base my-2 font-bold">
                  {formik.errors.topic}
                </h1>
              ) : null}

              {topicsCLicked && (
                <div className=" py-8 ">
                  <h2 className="font-black">Helpful resources</h2>
                  <Link
                    to="/faq"
                    className=" py-1 text-secondary-500 text-xs block "
                  >
                    Tips for job search success -
                  </Link>
                  <Link
                    to="/faq"
                    className=" py-1 text-secondary-500 text-xs block "
                  >
                    Creating a winning resume -
                  </Link>
                  <Link
                    to="/faq"
                    className=" py-1 text-secondary-500 text-xs block "
                  >
                    Strategies for networking -
                  </Link>
                  <Link
                    to="/faq"
                    className=" py-1 text-secondary-500 text-xs block "
                  >
                    Troubleshooting common account issues -
                  </Link>
                </div>
              )}

              <>
                <h2 className="text-lg font-black mt-4">
                  Enter your Email address
                </h2>
                <input
                  className="py-3 px-8 placeholder:text-xs font-normal  w-full mt-4 outline-none rounded border "
                  type="email"
                  name="email"
                  placeholder="Enter an email, to get feedback, e.g Joe@gmail.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <h1 className="text-red-500 text-base my-2 font-bold">
                    {formik.errors.email}
                  </h1>
                ) : null}
              </>

              <>
                <h2 className="text-lg font-black mt-4">
                  Kindly provide us with additional information to assist you
                  better
                </h2>
                <input
                  className="py-3 px-8 placeholder:text-xs font-normal  w-full mt-4 outline-none rounded border "
                  type="text"
                  name="message"
                  placeholder="Tell us what you need help with"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.errors.message && formik.touched.message ? (
                  <h1 className="text-red-500 text-base my-2 font-bold">
                    {formik.errors.message}
                  </h1>
                ) : null}
              </>

              {topicsCLicked && (
                <div>
                  <h1 className="my-4">Attach files (optional)</h1>
                  <div className="flex justify-center items-center py-3 px-4 rounded-md border-dashed border-2 border-primary-300 mb-4 max-w-[350px]">
                    <input type="file" name="" id="" />
                  </div>
                </div>
              )}

              <section className="flex flex-col md:flex-row gap-2 justify-between items-start md:items-center max-w-[150px] md:max-w-[350px] lg:max-w-[350px] md:min-w-[300px]  mt-6">
                <button
                  className="p-2 py-3 lg:px-5 bg-neutral-900 text-xs "
                  type="submit"
                  onClick={sendEmail}
                >
                  SEND US A MESSAGE
                </button>
                <p className="self-center -ml-6 md:ml-0 uppercase text-xs my-2 md:my-0 font-bold">or</p>
                <div>
                  <a
                    href="https://wa.link/jbbtji"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 py-3 lg:px-5 border-primary-600 border text-xs"
                  >
                    START A LIVE CHAT
                  </a>
                </div>
              </section>
            </form>

            <h2 className="text-lg font-black mt-4">
              Contact us via email or social media for further assistance.
            </h2>
            <div className="w-full text-center text-primary-600 pb-10 md:py-6 md:flex justify-between items-center mt-4 md:mt-0 ">
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
            <img
              src={img}
              alt="Group of people"
              className="h-[200px] w-[200px] md:h-[400px] md:w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
