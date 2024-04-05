import { botIcon, download } from "../../../../assets";
import * as CiIcons from "react-icons/ci";
import ContentEditor from "./contentEditor";
import EditorSidebar from "./editorSidebar";
import { useState } from "react";

function CoverEditor() {
  const [chatBot, setChatBot] = useState(false);

  return (
    <div className="h-full w-full">
      <nav className="bg-black">
        <nav className="w-11/12 mx-auto max-w-screen-2xl flex justify-between items-center py-4">
          <nav className="flex-1 p-2"></nav>

          <div className="flex items-center gap-4">
            <div className="rounded-full w-8 h-8 bg-primary-500 flex items-center justify-center cursor-pointer">
              <img
                className="w-4 h-4 brightness-[500]"
                src={download}
                alt="download cover letter"
              />
            </div>

            <button className="bg-primary-600 py-2 px-6 text-white rounded flex items-center gap-1">
              <CiIcons.CiCirclePlus size="1.5rem" />
              <span className="text-sm">Create New</span>
            </button>
          </div>
        </nav>
      </nav>

      <div
        className={`${
          chatBot ? "md:pl-6" : ""
        } flex gap-6 items-stretch relative min-h-screen`}
      >
        <div className="w-11/12 mx-auto max-w-screen-lg flex max-md:flex-col-reverse gap-4 py-6">
          <ContentEditor />
          {!chatBot && (
            <div
              title="Konecto"
              onClick={() => setChatBot(true)}
              className="w-10 h-10 cursor-pointer ml-auto"
            >
              <img src={botIcon} alt="Konecto-bot" />
            </div>
          )}
        </div>
        <div
          className={`md:hidden ${
            chatBot ? "flex" : "hidden"
          } absolute w-full h-full z-10`}
          onClick={() => setChatBot(false)}
        />
        {chatBot && <EditorSidebar closeBot={() => setChatBot(false)} />}
      </div>
    </div>
  );
}

export default CoverEditor;
