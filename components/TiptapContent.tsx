"use client";

import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";

type TiptapContentProps = {
  content: JSONContent;
  className?: string;
};

export default function TiptapContent({
  content,
  className = "",
}: TiptapContentProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: true,
      }),
    ],
    content,
    editable: false,
    immediatelyRender: false,
  });

  return (
    <div className={`tiptap-content ${className}`}>
      <EditorContent editor={editor} />
    </div>
  );
}