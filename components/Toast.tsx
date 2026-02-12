"use client";

import { useEffect, useState } from "react";

export default function Toast({
  message,
  variant,
  onClose,
}: {
  message: string;
  variant: "success" | "error";
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg px-5 py-3 text-white shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      } ${variant === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      <span>{message}</span>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300);
        }}
        className="ml-2 font-bold cursor-pointer"
        aria-label="Fechar"
      >
        &times;
      </button>
    </div>
  );
}
