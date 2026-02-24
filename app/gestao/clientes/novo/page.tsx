import Link from "next/link";
import Form from "next/form";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import Button from "@/components/Button";
import { ImageEditor } from "@/components/BannerImageEditor";
import { createClient } from "@/lib/admin/store";

export default async function page() {
  return (
    <Form
      action={async (formData) => {
        "use server";
        await createClient(formData);
        revalidatePath("/gestao/clientes");
        redirect("/gestao/clientes");
      }}
      className="space-y-4 p-5"
    >
      <h1 className="text-2xl font-bold">Adicionar Cliente</h1>
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
  );
}
