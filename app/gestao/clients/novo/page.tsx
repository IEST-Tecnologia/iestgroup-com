import Link from "next/link";
import Form from "next/form";
import { redirect } from "next/navigation";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { FileInput } from "@/components/FileInput";

import { createClient } from "@/lib/admin/store";

export default async function page() {
  return (
    <Form
      action={async (formData) => {
        "use server";
        await createClient(formData);
        redirect("/admin/clients");
      }}
      className="space-y-4 p-5"
    >
      <h1 className="text-2xl font-bold">Adicionar Client</h1>
      <FileInput accept="image/*" label="Logo" required name="image" />
      <div className="flex justify-end gap-3 pt-2">
        <Link href="/admin/clients">
          <Button type="button" variant="inverted">
            Cancelar
          </Button>
        </Link>
        <Button type="submit">Salvar</Button>
      </div>
    </Form>
  );
}
