import { requireAdminServer } from "./actions";
import type {
  JobResponse,
  Job,
  BackendResponse,
  Banner,
  BannerDTO,
  Client,
  ClientDTO,
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
  const res = await apiFetch(`/api/v1/jobs?${params.toString()}`);
  const data = await unwrap<JobResponse>(res);
  return { ...data, jobs: data.jobs ?? [] };
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

// --- DTO → Model conversion ---

function toBanner(dto: BannerDTO): Banner {
  return {
    id: dto.id,
    url: dto.url,
    imageUrl: dto.image_url,
    createdAt: dto.created_at,
  };
}

function toClient(dto: ClientDTO): Client {
  return {
    id: dto.id,
    logoUrl: dto.logo_url,
    createdAt: dto.created_at,
  };
}

// --- Banner CRUD ---

export async function getBanner(id: string): Promise<Banner> {
  const res = await apiFetch(`/api/v1/banners/${id}`);
  const dto = await unwrap<BannerDTO>(res);
  return toBanner(dto);
}

export async function listBanners(): Promise<Banner[]> {
  const res = await apiFetch("/api/v1/banners");
  const dtos = await unwrap<BannerDTO[]>(res);
  return dtos.map(toBanner);
}

export async function createBanner(formData: FormData): Promise<Banner> {
  await requireAdminServer();
  const res = await apiFetch("/api/v1/banners", {
    method: "POST",
    body: formData,
  });
  return toBanner(await unwrap<BannerDTO>(res));
}

export async function updateBanner(
  id: string,
  formData: FormData,
): Promise<Banner | null> {
  await requireAdminServer();

  const res = await apiFetch(`/api/v1/banners/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (res.status === 404) return null;
  return toBanner(await unwrap<BannerDTO>(res));
}

export async function deleteBanner(id: string): Promise<boolean> {
  const res = await apiFetch(`/api/v1/banners/${id}`, { method: "DELETE" });
  if (res.status === 404) return false;
  return true;
}

// --- Client CRUD ---

export async function getClient(id: string): Promise<Client> {
  const res = await apiFetch(`/api/v1/clients/${id}`);
  const dto = await unwrap<ClientDTO>(res);
  return toClient(dto);
}

export async function listClients(): Promise<Client[]> {
  const res = await apiFetch("/api/v1/clients");
  const dtos = await unwrap<ClientDTO[]>(res);
  return dtos.map(toClient);
}

export async function createClient(formData: FormData): Promise<Client> {
  await requireAdminServer();
  const res = await apiFetch("/api/v1/clients", {
    method: "POST",
    body: formData,
  });
  return toClient(await unwrap<ClientDTO>(res));
}

export async function updateClient(
  id: string,
  formData: FormData,
): Promise<Client | null> {
  await requireAdminServer();
  const res = await apiFetch(`/api/v1/clients/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (res.status === 404) return null;
  return toClient(await unwrap<ClientDTO>(res));
}

export async function deleteClient(id: string): Promise<boolean> {
  const res = await apiFetch(`/api/v1/clients/${id}`, { method: "DELETE" });
  if (res.status === 404) return false;
  return true;
}
