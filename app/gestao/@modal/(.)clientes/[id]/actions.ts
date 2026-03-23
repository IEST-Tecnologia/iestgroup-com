"use server";

import { updateClient } from "@/lib/admin/store";
import { revalidatePath } from "next/cache";

export type ClientActionState = { error: string } | { success: true } | null;

export async function updateClientAction(
  _prev: ClientActionState,
  formData: FormData,
): Promise<ClientActionState> {
  const id = formData.get("id") as string;
  try {
    await updateClient(id, formData);
    revalidatePath("/gestao/clientes");
    return { success: true };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Erro ao atualizar cliente" };
  }
}