import type {
  Banner,
  Client,
  BackendResponse,
  JobResponse,
  Job,
} from "./types";

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:8080";

async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  return fetch(`${BACKEND_URL}${path}`, {
    ...init,
    cache: "no-store",
  });
}

// Single entry point for all response handling.
// Parses the backend envelope { success, data | error } regardless of HTTP status.
// Falls back to a plain HTTP error message if the body is not valid JSON.
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

export async function createJob(formData: FormData): Promise<Job> {
  const res = await apiFetch("/api/v1/jobs", {
    method: "POST",
    body: formData,
  });
  return unwrap<Job>(res);
}

export async function getJobBySlug(slug: string): Promise<Job> {
  const res = await apiFetch(`/api/v1/jobs/slug/${slug}`);
  return unwrap<Job>(res);
}

export async function listJobs(
  page = 1,
  pageSize = 10,
  filters?: { search?: string; status?: string; sort_by?: string; sort_dir?: string },
): Promise<JobResponse> {
  const params = new URLSearchParams({
    page: String(page),
    page_size: String(pageSize),
  });
  if (filters?.search) params.set("search", filters.search);
  if (filters?.status) params.set("status", filters.status);
  if (filters?.sort_by) params.set("sort_by", filters.sort_by);
  if (filters?.sort_dir) params.set("sort_dir", filters.sort_dir);
  const res = await apiFetch(`/api/v1/jobs?${params.toString()}`);
  return unwrap<JobResponse>(res);
}

export async function updateJob(id: number, formData: FormData): Promise<Job> {
  const res = await apiFetch(`/api/v1/jobs/${id}`, {
    method: "PUT",
    body: formData,
  });
  return unwrap<Job>(res);
}

export async function deleteJob(id: string): Promise<boolean> {
  const res = await apiFetch(`/api/v1/jobs/${id}`, { method: "DELETE" });
  if (res.status === 404) return false;
  await unwrap<unknown>(res);
  return true;
}

// --- Banner CRUD ---

export async function listBanners(): Promise<Banner[]> {
  const res = await apiFetch("/api/v1/banners");
  return unwrap<Banner[]>(res);
}

export async function createBanner(input: {
  url: string;
  imageUrl: string;
}): Promise<Banner> {
  const res = await apiFetch("/api/v1/banners", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  return unwrap<Banner>(res);
}

export async function updateBanner(
  id: string,
  input: { url?: string; imageUrl?: string },
): Promise<Banner | null> {
  const res = await apiFetch(`/api/v1/banners/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (res.status === 404) return null;
  return unwrap<Banner>(res);
}

export async function deleteBanner(id: string): Promise<boolean> {
  const res = await apiFetch(`/api/v1/banners/${id}`, { method: "DELETE" });
  if (res.status === 404) return false;
  await unwrap<unknown>(res);
  return true;
}

// --- Client CRUD ---

export async function listClients(): Promise<Client[]> {
  const res = await apiFetch("/api/v1/clients");
  return unwrap<Client[]>(res);
}

export async function createClient(input: { logo: string }): Promise<Client> {
  const res = await apiFetch("/api/v1/clients", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  return unwrap<Client>(res);
}

export async function updateClient(
  id: string,
  input: { logo?: string },
): Promise<Client | null> {
  const res = await apiFetch(`/api/v1/clients/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (res.status === 404) return null;
  return unwrap<Client>(res);
}

export async function deleteClient(id: string): Promise<boolean> {
  const res = await apiFetch(`/api/v1/clients/${id}`, { method: "DELETE" });
  if (res.status === 404) return false;
  await unwrap<unknown>(res);
  return true;
}
