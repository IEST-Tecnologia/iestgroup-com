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

export interface JobFilters {
  search?: string;
  status?: string;
  sort_by?: string;
  sort_dir?: string;
  work_model?: string;
  contract_type?: string;
  work_schedule?: string;
  area?: string;
  company?: string;
  nivel?: string;
}

export interface JobFilterOptions {
  areas: string[];
  companies: string[];
  nivels: string[];
}

export async function listJobs(
  page = 1,
  pageSize = 20,
  filters?: JobFilters,
): Promise<JobResponse> {
  const params = new URLSearchParams({
    page: String(page),
    page_size: String(pageSize),
  });
  if (filters?.search) params.set("search", filters.search);
  if (filters?.status) params.set("status", filters.status);
  if (filters?.sort_by) params.set("sort_by", filters.sort_by);
  if (filters?.sort_dir) params.set("sort_dir", filters.sort_dir);
  if (filters?.work_model) params.set("work_model", filters.work_model);
  if (filters?.contract_type) params.set("contract_type", filters.contract_type);
  if (filters?.work_schedule) params.set("work_schedule", filters.work_schedule);
  if (filters?.area) params.set("area", filters.area);
  if (filters?.company) params.set("company", filters.company);
  if (filters?.nivel) params.set("nivel", filters.nivel);
  const res = await apiFetch(`/api/v1/public/jobs?${params.toString()}`);
  const data = await unwrap<JobResponse>(res);
  return { ...data, jobs: data.jobs ?? [] };
}

/**
 * Busca a lista de opções únicas para os filtros (área, empresa, nível).
 * Resultado fica em cache por 1 hora para evitar requisições repetidas.
 */
export async function listJobFilterOptions(): Promise<JobFilterOptions> {
  const res = await fetch(
    `${BACKEND_URL}/api/v1/public/jobs?page=1&page_size=1000`,
    { next: { revalidate: 3600 } },
  );
  const data = await unwrap<JobResponse>(res);
  const jobs = data.jobs ?? [];
  return {
    areas: [...new Set(jobs.map((j) => j.area).filter(Boolean))].sort() as string[],
    companies: [...new Set(jobs.map((j) => j.company).filter(Boolean))].sort() as string[],
    nivels: [...new Set(jobs.map((j) => j.nivel).filter(Boolean))].sort() as string[],
  };
}

export async function getJobBySlug(slug: string): Promise<Job> {
  const res = await apiFetch(`/api/v1/public/jobs/slug/${slug}`);
  return unwrap<Job>(res);
}
