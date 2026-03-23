import { NextRequest, NextResponse } from "next/server";

const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];
const MAX_FILE_SIZE_BYTES = 8 * 1024 * 1024; // 8MB
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

type RateLimitEntry = { count: number; resetAt: number };
const rateLimitStore = new Map<string, RateLimitEntry>();

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitStore) {
    if (now > entry.resetAt) rateLimitStore.delete(ip);
  }
}, RATE_LIMIT_WINDOW_MS);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Tente novamente em 10 minutos." },
      { status: 429 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Requisição inválida." },
      { status: 400 },
    );
  }

  const curriculum = formData.get("curriculum");
  if (!(curriculum instanceof File)) {
    return NextResponse.json(
      { error: "Currículo é obrigatório." },
      { status: 400 },
    );
  }

  if (!ALLOWED_MIME_TYPES.includes(curriculum.type)) {
    return NextResponse.json(
      { error: "Formato inválido. Envie PDF, DOC, DOCX, JPG ou PNG." },
      { status: 400 },
    );
  }

  if (curriculum.size > MAX_FILE_SIZE_BYTES) {
    return NextResponse.json(
      { error: "Arquivo muito grande. Tamanho máximo: 5MB." },
      { status: 400 },
    );
  }

  const backendUrl = process.env.BACKEND_URL;
  if (!backendUrl) {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(`${backendUrl}/api/v1/job-applications`, {
      method: "POST",
      body: formData,
      signal: AbortSignal.timeout(120_000),
    });

    await res.body?.cancel();

    if (!res.ok) {
      return NextResponse.json(
        { error: "Erro ao enviar candidatura. Tente novamente." },
        { status: res.status },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    const isTimeout =
      err instanceof Error &&
      (err.name === "TimeoutError" || err.name === "AbortError");
    return NextResponse.json(
      {
        error: isTimeout
          ? "O servidor demorou para responder. Tente novamente."
          : "Erro ao conectar com o servidor. Tente novamente.",
      },
      { status: isTimeout ? 504 : 502 },
    );
  }
}
