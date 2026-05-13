import { NextResponse } from "next/server";
import { guardAdmin } from "@/lib/auth";
import { getAccessToken } from "@/lib/auth/cookies";

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:8080";

export async function POST(request: Request): Promise<NextResponse> {
  const guard = await guardAdmin();
  if (guard) return guard;

  const token = await getAccessToken();
  const body = await request.json();

  const res = await fetch(`${BACKEND_URL}/api/v1/upload/presigned`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });

  const json = await res.json().catch(() => ({ error: "Upload request failed" }));

  if (!res.ok) {
    return NextResponse.json(json, { status: res.status });
  }

  // Backend envelope: { success: true, data: { upload_url, public_url } }
  return NextResponse.json(json.data);
}
