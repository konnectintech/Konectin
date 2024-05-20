import { useState } from "react";
import { saveAs } from "file-saver";
import axios from "axios";
import { useTemplateContext } from "../../../middleware/resume";
import { useAuthContext } from "../../../middleware/auth";
import { completedCheck, halfLoading } from "../../../assets/index";

const DownloadResume = () => {
  const { templateData: data } = useTemplateContext();
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = async () => {
    const doc = document.getElementById("template");
    setLoading(true);
    setIsDownloaded(false);
    const url = import.meta.env.VITE_CLIENT_SERVER_URL;

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
      setIsDownloaded(true);
    } catch (error) {
      console.log(error);
      setMessage("error");
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-3 p-4 flex-col font-semibold text-xs">
      {loading ? (
        <div className="flex flex-col justify-center items-center gap-2 py-8">
          <img src={halfLoading} alt={"pdffolder"} className="min-w-[24px]" />
          <div className="font-bold text-center">
            Please wait while your file is being downloaded.
          </div>
        </div>
      ) : isDownloaded ? (
        <div className="flex flex-col justify-center items-center gap-2 py-8">
          <img
            src={completedCheck}
            alt={"pdffolder"}
            className="min-w-[24px]"
          />
          <div className="font-bold text-center">
            File download complete. Please check your downloads.
          </div>
        </div>
      ) : (
        <div>
          <div
            onClick={handleDownload}
            className="bg-primary-500 rounded text-center hover:bg-primary-700 py-2 px-4 cursor-pointer text-white"
          >
            Download
          </div>
        </div>
      )}

      {message && (
        <div className="text-center space-y-4">
          <p>
            Encountered an error while trying to send your information to our
            servers.
          </p>
          <p>Check your internet connection and try again</p>
          <div
            onClick={() => setMessage("")}
            className="text-white bg-secondary-600 px-6 py-3 w-fit rounded mx-auto cursor-pointer"
          >
            Try again
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadResume;
