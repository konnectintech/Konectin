import { useEffect, useRef, useState } from "react";
import { TbSend } from "react-icons/tb";
import { botIcon, orangeLoader } from "../../../../assets";
import { useCVData } from "../../../../middleware/cv";

function EditorAI() {
  const { CVData } = useCVData();
  const [botLoading, setBotLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const messageEnd = useRef(null);
  const [promptMessage, setPromptMessage] = useState("");
  const [firstPrompt, setFirstPrompt] = useState(
    `👋 Hi ${
      CVData?.details?.fullName.split(" ")[1]
    }! Now that we've created your cover letter, we can make it even better. Feel free to ask me to make changes or choose from the quick prompts below.`
  );

  const [suggestions, setSuggestions] = useState([
    { text: "Improve the opening line", selected: false },
    { text: "Highlight my leadership skills", selected: false },
    { text: "Talk more about my technical skills", selected: false },
    { text: "Add details about my work experience", selected: false },
    { text: "Mention my educational background", selected: false },
    { text: "Include my volunteer or internship experience", selected: false },
    { text: "Discuss my problem-solving abilities", selected: false },
    { text: "Add my notable achievements", selected: false },
  ]);

  useEffect(() => {
    // Scroll to the bottom
    messageEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSuggestionClick = (index) => {
    setSuggestions((prompts) =>
      prompts.map((suggest, id) =>
        id === index
          ? { ...suggest, selected: true }
          : { ...suggest, selected: false }
      )
    );

    setMessages((prev) => [
      ...prev,
      { type: "user", text: suggestions[index].text },
    ]);

    // Call endpoint for bot to respond then load the bot
    setBotLoading(true);

    // when bot responds setbotloading to false
  };

  return (
    <div className="flex flex-col gap-5 text-xs bg-neutral-1100 max-h-[70vh] rounded shadow">
      <div className="space-y-2 overflow-y-auto flex-1 p-4">
        <div className="bg-neutral-900 p-3">{firstPrompt}</div>
        <div className="text-neutral-100 text-sm font-semibold">
          Select quick prompt
        </div>
        <div className="flex flex-col gap-2">
          {suggestions.map((suggestedPrompt, id) => (
            <div
              key={suggestedPrompt.text}
              onClick={() => !botLoading && handleSuggestionClick(id)}
              className={`p-2 ${
                suggestedPrompt.selected
                  ? "text-primary-100 bg-primary-500"
                  : "bg-primary-100 text-primary-500 hover:bg-primary-200 hover:text-primary-100"
              } w-fit rounded-lg cursor-pointer duration-500`}
            >
              {suggestedPrompt.text}
            </div>
          ))}
        </div>

        {messages.map((chat) =>
          chat.type === "user" ? (
            <div className="bg-primary-500 text-primary-100 w-fit rounded p-3 ml-auto">
              {chat.text}
            </div>
          ) : (
            <div className="bg-neutral-500 text-neutral-100 w-fit rounded p-3 mr-auto">
              {chat.text}
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
      <form className="px-4 pb-4 relative flex items-center">
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
