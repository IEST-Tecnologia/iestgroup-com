import { generateHTML } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import { JSONContent } from "@tiptap/react";
import { useMemo } from "react";

type TiptapContentProps = {
  content: JSONContent;
  className?: string;
};

export default function TiptapContent({
  content,
  className = "",
}: TiptapContentProps) {
  const html = useMemo(() => {
    return generateHTML(content, [
      StarterKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({ openOnClick: true }),
    ]);
  }, [content]);

  return (
    <div
      className={`tiptap-content ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
