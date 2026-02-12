import { cookies } from "next/headers";
import type { KeycloakTokenResponse, PKCEState } from "./jwt";

const COOKIE_BASE = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
};

// Refresh tokens with refresh_expires_in=0 are offline tokens (no time expiry).
// Fall back to 30 days for the cookie maxAge.
function refreshMaxAge(refreshExpiresIn: number): number {
  return refreshExpiresIn > 0 ? refreshExpiresIn : 60 * 60 * 24 * 30;
}

export async function setAuthCookies(
  tokens: KeycloakTokenResponse,
): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set("kc_access_token", tokens.access_token, {
    ...COOKIE_BASE,
    maxAge: tokens.expires_in,
  });

  cookieStore.set("kc_id_token", tokens.id_token, {
    ...COOKIE_BASE,
    maxAge: tokens.expires_in,
  });

  cookieStore.set("kc_refresh_token", tokens.refresh_token, {
    ...COOKIE_BASE,
    maxAge: refreshMaxAge(tokens.refresh_expires_in),
  });
}

export async function getAccessToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get("kc_access_token")?.value;
}

export async function getIdToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get("kc_id_token")?.value;
}

export async function getRefreshToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get("kc_refresh_token")?.value;
}

export async function clearAuthCookies(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("kc_access_token");
  cookieStore.delete("kc_id_token");
  cookieStore.delete("kc_refresh_token");
}

export async function setPKCEStateCookie(state: PKCEState): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set("kc_pkce_state", JSON.stringify(state), {
    ...COOKIE_BASE,
    maxAge: 600, // 10 minutes — enough time to complete login
  });
}

export async function getPKCEStateCookie(): Promise<PKCEState | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get("kc_pkce_state")?.value;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as PKCEState;
  } catch {
    return null;
  }
}

export async function clearPKCEStateCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("kc_pkce_state");
}
