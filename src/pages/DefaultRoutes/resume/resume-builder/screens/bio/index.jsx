import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import Suggestions from "../../../../../../components/suggestions";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";
import { AzureKeyCredential, OpenAIClient } from "@azure/openai";

const Bio = ({ data, onInputChange }) => {
  const [responsibility, setResponsibility] = useState(
    data.basicInfo.profession
  );
  const [editorValue, setEditorValue] = useState(data?.bio);
  const [dirty, setDirty] = useState(false);

  const editorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      onInputChange({ section: "bio", values: editorValue });
      setDirty(false);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [editorValue, onInputChange]);

  const handleAddSuggestion = (value) => {
    const content = editorRef.current.getContent();
    setEditorValue(`${content} <ul><li>${value}</li></ul>`);
    editorRef.current.setDirty(true);
  };

  const [suggestions, setSuggestion] = useState([]);
  const [loading, setLoading] = useState(true);

  const azureApiKey = import.meta.env.VITE_OPENAI_KEY;

  const getJobProfile = async () => {
    setLoading(true);
    const messages = [
      {
        role: "user",
        content: `Using list type, generate 5 professional biography for ${
          data.basicInfo.firstName
        } ${data.basicInfo.lastName}, ${responsibility} at ${
          data.jobExperience[0].company
        }. Highlight ${data.basicInfo.firstName} ${
          data.basicInfo.lastName
        }'s key skills in ${data.skills.map(
          (skill) => `${skill} `
        )}, experience, and accomplishments in 5 of sentences/paragraphs`,
      },
    ];

    try {
      const client = new OpenAIClient(
        "https://azure-openai-konectin.openai.azure.com/",
        new AzureKeyCredential(azureApiKey)
      );
      const deploymentId = "Konectin-1";
      const result = await client.getChatCompletions(deploymentId, messages);

      const unorderedResponse = result.choices[0].message.content.replace(
        /\d+\./g,
        "- "
      );

      let correctedResponse = unorderedResponse.split("-  ");
      correctedResponse.splice(0, 1);

      setSuggestion(correctedResponse);
    } catch (err) {
      console.error("The sample encountered an error:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getJobProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsibility]);

  return (
    <div className="mt-8 flex flex-col justify-between items-start mx-auto">
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
          <div className="max-sm:hidden w-1/2">
            <Suggestions
              jobTitle={responsibility}
              handleChange={(value) => setResponsibility(value)}
              handleAddSuggestion={handleAddSuggestion}
              loading={loading}
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
                  content_style:
                    "body { font-family: Merriweather, Arial, sans-serif; font-size: 12px }",
                }}
                onEditorChange={() => {
                  setEditorValue(editorRef.current.getContent());
                  setDirty(true);
                }}
                value={editorValue}
                onDirty={() => setDirty(true)}
              />

              {dirty && <p>You have unsaved content!</p>}
            </div>
          </div>
          <div className="max-lg:hidden">
            <SelectedTemplates data={data} />
          </div>
        </div>
      </div>

      <div className="mt-12 w-full">
        <NavigationButton
          back={() => navigate("/resume/builder/skills")}
          cont={() => navigate("/resume/builder/preview")}
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