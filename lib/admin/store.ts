import { requireAdminServer } from "./actions";
import type {
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
  console.log("test");
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
  await unwrap<unknown>(res);
  return true;
}
