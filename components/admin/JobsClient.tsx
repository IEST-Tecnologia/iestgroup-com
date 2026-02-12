"use client";

import { Job, JobResponse } from "@/lib/admin/types";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import Button from "../Button";

interface JobsClientProps {
  initialJobs: JobResponse;
  totalPages: number;
}

export default function JobsClient({ initialJobs, totalPages }: JobsClientProps) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs.jobs);
  const currentPage = initialJobs.page;
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(page));
      router.push(`/gestao/vagas?${params.toString()}`);
    },
    [router, searchParams],
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
        <h1 className="text-xl font-semibold text-foreground">Vaga</h1>
        <Link
          href="/gestao/vagas/nova"
          className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded hover:bg-secondary transition-colors"
        >
          Nova vaga
        </Link>
      </div>

      <div className="bg-white rounded shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-600">
                Titulo
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">
                Status
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">
                Area
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">
                ID
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">
                Data
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
                  Nenhuma vaga cadastrada
                </td>
              </tr>
            )}
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <span className="truncate block">{job.name}</span>
                </td>
                <td className="px-4 py-3 text-gray-500 max-w-xs">
                  <span className="truncate block">
                    {job.status === "open" ? "Em aberto" : "Finalizado"}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500 max-w-xs">
                  <span className="truncate block">{job.area}</span>
                </td>
                <td className="px-4 py-3 text-gray-500 max-w-xs">
                  <span className="truncate block">{job.id_job}</span>
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {new Date(job.created_at).toLocaleDateString("pt-BR")}
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/gestao/vagas/${job.id}/editar`}
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
