import axios from "axios";
import { useRef } from "react";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

const Download = ({ data, template }) => {
  const resumeRef = useRef();
  const navigate = useNavigate();

  const handleDownload = async () => {
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
          <style>
            h1 {
              color: red;
              text-align: center;
              font-size: 12px;
            }
          </style>
      </head>
      
      <body>
      

      <h1>I want to sleep</h1>
      </body>
      
      </html>`,
      },
      { responseType: "blob" }
    );

    // const pdfBlob = new Blob([res.data], { type: "application/pdf" });
    // res.arrayBuffer().then((res) => {
    //   // saveAs(blob, "newPdf");
    // });

    var blob = new Blob([res.data], { type: "application/pdf" });
    saveAs(blob, "test.pdf");
  };

  return (
    <div className="max-w-6xl flex mx-auto flex-col">
      <h2 className="max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug mb-8">
        Download Resume
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div ref={resumeRef}>{template()}</div>
        <div className="max-w-xl flex flex-col max-md:justify-center mt-16 gap-5">
          <button
            onClick={handleDownload}
            type="submit"
            className="rounded-lg text-sm text-neutral-900 py-3 px-[4.5rem] bg-primary-500"
          >
            Download PDF
          </button>
          {/* <button
            onClick={handlePrint}
            type="submit"
            className="rounded-lg text-sm text-neutral-900 py-3 px-[4.5rem] bg-primary-500"
          >
            Download
          </button> */}
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg text-sm py-3 px-[4.5rem] border border-neutral-500"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
