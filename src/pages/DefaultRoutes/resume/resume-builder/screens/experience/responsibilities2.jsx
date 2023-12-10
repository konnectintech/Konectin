import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Suggestions from "../../../../../../components/suggestions";
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { onSectionComplete } from "../verification";
import { useTemplateContext } from "../../../../../../middleware/resume";
import { useNavigate } from "react-router-dom";

function Responsibilities2({ data, closeModal, handleInputChange }) {
  const editorRef = useRef(null);
  const navigate = useNavigate();

  const [responsibility, setResponsibility] = useState("");
  const [editorValue, setEditorValue] = useState(data?.workDesc || "");
  const [dirty, setDirty] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleInputChange("workDesc", editorValue);
      setDirty(false);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [editorValue, handleInputChange]);

  const handleEditorChange = (content) => {
    setEditorValue(content);
    editorRef.current.setDirty(true);
    setDirty(true);
    setErrorMessage("You have unsaved content!");
  };
  const handleAddSuggestion = (value) => {
    const content = editorRef.current.getContent();
    setEditorValue(`${content} <ul><li>${value.content}</li></ul>`);
    editorRef.current.setDirty(true);
    setDirty(true);
    setErrorMessage("You have unsaved content!");
  };

  const azureApiKey = import.meta.env.VITE_OPENAI_KEY;

  const getJobResponsibilities = async (n) => {
    setLoading(true);
    const messages = [
      {
        role: "user",
        content: `List a job responsibility of a/an ${responsibility}. Start with strong action verbs, quantifying achievements with metrics. Tailor ${responsibility} to match the job description. Be clear and concise, proof read for error. Make it within 15-17 words`,
      },
    ];

    try {
      const client = new OpenAIClient(
        "https://azure-openai-konectin.openai.azure.com/",
        new AzureKeyCredential(azureApiKey)
      );
      const deploymentId = "35Turbo";
      const result = await client.getChatCompletions(deploymentId, messages);

      const replica = suggestions;
      replica.splice(n, 1, { content: result.choices[0].message.content });
      setSuggestion(replica);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const { templateData } = useTemplateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSectionComplete(templateData);

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
      closeModal();
      navigate("/resume/builder/employment-experience/job-activities");
    }
  };

  useEffect(() => {
    if (loading) {
      const preloader = new Array(5).fill({
        content:
          "Streamlined financial reporting process, reducing monthly close time by 20%, and ensuring accuracy of financial statements.",
        loading,
      });
      setSuggestion(preloader);
    }
  }, [loading]);

  useEffect(() => {
    for (let i = 0; i <= 5; i++) {
      getJobResponsibilities(i);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsibility]);

  return (
    <div className="grid grid-cols-2 p-4 gap-4">
      <div>
        <div className="text-sm mb-2">
          Type or Paste your current job responsibility below and click on
          generate.
        </div>
        <input
          type="text"
          id="responsibility"
          name="responsibility"
          className="input-container"
          value={responsibility}
          onChange={(e) => setResponsibility(e.target.value)}
          placeholder="Type your job responsibility"
        />
        <button
          // onClick={handleSubmit}
          className=" bg-primary-500 text-white rounded-md px-6 py-2 text-sm"
        >
          Generate
        </button>
        <div className="overflow-hidden pb-4">
          <Suggestions
            jobTitle={responsibility}
            handleChange={(value) => setResponsibility(value)}
            handleAddSuggestion={handleAddSuggestion}
            selected={editorValue}
            responsibilities={suggestions}
          />
        </div>
      </div>
      <div className="relative">
        <div className="text-sm mb-2">Product Designer | Konectin</div>
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
          onEditorChange={handleEditorChange}
          onDirty={() => setDirty(true)}
        />

        {dirty && (
          <p className="mr-auto w-max text-error-500">{errorMessage}</p>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="absolute bottom-4 right-4 bg-primary-500 text-white rounded-md px-6 py-2 text-sm"
      >
        Apply
      </button>
    </div>
  );
}

export default Responsibilities2;
