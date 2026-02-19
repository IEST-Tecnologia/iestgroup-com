import { NextRequest, NextResponse } from "next/server";
import { decodeJwt } from "jose";
import { refreshAccessToken } from "@/lib/auth/keycloak";
import type { KeycloakTokenResponse } from "@/lib/auth/jwt";

// Routes that require authentication AND the "admin" client role.
// Example: /^\/dashboard(\/.*)?$/, /^\/admin(\/.*)?$/
const PROTECTED_ROUTES: RegExp[] = [/^\/admin(\/.*)?$/];

// Routes that redirect to home when already authenticated
const AUTH_ONLY_ROUTES: string[] = ["/login"];

function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_ROUTES.some((pattern) => pattern.test(pathname));
}

function isTokenExpired(token: string, bufferSeconds = 30): boolean {
  try {
    const payload = decodeJwt(token);
    if (!payload.exp) return true;
    return payload.exp < Math.floor(Date.now() / 1000) + bufferSeconds;
  } catch {
    return true;
  }
}

// Checks resource_access[KEYCLOAK_CLIENT_ID].roles for the "admin" role.
function hasClientAdminRole(token: string): boolean {
  try {
    const payload = decodeJwt(token);
    const clientId = process.env.KEYCLOAK_CLIENT_ID;
    const roles =
      (
        payload.resource_access as
          | Record<string, { roles: string[] }>
          | undefined
      )?.[clientId!]?.roles ?? [];
    return roles.includes("admin");
  } catch {
    return false;
  }
}

function setTokenCookies(
  response: NextResponse,
  tokens: KeycloakTokenResponse,
): void {
  const secure = process.env.NODE_ENV === "production";
  const base = { httpOnly: true, secure, sameSite: "lax" as const, path: "/" };
  const refreshMaxAge =
    tokens.refresh_expires_in > 0
      ? tokens.refresh_expires_in
      : 60 * 60 * 24 * 30;

  response.cookies.set("kc_access_token", tokens.access_token, {
    ...base,
    maxAge: tokens.expires_in,
  });
  response.cookies.set("kc_id_token", tokens.id_token, {
    ...base,
    maxAge: tokens.expires_in,
  });
  response.cookies.set("kc_refresh_token", tokens.refresh_token, {
    ...base,
    maxAge: refreshMaxAge,
  });
}

function clearTokenCookies(response: NextResponse): void {
  response.cookies.delete("kc_access_token");
  response.cookies.delete("kc_id_token");
  response.cookies.delete("kc_refresh_token");
}

export async function proxy(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("kc_access_token")?.value;
  const refreshToken = request.cookies.get("kc_refresh_token")?.value;

  const hasValidAccess = !!accessToken && !isTokenExpired(accessToken);
  const hasValidRefresh = !!refreshToken && !isTokenExpired(refreshToken, 0);

  // Already authenticated — redirect away from auth-only pages (e.g. /login)
  if (AUTH_ONLY_ROUTES.includes(pathname) && hasValidAccess) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Valid access token — enforce admin role on protected routes
  if (hasValidAccess) {
    if (isProtectedRoute(pathname) && !hasClientAdminRole(accessToken!)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // Access token expired, but refresh token is valid — silently refresh
  if (!hasValidAccess && hasValidRefresh) {
    try {
      const newTokens = await refreshAccessToken(refreshToken!);
      const response = NextResponse.next();
      setTokenCookies(response, newTokens);

      // Check admin role on the freshly issued token
      if (
        isProtectedRoute(pathname) &&
        !hasClientAdminRole(newTokens.access_token)
      ) {
        return NextResponse.redirect(new URL("/", request.url));
      }

      return response;
    } catch (err) {
      console.error("[middleware] token refresh failed:", err);
      const target = isProtectedRoute(pathname)
        ? NextResponse.redirect(
            new URL(
              `/api/auth/login?returnTo=${encodeURIComponent(pathname)}`,
              request.url,
            ),
          )
        : NextResponse.next();
      clearTokenCookies(target);
      return target;
    }
  }

  // No valid tokens — redirect to login if the route is protected
  if (isProtectedRoute(pathname)) {
    return NextResponse.redirect(
      new URL(
        `/api/auth/login?returnTo=${encodeURIComponent(pathname)}`,
        request.url,
      ),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on all paths except:
     * - _next/static  (static assets)
     * - _next/image   (image optimization)
     * - favicon.ico
     * - public files (svg, png, jpg, jpeg, gif, webp, ico)
     * - /api/auth/*   (auth routes — must not be intercepted to avoid redirect loops)
     */
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)|api/auth).*)",
  ],
};
