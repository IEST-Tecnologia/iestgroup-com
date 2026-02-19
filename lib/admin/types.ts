import type { JSONContent } from "@tiptap/react";

export type WorkModelType = "in_office" | "hybrid" | "remote";

export type ContractType = "clt" | "pj" | "temporary";

export type WorkScheduleType = "full_time" | "part_time";

export type StatusType = "open" | "closed";

export type JobType = "internal" | "external";

export interface Job {
  id: number;
  id_job: string;
  name: string;
  slug: string;
  company: string;
  locality: string;
  nivel: string;
  work_model: WorkModelType;
  contract_type: ContractType;
  work_schedule: WorkScheduleType;
  area: string;
  status: StatusType;
  type: JobType;
  about_company: string;
  about_opportunity: JSONContent;
  main_responsabilities: JSONContent;
  mandatory_requirements: JSONContent;
  differences: JSONContent;
  benefits: JSONContent;
  created_at: string;
  updated_at: string;
}

export interface JobResponse {
  jobs: Job[];
  total: number;
  page: number;
}

export interface Banner {
  id: string;
  url: string;
  imageUrl: string;
  createdAt: string;
}

export interface Client {
  id: string;
  logoUrl: string;
  createdAt: string;
}

// --- Backend DTOs (snake_case) ---

export interface BannerDTO {
  id: string;
  url: string;
  image_url: string;
  created_at: string;
}

export interface ClientDTO {
  id: string;
  logo_url: string;
  created_at: string;
}

export interface CreateBannerInput {
  url: string;
  imageUrl: string;
}

export interface UpdateBannerInput {
  url?: string;
  imageUrl?: string;
}

export interface CreateClientInput {
  logo: string;
}

export interface UpdateClientInput {
  logo?: string;
}

export interface ApiError {
  error: string;
}

export type BackendResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };
