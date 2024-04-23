import { useEffect, useRef, useState } from "react";
import { TbSend } from "react-icons/tb";
import { botIcon, orangeLoader } from "../../../../assets";
import { useCVContext } from "../../../../middleware/cv";
import EditorAISuggestion from "./editorAISuggestion";
import { AzureKeyCredential, OpenAIClient } from "@azure/openai";
import { botIdentity } from "../../../../utils/konecto";

function EditorAI() {
  const { CVData, setCVData } = useCVContext();
  const [botLoading, setBotLoading] = useState(false);
  const [messages, setMessages] = useState(() => CVData?.chats || []);
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
        content: `${botIdentity}. I have received a request from ${CVData.details.fullName}, who is applying for the position of ${CVData.details.jobPosition} at ${CVData.details.companyName}. The job description provided is as follows: ${CVData.description.jobDescription}. The professional bio of the user is: ${CVData.professionalBio}. The information provided about the company is: ${CVData.description.companyInfo}. The user's cover letter reads: ${CVData.content}. Everytime I revise, update, modify, change or alter the cover letter information, I will tag it in my consciousness that it is a special message and start the message with 'Updated Cover Letter: ', never should I make a mistake of replying a request that updates the cover letter with a response that does not start with 'Updated Cover Letter: ', When it is not a special message, I will strictly limit my response, not be more than 100 words. I can also provide additional personal information about the user if required or requested for. `,
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

    // PUT endpoint for user message

    const client = new OpenAIClient(
      "https://azure-openai-konectin.openai.azure.com/",
      new AzureKeyCredential(azureApiKey)
    );

    const deploymentId = "35Turbo";

    await client
      .getChatCompletions(deploymentId, prompts, {
        temperature: 0.4,
        top_p: 0.5,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 800,
        stop: null,
      })
      .then((result) => {
        const content = result.choices[0].message.content;

        // PUT endpoint for bot message

        if (content.includes("Updated Cover Letter:")) {
          setCVData((prev) => ({
            ...prev,
            content: content.split("Updated Cover Letter:")[1].trimStart(),
          }));

          setMessages((prev) => [
            ...prev,
            {
              type: "konecto",
              message: "I've updated your cover letter... Check it out",
            },
          ]);
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
