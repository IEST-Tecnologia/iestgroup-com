"use client";

import dynamic from "next/dynamic";
import { JSONContent } from "@tiptap/react";

const TiptapContent = dynamic(() => import("@/components/TiptapContent"), {
  ssr: false,
  loading: () => <div>Carregando...</div>,
});

type Props = {
  content: JSONContent;
  className?: string;
};

export default function TiptapContentClient({ content, className }: Props) {
  return <TiptapContent content={content} className={className} />;
}
