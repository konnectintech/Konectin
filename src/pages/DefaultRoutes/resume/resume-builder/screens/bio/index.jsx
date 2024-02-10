import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import Suggestions from "../../../../../../components/suggestions";
import NavigationButton from "../navigationButton";
import SelectedTemplates from "../../resume-templates";
import { AzureKeyCredential, OpenAIClient } from "@azure/openai";
import { onSectionComplete } from "../verification";

const Bio = ({ data, onInputChange }) => {
  const [responsibility, setResponsibility] = useState(
    data.basicInfo.profession
  );
  const [editorValue, setEditorValue] = useState(data?.bio);
  const [dirty, setDirty] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    setEditorValue(`${content} ${value.content}`);
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
      navigate("/resume/builder/preview");
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
