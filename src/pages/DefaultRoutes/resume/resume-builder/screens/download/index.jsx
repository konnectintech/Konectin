import axios from "axios";
import { useState } from "react";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
import { konectinLogo } from "../../../../../../assets";

const Download = ({ data, template }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isloading, setLoading] = useState(false);

  const handleDownload = async () => {
    const doc = document.getElementById("template");
    setLoading(true);

    try {
      let res = await axios.post(
        "https://konectin-backend-hj09.onrender.com/user/createPdf?userId=644a7eeb22713451c03415af",
        {
          html: `<!DOCTYPE html>
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
        { responseType: "blob" }
      );

      var blob = new Blob([res.data], { type: "application/pdf" });
      saveAs(
        blob,
        `${data.basicInfo.lastName} resume (Konectin Generated).pdf`
      );

      setLoading(false);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Please try again another time");
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
      <div className="max-w-6xl flex mx-auto flex-col">
        <h2 className="max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug mb-8">
          Download Resume
        </h2>
        <div className="w-full flex flex-col md:flex-row items-center ljustify-center gap-10">
          <>{template()}</>
          <div className="max-w-xl flex flex-col max-md:justify-center mt-16 gap-5">
            {errorMessage && (
              <p className="text-red-500 text-xs translate-y-4">
                {errorMessage}
              </p>
            )}
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
