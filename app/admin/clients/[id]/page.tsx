import Link from "next/link";
import Form from "next/form";
import { redirect } from "next/navigation";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { FileInput } from "@/components/FileInput";

import { getClient, updateClient } from "@/lib/admin/store";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = await getClient(id);
  return (
    <Form
      action={async (formData) => {
        "use server";
        const id = formData.get("id") as string;
        await updateClient(id, formData);
        redirect("/admin/clients");
      }}
      className="space-y-4 p-5"
    >
      <h1 className="text-2xl font-bold">Adicionar Client</h1>
      <input hidden name="id" value={id} readOnly />
      <FileInput
        accept="image/*"
        label="Logo"
        required
        name="image"
        defaultValue={client.logoUrl}
      />
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
