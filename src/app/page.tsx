"use client";

import Link from "next/link";

export default function Home() {
  // Uncomment the line below if you want automatic redirection to the editor page
  // redirect("/jodit-editor");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">텍스트 에디터 테스트</h1>
      <Link
        href="/jodit-editor"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        jodit 에디터 열기
      </Link>
    </div>
  );
}
