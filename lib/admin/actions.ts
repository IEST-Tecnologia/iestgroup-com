"use server";

import { getCurrentUser } from "@/lib/auth";
import {
  listJobs as storeListJob,
  createJob as storeCreateJob,
  getJobBySlug as storeGetJobBySlug,
  updateJob as storeUpdateJob,
  listBanners as storeListBanners,
  createBanner as storeCreateBanner,
  updateBanner as storeUpdateBanner,
  deleteBanner as storeDeleteBanner,
  listClients as storeListClients,
  createClient as storeCreateClient,
  updateClient as storeUpdateClient,
  deleteClient as storeDeleteClient,
} from "./store";
import type {
  Banner,
  Client,
  CreateBannerInput,
  UpdateBannerInput,
  CreateClientInput,
  UpdateClientInput,
  JobResponse,
  Job,
} from "./types";
import { redirect } from "next/navigation";

async function requireAdmin(): Promise<void> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");
  if (!user.allRoles.includes("admin")) throw new Error("Forbidden");
}

export async function listJobs(
  page = 1,
  pageSize = 10,
  filters?: { search?: string; status?: string; sort_by?: string; sort_dir?: string },
): Promise<JobResponse> {
  await requireAdmin();
  return storeListJob(page, pageSize, filters);
}

export async function createJob(formData: FormData): Promise<Job> {
  await requireAdmin();
  const job = await storeCreateJob(formData);
  return redirect(`/gestao/vagas/${job.slug}`);
}

export async function updateJob(id: number, formData: FormData): Promise<Job> {
  await requireAdmin();
  const job = await storeUpdateJob(id, formData);
  return redirect(`/gestao/vagas/${job.slug}`);
}

export async function getJobBySlug(slug: string): Promise<Job> {
  await requireAdmin();
  return storeGetJobBySlug(slug);
}

// --- Banner actions ---

export async function listBanners(): Promise<Banner[]> {
  await requireAdmin();
  return storeListBanners();
}

export async function createBanner(input: CreateBannerInput): Promise<Banner> {
  await requireAdmin();
  return storeCreateBanner(input);
}

export async function updateBanner(
  id: string,
  input: UpdateBannerInput,
): Promise<Banner | null> {
  await requireAdmin();
  return storeUpdateBanner(id, input);
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

export async function createClient(input: CreateClientInput): Promise<Client> {
  await requireAdmin();
  return storeCreateClient(input);
}

export async function updateClient(
  id: string,
  input: UpdateClientInput,
): Promise<Client | null> {
  await requireAdmin();
  return storeUpdateClient(id, input);
}

export async function deleteClient(id: string): Promise<boolean> {
  await requireAdmin();
  return storeDeleteClient(id);
}
