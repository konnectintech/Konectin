import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";
import { onSectionComplete } from "../verification";
import ResumeModal from "../../../../../../layouts/resumeRoutes/resumeModal";
import { botIcon } from "../../../../../../assets";
import BioAi from "./BioAi";

const Bio = ({ data, onInputChange }) => {
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isModal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const editorKey = import.meta.env.VITE_CLIENT_TINYMCE_EDITOR_KEY;

  const handleEditorChange = (content) => {
    onInputChange({ section: "bio", values: content });
    if (content.length <= 29) {
      setErrorMessage("A good work description must be at least 30 words");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.bio.length <= 30) {
      setErrorMessage("You have to write at least 30 words");
      return;
    }

    onSectionComplete(data, 6);
    navigate("/services/resume/builder/add_information");
  };

  return (
    <div className="flex flex-col justify-between items-start mx-auto">
      <div className="w-full flex justify-center mx-auto">
        <div className="flex flex-col self-start">
          <h2 className="max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
            Bio
          </h2>
          <p className="max-w-[85ch] font-extralight text-[#66666a] text-[12px] tracking-[-0.01rem] mt-3 mb-5">
            Bio is short for biographical information which is a summary of a
            person's professional and educational background. It is typically
            included at the top of a resume and gives employers a quick overview
            of the candidate's qualifications and experience.
          </p>

          <div className="flex justify-between">
            <p className="font-semibold text-[#66666a] text-xs mb-3 mt-1">
              This is a brief description of you job background
            </p>
            <div
              onClick={() => setModal(true)}
              className="w-10 h-10 cursor-pointer"
            >
              <img
                className="object-contain cursor-pointer"
                src={botIcon}
                alt="Konecto-bot"
              />
            </div>
          </div>
          <div className="h-full relative">
            {loading && (
              <div className="absolute w-full bg-white py-6 px-8">
                <div className="animate-pulse space-y-1">
                  <div className="h-3 bg-neutral-500 bg-opacity-70 w-full max-w-sm mx-auto" />
                  <div className="h-3 bg-neutral-500 bg-opacity-70 w-24 mx-auto" />
                  <br />
                  <div className="h-3 bg-neutral-500 bg-opacity-70 w-full rounded" />
                  <div className="h-3 bg-neutral-500 bg-opacity-70 w-full rounded" />
                  <div className="h-3 bg-neutral-500 bg-opacity-70 w-24" />
                  <br />
                  <div className="h-3 bg-neutral-500 bg-opacity-70 w-full rounded" />
                  <div className="h-3 bg-neutral-500 bg-opacity-70 w-full rounded" />
                  <div className="h-3 bg-neutral-500 bg-opacity-70 w-3/4 rounded" />
                  <div className="h-3 bg-neutral-500 bg-opacity-70 w-24" />
                </div>
              </div>
            )}
            <Editor
              apiKey={editorKey}
              onInit={(_, editor) => {
                editorRef.current = editor;
                onInputChange({ section: "bio", values: data.bio });
                setLoading(false);
              }}
              init={{
                menubar: false,
                resize: false,
                branding: false,
                plugins: "lists wordcount",
                elementpath: false,
                toolbar: "bold italic underline undo redo bullist",
                content_style:
                  "body { font-family: Merriweather, Arial, sans-serif; font-size: 12px }",
              }}
              initialValue=""
              value={data.bio ? data.bio : ""}
              onEditorChange={handleEditorChange}
            />
          </div>
        </div>

        <div className="max-lg:hidden w-1/2">
          <div className="h-[360px] sm:h-[300px] md:h-[500px] lg:h-[580px] lg:w-[500px] flex items-center justify-center">
            <div className="md:scale-[42%] lg:scale-[50%] mt-10">
              <SelectedTemplates data={data} />
            </div>
          </div>
        </div>

        {isModal && (
          <ResumeModal onClose={() => setModal(false)}>
            <BioAi
              closeModal={() => setModal(false)}
              data={data}
              handleChange={(content) =>
                onInputChange({ section: "bio", values: content })
              }
            />
          </ResumeModal>
        )}
      </div>

      <div className="mt-12 w-full">
        {errorMessage && (
          <p className="ml-auto w-max text-error-500">{errorMessage}</p>
        )}
        <NavigationButton
          back={() => navigate("/services/resume/builder/skills")}
          cont={handleSubmit}
        />
      </div>

      <Link
        to="/services/resume/builder/add_information"
        className="text-secondary-600 text-sm font-extralight tracking-[0.02rem] underline mx-auto mt-8"
      >
        Skip this step
      </Link>
    </div>
  );
};

export default Bio;
