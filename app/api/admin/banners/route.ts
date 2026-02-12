import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { listBanners, createBanner } from "@/lib/admin/store";
import type { CreateBannerInput, ApiError } from "@/lib/admin/types";

async function guardAdmin(): Promise<NextResponse | null> {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json<ApiError>(
      { error: "Unauthorized" },
      { status: 401 },
    );
  }
  if (!user.allRoles.includes("admin")) {
    return NextResponse.json<ApiError>({ error: "Forbidden" }, { status: 403 });
  }
  return null;
}

export async function GET(): Promise<NextResponse> {
  const guard = await guardAdmin();
  if (guard) return guard;
  const banners = await listBanners();
  console.log(banners);
  return NextResponse.json({ data: banners });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const guard = await guardAdmin();
  if (guard) return guard;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ApiError>(
      { error: "Invalid JSON" },
      { status: 400 },
    );
  }

  const input = body as Partial<CreateBannerInput>;
  if (!input.url || typeof input.url !== "string") {
    return NextResponse.json<ApiError>(
      { error: "Field 'url' is required" },
      { status: 400 },
    );
  }
  if (!input.imageUrl || typeof input.imageUrl !== "string") {
    return NextResponse.json<ApiError>(
      { error: "Field 'imageUrl' is required" },
      { status: 400 },
    );
  }

  const banner = await createBanner({
    url: input.url,
    imageUrl: input.imageUrl,
  });
  return NextResponse.json({ data: banner }, { status: 201 });
}
