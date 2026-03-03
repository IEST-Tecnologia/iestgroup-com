"use server";

import { createClient } from "@/lib/admin/store";
import { revalidatePath } from "next/cache";

export type ClientActionState = { error: string } | { success: true } | null;

export async function createClientAction(
  _prev: ClientActionState,
  formData: FormData,
): Promise<ClientActionState> {
  try {
    await createClient(formData);
    revalidatePath("/gestao/clientes");
    return { success: true };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Erro ao criar cliente" };
  }
}