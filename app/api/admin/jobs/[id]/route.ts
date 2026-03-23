import { deleteJob } from "@/lib/admin/store";
import { ApiError } from "@/lib/admin/types";
import { getCurrentUser, guardAdmin } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

type Params = { params: Promise<{ id: string }> };

export async function DELETE(
  _request: NextRequest,
  { params }: Params,
): Promise<NextResponse> {
  const guard = await guardAdmin();
  if (guard) return guard;

  const { id } = await params;
  const deleted = await deleteJob(id);

  if (!deleted) {
    return NextResponse.json<ApiError>({ error: "Not found" }, { status: 404 });
  }
  return new NextResponse(null, { status: 204 });
}
