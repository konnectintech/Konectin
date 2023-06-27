import { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import Suggestions from "./suggestions";
import { useTemplateContext } from "../../../../../middleware/resume";

const Responsibilities = ({ data, jobArray, handleInputChange }) => {
  const [responsibility, setResponsibility] = useState(data?.jobTitle);

  const { setTemplateData } = useTemplateContext();

  const [editorValue, setEditorValue] = useState(data?.workDesc);

  const [dirty, setDirty] = useState(false);

  const editorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      handleInputChange("workDesc", editorValue);
      setDirty(false);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [editorValue, handleInputChange]);

  const handleAddSuggestion = (value) => {
    const content = editorRef.current.getContent();
    setEditorValue(`${content} <ul><li>${value}</li></ul>`);
    editorRef.current.setDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTemplateData((prev) => ({
      ...prev,
      jobExperience: jobArray,
    }));

    navigate("/resume/builder/employment-experience/job-activities");
  };

  return (
    <div className="mt-4 max-w-6xl flex flex-col justify-center items-start mx-auto">
      <h2 className="md:max-w-[30ch] text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
        Your work responsibilities
      </h2>
      <p className="text-neutral-300 text-sm tracking-[-0.01rem] mt-3 max-w-2xl">
        Try to include 3-6 work experience bullet points. Little is less and
        more is too much.
      </p>
      <div className="w-full">
        <section className="w-full h-[400px] flex justify-between mt-6">
          <div className="w-full md:w-1/2">
            <p className="font-bold text-neutral-300 text-sm mb-3">
              {data?.jobTitle} | {data?.company}
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
          <div className="w-1/2 hidden md:block">
            <p className=" font-semibold text-neutral-300 text-xs mb-3 mt-1 ml-6 ">
              Let’s help your refine your job responsibilities with our top AI
              powered tool
            </p>
            <div className="h-full ml-6 border border-neutral-500 rounded-lg">
              <Suggestions
                jobTitle={responsibility}
                handleChange={(value) => setResponsibility(value)}
                handleAddSuggestion={handleAddSuggestion}
              />
            </div>
          </div>
        </section>

        <div className="max-w-xl flex flex-col max-md:justify-center mt-16 gap-5 md:flex-row">
          <button
            onClick={() => navigate("/resume/builder/employment-experience/")}
            className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm py-3 px-[4.5rem]"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="w-full md:w-fit max-w-xs border border-neutral-500 rounded-lg text-sm text-neutral-1000 py-3 px-[4.5rem] bg-[#332A66]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Responsibilities;
