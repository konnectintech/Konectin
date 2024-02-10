import React, { useEffect, useRef, useState } from "react";
import { onSectionComplete } from "../verification";
import { AzureKeyCredential, OpenAIClient } from "@azure/openai";
import Suggestions from "../../../../../../components/suggestions";
import { Editor } from "@tinymce/tinymce-react";

function BioAi({
  data,
  editorValue,
  setEditorValue,
  closeModal,
  onInputChange,
  dirty,
  setDirty,
  errorMessage,
  setErrorMessage,
}) {
  const [responsibility, setResponsibility] = useState(
    data.basicInfo.profession
  );

  const editorRef = useRef(null);

  const handleAddSuggestion = (value) => {
    const content = editorRef.current.getContent();
    setEditorValue(`${content} ${value.content}`);
    onInputChange({ section: "bio", values: `${content} ${value.content}` });

    editorRef.current.setDirty(true);
  };

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
      closeModal();
    }
  };

  const [suggestions, setSuggestion] = useState([]);
  const [loading, setLoading] = useState(true);

  const azureApiKey = import.meta.env.VITE_OPENAI_KEY;

  const getJobProfile = async (n) => {
    setLoading(true);
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
      getJobProfile(i);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsibility]);

  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row gap-8 w-full">
        <div className="max-sm:hidden w-1/2">
          <Suggestions
            jobTitle={responsibility}
            handleChange={(value) => setResponsibility(value)}
            handleAddSuggestion={handleAddSuggestion}
            selected={editorValue}
            responsibilities={suggestions}
          />
        </div>
        <div className="sm:w-1/2">
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
                height: 300,
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
          <div className="absolute bottom-4 right-4 ">
            {dirty && (
              <p className="ml-auto w-max text-error-500">{errorMessage}</p>
            )}
            <button
              onClick={handleSubmit}
              className=" bg-primary-500 text-white rounded-md px-6 py-2 text-sm"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioAi;
