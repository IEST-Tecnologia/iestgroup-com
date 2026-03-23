"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import Toast from "@/components/Toast";

type ToastVariant = "success" | "error";

interface ToastItem {
  id: number;
  message: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  addToast: (message: string, variant: ToastVariant) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const nextId = useRef(0);

  const addToast = useCallback((message: string, variant: ToastVariant) => {
    const id = ++nextId.current;
    setToasts((prev) => [...prev, { id, message, variant }]);
  }, []);

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {toasts.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse gap-2">
          {toasts.map((t) => (
            <Toast
              key={t.id}
              message={t.message}
              variant={t.variant}
              onClose={() => remove(t.id)}
            />
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
}
