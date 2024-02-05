import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import * as FaIcon from "react-icons/fa";
import { discussionTopics } from "./data";
import { ContactUSImage } from "../../../assets";
import { RiDeleteBinLine } from "react-icons/ri";
import filePng from "../../../assets/images/file-png-solid-240.png";

function Contact() {
  const wrapperRef = useRef(null);
  const [mailing, setMailing] = useState({
    mail: "",
    topic: "",
    message: "",
    files: [],
  });
  const [topics, setTopics] = useState("");
  const [uploading, setUploading] = useState([]);
  const url = import.meta.env.VITE_CLIENT_SERVER_RENDER_URL;

  const handleChange = (name, value) => {
    setMailing((mailer) => ({ ...mailer, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (topics !== "") {
      setMailing((mailer) => ({ ...mailer, topic: topics }));
    }

    // Call Endpoint
  };

  const onFileDrop = (e) => {
    const complaintsImages = e.target.files;
    let complaintsArr = Array.from(complaintsImages);

    if (complaintsArr.length + mailing.files.length >= 3) {
      complaintsArr = complaintsArr.splice(0, 2 - mailing.files.length);
    }

    complaintsArr.forEach((complaintImage, id) => {
      const fd = new FormData();
      fd.append("file", complaintsImages[id]);

      setUploading((prev) => [
        ...prev,
        {
          image: complaintImage,
          started: true,
          percent: 0,
          message: "Uploading...",
        },
      ]);

      axios
        .post(`${url}/uploadFile`, fd, {
          onUploadProgress: (event) => {
            setUploading((prev) =>
              prev.map((item, i) => {
                if (i === id) {
                  return { ...item, percent: event.progress * 100 };
                } else {
                  return item;
                }
              })
            );
          },
        })
        .then((res) => {
          setMailing((mailer) => ({
            ...mailer,
            files: [...mailer.files, res.data.data.url],
          }));
          setUploading((prev) =>
            prev.map((item, i) => {
              if (i === id) {
                return {
                  ...item,
                  message: "Uploaded",
                  url: res.data.data.url,
                };
              } else {
                return item;
              }
            })
          );
        })
        .catch((err) => {
          console.log(err);
          setUploading((prev) =>
            prev.map((item, i) => {
              if (i === id) {
                return {
                  ...item,
                  message: `Upload failed...`,
                };
              } else {
                return item;
              }
            })
          );
        });
    });
  };

  const fileRemove = (index) => {
    const updatedList = [...uploading];
    updatedList.splice(index, 1);
    setUploading(updatedList);
    setMailing((mailer) => ({ ...mailer, files: [] }));

    if (uploading.length >= 1) {
      uploading.forEach((file) => {
        setMailing((mailer) => ({
          ...mailer,
          files: [...mailer.files, file.url],
        }));
      });
    }
  };

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
          <div className="shadow-2xl bg-white z-50 p-8 lg:p-12 lg:max-w-[60%]">
            <form className="space-y-3">
              <h2 className="text-lg font-black">
                Please, provide your Email address
              </h2>
              <input
                className="p-4 py-3 lg:px-6 placeholder:text-xs font-normal w-full mt-3 outline-none rounded-lg border"
                type="email"
                name="email"
                placeholder="Enter email address "
                onChange={(e) => handleChange("mail", e.target.value)}
                value={mailing.mail}
              />

              <h2 className="text-lg font-black">
                Kindly select a topic for discussion:
              </h2>
              <div className="flex gap-1 sm:gap-2 flex-wrap">
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
                  onChange={(e) => handleChange("message", e.target.value)}
                  value={mailing.message}
                />
                {mailing.message.length >= 1 && mailing.message.length <= 4 && (
                  <span className="text-red-500 text-xs my-2 block">
                    Write a good and appropriate write up
                  </span>
                )}
              </div>

              <h1 className="font-black">Attach files (optional)</h1>
              <div
                className="text-xs text-center py-12 px-4 rounded-md border-dashed border-2 border-primary-300 mb-4 w-full relative cursor-pointer"
                onClick={() => wrapperRef.current.click()}
              >
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

              {uploading.length >= 1 && (
                <div className="space-y-3 c min-w-[200px]">
                  <p className="font-semibold">Uploaded file(s)</p>
                  <div className="flex gap-3 flex-wrap">
                    {uploading.map((file, index) =>
                      file.message === "uploaded" ? (
                        <img
                          className="h-[100px] w-[100px]"
                          key={index}
                          src={file.url}
                          alt={file.image.name}
                        />
                      ) : (
                        <div
                          key={index}
                          className="relative flex gap-2 w-1/2 min-w-[200px]"
                        >
                          <img
                            className="h-[35px] object-contain"
                            src={filePng}
                            alt={file.image.name}
                          />
                          <div className="space-y-2 w-full text-xs">
                            {/* displaying file name, progress bar and file size in Bytes */}
                            <p className="truncate max-w-[170px] sm:max-w-[15ch] md:max-w-full lg:max-w-[15ch]">
                              Report Image {index + 1}
                            </p>
                            {file.started && (
                              <progress
                                className="h-1 w-full"
                                max={100}
                                value={file.percent}
                              ></progress>
                            )}
                            {file.message && file.message}
                          </div>

                          <RiDeleteBinLine
                            onClick={() => fileRemove(index)}
                            size="1rem"
                            className="text-error-500 cursor-pointer"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center pt-2">
                <button
                  className="py-4 px-5 bg-neutral-900 text-neutral-400 font-medium hover:text-white hover:bg-primary-600 text-xs rounded duration-500"
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
