import { decodeJwt } from "jose";

// Raw Keycloak JWT access token payload
export interface KeycloakAccessTokenPayload {
  iss: string;
  sub: string;
  aud: string | string[];
  exp: number;
  iat: number;
  jti: string;
  nbf?: number;
  preferred_username: string;
  email?: string;
  email_verified?: boolean;
  name?: string;
  given_name?: string;
  family_name?: string;
  locale?: string;
  realm_access?: {
    roles: string[];
  };
  resource_access?: {
    [clientId: string]: {
      roles: string[];
    };
  };
  sid: string;
  session_state?: string;
  azp?: string;
  scope?: string;
}

export interface KeycloakIdTokenPayload {
  iss: string;
  sub: string;
  aud: string | string[];
  exp: number;
  iat: number;
  auth_time?: number;
  nonce?: string;
  preferred_username: string;
  email?: string;
  email_verified?: boolean;
  name?: string;
  given_name?: string;
  family_name?: string;
  locale?: string;
  sid: string;
}

// Keycloak token endpoint response
export interface KeycloakTokenResponse {
  access_token: string;
  id_token: string;
  refresh_token: string;
  token_type: "Bearer";
  expires_in: number;
  refresh_expires_in: number;
  session_state: string;
  scope: string;
}

// Normalized user object for app code
export interface AuthUser {
  sub: string;
  username: string;
  email: string | undefined;
  emailVerified: boolean;
  name: string | undefined;
  givenName: string | undefined;
  familyName: string | undefined;
  locale: string | undefined;
  realmRoles: string[];
  clientRoles: string[];
  allRoles: string[];
  sessionId: string;
}

// Stored in kc_pkce_state cookie during OAuth flow
export interface PKCEState {
  codeVerifier: string;
  state: string;
  returnTo: string;
}

export function decodeAccessToken(token: string): KeycloakAccessTokenPayload {
  return decodeJwt(token) as KeycloakAccessTokenPayload;
}

// Returns true if the token is expired (with optional buffer in seconds)
export function isTokenExpired(token: string, bufferSeconds = 30): boolean {
  try {
    const payload = decodeJwt(token);
    if (!payload.exp) return true;
    return payload.exp < Math.floor(Date.now() / 1000) + bufferSeconds;
  } catch {
    return true;
  }
}

export function getRealmRoles(
  payload: KeycloakAccessTokenPayload,
): string[] {
  return payload.realm_access?.roles ?? [];
}

export function getClientRoles(
  payload: KeycloakAccessTokenPayload,
  clientId: string = process.env.KEYCLOAK_CLIENT_ID!,
): string[] {
  return payload.resource_access?.[clientId]?.roles ?? [];
}

export function buildAuthUser(
  payload: KeycloakAccessTokenPayload,
): AuthUser {
  const realmRoles = getRealmRoles(payload);
  const clientRoles = getClientRoles(payload);
  return {
    sub: payload.sub,
    username: payload.preferred_username,
    email: payload.email,
    emailVerified: payload.email_verified ?? false,
    name: payload.name,
    givenName: payload.given_name,
    familyName: payload.family_name,
    locale: payload.locale,
    realmRoles,
    clientRoles,
    allRoles: [...new Set([...realmRoles, ...clientRoles])],
    sessionId: payload.sid,
  };
}
