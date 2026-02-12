import { NextRequest, NextResponse } from "next/server";
import {
  generateCodeVerifier,
  generateState,
  buildAuthorizationUrl,
} from "@/lib/auth/keycloak";
import { setPKCEStateCookie } from "@/lib/auth/cookies";
import type { PKCEState } from "@/lib/auth/jwt";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const returnTo = request.nextUrl.searchParams.get("returnTo") ?? "/";

  // Prevent open redirect: only allow relative paths on the same origin
  const safeReturnTo = returnTo.startsWith("/") ? returnTo : "/";

  const codeVerifier = generateCodeVerifier();
  const state = generateState();

  const pkceState: PKCEState = {
    codeVerifier,
    state,
    returnTo: safeReturnTo,
  };

  await setPKCEStateCookie(pkceState);

  const authorizationUrl = await buildAuthorizationUrl(codeVerifier, state);
  return NextResponse.redirect(authorizationUrl);
}
