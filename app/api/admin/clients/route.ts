import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { listClients, createClient } from "@/lib/admin/store";
import type { CreateClientInput, ApiError } from "@/lib/admin/types";

async function guardAdmin(): Promise<NextResponse | null> {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json<ApiError>({ error: "Unauthorized" }, { status: 401 });
  }
  if (!user.allRoles.includes("admin")) {
    return NextResponse.json<ApiError>({ error: "Forbidden" }, { status: 403 });
  }
  return null;
}

export async function GET(): Promise<NextResponse> {
  const guard = await guardAdmin();
  if (guard) return guard;
  return NextResponse.json({ data: await listClients() });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const guard = await guardAdmin();
  if (guard) return guard;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ApiError>({ error: "Invalid JSON" }, { status: 400 });
  }

  const input = body as Partial<CreateClientInput>;
  if (!input.logo || typeof input.logo !== "string") {
    return NextResponse.json<ApiError>(
      { error: "Field 'logo' is required" },
      { status: 400 },
    );
  }

  const client = await createClient({ logo: input.logo });
  return NextResponse.json({ data: client }, { status: 201 });
}
