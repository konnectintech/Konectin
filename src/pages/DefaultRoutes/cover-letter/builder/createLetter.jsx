import axios from "axios";
import { useNavigate } from "react-router";
import { useCVContext } from "../../../../middleware/cv";
import Preloader from "../../../../components/preloader";
import { useState } from "react";
import { AzureKeyCredential, OpenAIClient } from "@azure/openai";

function CreateLetter() {
  const { CVData, setCVData } = useCVContext();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const primaryURL = import.meta.env.VITE_CLIENT_SERVER_URL;

  const azureApiKey = import.meta.env.VITE_OPENAI_KEY;

  const generateCV = async () => {
    const messages = [
      {
        role: "user",
        content: `I am ${CVData.details.fullName}, who is applying for the position of ${CVData.details.jobPosition} at ${CVData.details.companyName}. The job description provided is as follows: ${CVData.description.jobDescription}. The professional bio of the user is: ${CVData.professionalBio}. The information provided about the company is: ${CVData.description.companyInfo}. Write a concise cover letter for me`,
      },
    ];

    const client = new OpenAIClient(
      "https://azure-openai-konectin.openai.azure.com/",
      new AzureKeyCredential(azureApiKey)
    );
    const deploymentId = "35Turbo";
    await client
      .getChatCompletions(deploymentId, messages, {
        temperature: 0.5,
        top_p: 0.95,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 800,
        stop: null,
      })
      .then(async (result) => {
        await axios
          .post(`${primaryURL}/letter`, {
            ...CVData,
            content: result.choices[0].message.content,
          })
          .then((res) => {
            setCVData({ ...res.data.data });
            setLoading(false);
            navigate("/cover-letter/editor");
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleSubmit = async () => {
    setLoading(true);

    generateCV();
  };

  return (
    <div className="flex items-center flex-col">
      {loading && <Preloader />}
      <h2 className="py-4 mb-3 font-bold text-2xl md:text-4xl leading-10">
        <span className="text-secondary-500">Great! </span>
        You've provided all the necessary information.
      </h2>
      <p className="w-full max-w-2xl text-center ">
        Now, let's create a compelling cover letter that truly showcases your
        unique skills and passion for the role.{" "}
      </p>
      <button
        type="submit"
        className="text-white mt-4 w-fit rounded-md bg-primary-600 py-3 px-12"
        onClick={handleSubmit}
      >
        Create Cover Letter
      </button>
    </div>
  );
}

export default CreateLetter;
