"use server";

export type JobState = {
  success: boolean;
  message: string;
} | null;

export const sendForm = async (formData: FormData): Promise<JobState> => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/job-applications",
      {
        method: "POST",
        body: formData,
      },
    );

    if (!res.ok) {
      return {
        success: false,
        message: "Erro ao enviar mensagem. Tente novamente.",
      };
    }

    return { success: true, message: "Mensagem enviada com sucesso!" };
  } catch {
    return {
      success: false,
      message: "Erro ao enviar mensagem. Tente novamente.",
    };
  }
};
