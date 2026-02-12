export interface Banner {
  id: string;
  url: string;
  imageUrl: string;
  createdAt: string;
}

export interface Client {
  id: string;
  logo: string;
  createdAt: string;
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
