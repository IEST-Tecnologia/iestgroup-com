import Link from "next/link";
import Form from "next/form";
import { redirect } from "next/navigation";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { BannerImageEditor } from "@/components/BannerImageEditor";

import { createBanner } from "@/lib/admin/store";
import { revalidatePath } from "next/cache";

export default async function page() {
  return (
    <Form
      action={async (formData) => {
        "use server";
        await createBanner(formData);
        revalidatePath("/gestao/banners");
        redirect("/gestao/banners");
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
      <BannerImageEditor
        label="Imagem"
        required
        name="image"
        aspect={512 / 171}
      />
      <div className="flex justify-end gap-3 pt-2">
        <Link href="/gestao/banners">
          <Button type="button" variant="destructive">
            Cancelar
          </Button>
        </Link>
        <Button type="submit">Salvar</Button>
      </div>
    </Form>
  );
}
