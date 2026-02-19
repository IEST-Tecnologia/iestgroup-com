"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function setConsentCookie(
  value: "accepted" | "rejected",
  pathname: string,
) {
  const cookieStore = await cookies();

  cookieStore.set("consent", value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  });

  revalidatePath(pathname);
}

export async function getConsentCookie() {
  const cookieStore = await cookies();
  return cookieStore.get("consent")?.value;
}

export async function removeConsentCookie(pathname: string) {
  const cookieStore = await cookies();

  cookieStore.delete("consent");

  revalidatePath(pathname);
}
