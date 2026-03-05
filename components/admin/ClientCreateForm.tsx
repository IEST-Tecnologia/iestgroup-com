"use client";

import { useState, useTransition } from "react";
import { ImageEditor } from "@/components/BannerImageEditor";
import ModalFormActions from "./ModalFormActions";

export default function ClientCreateForm({
  action,
}: {
  action: (formData: FormData) => Promise<void>;
}) {
  const [error, setError] = useState<string | undefined>();
  const [pending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (!formData.has("image")) {
      setError("Campo obrigatório");
      return;
    }

    setError(undefined);
    startTransition(async () => {
      await action(formData);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-5">
      <div className="flex flex-col gap-1">
        <ImageEditor label="Logo" name="image" aspect={1} />
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
      <ModalFormActions cancelHref="/gestao/clientes" pending={pending} />
    </form>
  );
}
