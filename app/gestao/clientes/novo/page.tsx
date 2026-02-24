import Link from "next/link";
import Form from "next/form";
import { redirect } from "next/navigation";

import Button from "@/components/Button";
import { FileInput } from "@/components/FileInput";

import { createClient } from "@/lib/admin/store";

export default async function page() {
  return (
    <Form
      action={async (formData) => {
        "use server";
        await createClient(formData);
        redirect("/gestao/clientes");
      }}
      className="space-y-4 p-5"
    >
      <h1 className="text-2xl font-bold">Adicionar Cliente</h1>
      <FileInput accept="image/*" label="Logo" required name="image" />
      <div className="flex justify-end gap-3 pt-2">
        <Link href="/gestao/clientes">
          <Button type="button" variant="inverted">
            Cancelar
          </Button>
        </Link>
        <Button type="submit">Salvar</Button>
      </div>
    </Form>
  );
}
