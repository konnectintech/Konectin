import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import ResumeModal from "../../../../../../layouts/resumeRoutes/resumeModal";
import Responsibilities from "./work-responsibilities";
import { botIcon } from "../../../../../../assets";

function ResponsibilityField({ data, handleInputChange }) {
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const editorKey = import.meta.env.VITE_CLIENT_TINYMCE_EDITOR_KEY;

  const handleEditorChange = (content) => {
    handleInputChange("workDesc", content);
    if (content.length <= 29) {
      setErrorMessage("A good work description must be at least 30 words");
    }
  };

  return (
    <>
      {loading && (
        <div className="w-full bg-white py-6 px-8">
          <div className="animate-pulse space-y-1">
            <div className="h-3 bg-neutral-500 bg-opacity-70 w-full max-w-sm mx-auto" />
            <div className="h-3 bg-neutral-500 bg-opacity-70 w-24 mx-auto" />
            <br />
          </div>
        </div>
      )}
      <div className="flex items-end gap-3">
        <div className="flex-1 responsibilities">
          <Editor
            apiKey={editorKey}
            onInit={(_, editor) => {
              editorRef.current = editor;
              handleInputChange("workDesc", data.workDesc);
              setLoading(false);
            }}
            init={{
              menubar: false,
              resize: true,
              branding: false,
              plugins: "",
              elementpath: false,
              height: 200,
              toolbar: false,
              content_style:
                "body { font-family: Merriweather, Arial, sans-serif; font-size: 12px; height:100px; margin: 0; padding: 10px 10px 0} ul { padding-inline-start: 20px} .mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {left: auto !important; top: 23px}",
              content_css: [
                "writer",
                "/index.css", // resolves to something like http://domain.com/editor.css
              ],
              placeholder: "Work Responsibilities/Functions",
            }}
            initialValue=""
            value={data.workDesc ? data.workDesc : ""}
            onEditorChange={handleEditorChange}
          />

          <p
            id="workDescError"
            className="mr-auto mt-3 absolute w-max text-xs text-error-500"
          >
            {errorMessage && errorMessage}
          </p>
        </div>
        <div
          className="w-10 cursor-pointer"
          onClick={() => setModalOpen(true)}
          title="Let konecto generate words for you"
        >
          <img src={botIcon} alt="konecto" />
        </div>
      </div>

      {isModalOpen && (
        <ResumeModal onClose={() => setModalOpen(false)}>
          <Responsibilities
            data={data}
            closeModal={() => setModalOpen(false)}
            handleChange={(content) => {
              handleInputChange("workDesc", content);
            }}
          />
        </ResumeModal>
      )}
    </>
  );
}

export default ResponsibilityField;
