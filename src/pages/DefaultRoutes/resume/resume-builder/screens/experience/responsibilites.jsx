import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import NavigationButton from "../navigationButton";
import { useRef, useState, useEffect } from "react";
import { AzureKeyCredential, OpenAIClient } from "@azure/openai";
import Suggestions from "../../../../../../components/suggestions";
import { onSectionComplete } from "../verification";
import { useTemplateContext } from "../../../../../../middleware/resume";

const Responsibilities = ({ data, handleInputChange }) => {
  const [responsibility, setResponsibility] = useState(data?.jobTitle);
  const [editorValue, setEditorValue] = useState(data?.workDesc);
  const [dirty, setDirty] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  const { templateData } = useTemplateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSectionComplete(templateData, 2);

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
      navigate("/resume/builder/employment-experience/job-activities");
    }
  };

  const [suggestions, setSuggestion] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="mt-4 max-w-6xl flex flex-col justify-center items-start mx-auto">
      <h2 className="md:max-w-[30ch] text-xl md:text-3xl leading-tight font-semibold md:leading-snug">
        Your work responsibilities
      </h2>
      <p className="text-neutral-300 text-sm tracking-[-0.01rem] mt-3 max-w-2xl">
        Try to include 3-6 work experience bullet points. Little is less and
        more is too much.
      </p>
      <div className="w-full">
        <section className="w-full flex gap-4 justify-between mt-6">
          <div className="w-full md:w-1/2">
            <p className="font-bold text-neutral-300 text-sm mb-3 capitalize">
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
                initialValue=""
                value={editorValue}
                onEditorChange={handleEditorChange}
                onDirty={() => setDirty(true)}
              />
            </div>
          </div>
          <div className="w-1/2 hidden md:block">
            <p className="font-semibold text-neutral-300 text-xs mb-3 mt-1">
              Let’s help your refine your job responsibilities with our top AI
              powered tool
            </p>
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
        </section>

        <div className="w-full mt-16">
          {dirty && (
            <p className="ml-auto w-max text-error-500">{errorMessage}</p>
          )}
          <NavigationButton
            back={() => navigate("/resume/builder/employment-experience/")}
            cont={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Responsibilities;
