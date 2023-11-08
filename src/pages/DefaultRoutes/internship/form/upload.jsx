import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import fileDefault from "../../../../assets/images/file-blank-solid-240.png";
import fileCSS from "../../../../assets/images/file-css-solid-240.png";
import filePdf from "../../../../assets/images/file-pdf-solid-240.png";
import filePng from "../../../../assets/images/file-png-solid-240.png";
import { RiDeleteBinLine } from "react-icons/ri";

const ImageConfig = {
  default: fileDefault,
  pdf: filePdf,
  png: filePng,
  css: fileCSS,
};

function UploadResume({ data, setUpdate, updateForm, handleChange }) {
  const [files, setFiles] = useState([]);

  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  const onFileDrop = (e) => {
    const resumes = e.target.files;

    Array.from(resumes).forEach((resume, id) => {
      const fd = new FormData();
      fd.append("file", resume);
      setFiles((prev) => [
        ...prev,
        { resume: resume, started: true, percent: 0, message: "Uploading..." },
      ]);

      axios
        .post(`${url}/uploadFile`, fd, {
          onUploadProgress: (event) => {
            setFiles((prev) =>
              prev.map((item, i) => {
                if (i === id) {
                  console.log(event.progress);
                  return { ...item, percent: event.progress * 100 };
                } else {
                  return item;
                }
              })
            );
          },
        })
        .then((res) => {
          updateForm([...data, res.data.data.url]);
          setFiles((prev) =>
            prev.map((item, i) => {
              if (i === id) {
                return {
                  ...item,
                  message: "Upload complete",
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
          setFiles((prev) =>
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
    const updatedList = [...files];
    updatedList.splice(index, 1);
    setFiles(updatedList);
    updateForm([]);

    files.forEach((file) => {
      updateForm([...data, file.url]);
    });
  };

  return (
    <div className="space-y-3">
      <div
        onClick={() => {
          setUpdate();
          navigate("/resume/options");
        }}
        className="w-fit self-start px-6 py-3 flex gap-2 items-center justify-center rounded bg-primary-500 text-white"
      >
        Build resume now
      </div>
      <div
        id="upload"
        className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between gap-4"
      >
        <div
          onClick={() => wrapperRef.current.click()}
          className="border-2 border-dashed min-h-[300px] cursor-pointer flex flex-col items-center justify-center gap-3 px-4 text-center w-full"
        >
          <h3 className="text-xl font-semibold">Upload your existing resume</h3>
          <div className="relative">
            File can exist as a PNG, JPEG or DOC.{" "}
            <span className="text-secondary-500">Upload here</span>
            <input
              type="file"
              value=""
              ref={wrapperRef}
              multiple
              className="invisible absolute outline-0 border-0"
              onChange={onFileDrop}
            />
            <p className="text-primary-200 text-xs mt-2 opacity-60">
              (Maximum file size is 2MB)
            </p>
          </div>
        </div>

        {files.length >= 1 && (
          <div className="space-y-3 c min-w-[200px]">
            <p className="font-semibold">Uploaded files</p>
            {files.map((file, index) => (
              <div key={index}>
                <div className="relative flex gap-2 w-full">
                  <img
                    className="h-[35px] object-contain"
                    src={
                      ImageConfig[file.resume.type.split("/")[1]] ||
                      ImageConfig["default"]
                    }
                    alt={file.resume.name}
                  />
                  <div className="space-y-2 w-full text-xs">
                    {/* displaying file name, progress bar and file size in Bytes */}
                    <p className="truncate max-w-[170px] sm:max-w-[15ch] md:max-w-full lg:max-w-[15ch]">
                      {file.resume.name}
                    </p>
                    {/* <p className="text-sm">
                      {file.size > 1024 * 1024 * 1024
                        ? "Too large data"
                        : file.size > 1024 * 1024
                        ? `${Math.floor(file.size / (1024 * 1024))} MB`
                        : file.size > 1024
                        ? `${Math.floor(file.size / 1024)} KB`
                        : `${file.size} B`}
                    </p> */}
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
              </div>
            ))}
          </div>
        )}
      </div>
      <label
        id="uploadError"
        className="-mt-1 text-xs text-error-500 hidden"
      ></label>

      <div className="space-y-2">
        <p>Add Portfolio Link / Website / LinkedIn Profile </p>
        <div className="flex flex-col">
          <input
            className="input-container !mb-0"
            type="url"
            name="portfolio"
            id="portfolio"
            value={data?.portfolio}
            onChange={(e) =>
              handleChange("upload", "portfolio", e.target.value)
            }
            onInput={(e) => handleChange("upload", "portfolio", e.target.value)}
            placeholder="Portfolio Link / Website / LinkedIn Profile"
          />
        </div>
      </div>
    </div>
  );
}

export default UploadResume;
