import React from "react";
import DropFileInput from "./FileUpload.jsx/DropFileInput";
import { useNavigate } from "react-router-dom";

const UploadFiles = () => {
  const onFileChange = (files) => {
    console.log(files);
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("submit");
    navigate("scan-resume");
  };
  return (
    <>
      <div className="bg-white py-8 flex flex-col justify-center items-start">
        <div className="m-auto my-4 items-center text-center">
          <h2 className="text-xl md:text-xl leading-tight font-semibold md:leading-snug">
            Upload Files
          </h2>
        </div>

        <DropFileInput onFileChange={(files) => onFileChange(files)} />
      </div>
      <div className=" w-full mt-12 flex justify-end">
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-primary-500 rounded-md py-3 px-14 text-white self-end"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UploadFiles;
