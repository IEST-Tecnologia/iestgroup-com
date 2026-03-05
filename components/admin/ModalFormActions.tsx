"use client";

import { useFormStatus } from "react-dom";
import Link from "next/link";
import Button from "@/components/Button";

export default function ModalFormActions({
  cancelHref,
}: {
  cancelHref: string;
}) {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-end gap-3 pt-2">
      <Link href={cancelHref}>
        <Button type="button" variant="destructive" disabled={pending}>
          Cancelar
        </Button>
      </Link>
      <Button type="submit" disabled={pending}>
        {pending ? "Salvando..." : "Salvar"}
      </Button>
    </div>
  );
}
