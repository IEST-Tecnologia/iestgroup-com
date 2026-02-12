"use server";

import { getCurrentUser } from "@/lib/auth";
import {
  listBanners as storeListBanners,
  createBanner as storeCreateBanner,
  updateBanner as storeUpdateBanner,
  deleteBanner as storeDeleteBanner,
  listClients as storeListClients,
  createClient as storeCreateClient,
  updateClient as storeUpdateClient,
  deleteClient as storeDeleteClient,
} from "./store";
import type { Banner, Client } from "./types";
import { redirect } from "next/navigation";

export async function requireAdmin(): Promise<void> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");
  if (!user.allRoles.includes("admin")) throw new Error("Forbidden");
}

// --- Banner actions ---

export async function createBanner(formData: FormData): Promise<void> {
  await requireAdmin();
  await storeCreateBanner(formData);
  redirect("/admin/banners");
}

export async function updateBanner(formData: FormData): Promise<void> {
  const id = formData.get("id") as string;
  await requireAdmin();
  await storeUpdateBanner(id, formData);
}

export async function deleteBanner(id: string): Promise<boolean> {
  await requireAdmin();
  return storeDeleteBanner(id);
}

// --- Client actions ---

export async function listClients(): Promise<Client[]> {
  await requireAdmin();
  return storeListClients();
}

export async function createClient(formData: FormData): Promise<Client> {
  await requireAdmin();
  return storeCreateClient(formData);
}

export async function updateClient(
  id: string,
  formData: FormData,
): Promise<Client | null> {
  await requireAdmin();
  return storeUpdateClient(id, formData);
}

export async function deleteClient(id: string): Promise<boolean> {
  await requireAdmin();
  return storeDeleteClient(id);
}
