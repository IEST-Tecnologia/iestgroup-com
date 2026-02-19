import Link from "next/link";
import Form from "next/form";
import { redirect } from "next/navigation";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { FileInput } from "@/components/FileInput";

import { getBanner, updateBanner } from "@/lib/admin/store";
import AdminModal from "@/components/admin/AdminModal";
import { revalidatePath } from "next/cache";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const banner = await getBanner(id);
  return (
    <AdminModal title="Editar Banner">
      <Form
        action={async (formData) => {
          "use server";
          const id = formData.get("id") as string;
          await updateBanner(id, formData);
          revalidatePath("/admin/clients");

          redirect("/admin/banners");
        }}
        className="space-y-4 p-5"
      >
        <input hidden name="id" value={id} readOnly />
        <Input
          type="url"
          label="URL de destino"
          required
          placeholder="https://example.com"
          name="url"
          defaultValue={banner.url}
        />
        <FileInput
          accept="image/*"
          label="Imagem"
          required
          name="image"
          defaultValue={banner.imageUrl}
        />
        <div className="flex justify-end gap-3 pt-2">
          <Link href="/admin/banners">
            <Button type="button" variant="inverted">
              Cancelar
            </Button>
          </Link>
          <Button type="submit">Salvar</Button>
        </div>
      </Form>
    </AdminModal>
  );
}
