import Form from "next/form";
import { redirect } from "next/navigation";

import { Input } from "@/components/Input";
import { ImageEditor } from "@/components/BannerImageEditor";

import { createBanner } from "@/lib/admin/store";
import AdminModal from "@/components/admin/AdminModal";
import ModalFormActions from "@/components/admin/ModalFormActions";
import { revalidatePath } from "next/cache";

export default async function page() {
  return (
    <AdminModal title="Adicionar Banner" size="lg">
      <Form
        action={async (formData) => {
          "use server";
          await createBanner(formData);
          revalidatePath("/gestao/banners");
          redirect("/gestao/banners");
        }}
        className="space-y-4 p-5"
      >
        <Input
          type="url"
          label="URL de destino"
          required
          placeholder="https://example.com"
          name="url"
        />

        <ImageEditor label="Imagem desktop" required name="image" aspect={512 / 171} />
        <ImageEditor label="Imagem mobile" required name="mobile_image" aspect={768 / 853} />
        <ModalFormActions cancelHref="/gestao/banners" />
      </Form>
    </AdminModal>
  );
}
