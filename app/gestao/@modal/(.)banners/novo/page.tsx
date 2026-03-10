import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createBanner } from "@/lib/admin/store";
import AdminModal from "@/components/admin/AdminModal";
import BannerCreateForm from "@/components/admin/BannerCreateForm";

export default async function page() {
  async function action(formData: FormData) {
    "use server";
    await createBanner(formData);
    revalidatePath("/gestao/banners");
    redirect("/gestao/banners");
  }

  return (
    <AdminModal title="Adicionar Banner" size="lg">
      <BannerCreateForm action={action} />
    </AdminModal>
  );
}
