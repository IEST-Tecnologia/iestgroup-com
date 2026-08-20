import { setJobArchived } from "@/lib/admin/store";
import { ApiError } from "@/lib/admin/types";
import { guardAdmin } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(
  request: NextRequest,
  { params }: Params,
): Promise<NextResponse> {
  const guard = await guardAdmin();
  if (guard) return guard;

  let archived: unknown;
  try {
    ({ archived } = (await request.json()) as { archived?: unknown });
  } catch {
    return NextResponse.json<ApiError>(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  if (typeof archived !== "boolean") {
    return NextResponse.json<ApiError>(
      { error: "Field 'archived' must be a boolean" },
      { status: 400 },
    );
  }

  const { id } = await params;
  const updated = await setJobArchived(id, archived);

  if (!updated) {
    return NextResponse.json<ApiError>({ error: "Not found" }, { status: 404 });
  }
  return new NextResponse(null, { status: 204 });
}
