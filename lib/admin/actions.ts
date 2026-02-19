"use server";

import { getCurrentUser } from "@/lib/auth";
import {
  listJobs as storeListJob,
  createJob as storeCreateJob,
  getJobBySlug as storeGetJobBySlug,
  updateJob as storeUpdateJob,
} from "./store";
import type { Client, JobResponse, Job } from "./types";
import { redirect } from "next/navigation";

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
  const job = await storeCreateJob(formData);
  return redirect(`/gestao/vagas/${job.slug}`);
}

export async function updateJob(id: number, formData: FormData): Promise<Job> {
  await requireAdminServer();
  const job = await storeUpdateJob(id, formData);
  return redirect(`/gestao/vagas/${job.slug}`);
}

export async function getJobBySlug(slug: string): Promise<Job> {
  await requireAdminServer();
  return storeGetJobBySlug(slug);
}
