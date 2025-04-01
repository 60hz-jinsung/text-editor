"use client";

import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useEffect, useRef, useState } from "react";

export default function QuillEditorComponent() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (!editorRef.current) return;

    const quill = new Quill(editorRef.current, {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"],
        ],
      },
      placeholder: "내용을 입력해주세요.",
      theme: "snow",
    });

    quill.on("text-change", () => {
      if (quill.getText().length <= 1) return setHtmlContent("");
      setHtmlContent(quill.root.innerHTML);
    });
  }, []);

  return (
    <div>
      <div ref={editorRef}></div>
      <div>
        {htmlContent && (
          <div className="mt-4 p-4 border rounded">
            <h3 className="font-bold mb-2">HTML 내용:</h3>
            <div className="p-2 bg-gray-100 rounded">
              <pre className="whitespace-pre-wrap">{htmlContent}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
