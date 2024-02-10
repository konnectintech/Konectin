import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import Suggestions from "../../../../../../components/suggestions";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";
import { AzureKeyCredential, OpenAIClient } from "@azure/openai";
import { onSectionComplete } from "../verification";
import ResumeModal from "../../../../../../layouts/resumeRoutes/resumeModal";
import Responsibilities2 from "../experience/responsibilities2";
import { botIcon } from "../../../../../../assets";
import BioAi from "./BioAi";

const Bio = ({ data, onInputChange }) => {
  const [editorValue, setEditorValue] = useState(data?.bio);
  const [dirty, setDirty] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const editorRef = useRef(null);
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    console.log("editorValue", editorValue);
    const interval = setInterval(() => {
      onInputChange({ section: "bio", values: editorValue });
      setDirty(false);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [editorValue, onInputChange]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSectionComplete(data);

    const wordCount = editorRef
      ? editorRef.current.plugins.wordcount.getCount()
      : 0;

    if (wordCount <= 30) {
      setDirty(true);
      setErrorMessage("You have to write at least 30 words");
      return;
    }

    if (dirty) {
      setErrorMessage("You have unsaved content!");
    } else {
      navigate("/resume/builder/add_information");
    }
  };

  return (
    <div className="flex flex-col justify-between items-start mx-auto">
      <div className="w-full flex flex-col justify-center items-center mx-auto ">
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
        </div>

        <div className="flex flex-col-reverse sm:flex-row gap-8 w-full">
          <div className="sm:w-1/2">
            <div className="flex justify-between">
              <p className="font-semibold text-[#66666a] text-xs mb-3 mt-1">
                This is a brief description of you job background
              </p>
              <div onClick={openModal} className="w-10 h-10 cursor-pointer">
                <img
                  className="object-contain"
                  src={botIcon}
                  alt="Konecto-bot"
                />
              </div>
            </div>
            <div className="h-full">
              <Editor
                apiKey="muetp0kpit1cdofn0tsv7aym5shbxqnxzglv3000ilo9pc0m"
                onInit={(_, editor) => (editorRef.current = editor)}
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
                value={editorValue}
                onEditorChange={() => {
                  setEditorValue(editorRef.current.getContent());
                  editorRef.current.setDirty(true);
                  setDirty(true);
                  setErrorMessage("You have unsaved content!");
                }}
                onDirty={() => setDirty(true)}
              />
            </div>
          </div>
          <div className="max-lg:hidden w-1/3">
            <div className="lg:h-[500px] xl:h-[600px] 2xl:h-[850px] flex items-center justify-center">
              <div className="lg:scale-[40%] xl:scale-[50%] 2xl:scale-[70%] mt-10">
                <SelectedTemplates data={data} />
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <ResumeModal onClose={closeModal}>
            <BioAi
              closeModal={closeModal}
              data={data}
              onInputChange={onInputChange}
              editorValue={editorValue}
              setEditorValue={setEditorValue}
              setDirty={setDirty}
              dirty={dirty}
              setErrorMessage={setErrorMessage}
              errorMessage={errorMessage}
            />
          </ResumeModal>
        )}
      </div>

      <div className="mt-12 w-full">
        {dirty && (
          <p className="ml-auto w-max text-error-500">{errorMessage}</p>
        )}
        <NavigationButton
          back={() => navigate("/resume/builder/skills")}
          cont={handleSubmit}
        />
      </div>

      <Link
        to="/resume/builder/preview"
        className="text-secondary-600 text-sm font-extralight tracking-[0.02rem] underline mx-auto mt-8"
      >
        Skip this step
      </Link>
    </div>
  );
};

export default Bio;
