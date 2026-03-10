import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/admin/store";
import AdminModal from "@/components/admin/AdminModal";
import ClientCreateForm from "@/components/admin/ClientCreateForm";

export default async function page() {
  async function action(formData: FormData) {
    "use server";
    await createClient(formData);
    revalidatePath("/gestao/clientes");
    redirect("/gestao/clientes");
  }

  return (
    <AdminModal title="Adicionar Cliente">
      <ClientCreateForm action={action} />
    </AdminModal>
  );
}
