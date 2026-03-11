"use client";

import { useState, useTransition } from "react";
import { Input } from "@/components/Input";
import { ImageEditor } from "@/components/BannerImageEditor";
import ModalFormActions from "./ModalFormActions";

interface Errors {
  image?: string;
  mobileImage?: string;
}

export default function BannerCreateForm({
  action,
}: {
  action: (formData: FormData) => Promise<void>;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [pending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newErrors: Errors = {};
    if (!formData.has("image")) newErrors.image = "Campo obrigatório";
    if (!formData.has("mobile_image"))
      newErrors.mobileImage = "Campo obrigatório";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    startTransition(async () => {
      await action(formData);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-5">
      <Input
        type="url"
        label="URL de destino"
        required
        placeholder="https://example.com"
        name="url"
      />

      <div className="flex flex-col gap-1">
        <ImageEditor
          label="Imagem desktop"
          name="image"
          aspect={512 / 171}
        />
        {errors.image && (
          <p className="text-xs text-red-600">{errors.image}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <ImageEditor
          label="Imagem mobile"
          name="mobile_image"
          aspect={768 / 853}
        />
        {errors.mobileImage && (
          <p className="text-xs text-red-600">{errors.mobileImage}</p>
        )}
      </div>

      <ModalFormActions cancelHref="/gestao/banners" pending={pending} />
    </form>
  );
}
