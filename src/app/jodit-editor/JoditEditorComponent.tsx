"use client";

import dynamic from "next/dynamic";
import React, { useState, useMemo } from "react";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function JoditEditorComponent() {
  const [content, setContent] = useState("");

  const editConfig = useMemo(
    () => ({
      readonly: false,
      placeholder: "내용을 입력해주세요.",
      uploader: {
        insertImageAsBase64URI: true,
      },
      language: "ko",
      buttons: BUTTON_LIST,
    }),
    []
  );

  const viewConfig = useMemo(
    () => ({
      readonly: true,
      toolbar: false,
      showCharsCounter: false,
      showWordsCounter: false,
      language: "ko",
      events: {
        afterInit: (editor: any) => {
          editor.container.addEventListener("click", (event: any) => {
            const target = event.target as HTMLElement;
            if (target.tagName === "A") {
              const href = target.getAttribute("href");
              if (href) {
                window.open(href, "_blank");
              }
            }
          });
        },
      },
    }),
    []
  );

  return (
    <div className="flex flex-col gap-y-[15px]">
      <div>
        <h1 className="text-2xl font-bold mb-4">텍스트 에디터</h1>
        <JoditEditor
          value={content}
          config={editConfig}
          onBlur={(newContent) => setContent(newContent)}
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">텍스트 View</h1>
        <JoditEditor value={content} config={viewConfig} />
      </div>
    </div>
  );
}

const BUTTON_LIST = [
  "undo",
  "redo",
  "|",
  "bold",
  "strikethrough",
  "underline",
  "italic",
  "|",
  "superscript",
  "subscript",
  "|",
  "align",
  "|",
  "ul",
  "ol",
  "outdent",
  "indent",
  "|",
  "font",
  "fontsize",
  "brush",
  "paragraph",
  "|",
  "image",
  "link",
  "table",
  "|",
  "hr",
  "|",
  "fullsize",
  "selectall",
  "print",
  "|",
];
