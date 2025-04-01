"use client";

import dynamic from "next/dynamic";
import React, { useState, useMemo } from "react";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function JoditEditorComponent() {
  const [content, setContent] = useState("");

  const config = useMemo(
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

  return (
    <div>
      <JoditEditor
        value={content}
        config={config}
        tabIndex={1}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
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
