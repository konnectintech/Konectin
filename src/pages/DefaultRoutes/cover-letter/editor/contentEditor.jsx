/* eslint-disable react-hooks/exhaustive-deps */
import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import { useCVContext } from "../../../../middleware/cv";
import { useEffect } from "react";

function ContentEditor() {
  const {
    CVData: { content },
    onInputChange,
  } = useCVContext();

  const [editorValue, setEditorValue] = useState();
  const [dirty, setDirty] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const editorRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      onInputChange({
        section: "content",
        values: editorValue,
      });
      setDirty(false);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [editorValue]);

  return (
    <div className="flex-1">
      <Editor
        apiKey="muetp0kpit1cdofn0tsv7aym5shbxqnxzglv3000ilo9pc0m"
        onInit={(_, editor) => (editorRef.current = editor)}
        init={{
          menubar: false,
          resize: true,
          branding: false,
          plugins: "lists wordcount",
          elementpath: false,
          forced_root_block: "",
          toolbar:
            "bold italic underline undo redo fontfamily fontsize alignleft aligncenter alignright alignjustify",
          height: 600,
          content_style: "body { font-family: Comic Sans MS; font-size: 12px }",
        }}
        initialValue={content?.replaceAll("\n", "<br />")}
        value={editorValue}
        onEditorChange={() => {
          console.log(editorRef.current.getContent());
          setEditorValue(editorRef.current.getContent());
          editorRef.current.setDirty(true);
          setDirty(true);
          setErrorMessage("You have unsaved content!");
        }}
        onDirty={() => setDirty(true)}
      />
      {dirty && <p className="ml-auto w-max text-error-500">{errorMessage}</p>}
    </div>
  );
}

export default ContentEditor;
