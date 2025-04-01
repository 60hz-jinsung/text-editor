import QuillEditorComponent from "./QuillEditorComponent";

export default function QuillEditorPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">텍스트 에디터</h1>
      <QuillEditorComponent />
    </div>
  );
}
