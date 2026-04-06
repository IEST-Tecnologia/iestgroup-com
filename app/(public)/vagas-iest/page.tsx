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
import { Metadata } from "next";
import { t } from "@/lib/i18n";

const PAGE_SIZE = 20;

const WORK_MODEL_LABELS: Record<string, string> = {
  in_office: t("vagas_work_model_in_office"),
  hybrid: t("vagas_work_model_hybrid"),
  remote: t("vagas_work_model_remote"),
};

const CONTRACT_TYPE_LABELS: Record<string, string> = {
  clt: t("vagas_contract_clt"),
  pj: t("vagas_contract_pj"),
  temporary: t("vagas_contract_temporary"),
};

export const metadata: Metadata = {
  title: "Vagas",
  description:
    "Explore vagas internas e externas reunidas em um só lugar. Oportunidades em diversas áreas, modelos de trabalho e regimes de contratação. Encontre a posição ideal e dê o próximo passo na sua carreira.",
};

function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/vagas-iest/${job.slug}`}
      className="rounded-xl shadow-card-job p-4 border border-gray-200 flex flex-col justify-between w-full max-w-full min-h-60 gap-2 transition-transform duration-300 hover:scale-105 hover:shadow-card-job-hover"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <p className="text-xs text-gray-500 line-clamp-1 w-1/2 shrink-0">
            {job.locality}
          </p>
          {job.area && (
            <div className="flex flex-wrap gap-1 w-1/2 justify-end">
              {job.area.split(",").map((area) => (
                <span
                  key={area.trim()}
                  className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium"
                >
                  {area.trim()}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="text-lg font-semibold text-primary line-clamp-1">
          {job.name}
        </p>
        {job.company && (
          <p className="text-xs text-gray-500 font-medium line-clamp-1">
            {job.company}
          </p>
        )}
        <div className="flex gap-2 flex-wrap items-center">
          <div className="flex gap-1.5 items-center">
            <Image
              className="w-4 h-4"
              src={IconBriefcase}
              alt={t("vagas_contract_type_alt")}
            />
            <p className="text-sm">
              {CONTRACT_TYPE_LABELS[job.contract_type[0]]}
            </p>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex gap-1.5 items-center">
            <Image
              className="w-4 h-4"
              src={IconUserLocation}
              alt={t("vagas_work_model_alt")}
            />
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
        <p className="text-sm line-clamp-3 text-gray-600">
          {job.about_company}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-400">
          {formatRelativeDate(job.created_at)}
        </p>
        <span className="text-xs font-medium text-primary">
          {job.status === "closed" ? "Finalizada" : t("vagas_see_job")}
        </span>
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
        <PaginationLink page={page - 1} label={t("vagas_pagination_prev")} />
      )}
      {pages.map((p) => (
        <PaginationLink
          key={p}
          page={p}
          label={String(p)}
          current={p === page}
        />
      ))}
      {page < totalPages && (
        <PaginationLink page={page + 1} label={t("vagas_pagination_next")} />
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
  const type = getString(params.type);

  const filters = {
    search: getString(params.search),
    work_model: getString(params.work_model),
    contract_type: getString(params.contract_type),
    work_schedule: getString(params.work_schedule),
    area: getString(params.area),
    company: getString(params.company),
    nivel: getString(params.nivel),
  };

  const [{ jobs, total }, filterOptions] = await Promise.all([
    listJobs(page, PAGE_SIZE, type, filters),
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
            <JobsFilters
              filterOptions={filterOptions}
              totalJobs={total}
              type={type}
            />
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
                {t("vagas_empty_title")}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {t("vagas_empty_subtitle")}
              </p>
              <Link
                href={`/vagas-iest?type=${type}`}
                className="mt-4 text-sm text-primary hover:underline font-medium"
              >
                {t("vagas_clear_filters")}
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
            {t("vagas_talent_bank_text")}
          </p>
          <Link
            className="bg-primary py-2 px-6 rounded-md text-white font-semibold hover:bg-primary/90"
            href="/carreira-iest"
          >
            {t("vagas_talent_bank_cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
