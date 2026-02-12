import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import { deleteClient, listClients } from "@/lib/admin/store";
import Form from "next/form";
import { revalidatePath } from "next/cache";
import { getCurrentUser, requireAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Clients" };

export default async function ClientsPage() {
  await requireAdmin();
  const clients = await listClients();
  return (
    <div className="p-6">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-foreground">Clients</h1>
          <Link href="/admin/clients/novo">
            <Button>Novo Client</Button>
          </Link>
        </div>

        <div className="bg-white rounded shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  Logo
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  Criado em
                </th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {clients.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-gray-400"
                  >
                    Nenhum client cadastrado
                  </td>
                </tr>
              )}
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Image
                      src={client.logoUrl}
                      width={500}
                      height={500}
                      alt="Client preview"
                      className="h-12 w-24 object-cover rounded border border-gray-200"
                    />
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(client.createdAt).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/clients/${client.id}`}>
                        <Button>Editar</Button>
                      </Link>
                      <Form
                        action={async (formData) => {
                          "use server";
                          await requireAdmin();
                          await deleteClient(client.id);
                          revalidatePath("/admin/clients");
                        }}
                      >
                        <input hidden readOnly value={client.id} />
                        <Button>Excluir</Button>
                      </Form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
