import type { KeycloakTokenResponse } from "./jwt";

export class KeycloakError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly errorCode?: string,
  ) {
    super(message);
    this.name = "KeycloakError";
  }
}

function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  return value;
}

function getBaseUrl(): string {
  return `${getEnv("KEYCLOAK_URL")}/realms/${getEnv("KEYCLOAK_REALM")}/protocol/openid-connect`;
}

function getCallbackUrl(): string {
  return `${getEnv("APP_URL")}/api/auth/callback`;
}

// --- PKCE Utilities ---

function base64url(buffer: Uint8Array): string {
  return btoa(String.fromCharCode(...buffer))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

export function generateCodeVerifier(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return base64url(array);
}

export async function generateCodeChallenge(
  codeVerifier: string,
): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return base64url(new Uint8Array(digest));
}

export function generateState(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return base64url(array);
}

// --- Authorization URL ---

export async function buildAuthorizationUrl(
  codeVerifier: string,
  state: string,
): Promise<string> {
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  const params = new URLSearchParams({
    client_id: getEnv("KEYCLOAK_CLIENT_ID"),
    response_type: "code",
    redirect_uri: getCallbackUrl(),
    scope: "openid profile email",
    state,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  });
  return `${getBaseUrl()}/auth?${params.toString()}`;
}

// --- Token Requests ---

async function fetchToken(body: URLSearchParams): Promise<KeycloakTokenResponse> {
  const response = await fetch(`${getBaseUrl()}/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    cache: "no-store",
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({})) as {
      error?: string;
      error_description?: string;
    };
    throw new KeycloakError(
      error.error_description ?? "Keycloak token request failed",
      response.status,
      error.error,
    );
  }

  return response.json() as Promise<KeycloakTokenResponse>;
}

export async function exchangeCodeForTokens(
  code: string,
  codeVerifier: string,
): Promise<KeycloakTokenResponse> {
  return fetchToken(
    new URLSearchParams({
      grant_type: "authorization_code",
      client_id: getEnv("KEYCLOAK_CLIENT_ID"),
      client_secret: getEnv("KEYCLOAK_CLIENT_SECRET"),
      code,
      redirect_uri: getCallbackUrl(),
      code_verifier: codeVerifier,
    }),
  );
}

export async function refreshAccessToken(
  refreshToken: string,
): Promise<KeycloakTokenResponse> {
  return fetchToken(
    new URLSearchParams({
      grant_type: "refresh_token",
      client_id: getEnv("KEYCLOAK_CLIENT_ID"),
      client_secret: getEnv("KEYCLOAK_CLIENT_SECRET"),
      refresh_token: refreshToken,
    }),
  );
}

// --- Logout ---

export function buildLogoutUrl(
  idToken: string,
  postLogoutRedirectUri: string,
): string {
  const params = new URLSearchParams({
    id_token_hint: idToken,
    post_logout_redirect_uri: postLogoutRedirectUri,
    client_id: getEnv("KEYCLOAK_CLIENT_ID"),
  });
  return `${getBaseUrl()}/logout?${params.toString()}`;
}

export async function revokeToken(
  token: string,
  tokenTypeHint: "refresh_token" | "access_token",
): Promise<void> {
  const response = await fetch(`${getBaseUrl()}/revoke`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: getEnv("KEYCLOAK_CLIENT_ID"),
      client_secret: getEnv("KEYCLOAK_CLIENT_SECRET"),
      token,
      token_type_hint: tokenTypeHint,
    }).toString(),
    cache: "no-store",
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({})) as {
      error?: string;
      error_description?: string;
    };
    throw new KeycloakError(
      error.error_description ?? "Token revocation failed",
      response.status,
      error.error,
    );
  }
}
