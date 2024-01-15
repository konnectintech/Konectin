import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as FaIcon from "react-icons/fa";
import styles from "./contact.module.css";
import { Link } from "react-router-dom";
import { discussionTopics } from "./data";
import {
  Ellipse,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Ellipse4,
  box,
  box1,
  box2,
  dotBox,
} from "../../../assets/icons/contact us";

function Contact() {
  const wrapperRef = useRef(null);
  const [topics, setTopics] = useState("");

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
    onSubmit: (values) => {},
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
      emailjs
        .sendForm(
          "service_pxhna2k",
          "template_jrgtxtl",
          form.current,
          "02ug9Lx-dB3lcnHWp"
        )
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

  const onFileDrop = (e) => {};

  return (
    <>
      <div className="mt-[4.5rem] pt-16 pb-28 bg-primary-700">
        <div className="w-11/12 mx-auto max-w-screen-2xl">
          <h1 className="text-3xl lg:text-6xl font-bold text-primary-100 mb-2">
            Contact US
          </h1>
          <p className="font-bold text-lg lg:text-2xl text-primary-100">
            Requests, error reports, suggestions, and questions. - we’re here to
            assist.
          </p>
        </div>
      </div>

      <div className="flex justify-between pb-24 w-11/12 mx-auto max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row z-50 lg:w-[90%] mt-[-70px] justify-between gap-12">
          <div className="shadow-2xl bg-white z-50 p-8 lg:p-12 space-y-3 lg:max-w-[60%]">
            <h2 className="text-lg font-black">
              Kindly select a topic for discussion:
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-3">
              <div className="flex gap-1 lg:gap-4 flex-wrap">
                {discussionTopics.map((topic) => (
                  <div
                    key={topic.name}
                    className={`${
                      topics === topic.name
                        ? "text-white bg-primary-600"
                        : topics === ""
                        ? "border-neutral-grey hover:bg-primary-300 hover:text-white"
                        : "text-neutral-700 pointer-events-none"
                    } font-medium text-xs border rounded-full py-[.65rem] px-4 duration-500 cursor-pointer`}
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
                  <h2 className="text-lg font-black">
                    Or simply state what you require help with
                  </h2>
                  <input
                    className="p-4 py-3 lg:px-6 placeholder:text-xs font-normal w-full mt-3 outline-none rounded-lg border"
                    type="text"
                    name="topic"
                    placeholder="Enter a topic like “Account setup” "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.topic}
                  />
                  {formik.errors.topic && formik.touched.topic ? (
                    <h1 className="text-red-500 text-xs my-2">
                      {formik.errors.topic}
                    </h1>
                  ) : null}
                </>
              ) : (
                <div className="space-y-1">
                  <h2 className="font-black">Helpful resources</h2>
                  {discussionTopics
                    .filter((topic) => topic.name === topics)
                    .map((topic) =>
                      topic.resources.map((res) => (
                        <Link
                          to={res.link}
                          className="py-1 text-secondary-500 text-xs block"
                        >
                          {res.summary} -
                        </Link>
                      ))
                    )}
                </div>
              )}

              <div>
                <h2 className="text-lg font-black mt-4">
                  Kindly provide us with additional information to assist you
                  better
                </h2>
                <textarea
                  className="p-4 py-3 lg:px-6 placeholder:text-xs font-normal w-full mt-3 outline-none rounded-lg border"
                  type="text"
                  name="message"
                  placeholder="Tell us what you need help with..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.errors.message && formik.touched.message ? (
                  <h1 className="text-red-500 text-xs my-2">
                    {formik.errors.message}
                  </h1>
                ) : null}
              </div>

              {topics && (
                <>
                  <h1 className="font-black">Attach files (optional)</h1>
                  <div className="text-xs text-center py-12 px-4 rounded-md border-dashed border-2 border-primary-300 mb-4 w-full relative">
                    Drag & Drop your file(s) to attach it, or <br />{" "}
                    <span className="text-secondary-500 block mt-1">
                      browse for a file...
                    </span>
                    <input
                      type="file"
                      value=""
                      ref={wrapperRef}
                      multiple
                      className="invisible absolute outline-0 border-0 left-[-1000%]"
                      onChange={onFileDrop}
                    />
                  </div>
                </>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:items-center pt-2">
                <button
                  className="p-2 py-4 lg:px-5 bg-neutral-900 text-neutral-400 font-medium hover:text-white hover:bg-primary-600 text-xs rounded duration-500"
                  type="submit"
                  onClick={sendEmail}
                >
                  SEND US A MESSAGE
                </button>
                <p className="text-neutral-300 text-xs text-center">or</p>
                <a
                  href="https://wa.link/jbbtji"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 py-4 lg:px-5 border-primary-600 hover:text-white hover:bg-primary-600 border text-xs rounded duration-500 text-center"
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

          <div className={`${styles.animation_container} max-lg:hidden`}>
            <div className={styles.centered_image}>
              <img src={dotBox} alt="dots" />
            </div>
            <img className={styles.bounce} src={box} alt="box" />
            <img className={styles.bounce} src={box1} alt="box" />
            <img className={styles.bounce} src={box2} alt="box" />

            <div className={styles.rotating_path}>
              <div className={styles.rotating_image}>
                <img src={Ellipse} alt="Ellipse" />
              </div>
              <div className={styles.rotating_image}>
                <img src={Ellipse2} alt="Ellipse" />
              </div>
              <div className={styles.rotating_image}>
                <img src={Ellipse4} alt="Ellipse" />
              </div>
              <div className={styles.rotating_image}>
                <img src={Ellipse1} alt="Ellipse" />
              </div>
              <div className={styles.rotating_image}>
                <img src={Ellipse3} alt="Ellipse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
