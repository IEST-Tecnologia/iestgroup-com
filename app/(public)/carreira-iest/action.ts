"use server";

export const sendForm = async (formData: FormData) => {
  console.log("enviando", Object.fromEntries(formData.entries()));

  // Simula delay para testar isPending
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return true;
};
