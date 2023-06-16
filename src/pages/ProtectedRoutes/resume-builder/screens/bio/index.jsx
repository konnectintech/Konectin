import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Suggestions from "./suggestions";
import { Editor } from "@tinymce/tinymce-react";

const Bio = ({ data, template }) => {
  const [responsibility, setResponsibility] = useState(
    data.jobExperience[0].jobTitle
  );
  const [editorValue, setEditorValue] = useState("");
  const [dirty, setDirty] = useState("");
  const editorRef = useRef(null);
  const navigate = useNavigate();

  const handleAddSuggestion = (value) => {
    const content = editorRef.current.getContent();
    setEditorValue(`${content} <ul><li>${value}</li></ul>`);
    setDirty(false);
    editorRef.current.setDirty(false);
    // editorRef.current.plugins.wordcount.body.getCharacterCount();
  };

  return (
    <main className="-mt-8 flex flex-col justify-between items-start mx-auto md:mx-16">
      <div className="w-full flex flex-col justify-center items-center mx-auto ">
        <div className="flex flex-col self-start">
          <h2 className="-mt-6 max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
            Bio
          </h2>
          <p className=" max-w-[85ch] font-extralight text-[#66666a] text-[12px] tracking-[-0.01rem] mt-3 mb-5">
            Bio is short for biographical information which is a summary of a
            person's professional and educational background. It is typically
            included at the top of a resume and gives employers a quick overview
            of the candidate's qualifications and experience.
          </p>
        </div>

        <div className="w-9/12 xl:w-11/12 xl:grid xl:grid-cols-3 items-center gap-4 mt-8">
          <Suggestions
            jobTitle={responsibility}
            handleChange={(value) => setResponsibility(value)}
            handleAddSuggestion={handleAddSuggestion}
          />
          <div>
            <p className="font-semibold text-[#66666a] text-xs mb-3 mt-1">
              This is a brief description of you job background
            </p>
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
                initialValue={editorValue}
                onDirty={() => setDirty(true)}
              />

              {dirty && <p>You have unsaved content!</p>}
            </div>
          </div>
          <div className=" w-[280px] h-[300px] border border-[#b2b3b4] shadow-lg rounded-lg -mt-32 ml-16 hidden xl:block">
            {template()}
          </div>
        </div>
      </div>
      <div className="w-8/12 md:max-w-4xl flex flex-col justify-center mx-auto mt-24 gap-5 md:flex-row">
        <div
          onClick={() => navigate(-1)}
          className="w-full border cursor-pointer border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 md:mr-4"
        >
          Back
        </div>
        <div
          onClick={() => navigate("/resume/builder/preview")}
          className="w-full border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] mx-auto py-5 px-6 bg-[#332A66] cursor-pointer"
        >
          Continue
        </div>
      </div>
      <button
        onClick={() => navigate("/resume/builder/preview")}
        className="text-[#FC670B] text-sm font-extralight tracking-[0.02rem] underline mx-auto mt-8"
      >
        Skip this step
      </button>
    </main>
  );
};

export default Bio;
