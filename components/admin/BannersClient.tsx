"use client";

import {
  startTransition,
  useEffect,
  useOptimistic,
  useRef,
  useState,
} from "react";
import type { Banner } from "@/lib/admin/types";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import Switch from "../Switch";
import {
  deleteBanner,
  reorderBanners,
  toggleBannerEnabled,
} from "@/lib/admin/store";

function GripIcon() {
  return (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="3" cy="3" r="1.5" />
      <circle cx="9" cy="3" r="1.5" />
      <circle cx="3" cy="8" r="1.5" />
      <circle cx="9" cy="8" r="1.5" />
      <circle cx="3" cy="13" r="1.5" />
      <circle cx="9" cy="13" r="1.5" />
    </svg>
  );
}

interface BannersClientProps {
  initialBanners: Banner[];
}

export default function BannersClient({ initialBanners }: BannersClientProps) {
  const [banners, setBanners] = useState<Banner[]>(
    [...initialBanners].sort((a, b) => a.order - b.order),
  );
  useEffect(() => {
    setBanners([...initialBanners].sort((a, b) => a.order - b.order));
  }, initialBanners);

  const [optimisticBanners, updateOptimisticBanners] = useOptimistic(
    banners,
    (_state, newOrder: Banner[]) => newOrder,
  );

  const dragIndex = useRef<number | null>(null);
  const dragOverIndex = useRef<number | null>(null);
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    dragIndex.current = index;
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    dragOverIndex.current = index;
    setDragOverIdx(index);
  };

  const handleDragLeave = () => {
    setDragOverIdx(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const from = dragIndex.current;
    const to = dragOverIndex.current;
    setDragOverIdx(null);
    if (from === null || to === null || from === to) return;

    const reordered = [...banners];
    const [moved] = reordered.splice(from, 1);
    reordered.splice(to, 0, moved);

    dragIndex.current = null;
    dragOverIndex.current = null;

    startTransition(async () => {
      updateOptimisticBanners(reordered);
      try {
        await reorderBanners(reordered.map((b) => b.id));
        setBanners(reordered);
      } catch (err) {
        alert(err instanceof Error ? err.message : "Erro ao reordenar");
      }
    });
  };

  const handleDragEnd = () => {
    dragIndex.current = null;
    dragOverIndex.current = null;
    setDragOverIdx(null);
  };

  const handleToggle = (id: string, currentActive: boolean) => {
    const updated = banners.map((b) =>
      b.id === id ? { ...b, active: !currentActive } : b,
    );
    startTransition(async () => {
      updateOptimisticBanners(updated);
      try {
        await toggleBannerEnabled(id, !currentActive);
        setBanners(updated);
      } catch (err) {
        alert(err instanceof Error ? err.message : "Erro ao atualizar banner");
      }
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este banner?")) return;
    try {
      await deleteBanner(id);
      setBanners((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Erro ao excluir");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-foreground">Banners</h1>
        <Link
          href="/gestao/banners/novo"
          className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded hover:bg-secondary transition-colors"
        >
          Novo banner
        </Link>
      </div>

      <div className="bg-white rounded shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-3 py-3 w-8" />
              <th className="px-4 py-3 text-left font-medium text-gray-600">
                Ativo
              </th>
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
            {optimisticBanners.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                  Nenhum banner cadastrado
                </td>
              </tr>
            )}
            {optimisticBanners.map((banner, index) => (
              <tr
                key={banner.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onDragEnd={handleDragEnd}
                className={`hover:bg-gray-50 transition-colors ${
                  dragOverIdx === index
                    ? "border-t-2 border-primary bg-blue-50"
                    : ""
                }`}
              >
                <td className="px-3 py-3 cursor-grab active:cursor-grabbing text-gray-300 hover:text-gray-500 transition-colors">
                  <GripIcon />
                </td>
                <td className="px-4 py-3">
                  <Switch
                    checked={banner.active}
                    onChange={() => handleToggle(banner.id, banner.active)}
                  />
                </td>
                <td className="px-4 py-3">
                  <Image
                    src={banner.imageUrl}
                    width={96}
                    height={48}
                    alt="Banner preview"
                    className="h-12 w-24 object-contain rounded border border-gray-200"
                  />
                </td>
                <td className="px-4 py-3 text-gray-500 max-w-xs">
                  <a
                    href={banner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate block hover:text-primary transition-colors"
                  >
                    {banner.url}
                  </a>
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {new Date(banner.createdAt).toLocaleDateString("pt-BR")}
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/gestao/banners/${banner.id}`}
                      className="px-4 py-2 text-sm font-semibold uppercase text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors"
                    >
                      Editar
                    </Link>
                    <Button
                      size="small"
                      variant="destructive"
                      onClick={() => handleDelete(banner.id)}
                    >
                      Excluir
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
