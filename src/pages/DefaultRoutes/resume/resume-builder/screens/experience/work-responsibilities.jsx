/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Suggestions from "../../../../../../components/suggestions";
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

function Responsibilities({ data, closeModal, handleChange }) {
  const editorRef = useRef(null);

  const [responsibility, setResponsibility] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const [editorValue, setEditorValue] = useState(data?.workDesc || "");
  const [suggestions, setSuggestion] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.jobTitle && !responsibility) {
      setResponsibility(data.jobTitle);
    }
  }, [data.jobTitle]);

  const handleAddSuggestion = (value) => {
    const content = editorRef.current.getContent();
    setEditorValue(`${content} <ul><li>${value.content}</li></ul>`);
  };

  const azureApiKey = import.meta.env.VITE_OPENAI_KEY;
  const editorKey = import.meta.env.VITE_CLIENT_TINYMCE_EDITOR_KEY;

  const getJobResponsibilities = async (n) => {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleChange(editorValue);
    closeModal();
  };

  useEffect(() => {
    for (let i = 0; i <= 5; i++) {
      getJobResponsibilities(i);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyWord]);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <div className="text-sm mb-2">
          Type or Paste your current job responsibility below and click on
          generate.
        </div>
        <input
          type="text"
          id="responsibility"
          name="responsibility"
          className="input-container !mb-2"
          value={responsibility}
          onChange={(e) => setResponsibility(e.target.value)}
          placeholder="Type your job responsibility"
        />
        <button
          onClick={() => setKeyWord(responsibility)}
          className="bg-primary-500 text-white rounded-md px-6 py-2 text-sm"
        >
          Generate
        </button>
        {suggestions.length >= 1 && (
          <Suggestions
            jobTitle={keyWord}
            handleChange={(value) => setResponsibility(value)}
            handleAddSuggestion={handleAddSuggestion}
            selected={editorValue}
            responsibilities={suggestions}
          />
        )}
      </div>
      <div className="relative">
        <div className="text-sm mb-2">Product Designer | Konectin</div>
        {loading && (
          <div className="w-full absolute bg-white py-6 px-8">
            <div className="animate-pulse space-y-1">
              <div className="h-3 bg-neutral-500 bg-opacity-70 w-full max-w-sm mx-auto" />
              <div className="h-3 bg-neutral-500 bg-opacity-70 w-24 mx-auto" />
              <br />
              <div className="h-3 bg-neutral-500 bg-opacity-70 w-full rounded" />
              <div className="h-3 bg-neutral-500 bg-opacity-70 w-full rounded" />
              <div className="h-3 bg-neutral-500 bg-opacity-70 w-full rounded" />
              <div className="h-3 bg-neutral-500 bg-opacity-70 w-24" />
              <br />
              <div className="h-3 bg-neutral-500 bg-opacity-70 w-full rounded" />
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
            setLoading(false);
          }}
          init={{
            menubar: false,
            resize: true,
            branding: false,
            plugins: "lists wordcount",
            elementpath: false,
            height: 300,
            toolbar: "bold italic underline undo redo bullist",
            content_style:
              "body { font-family: Merriweather, Arial, sans-serif; font-size: 12px; height:100px }",
          }}
          initialValue=""
          value={editorValue}
          onEditorChange={(content) => setEditorValue(content)}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="relative md:absolute md:bottom-4 md:right-4 bg-primary-500 text-white rounded-md px-6 py-2 text-sm"
      >
        Apply
      </button>
    </div>
  );
}

export default Responsibilities;
