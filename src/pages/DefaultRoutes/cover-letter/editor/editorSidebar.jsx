import * as IoIcons from "react-icons/io5";
import { botIcon } from "../../../../assets";
import EditorAI from "./editorAI";

function EditorSidebar({ closeBot }) {
  return (
    <div className="max-md:absolute max-md:right-0 max-md:h-full z-10 max-w-[330px] lg:max-w-[350px] w-full bg-white p-6 space-y-8">
      <IoIcons.IoArrowForwardCircleOutline
        onClick={closeBot}
        className="cursor-pointer"
        size="1.4rem"
      />

      <div className="space-y-2">
        <figure className="flex gap-2 text-xs lg:text-sm items-center font-semibold">
          <img className="w-10" src={botIcon} alt="Konecto bot" />
          <figcaption>Edit Cover Letter with AI</figcaption>
        </figure>

        <EditorAI />
      </div>
    </div>
  );
}

export default EditorSidebar;
