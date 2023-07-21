import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import ImageConfig from "../imageConfig";
import Progress from "./progress";
import { FiUploadCloud } from "react-icons/fi";

const DropFileInput = ({ props }) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const [uploadPercentage, setUploadPercentage] = useState(0);

  const filePercentages = (percentage) => {
    // setUploadPercentage(percentage);

    setUploadPercentage(parseInt(Math.round(percentage)));
  };

  const onFileDrop = (e) => {
    // setFile(e.target.files[0]);
    // setFilename(e.target.files[0].name);
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };
  return (
    <>
      <div
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className="drop-file-input bg-[#F1F1F2] flex flex-col items-center justify-center m-auto border border-dashed border-neutral-500 rounded-lg w-4/6 h-[300px] md:h-[370px]"
      >
        <div className="flex flex-col items-center border-none outline-none ml-3 text-center text-sm text-[#B3AECC]">
          <FiUploadCloud className="text-[#B3AECC] text-4xl mb-4" size="6rem" />
          <span className=" ">Drag & Drop your files here</span>
          <span className="py-4"> OR </span>
        </div>

        <input type="file" value="" onChange={onFileDrop} />

        <button className="md:mt-10 max-w-xs border border-[#b2b3b48a] rounded-sm text-sm text-[#f5f5f5] py-2 px-4 bg-[#332A66] hover:border-[#332A66] hover:text-[#332A66] hover:bg-transparent transition-all md:w-fit md:py-3">
          {" "}
          Browse Files{" "}
        </button>
      </div>
      {fileList.length > 0 ? (
        <div className="mt-3 m-auto w-4/6  ">
          {/* displaying static image from imageConfig.js */}
          {fileList.map((item, index) => (
            <div
              key={index}
              className="relative flex p-4 my-4 rounded-md bg-white shadow-lg "
            >
              <img
                className="w-[50px] h-[50px] mr-5"
                src={
                  ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]
                }
                alt=""
              />
              <div className="flex flex-col justify-between h-[50px]">
                <span
                  className="bg-white h-[25px] w-[25px] rounded-full text-black text-lg text-center cursor-pointer absolute top-0 my-auto mr-3 border border-black bottom-0 right-0  transition-all "
                  onClick={() => fileRemove(item)}
                >
                  x
                </span>
                {/* displaying file name, progress bar and file size in Bytes */}
                <p className="text-sm">{item.name}</p>
                {/* <Progress percentage={uploadPercentage} /> */}
                <Progress percentage={filePercentages(uploadPercentage)} />
                <p className="text-sm">{item.size}B</p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
