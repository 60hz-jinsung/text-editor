"use client";

import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useEffect, useRef, useState } from "react";

export default function QuillEditorComponent() {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (!editorRef.current || !viewerRef.current) return;

    // 에디터 초기화
    const quill = new Quill(editorRef.current, {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          [{ indent: "-1" }, { indent: "+1" }],
          ["link"],
          ["image", "code-block"],
        ],
      },
      placeholder: "내용을 입력해주세요.",
      theme: "snow",
    });

    // 뷰어 초기화
    const viewer = new Quill(viewerRef.current, {
      modules: {
        toolbar: false,
      },
      readOnly: true,
      theme: "snow",
    });

    quill.on("text-change", () => {
      if (quill.getText().length <= 1) {
        setHtmlContent("");
        viewer.setContents([{ insert: "\n" }]);
      } else {
        const content = quill.root.innerHTML;
        setHtmlContent(content);
        viewer.clipboard.dangerouslyPasteHTML(content);
      }
    });
  }, []);

  return (
    <div className="flex flex-col gap-y-[15px]">
      <div>
        <h1 className="text-2xl font-bold mb-4">텍스트 에디터</h1>
        <div ref={editorRef}></div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">텍스트 View</h1>
        <div ref={viewerRef}></div>
      </div>
    </div>
  );
}
