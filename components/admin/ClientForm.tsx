"use client";

import { useState, useRef } from "react";

interface ClientFormProps {
  initialValues?: { logoUrl?: string };
  onSubmit: (formData: FormData) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
}

export default function ClientForm({
  initialValues = {},
  onSubmit,
  onCancel,
  isSubmitting,
}: ClientFormProps) {
  const [preview, setPreview] = useState<string | null>(
    initialValues.logoUrl ?? null,
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(initialValues.logoUrl ?? null);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData();
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      formData.append("logo", file);
    }
    await onSubmit(formData);
  }

  const inputClass =
    "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Logo
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required={!initialValues.logoUrl}
          className={inputClass}
        />
        {preview && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview}
            alt="Preview"
            className="mt-2 h-16 object-contain border border-gray-200 rounded"
          />
        )}
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm text-gray-600 hover:text-foreground transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-2 text-sm font-semibold text-white bg-primary rounded hover:bg-secondary transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </form>
  );
}
