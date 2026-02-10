"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import IconBulletList from "@/assets/vagas/bullet-list.svg";
import Image from "next/image";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="w-full flex gap-3 bg-gray-100 p-3 shadow-sm">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`border border-gray-500 rounded-md font-bold w-8 h-8 ${editor.isActive("bold") ? "bg-white hover:bg-gray-200" : "bg-gray-200 hover:bg-white"}`}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`border border-gray-500 rounded-md font-bold italic w-8 h-8 ${editor.isActive("italic") ? "bg-white hover:bg-gray-200" : "bg-gray-200 hover:bg-white"}`}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`flex justify-center items-center border border-gray-500 rounded-md font-bold italic w-8 h-8 ${editor.isActive("bulletList") ? "bg-white hover:bg-gray-200" : "bg-gray-200 hover:bg-white"}`}
      >
        <Image className="w-5 h-5" src={IconBulletList} alt="Ícone de lista" />
      </button>
    </div>
  );
};

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "p-3 list-disc",
      },
    },
    content: "<p>Hello World! 🌎️</p>",

    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return (
    <div className="border border-gray-800 rounded-md ">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
