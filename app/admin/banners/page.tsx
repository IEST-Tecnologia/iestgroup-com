import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import { deleteBanner, listBanners } from "@/lib/admin/store";
import Form from "next/form";
import { revalidatePath } from "next/cache";
import { getCurrentUser, requireAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Banners" };

export default async function BannersPage() {
  await requireAdmin();
  const banners = await listBanners();
  return (
    <div className="p-6">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-foreground">Banners</h1>
          <Link href="/admin/banners/novo">
            <Button>Novo Banner</Button>
          </Link>
        </div>

        <div className="bg-white rounded shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  Imagem
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  URL de destino
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
              {banners.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-gray-400"
                  >
                    Nenhum banner cadastrado
                  </td>
                </tr>
              )}
              {banners.map((banner) => (
                <tr key={banner.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Image
                      src={banner.imageUrl}
                      width={500}
                      height={500}
                      alt="Banner preview"
                      className="h-12 w-24 object-cover rounded border border-gray-200"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={banner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline truncate block max-w-xs"
                    >
                      {banner.url}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(banner.createdAt).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/banners/${banner.id}`}>
                        <Button>Editar</Button>
                      </Link>
                      <Form
                        action={async (formData) => {
                          "use server";
                          await requireAdmin();
                          await deleteBanner(banner.id);
                          revalidatePath("/admin/banners");
                        }}
                      >
                        <input hidden readOnly value={banner.id} />
                        <Button>Excluir</Button>
                      </Form>
                      {/* <Link
                        onClick={() => handleDelete(banner.id)}
                        className="px-3 py-1.5 text-xs font-medium text-secondary border border-secondary rounded hover:bg-secondary hover:text-white transition-colors"
                      >
                        <Button>Excluir</Button>
                      </Link> */}
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
