import { useState } from "react";
import Switch from "./Switch";
import { BsArrowRightShort } from "react-icons/bs";

const EditResumePhoto = () => {
  const [resumePhoto, setResumePhoto] = useState(false);

  return (
    <div className="flex gap-3 p-4 flex-col font-semibold text-xs">
      <div className="flex items-center justify-between">
        <p className="whitespace-nowrap">Resume Photo</p>
        <Switch checked={resumePhoto} onChange={setResumePhoto} />
      </div>
      <div className="flex items-center justify-between cursor-pointer">
        <p className="whitespace-nowrap">Add / Change Photo</p>
        <BsArrowRightShort className="text-secondary-600 text-3xl" />
      </div>
    </div>
  );
};

export default EditResumePhoto;
