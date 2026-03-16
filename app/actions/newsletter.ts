"use server";

export async function subscribeNewsletter(email: string): Promise<{ success: boolean }> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/newsletter/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    return { success: res.ok };
  } catch {
    return { success: false };
  }
}
