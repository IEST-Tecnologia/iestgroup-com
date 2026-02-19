"use server";

export type ContactState = {
  success: boolean;
  message: string;
} | null;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: formData.get("first_name"),
        sobrenome: formData.get("last_name"),
        email: formData.get("email"),
        telefone: formData.get("phone"),
        mensagem: formData.get("message"),
      }),
    });

    if (!res.ok) {
      return { success: false, message: "Erro ao enviar mensagem. Tente novamente." };
    }

    return { success: true, message: "Mensagem enviada com sucesso!" };
  } catch {
    return { success: false, message: "Erro ao enviar mensagem. Tente novamente." };
  }
}
