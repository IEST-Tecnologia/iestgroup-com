import type { BackendResponse, JobResponse, Job } from "@/lib/admin/types";

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:8080";

async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  return fetch(`${BACKEND_URL}${path}`, {
    ...init,
    cache: "no-store",
  });
}

async function unwrap<T>(res: Response): Promise<T> {
  let body: BackendResponse<T>;
  try {
    body = (await res.json()) as BackendResponse<T>;
  } catch {
    throw new Error(`HTTP ${res.status} ${res.statusText}`);
  }
  if (!body.success) {
    throw new Error(body.error);
  }
  return body.data;
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
  const params = new URLSearchParams({
    page: String(page),
    page_size: String(pageSize),
  });
  if (filters?.search) params.set("search", filters.search);
  if (filters?.status) params.set("status", filters.status);
  if (filters?.sort_by) params.set("sort_by", filters.sort_by);
  if (filters?.sort_dir) params.set("sort_dir", filters.sort_dir);
  const res = await apiFetch(`/api/v1/public/jobs?${params.toString()}`);
  const data = await unwrap<JobResponse>(res);
  return { ...data, jobs: data.jobs ?? [] };
}

export async function getJobBySlug(slug: string): Promise<Job> {
  const res = await apiFetch(`/api/v1/public/jobs/slug/${slug}`);
  return unwrap<Job>(res);
}
