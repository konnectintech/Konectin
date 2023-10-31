import { useRef } from "react";
import { Link } from "react-router-dom";

import fileDefault from "../../../../assets/images/file-blank-solid-240.png";
import fileCSS from "../../../../assets/images/file-css-solid-240.png";
import filePdf from "../../../../assets/images/file-pdf-solid-240.png";
import filePng from "../../../../assets/images/file-png-solid-240.png";

const ImageConfig = {
  default: fileDefault,
  pdf: filePdf,
  png: filePng,
  css: fileCSS,
};

function UploadResume({ data, updateForm }) {
  const wrapperRef = useRef(null);

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      updateForm([newFile]);
    }
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

      {(data.length === 0 || Object.keys(data[0]).length === 0) && (
        <div className="border-2 border-dashed min-h-[300px] flex flex-col items-center justify-center gap-3">
          <h3 className="text-xl font-semibold">Upload your existing resume</h3>
          <div className="text-center relative">
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
              placeholder="Upload here"
              className="invisible absolute outline-0 border-0"
              onChange={onFileDrop}
            />
          </div>
        </div>
      )}

      {data.length > 0 && Object.keys(data[0]).length > 0 && (
        <div className="mt-3 w-full">
          {/* displaying static image from imageConfig.js */}
          {data.map((item, index) => (
            <div
              key={index}
              className="relative flex p-4 my-4 rounded-md bg-white shadow-md"
            >
              <img
                className="w-[50px] h-[50px] mr-5"
                src={
                  ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]
                }
                alt=""
              />
              <div className="flex flex-col justify-between h-[50px]">
                {/* <span
                  className="bg-white h-5 w-5 rounded-full text-black text-center cursor-pointer absolute top-0 my-auto mr-3 border border-black bottom-0 right-0  transition-all flex justify-center items-center"
                  onClick={() => fileRemove(item)}
                >
                  x
                </span> */}
                {/* displaying file name, progress bar and file size in Bytes */}
                <p className="text-sm">{item.name}</p>
                {/* <Progress percentage={filePercentages(uploadPercentage)} /> */}
                <p className="text-sm">
                  {item.size > 1024 * 1024 * 1024
                    ? "Too large data"
                    : item.size > 1024 * 1024
                    ? `${Math.floor(item.size / (1024 * 1024))} MB`
                    : item.size > 1024
                    ? `${Math.floor(item.size / 1024)} KB`
                    : `${item.size} B`}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UploadResume;
