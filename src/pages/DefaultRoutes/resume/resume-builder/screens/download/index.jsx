import axios from "axios";
import { useState } from "react";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
import {
  konectinLogo,
  notifyError,
  successIcon,
} from "../../../../../../assets";
import SelectedTemplates from "../../resume-templates";
import { useAuth } from "../../../../../../middleware/auth";

const Download = ({ data }) => {
  const [message, setMessage] = useState("");
  const [isloading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleDownload = async () => {
    const doc = document.getElementById("template");
    setLoading(true);
    const url = import.meta.env.VITE_CLIENT_SERVER_RENDER_URL;

    try {
      let res = await axios.post(
        `${url}/createPdf?resumeId=${data._id}`,
        {
          resumeHtml: `
                <!DOCTYPE html>
                  <html lang="en">
                    <head>
                      <meta charset="UTF-8" />
                      <link rel="icon" type="image/png" href="/konectin.png" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <title>Konectin | Home</title>
                      <meta name="description"
                        content="Get matched easily with recruiters who see value in your experience amidst other great Career oppurtunities." />
                    </head>

                    <body>
                      ${doc.innerHTML}
                    </body>
                  </html>
        `,
        },
        {
          responseType: "blob",
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      var blob = new Blob([res.data], { type: "application/pdf" });
      saveAs(
        blob,
        `${data.basicInfo.lastName} resume (Konectin Generated).pdf`
      );

      setLoading(false);
      // if successful download then check userflow
      const { ongoing } =
        JSON.parse(sessionStorage.getItem("internData")) || "";

      if (ongoing) {
        setMessage("intern");
      } else {
        setMessage("");
      }
    } catch (error) {
      console.log(error);
      setMessage("error");
      setLoading(false);
    }
  };

  return (
    <>
      {isloading && (
        <div className="fixed no-scrollbar w-full h-screen top-0 left-0 z-[100] flex flex-col">
          <div className="bg-neutral-100 opacity-70 absolute w-full h-full"></div>
          <div className="m-auto flex flex-col gap-6">
            <div className="animate-pulse m-auto bg-white p-4 rounded-full">
              <img src={konectinLogo} alt="" />
            </div>
            <p className="text-white relative">
              Please hold on as we process and download your resume for you
            </p>
          </div>
        </div>
      )}
      {message !== "" && (
        <div className="fixed no-scrollbar w-full h-screen top-0 left-0 z-[100] flex">
          <div
            onClick={() => setMessage("")}
            className="bg-neutral-100 opacity-70 absolute w-full h-full"
          ></div>
          <div className="w-[90%] md:w-2/4 min-w-[280px] m-auto relative z-10 bg-neutral-100 rounded-lg h-[80vh] max-h-[450px] flex items-center justify-center flex-col gap-6 p-8 text-white">
            <div>
              <img
                className="max-w-[150px]"
                src={message === "intern" ? successIcon : notifyError}
                alt="success/error"
              />
            </div>
            <div className="text-center space-y-4">
              <p>
                {message === "intern"
                  ? "Great job on building your resume!"
                  : "Encountered an error while trying to send your information to our servers."}
              </p>
              <p>
                {message === "intern"
                  ? "Now, please return to the Internship Application form to upload your new resume and continue with your application."
                  : "Check your internet connection and try again"}
              </p>
              {message === "intern" ? (
                <Link
                  to="/internship/intern-application"
                  className="text-white bg-secondary-600 px-6 py-3 block w-fit rounded mx-auto"
                >
                  Continue Internship Application
                </Link>
              ) : (
                <div
                  onClick={() => setMessage("")}
                  className="text-white bg-secondary-600 px-6 py-3 w-fit rounded mx-auto cursor-pointer"
                >
                  Try again
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="max-w-6xl flex mx-auto flex-col">
        <h2 className="max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug mb-8">
          Download Resume
        </h2>
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="w-1/2">
            <div className="h-[280px] xxs:h-[380px] md:h-[400px] lg:h-[570px] max-w-[90vw] flex items-center justify-center xl:justify-end">
              <div className="scale-[32%] xxs:scale-[42%] lg:scale-[55%] xl:translate-x-[70px] mt-10">
                <SelectedTemplates data={data} />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col max-md:justify-center mt-16 gap-5">
            <button
              onClick={handleDownload}
              type="submit"
              className="rounded-lg text-sm text-neutral-900 py-3 px-[4.5rem] bg-primary-500"
            >
              Download PDF
            </button>
            <Link
              to="/resume/builder/preview"
              className="text-center rounded-lg text-sm py-3 px-[4.5rem] border border-neutral-500"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
