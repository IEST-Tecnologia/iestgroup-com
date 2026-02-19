import { NextRequest, NextResponse } from "next/server";
import { getIdToken, getRefreshToken, clearAuthCookies } from "@/lib/auth/cookies";
import { buildLogoutUrl, revokeToken } from "@/lib/auth/keycloak";

function getAppUrl(): string {
  return process.env.APP_URL ?? "http://localhost:3000";
}

export async function GET(_request: NextRequest): Promise<NextResponse> {
  const idToken = await getIdToken();
  const refreshToken = await getRefreshToken();

  // Best-effort revocation of the refresh token at Keycloak
  if (refreshToken) {
    await revokeToken(refreshToken, "refresh_token").catch((e) =>
      console.error("[auth/logout] revoke failed:", e),
    );
  }

  await clearAuthCookies();

  // Redirect to Keycloak end-session endpoint to kill the SSO session
  if (idToken) {
    const logoutUrl = buildLogoutUrl(idToken, `${getAppUrl()}/`);
    return NextResponse.redirect(logoutUrl);
  }

  return NextResponse.redirect(new URL("/", getAppUrl()));
}
