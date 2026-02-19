"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AdminModal({
  title = "",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={(e) => {
        if (e.target === overlayRef.current) router.back();
      }}
    >
      <div className="bg-white rounded shadow-lg w-full max-w-lg mx-4">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-foreground">{title}</h2>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none cursor-pointer"
            aria-label="Fechar"
            onClick={() => router.back()}
          >
            &times;
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}
