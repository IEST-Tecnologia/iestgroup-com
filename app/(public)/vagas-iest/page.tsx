import React, { Suspense } from "react";
import BgVagas from "@/assets/vagas/banner-vagas.png";
import IconBriefcase from "@/assets/vagas/briefcase.svg";
import IconUserLocation from "@/assets/vagas/user-location.svg";
import Image from "next/image";
import Link from "next/link";
import { listJobs, listJobFilterOptions } from "@/lib/public/actions";
import { formatRelativeDate } from "@/lib/utils";
import JobsFilters from "@/components/public/JobsFilters";
import type { Job } from "@/lib/admin/types";

const PAGE_SIZE = 20;

const WORK_MODEL_LABELS: Record<string, string> = {
  in_office: "Presencial",
  hybrid: "Híbrido",
  remote: "Remoto",
};

const CONTRACT_TYPE_LABELS: Record<string, string> = {
  clt: "CLT",
  pj: "PJ",
  temporary: "Temporário",
};

function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/vagas-iest/${job.slug}`}
      className="rounded-xl shadow-card-job p-4 border border-gray-200 flex flex-col justify-between w-full max-w-full min-h-60 gap-2 transition-transform duration-300 hover:scale-105 hover:shadow-card-job-hover"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs text-gray-500">{job.locality}</p>
          {job.area && (
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium shrink-0">
              {job.area}
            </span>
          )}
        </div>
        <p className="text-lg font-semibold text-primary">{job.name}</p>
        {job.company && (
          <p className="text-xs text-gray-500 font-medium">{job.company}</p>
        )}
        <div className="flex gap-2 flex-wrap items-center">
          <div className="flex gap-1.5 items-center">
            <Image className="w-4 h-4" src={IconBriefcase} alt="Tipo de contrato" />
            <p className="text-sm">
              {CONTRACT_TYPE_LABELS[job.contract_type] ?? job.contract_type}
            </p>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex gap-1.5 items-center">
            <Image className="w-4 h-4" src={IconUserLocation} alt="Modelo de trabalho" />
            <p className="text-sm">
              {WORK_MODEL_LABELS[job.work_model] ?? job.work_model}
            </p>
          </div>
          {job.nivel && (
            <>
              <div className="w-px h-4 bg-gray-200" />
              <p className="text-sm text-gray-600">{job.nivel}</p>
            </>
          )}
        </div>
        <p className="text-sm line-clamp-3 text-gray-600">{job.about_company}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-400">{formatRelativeDate(job.created_at)}</p>
        <span className="text-xs font-medium text-primary">Ver vaga →</span>
      </div>
    </Link>
  );
}

function Pagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      {page > 1 && (
        <PaginationLink page={page - 1} label="← Anterior" />
      )}
      {pages.map((p) => (
        <PaginationLink key={p} page={p} label={String(p)} current={p === page} />
      ))}
      {page < totalPages && (
        <PaginationLink page={page + 1} label="Próximo →" />
      )}
    </div>
  );
}

function PaginationLink({
  page,
  label,
  current,
}: {
  page: number;
  label: string;
  current?: boolean;
}) {
  return (
    <Link
      href={`/vagas-iest?page=${page}`}
      className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
        current
          ? "bg-primary text-white border-primary font-semibold"
          : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );
}

function getString(val: string | string[] | undefined): string | undefined {
  if (Array.isArray(val)) return val[0];
  return val || undefined;
}

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function page({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = Number(getString(params.page) ?? 1);

  const filters = {
    search: getString(params.search),
    work_model: getString(params.work_model),
    contract_type: getString(params.contract_type),
    work_schedule: getString(params.work_schedule),
    area: getString(params.area),
    company: getString(params.company),
    nivel: getString(params.nivel),
    status: "open",
  };

  const [{ jobs, total }, filterOptions] = await Promise.all([
    listJobs(page, PAGE_SIZE, filters),
    listJobFilterOptions(),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgVagas.src})` }}
      >
        <div className="min-h-87.5 w-full" />
      </section>

      <main className="w-full py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Suspense
            fallback={
              <div className="h-36 animate-pulse bg-gray-100 rounded-xl mb-8" />
            }
          >
            <JobsFilters filterOptions={filterOptions} totalJobs={total} />
          </Suspense>

          {jobs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <svg
                className="w-16 h-16 text-gray-200 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="text-lg font-medium text-gray-400">
                Nenhuma vaga encontrada
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Tente ajustar os filtros ou buscar por outros termos
              </p>
              <Link
                href="/vagas-iest"
                className="mt-4 text-sm text-primary hover:underline font-medium"
              >
                Limpar todos os filtros
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}

          <Pagination page={page} totalPages={totalPages} />
        </div>
      </main>

      <section className="max-w-7xl mx-auto py-6 px-4">
        <div className="w-full flex flex-col items-center gap-4">
          <p className="text-lg font-extralight text-center">
            Não encontrou a vaga que procurava? Participe do nosso banco de
            talentos!
          </p>
          <Link
            className="bg-primary py-2 px-6 rounded-md text-white font-semibold hover:bg-primary/90"
            href="/vagas-iest"
          >
            Participar do banco de talentos
          </Link>
        </div>
      </section>
    </>
  );
}
