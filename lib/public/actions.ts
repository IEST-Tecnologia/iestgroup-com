"use server";

import {
  listJobs as storeListJobs,
  getJobBySlug as storeGetJobBySlug,
} from "./store";
import type { JobResponse, Job } from "@/lib/admin/types";

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
  return storeListJobs(page, pageSize, filters);
}

export async function getJobBySlug(slug: string): Promise<Job> {
  return storeGetJobBySlug(slug);
}
