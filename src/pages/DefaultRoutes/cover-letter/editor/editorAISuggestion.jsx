import { useState } from "react";
import { useCVContext } from "../../../../middleware/cv";

function EditorAISuggestion({ botLoading, handleChat }) {
  const { CVData } = useCVContext();
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

  const handleSuggestionClick = (index) => {
    setSuggestions((prompts) =>
      prompts.map((suggest, id) =>
        id === index
          ? { ...suggest, selected: true }
          : { ...suggest, selected: false }
      )
    );

    handleChat(suggestions[index].text);
  };

  return (
    <>
      <div className="bg-neutral-900 p-3">{`👋 Hi ${
        CVData?.details?.fullName.split(" ")[1]
      }! Now that we've created your cover letter, we can make it even better. Feel free to ask me to make changes or choose from the quick prompts below.`}</div>
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
    </>
  );
}

export default EditorAISuggestion;
