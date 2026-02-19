"use client";

import { Job, JobResponse } from "@/lib/admin/types";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../Button";

interface JobsClientProps {
  initialJobs: JobResponse;
  totalPages: number;
}

const SORT_OPTIONS = [
  { label: "Nome (A-Z)", sort_by: "name", sort_dir: "asc" },
  { label: "Nome (Z-A)", sort_by: "name", sort_dir: "desc" },
  { label: "Status (Abertos primeiro)", sort_by: "status", sort_dir: "asc" },
  { label: "Status (Fechados primeiro)", sort_by: "status", sort_dir: "desc" },
  { label: "Atualização (Mais recente)", sort_by: "updated_at", sort_dir: "desc" },
  { label: "Atualização (Mais antiga)", sort_by: "updated_at", sort_dir: "asc" },
  { label: "Área (A-Z)", sort_by: "area", sort_dir: "asc" },
  { label: "Área (Z-A)", sort_by: "area", sort_dir: "desc" },
] as const;

const STATUS_OPTIONS = [
  { label: "Todos", value: "" },
  { label: "Abertos", value: "open" },
  { label: "Fechados", value: "closed" },
] as const;

type SortableColumn = "name" | "status" | "updated_at" | "area";

const COLUMN_SORT_MAP: Record<string, SortableColumn> = {
  Vaga: "name",
  Status: "status",
  Area: "area",
  Data: "updated_at",
};

function SortIcon({ direction }: { direction: "asc" | "desc" | null }) {
  return (
    <span className="inline-flex flex-col ml-1 leading-none text-[10px]">
      <span className={direction === "asc" ? "text-primary" : "text-gray-300"}>
        ▲
      </span>
      <span className={direction === "desc" ? "text-primary" : "text-gray-300"}>
        ▼
      </span>
    </span>
  );
}

export default function JobsClient({
  initialJobs,
  totalPages,
}: JobsClientProps) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs.jobs);
  const currentPage = initialJobs.page;
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") ?? "";
  const currentStatus = searchParams.get("status") ?? "";
  const currentSortBy = searchParams.get("sort_by") ?? "";
  const currentSortDir = searchParams.get("sort_dir") ?? "";

  const [searchValue, setSearchValue] = useState(currentSearch);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useCallback(
    (overrides: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      // Reset page to 1 when any filter changes (unless page itself is being set)
      if (!("page" in overrides)) {
        params.set("page", "1");
      }
      for (const [key, value] of Object.entries(overrides)) {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      }
      router.push(`/gestao/vagas?${params.toString()}`);
    },
    [router, searchParams],
  );

  const goToPage = useCallback(
    (page: number) => navigate({ page: String(page) }),
    [navigate],
  );

  // Debounced search
  useEffect(() => {
    if (searchValue === currentSearch) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      navigate({ search: searchValue });
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchValue, currentSearch, navigate]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const idx = Number(e.target.value);
    if (idx === -1) {
      navigate({ sort_by: "", sort_dir: "" });
    } else {
      const opt = SORT_OPTIONS[idx];
      navigate({ sort_by: opt.sort_by, sort_dir: opt.sort_dir });
    }
  };

  const handleColumnSort = (column: SortableColumn) => {
    if (currentSortBy === column) {
      // Toggle direction
      const newDir = currentSortDir === "asc" ? "desc" : "asc";
      navigate({ sort_by: column, sort_dir: newDir });
    } else {
      navigate({ sort_by: column, sort_dir: "asc" });
    }
  };

  const getColumnSortDir = (column: SortableColumn): "asc" | "desc" | null => {
    if (currentSortBy === column) return (currentSortDir as "asc" | "desc") || null;
    return null;
  };

  const selectedSortIdx = SORT_OPTIONS.findIndex(
    (o) => o.sort_by === currentSortBy && o.sort_dir === currentSortDir,
  );

  const handleDelete = useCallback(async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir esta vaga?")) return;
    try {
      const res = await fetch(`/api/admin/jobs/${id}`, {
        method: "DELETE",
      });
      if (!res.ok && res.status !== 204) {
        const body = (await res.json()) as { error?: string };
        alert(body.error ?? "Erro ao excluir");
        return;
      }
      setJobs((prev) => prev.filter((c) => c.id !== id));
    } catch {
      alert("Erro de rede ao excluir");
    }
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-foreground">Vagas</h1>
        <Link
          href="/gestao/vagas/nova"
          className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded hover:bg-secondary transition-colors"
        >
          Nova vaga
        </Link>
      </div>

      {/* Filters bar */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Buscar vagas..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full pl-10 pr-8 py-2 text-sm border border-gray-300 rounded bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          />
          {searchValue && (
            <button
              onClick={() => {
                setSearchValue("");
                navigate({ search: "" });
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Status filter */}
        <div className="flex rounded border border-gray-300 overflow-hidden">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => navigate({ status: opt.value })}
              className={`px-3 py-2 text-sm transition-colors ${
                currentStatus === opt.value
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Sort dropdown */}
        <select
          value={selectedSortIdx}
          onChange={handleSortChange}
          className="px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
        >
          <option value={-1}>Ordenar por...</option>
          {SORT_OPTIONS.map((opt, idx) => (
            <option key={idx} value={idx}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {Object.entries(COLUMN_SORT_MAP).map(([label, column]) => (
                <th
                  key={label}
                  className="px-4 py-3 text-left font-medium text-gray-600 cursor-pointer select-none hover:bg-gray-100 transition-colors"
                  onClick={() => handleColumnSort(column)}
                >
                  <span className="inline-flex items-center">
                    {label}
                    <SortIcon direction={getColumnSortDir(column)} />
                  </span>
                </th>
              ))}
              <th className="px-4 py-3 text-left font-medium text-gray-600">
                ID
              </th>
              <th className="px-4 py-3 text-right font-medium text-gray-600">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {jobs.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                  Nenhuma vaga encontrada
                </td>
              </tr>
            )}
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <span className="truncate block">{job.name}</span>
                </td>
                <td className="px-4 py-3 text-gray-500 max-w-xs">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                      job.status === "open"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {job.status === "open" ? "Aberto" : "Fechado"}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500 max-w-xs">
                  <span className="truncate block">{job.area}</span>
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {new Date(job.updated_at).toLocaleDateString("pt-BR")}
                </td>
                <td className="px-4 py-3 text-gray-500 max-w-xs">
                  <span className="truncate block">{job.id_job}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/gestao/vagas/${job.slug}`}
                      className="px-4 py-2 text-sm font-semibold uppercase text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors"
                    >
                      Editar
                    </Link>
                    <Button
                      size="small"
                      variant="destructive"
                      onClick={() => handleDelete(job.id)}
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

      {totalPages >= 1 && (
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-500">
            Página {currentPage} de {totalPages}
          </span>
          <div className="flex gap-2">
            <button
              disabled={currentPage <= 1}
              onClick={() => goToPage(currentPage - 1)}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-1.5 text-sm border rounded ${
                  page === currentPage
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              disabled={currentPage >= totalPages}
              onClick={() => goToPage(currentPage + 1)}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Próximo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
