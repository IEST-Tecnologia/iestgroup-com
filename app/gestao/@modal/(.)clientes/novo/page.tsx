import Link from "next/link";
import Form from "next/form";
import { redirect } from "next/navigation";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { FileInput } from "@/components/FileInput";

import { createClient } from "@/lib/admin/store";
import AdminModal from "@/components/admin/AdminModal";
import { revalidatePath } from "next/cache";
import { ImageEditor } from "@/components/BannerImageEditor";

export default async function page() {
  return (
    <AdminModal title="Adicionar Cliente">
      <Form
        action={async (formData) => {
          "use server";
          await createClient(formData);
          revalidatePath("/gestao/clientes");
          redirect("/gestao/clientes");
        }}
        className="space-y-4 p-5"
      >
        <ImageEditor label="Logo" required name="image" aspect={1} />
        <div className="flex justify-end gap-3 pt-2">
          <Link href="/gestao/clientes">
            <Button type="button" variant="destructive">
              Cancelar
            </Button>
          </Link>
          <Button type="submit">Salvar</Button>
        </div>
      </Form>
    </AdminModal>
  );
}
