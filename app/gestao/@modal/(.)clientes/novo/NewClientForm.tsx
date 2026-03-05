"use client";

import { useActionState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Button from "@/components/Button";
import { ImageEditor } from "@/components/BannerImageEditor";
import { useToast } from "@/context/ToastContext";
import { createClientAction } from "./actions";

export function NewClientForm() {
  const router = useRouter();
  const { addToast } = useToast();
  const [state, formAction, isPending] = useActionState(createClientAction, null);
  const toastedState = useRef(state);

  useEffect(() => {
    if (!state || isPending || state === toastedState.current) return;
    toastedState.current = state;
    addToast(
      "error" in state ? state.error : "Cliente criado com sucesso!",
      "error" in state ? "error" : "success",
    );
  }, [state, isPending, addToast]);

  // Navigate after success
  useEffect(() => {
    if (!state || !("success" in state)) return;
    const timer = setTimeout(() => router.push("/gestao/clientes"), 1500);
    return () => clearTimeout(timer);
  }, [state, router]);

  return (
    <>
      <form action={formAction} className="space-y-4 p-5">
        <ImageEditor label="Logo" required name="image" aspect={1} />
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
