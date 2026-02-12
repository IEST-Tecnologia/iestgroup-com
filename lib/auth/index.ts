import { getAccessToken, getRefreshToken } from "./cookies";
import { decodeAccessToken, buildAuthUser, isTokenExpired } from "./jwt";
import type { AuthUser } from "./jwt";

// Returns the current authenticated user decoded from the access token cookie,
// or null if not authenticated or the token is expired.
// Safe to call from Server Components, Server Actions, and Route Handlers.
export async function getCurrentUser(): Promise<AuthUser | null> {
  const accessToken = await getAccessToken();
  if (!accessToken) return null;
  if (isTokenExpired(accessToken)) return null;
  try {
    const payload = decodeAccessToken(accessToken);
    return buildAuthUser(payload);
  } catch {
    return null;
  }
}

export async function getUserRoles(): Promise<{
  realmRoles: string[];
  clientRoles: string[];
  allRoles: string[];
}> {
  const user = await getCurrentUser();
  return {
    realmRoles: user?.realmRoles ?? [],
    clientRoles: user?.clientRoles ?? [],
    allRoles: user?.allRoles ?? [],
  };
}

// Returns true if the current user has the given role (checks both realm and client roles).
export async function hasRole(role: string): Promise<boolean> {
  const { allRoles } = await getUserRoles();
  return allRoles.includes(role);
}

export async function isAuthenticated(): Promise<boolean> {
  return (await getCurrentUser()) !== null;
}

// Used by middleware (via cookie reads) to determine whether a silent refresh is possible.
export async function hasValidRefreshToken(): Promise<boolean> {
  const refreshToken = await getRefreshToken();
  if (!refreshToken) return false;
  return !isTokenExpired(refreshToken, 0);
}

export type { AuthUser } from "./jwt";
