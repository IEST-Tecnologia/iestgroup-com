import Link from "next/link";
import Form from "next/form";
import { redirect } from "next/navigation";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { FileInput } from "@/components/FileInput";

import { createBanner } from "@/lib/admin/store";
import { requireAdmin } from "@/lib/admin/actions";

export default async function page() {
  return (
    <Form
      action={async (formData) => {
        "use server";
        await requireAdmin();
        await createBanner(formData);
        redirect("/admin/banners");
      }}
      className="space-y-4 p-5"
    >
      <h1 className="text-2xl font-bold">Adicionar Banner</h1>
      <Input
        type="url"
        label="URL de destino"
        required
        placeholder="https://example.com"
        name="url"
      />
      <FileInput accept="image/*" label="Imagem" required name="image" />
      <div className="flex justify-end gap-3 pt-2">
        <Link href="/admin/banners">
          <Button type="button" variant="inverted">
            Cancelar
          </Button>
        </Link>
        <Button type="submit">Salvar</Button>
      </div>
    </Form>
  );
}
