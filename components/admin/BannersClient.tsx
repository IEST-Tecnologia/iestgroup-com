"use client";

import { useState, useCallback } from "react";
import AdminModal from "./AdminModal";
import BannerForm from "./BannerForm";
import { createBanner, updateBanner, deleteBanner } from "@/lib/admin/actions";
import type { Banner } from "@/lib/admin/types";

interface BannersClientProps {
  initialBanners: Banner[];
}

export default function BannersClient({ initialBanners }: BannersClientProps) {
  const [banners, setBanners] = useState<Banner[]>(initialBanners);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openCreateModal = useCallback(() => {
    setEditingBanner(null);
    setError(null);
    setIsModalOpen(true);
  }, []);

  const openEditModal = useCallback((banner: Banner) => {
    setEditingBanner(banner);
    setError(null);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setEditingBanner(null);
    setError(null);
  }, []);

  const handleSubmit = useCallback(
    async (formData: FormData) => {
      setIsSubmitting(true);
      setError(null);
      try {
        if (editingBanner) {
          const updated = await updateBanner(editingBanner.id, formData);
          if (!updated) throw new Error("Banner não encontrado");
          setBanners((prev) =>
            prev.map((b) => (b.id === updated.id ? updated : b)),
          );
        } else {
          const created = await createBanner(formData);
          setBanners((prev) => [...prev, created]);
        }
        closeModal();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setIsSubmitting(false);
      }
    },
    [editingBanner, closeModal],
  );

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este banner?")) return;
    try {
      const deleted = await deleteBanner(id);
      if (!deleted) {
        alert("Banner não encontrado");
        return;
      }
      setBanners((prev) => prev.filter((b) => b.id !== id));
    } catch {
      alert("Erro ao excluir");
    }
  }, []);
  console.log(banners);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-foreground">Banners</h1>
        <button
          onClick={openCreateModal}
          className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded hover:bg-secondary transition-colors"
        >
          Novo Banner
        </button>
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
                <td colSpan={4} className="px-4 py-8 text-center text-gray-400">
                  Nenhum banner cadastrado
                </td>
              </tr>
            )}
            {banners.map((banner) => (
              <tr key={banner.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={banner.imageUrl}
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
                    <button
                      onClick={() => openEditModal(banner)}
                      className="px-3 py-1.5 text-xs font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(banner.id)}
                      className="px-3 py-1.5 text-xs font-medium text-secondary border border-secondary rounded hover:bg-secondary hover:text-white transition-colors"
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdminModal
        isOpen={isModalOpen}
        title={editingBanner ? "Editar Banner" : "Novo Banner"}
        onClose={closeModal}
      >
        {error && (
          <p className="mb-4 text-sm text-secondary bg-red-50 px-3 py-2 rounded">
            {error}
          </p>
        )}
        <BannerForm
          initialValues={
            editingBanner
              ? { url: editingBanner.url, imageUrl: editingBanner.imageUrl }
              : {}
          }
          onSubmit={handleSubmit}
          onCancel={closeModal}
          isSubmitting={isSubmitting}
        />
      </AdminModal>
    </div>
  );
}
