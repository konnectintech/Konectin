import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";

function ContentEditor() {
  const [editorValue, setEditorValue] = useState();
  const [dirty, setDirty] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const editorRef = useRef(null);

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
          toolbar:
            "bold italic underline undo redo fontfamily fontsize alignleft aligncenter alignright alignjustify",
          height: 300,
          content_style: "body { font-family: Merriweather; font-size: 12px }",
        }}
        initialValue=""
        value={editorValue}
        onEditorChange={() => {
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
