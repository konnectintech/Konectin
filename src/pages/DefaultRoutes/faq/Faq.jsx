import { useRef } from "react";
import { FAQ } from "../resume/resumeData";

function Faq() {
  const answerArray = useRef("answer");
  const symbolArray = useRef("symbol");

  return (
    <div className="flex flex-col gap-4 p-16">
      {FAQ.length > 0 &&
        FAQ.map((value, index) => {
          return (
            <div
              className="p-2 border border-2 border-black rounded-lg text-sm w-fit"
              key={index}
            >
              <div
                className="flex items-center gap-2"
                onClick={() => {
                  if (answerArray[index].classList.contains("flex")) {
                    answerArray[index].classList.toggle("hidden");
                    answerArray[index].classList.remove("flex");
                  } else {
                    answerArray[index].classList.remove("hidden");
                    answerArray[index].classList.toggle("flex");
                  }

                  answerArray[index].classList.contains("flex")
                    ? (symbolArray[index].innerHTML = "-")
                    : (symbolArray[index].innerHTML = "+");
                }}
              >
                <div className="symbol px-1 border border-2 border-black font-bold rounded-sm">
                  +
                </div>
                <div className="font-bold">{value.question}</div>
              </div>
              <div className="pt-4 hidden answer">{value.answer}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Faq;
