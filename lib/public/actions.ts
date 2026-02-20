"use server";

import {
  listJobs as storeListJobs,
  listJobFilterOptions as storeListJobFilterOptions,
  getJobBySlug as storeGetJobBySlug,
} from "./store";
import type { JobFilters, JobFilterOptions } from "./store";
import type { JobResponse, Job } from "@/lib/admin/types";

export async function listJobs(
  page = 1,
  pageSize = 20,
  filters?: JobFilters,
): Promise<JobResponse> {
  return storeListJobs(page, pageSize, filters);
}

export async function listJobFilterOptions(): Promise<JobFilterOptions> {
  return storeListJobFilterOptions();
}

export async function getJobBySlug(slug: string): Promise<Job> {
  return storeGetJobBySlug(slug);
}
