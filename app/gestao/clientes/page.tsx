import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import { deleteClient, listClients } from "@/lib/admin/store";
import Form from "next/form";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import ClientsMarquee from "@/components/ClientsMarquee";
import { Client } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Clients" };

export default async function ClientsPage() {
  let data: Client[] = [];

  try {
    data = await listClients();
  } catch (err) {
    console.error(
      "[ClientPage] failed to load clients:",
      err instanceof Error ? err.message : err,
    );
  }

  return (
    <div className="p-6">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-foreground">Clientes</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              Nessa página você irá editar as empresas da seção "Nossos
              clientes" da página principal
            </p>
          </div>
          <Link href="/gestao/clientes/novo">
            <Button size="small">Novo Cliente</Button>
          </Link>
        </div>

        <div className="bg-white rounded shadow-sm overflow-hidden mb-4">
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
              {data.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-gray-400"
                  >
                    Nenhum cliente cadastrado
                  </td>
                </tr>
              )}
              {data.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Image
                      src={client.logoUrl}
                      width={500}
                      height={500}
                      alt="Client preview"
                      className="h-12 w-12 object-cover rounded border border-gray-200"
                    />
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(client.createdAt).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Link href={`/gestao/clientes/${client.id}`}>
                        <Button size="small" variant="outline">
                          Editar
                        </Button>
                      </Link>
                      <Form
                        action={async (formData) => {
                          "use server";
                          await requireAdmin();
                          await deleteClient(client.id);
                          revalidatePath("/gestao/clientes");
                        }}
                      >
                        <input hidden readOnly value={client.id} />
                        <Button size="small" variant="destructive">
                          Excluir
                        </Button>
                      </Form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-sm font-medium text-gray-600">Prévia</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              É assim que a seção de clientes aparece na página principal
            </p>
          </div>
          <div className="py-6 bg-gray-50">
            <ClientsMarquee clients={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
