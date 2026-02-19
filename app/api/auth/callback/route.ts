import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForTokens } from "@/lib/auth/keycloak";
import {
  setAuthCookies,
  getPKCEStateCookie,
  clearPKCEStateCookie,
} from "@/lib/auth/cookies";

function getAppUrl(): string {
  return process.env.APP_URL ?? "http://localhost:3000";
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  if (error) {
    const desc =
      searchParams.get("error_description") ?? "Authentication failed";
    return NextResponse.redirect(
      new URL(`/?error=${encodeURIComponent(desc)}`, getAppUrl()),
    );
  }

  if (!code || !state) {
    return NextResponse.redirect(
      new URL("/?error=invalid_callback", getAppUrl()),
    );
  }

  const pkceState = await getPKCEStateCookie();

  if (!pkceState || pkceState.state !== state) {
    return NextResponse.redirect(
      new URL("/?error=state_mismatch", getAppUrl()),
    );
  }

  await clearPKCEStateCookie();

  try {
    const tokens = await exchangeCodeForTokens(code, pkceState.codeVerifier);
    await setAuthCookies(tokens);
    return NextResponse.redirect(
      new URL(pkceState.returnTo, getAppUrl()),
    );
  } catch (err) {
    console.error("[auth/callback] token exchange failed:", err);
    return NextResponse.redirect(
      new URL("/?error=token_exchange_failed", getAppUrl()),
    );
  }
}
