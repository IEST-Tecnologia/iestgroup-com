"use client";

import { useState } from "react";
import type { CreateClientInput } from "@/lib/admin/types";

interface ClientFormProps {
  initialValues?: Partial<CreateClientInput>;
  onSubmit: (values: CreateClientInput) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
}

export default function ClientForm({
  initialValues = {},
  onSubmit,
  onCancel,
  isSubmitting,
}: ClientFormProps) {
  const [logo, setLogo] = useState(initialValues.logo ?? "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await onSubmit({ logo: logo.trim() });
  }

  const inputClass =
    "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          URL do logo
        </label>
        <input
          type="url"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
          required
          placeholder="https://cdn.example.com/logo.png"
          className={inputClass}
        />
        {logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo}
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
