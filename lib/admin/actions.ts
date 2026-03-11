"use server";

import { getCurrentUser } from "@/lib/auth";
import {
  listJobs as storeListJob,
  createJob as storeCreateJob,
  getJobBySlug as storeGetJobBySlug,
  updateJob as storeUpdateJob,
  reorderBanners as storeReorderBanners,
  deleteBanner as storeDeleteBanner,
} from "./store";
import type { Banner, JobResponse, Job } from "./types";

export async function requireAdminServer(): Promise<void> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");
  if (!user.allRoles.includes("admin")) throw new Error("Forbidden");
}

export async function listJobs(
  page = 1,
  pageSize = 10,
  filters?: {
    search?: string;
    status?: string;
    sort_by?: string;
    sort_dir?: string;
  },
): Promise<JobResponse> {
  await requireAdminServer();
  return storeListJob(page, pageSize, filters);
}

export async function createJob(formData: FormData): Promise<Job> {
  await requireAdminServer();
  return storeCreateJob(formData);
}

export async function updateJob(id: number, formData: FormData): Promise<Job> {
  await requireAdminServer();
  const job = await storeUpdateJob(id, formData);
  return job;
}

export async function getJobBySlug(slug: string): Promise<Job> {
  await requireAdminServer();
  return storeGetJobBySlug(slug);
}

export async function reorderBanners(ids: string[]): Promise<void> {
  await requireAdminServer();
  return storeReorderBanners(ids);
}

export async function deleteBanner(id: string): Promise<boolean> {
  await requireAdminServer();
  return storeDeleteBanner(id);
}
