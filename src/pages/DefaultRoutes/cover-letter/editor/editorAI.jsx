import { useEffect, useRef, useState } from "react";
import { TbSend } from "react-icons/tb";
import { botIcon, orangeLoader } from "../../../../assets";
import { useCVContext } from "../../../../middleware/cv";
import EditorAISuggestion from "./editorAISuggestion";
import { AzureKeyCredential, OpenAIClient } from "@azure/openai";
import { botIdentity } from "../../../../utils/konecto";

function EditorAI() {
  const { CVData } = useCVContext();
  const [botLoading, setBotLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const messageEnd = useRef(null);
  const [promptMessage, setPromptMessage] = useState("");

  useEffect(() => {
    // Scroll to the bottom
    messageEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const azureApiKey = import.meta.env.VITE_OPENAI_KEY;

  const konectoResponse = async (message) => {
    const prompts = [
      {
        role: "system",
        content: `${botIdentity}. I have received a request from ${CVData.details.fullName}, who is applying for the position of ${CVData.details.jobPosition} at ${CVData.details.companyName}. The job description provided is as follows: ${CVData.description.jobDescription}. The professional bio of the user is: ${CVData.professionalBio}. The information provided about the company is: ${CVData.description.companyInfo}. The user's cover letter reads: ${CVData.content}. If there is a need to revise, update, modify, change or alter the cover letter information, I will start the message with 'Updated Cover Letter: '. I can also provide additional personal information about the user if required or requested for.`,
      },
      ...messages.map((prompt) => ({
        role: prompt.type === "user" ? prompt.type : "assistant",
        content: prompt.message,
      })),
      {
        role: "user",
        content: message,
      },
    ];

    setBotLoading(true);

    const client = new OpenAIClient(
      "https://azure-openai-konectin.openai.azure.com/",
      new AzureKeyCredential(azureApiKey)
    );
    const deploymentId = "35Turbo";

    await client
      .getChatCompletions(deploymentId, prompts, {
        temperature: 0.5,
        top_p: 0.95,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 800,
        stop: null,
      })
      .then((result) => {
        const content = result.choices[0].message.content;
        if (content.includes("Updated Cover Letter:")) {
          console.log(content.split("Updated Cover Letter:"));
        } else {
          setMessages((prev) => [
            ...prev,
            { type: "konecto", message: content },
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessages((prev) => [
          ...prev,
          { type: "konecto", message: "Encountered Error. Try Again!" },
        ]);
      });

    setBotLoading(false);
  };

  const handleSubmit = (message) => {
    setMessages((prev) => [...prev, { type: "user", message: message }]);

    // Call endpoint for bot to respond then load the bot
    konectoResponse(message);
  };

  return (
    <div className="flex flex-col gap-5 text-xs bg-neutral-1100 max-h-[70vh] rounded shadow">
      <div className="space-y-2 overflow-y-auto flex-1 p-4">
        <EditorAISuggestion botLoading={botLoading} handleChat={handleSubmit} />
        {messages.map((chat, id) =>
          chat.type === "user" ? (
            <div
              key={chat.type + id}
              className="bg-primary-500 text-primary-100 w-fit rounded p-3 ml-auto"
            >
              {chat.message}
            </div>
          ) : (
            <div
              key={chat.type + id}
              className="bg-neutral-500 text-neutral-100 w-fit rounded p-3 mr-auto"
            >
              {chat.message}
            </div>
          )
        )}

        {botLoading && (
          <div className="flex gap-1 item-center">
            <div className="w-10 bg-white flex items-center justify-center rounded-full">
              <img className="w-8" src={botIcon} alt="Konecto-bot" />
            </div>
            <img className="w-8" src={orangeLoader} alt="Loading" />
          </div>
        )}

        <div ref={messageEnd} />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!botLoading) {
            handleSubmit(promptMessage);
            setPromptMessage("");
          }
        }}
        className="px-4 pb-4 relative flex items-center"
      >
        <input
          type="text"
          placeholder="Type message..."
          id="messagebox"
          value={promptMessage}
          onChange={(e) => setPromptMessage(e.target.value)}
          onInput={(e) => setPromptMessage(e.target.value)}
          className="pl-4 pr-9 py-3 text-[11px] w-full text-primary-400 border border-primary-300 outline-0 bg-neutral-1000 focus:border-primary-500 rounded-lg"
        />
        <button type="submit" className="absolute right-7">
          <TbSend className="text-primary-500" size="1.2rem" />
        </button>
      </form>
    </div>
  );
}

export default EditorAI;
