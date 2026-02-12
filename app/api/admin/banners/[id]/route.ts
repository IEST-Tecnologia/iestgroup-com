import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { updateBanner, deleteBanner } from "@/lib/admin/store";
import type { UpdateBannerInput, ApiError } from "@/lib/admin/types";

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

type Params = { params: Promise<{ id: string }> };

export async function PUT(
  request: NextRequest,
  { params }: Params,
): Promise<NextResponse> {
  const guard = await guardAdmin();
  if (guard) return guard;

  const { id } = await params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ApiError>({ error: "Invalid JSON" }, { status: 400 });
  }

  const input = body as Partial<UpdateBannerInput>;
  const updated = await updateBanner(id, {
    ...(input.url !== undefined && { url: input.url }),
    ...(input.imageUrl !== undefined && { imageUrl: input.imageUrl }),
  });

  if (!updated) {
    return NextResponse.json<ApiError>({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ data: updated });
}

export async function DELETE(
  _request: NextRequest,
  { params }: Params,
): Promise<NextResponse> {
  const guard = await guardAdmin();
  if (guard) return guard;

  const { id } = await params;
  const deleted = await deleteBanner(id);

  if (!deleted) {
    return NextResponse.json<ApiError>({ error: "Not found" }, { status: 404 });
  }
  return new NextResponse(null, { status: 204 });
}
