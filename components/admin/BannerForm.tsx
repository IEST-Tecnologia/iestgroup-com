"use client";

import { useState } from "react";
import type { CreateBannerInput } from "@/lib/admin/types";

interface BannerFormProps {
  initialValues?: Partial<CreateBannerInput>;
  onSubmit: (values: CreateBannerInput) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
}

export default function BannerForm({
  initialValues = {},
  onSubmit,
  onCancel,
  isSubmitting,
}: BannerFormProps) {
  const [url, setUrl] = useState(initialValues.url ?? "");
  const [imageUrl, setImageUrl] = useState(initialValues.imageUrl ?? "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await onSubmit({ url: url.trim(), imageUrl: imageUrl.trim() });
  }

  const inputClass =
    "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          URL de destino
        </label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          placeholder="https://example.com"
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          URL da imagem
        </label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
          placeholder="https://cdn.example.com/banner.jpg"
          className={inputClass}
        />
        {imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt="Preview"
            className="mt-2 h-20 object-contain border border-gray-200 rounded"
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
