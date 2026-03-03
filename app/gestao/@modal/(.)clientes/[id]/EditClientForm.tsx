"use client";

import { useActionState, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Button from "@/components/Button";
import { ImageEditor } from "@/components/BannerImageEditor";
import Toast from "@/components/Toast";
import { updateClientAction } from "./actions";

interface EditClientFormProps {
  id: string;
  logoUrl: string;
}

export function EditClientForm({ id, logoUrl }: EditClientFormProps) {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(updateClientAction, null);
  const [toastId, setToastId] = useState(0);
  const noop = useCallback(() => {}, []);

  // Increment key on every submit so Toast remounts on each new result
  const handleAction = (formData: FormData) => {
    setToastId((n) => n + 1);
    formAction(formData);
  };

  // Navigate after success — no setState in this effect
  useEffect(() => {
    if (!state || !("success" in state)) return;
    const timer = setTimeout(() => router.push("/gestao/clientes"), 1500);
    return () => clearTimeout(timer);
  }, [state, router]);

  return (
    <>
      {state && !isPending && (
        <Toast
          key={toastId}
          message={"error" in state ? state.error : "Cliente atualizado com sucesso!"}
          variant={"error" in state ? "error" : "success"}
          onClose={noop}
        />
      )}
      <form action={handleAction} className="space-y-4 p-5">
        <input hidden name="id" value={id} readOnly />
        <ImageEditor label="Logo" required name="image" aspect={1} defaultValue={logoUrl} />
        <div className="flex justify-end gap-3 pt-2">
          <Link href="/gestao/clientes">
            <Button type="button" variant="destructive">
              Cancelar
            </Button>
          </Link>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Salvando..." : "Salvar"}
          </Button>
        </div>
      </form>
    </>
  );
}