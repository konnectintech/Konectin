import { useRef } from "react";
import { Link } from "react-router-dom";

import fileDefault from "../../../../assets/images/file-blank-solid-240.png";
import fileCSS from "../../../../assets/images/file-css-solid-240.png";
import filePdf from "../../../../assets/images/file-pdf-solid-240.png";
import filePng from "../../../../assets/images/file-png-solid-240.png";
import { useState } from "react";
import axios from "axios";

const ImageConfig = {
  default: fileDefault,
  pdf: filePdf,
  png: filePng,
  css: fileCSS,
};

function UploadResume({ updateForm }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null);
  const [progress, setProgress] = useState({ started: false, percent: 0 });
  const wrapperRef = useRef(null);

  const onFileDrop = (e) => {
    const resume = e.target.files[0];
    const fd = new FormData();
    fd.append("file", resume);

    setMessage("Uploading...");
    setProgress((prev) => ({ ...prev, started: true }));

    axios
      .post(``, fd, {
        onUploadProgress: (event) => {
          setProgress((prev) => ({ ...prev, percent: event.progress * 100 }));
        },
        headers: { "Custom-Header": "value" },
      })
      .then((res) => updateForm(res.data.url));

    setFile(resume);
  };

  // const fileRemove = (file) => {
  //   const updatedList = [...data];
  //   updatedList.splice(data.indexOf(file), 1);
  //   updateForm("upload", "upload", updatedList);
  // };

  return (
    <div className="space-y-3">
      <Link
        to="/resume/options"
        className="w-fit self-start px-6 py-3 flex gap-2 items-center justify-center rounded bg-primary-500 text-white"
      >
        Build resume now
      </Link>

      {file === null && (
        <div
          id="upload"
          className="border-2 border-dashed min-h-[300px] flex flex-col items-center justify-center gap-3 px-4 text-center"
        >
          <h3 className="text-xl font-semibold">Upload your existing resume</h3>
          <div className="relative">
            File can exist as a PNG, JPEG or DOC.{" "}
            <span
              onClick={() => wrapperRef.current.click()}
              className="text-secondary-500 cursor-pointer"
            >
              Upload here
            </span>
            <input
              type="file"
              value=""
              ref={wrapperRef}
              className="invisible absolute outline-0 border-0"
              onChange={onFileDrop}
            />
          </div>
        </div>
      )}

      {file && (
        <div className="mt-3 w-full">
          <>
            <div
              // key={index}
              className="relative flex gap-2 p-4 my-4 rounded-md bg-white shadow-md"
            >
              <img
                className="w-[50px] h-[50px]"
                src={
                  ImageConfig[file.type.split("/")[1]] || ImageConfig["default"]
                }
                alt=""
              />
              <div className="flex flex-col justify-between h-[50px]">
                {/* displaying file name, progress bar and file size in Bytes */}
                <p className="text-sm">{file.name}</p>
                <p className="text-sm">
                  {file.size > 1024 * 1024 * 1024
                    ? "Too large data"
                    : file.size > 1024 * 1024
                    ? `${Math.floor(file.size / (1024 * 1024))} MB`
                    : file.size > 1024
                    ? `${Math.floor(file.size / 1024)} KB`
                    : `${file.size} B`}
                </p>
                {progress.started && (
                  <progress max={100} value={progress.percent}></progress>
                )}
                {message && <span>{message}</span>}
              </div>
            </div>
            <p className="text-sm">Upload complete</p>
          </>
        </div>
      )}
      <label
        id="uploadError"
        className="-mt-1 text-xs text-error-500 hidden"
      ></label>
    </div>
  );
}

export default UploadResume;
