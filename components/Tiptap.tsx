"use client";

import { useEditor, EditorContent, Editor, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import IconBulletList from "@/assets/vagas/bullet-list.svg";
import IconDecimalList from "@/assets/vagas/decimal-list.svg";
import IconQuote from "@/assets/vagas/quote.svg";
import IconAlignLeft from "@/assets/vagas/align-left.svg";
import IconAlignCenter from "@/assets/vagas/align-center.svg";
import IconAlignRight from "@/assets/vagas/align-right.svg";
import IconLink from "@/assets/vagas/link.svg";
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
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`flex justify-center items-center border border-gray-500 rounded-md font-bold italic w-8 h-8 ${editor.isActive("orderedList") ? "bg-white hover:bg-gray-200" : "bg-gray-200 hover:bg-white"}`}
      >
        <Image
          className="w-4 h-4"
          src={IconDecimalList}
          alt="Ícone de lista de números"
        />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`flex justify-center items-center border border-gray-500 rounded-md font-bold w-8 h-8 ${editor.isActive("blockquote") ? "bg-white hover:bg-gray-200" : "bg-gray-200 hover:bg-white"}`}
      >
        <Image className="w-5 h-5" src={IconQuote} alt="Ícone de citação" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`flex justify-center items-center border border-gray-500 rounded-md font-bold w-8 h-8 ${editor.isActive({ textAlign: "left" }) ? "bg-white hover:bg-gray-200" : "bg-gray-200 hover:bg-white"}`}
      >
        <Image className="w-5 h-5" src={IconAlignLeft} alt="Ícone de alinhar à esquerda" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`flex justify-center items-center border border-gray-500 rounded-md font-bold w-8 h-8 ${editor.isActive({ textAlign: "center" }) ? "bg-white hover:bg-gray-200" : "bg-gray-200 hover:bg-white"}`}
      >
        <Image className="w-5 h-5" src={IconAlignCenter} alt="Ícone de alinhar ao centro" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`flex justify-center items-center border border-gray-500 rounded-md font-bold w-8 h-8 ${editor.isActive({ textAlign: "right" }) ? "bg-white hover:bg-gray-200" : "bg-gray-200 hover:bg-white"}`}
      >
        <Image className="w-5 h-5" src={IconAlignRight} alt="Ícone de alinhar à direita" />
      </button>
      <button
        onClick={() => {
          const url = window.prompt("URL do link:");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
        className={`flex justify-center items-center border border-gray-500 rounded-md font-bold w-8 h-8 ${editor.isActive("link") ? "bg-white hover:bg-gray-200" : "bg-gray-200 hover:bg-white"}`}
      >
        <Image className="w-5 h-5" src={IconLink} alt="Ícone de link" />
      </button>
    </div>
  );
};

const Tiptap = ({ onChange }: { onChange?: (content: JSONContent) => void }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    editorProps: {
      attributes: {
        class: "p-3",
      },
    },
    content: "<p>Hello World! 🌎️</p>",
    onUpdate: ({ editor }) => {
      onChange?.(editor.getJSON());
    },

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
