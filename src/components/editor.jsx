import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TextEditor() {
  const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };
  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          menubar: false,
          resize: false,
          branding: false,
          plugins: "advlist lists",
          elementpath: false,
          toolbar: "undo redo bold italic underline bullist",
          content_style:
            "body { font-family:Merriweather,Arial,sans-serif; font-size:12px, }",
        }}
      />
    </>
  );
}
