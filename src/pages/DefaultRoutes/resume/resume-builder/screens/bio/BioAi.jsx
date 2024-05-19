import React, { useEffect, useRef, useState } from "react";
import { AzureKeyCredential, OpenAIClient } from "@azure/openai";
import Suggestions from "../../../../../../components/suggestions";
import { Editor } from "@tinymce/tinymce-react";

function BioAi({ data, closeModal, handleChange }) {
  const editorRef = useRef(null);

  const [responsibility, setResponsibility] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const [editorValue, setEditorValue] = useState(data?.workDesc || "");
  const [suggestions, setSuggestion] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddSuggestion = (value) => {
    const content = editorRef.current.getContent();
    setEditorValue(`${content} ${value.content}`);
  };

  const azureApiKey = import.meta.env.VITE_OPENAI_KEY;
  const editorKey = import.meta.env.VITE_CLIENT_TINYMCE_EDITOR_KEY;

  const getJobProfile = async (n) => {
    const messages = [
      {
        role: "user",
        content: `Using Google XYZ Formula, generate professional biography for ${
          data.basicInfo.firstName
        } ${data.basicInfo.lastName}, ${responsibility} at ${
          data.jobExperience[0].company
        }. Highlight ${data.basicInfo.firstName} ${
          data.basicInfo.lastName
        }'s key skills in ${data.skills.map(
          (skill) => `${skill.name} `
        )}, experience, and accomplishments using about 5 personality associated with ${responsibility}. Keep it concise and aim for about 50-100 words. Use keywords to enhance discoverability and proof read for accuracy.`,
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

  useEffect(() => {
    const loadingSequence = new Array(5).fill({
      error:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni maxime mollitia sequi sint voluptas quae consequatur ex temporibus non nemo voluptatem molestias consectetur, tempore, dolorum, architecto incidunt impedit corrupti.",
    });

    if (keyWord !== "") {
      setSuggestion(loadingSequence);

      for (let i = 0; i <= 5; i++) {
        getJobProfile(i);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyWord]);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleChange(editorValue);
    closeModal();
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="flex-1">
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
            onClick={() => {
              setKeyWord(""); // Reset state
              setKeyWord(responsibility);
            }}
            className="bg-primary-500 text-white rounded-md px-6 py-2 text-sm"
          >
            Generate
          </button>
          {suggestions.length >= 1 && (
            <Suggestions
              jobTitle={keyWord}
              handleAddSuggestion={handleAddSuggestion}
              selected={editorValue}
              responsibilities={suggestions}
            />
          )}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-neutral-300 text-xs mb-3 mt-1">
            This is a brief description of you job background
          </p>
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
                setLoading(false);
                editorRef.current = editor;
              }}
              init={{
                menubar: false,
                resize: false,
                branding: false,
                plugins: "lists wordcount",
                elementpath: false,
                toolbar: "bold italic underline undo redo bullist",
                height: 300,
                content_style:
                  "body { font-family: Merriweather, Arial, sans-serif; font-size: 12px }",
              }}
              initialValue=""
              value={editorValue}
              onEditorChange={(content) => setEditorValue(content)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="relative max-md:mt-3 md:absolute md:bottom-4 md:right-4 bg-primary-500 text-white rounded-md px-6 py-2 text-sm"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default BioAi;
