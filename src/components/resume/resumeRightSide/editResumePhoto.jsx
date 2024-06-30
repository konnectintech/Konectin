import { useState } from "react";
import Switch from "./switch";
import { BsArrowRightShort } from "react-icons/bs";
import { useTemplateContext } from "../../../middleware/resume";

const EditResumePhoto = () => {
  const [resumePhoto, setResumePhoto] = useState(false);
  const { setTemplateData } = useTemplateContext();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const readImage = new FileReader();
    readImage.onloadend = () => {
      setTemplateData((prev) => ({
        ...prev,
        image: { ...prev.image, value: readImage.result },
      }));
    };
    if (file) {
      readImage.readAsDataURL(file);
    }
  };

  return (
    <div className="flex gap-3 p-4 flex-col font-semibold text-xs">
      <div className="flex items-center justify-between">
        <p className="whitespace-nowrap">Resume Photo</p>
        <Switch checked={resumePhoto} onChange={setResumePhoto} />
      </div>
      <label
        htmlFor="image"
        className="flex items-center justify-between cursor-pointer"
      >
        <p className="whitespace-nowrap">Add / Change Photo</p>
        <BsArrowRightShort className="text-secondary-600 text-3xl" />
        <input type="file" className="sr-only" id="image" onChange={handleImageChange} />
      </label>
    </div>
  );
};

export default EditResumePhoto;
