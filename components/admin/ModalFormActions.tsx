"use client";

import { useFormStatus } from "react-dom";
import Link from "next/link";
import Button from "@/components/Button";

export default function ModalFormActions({
  cancelHref,
  pending: pendingProp,
}: {
  cancelHref: string;
  pending?: boolean;
}) {
  const { pending: formPending } = useFormStatus();
  const pending = pendingProp ?? formPending;

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
