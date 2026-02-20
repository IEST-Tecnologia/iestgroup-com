"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export interface JobFilterOptions {
  areas: string[];
  companies: string[];
  nivels: string[];
}

interface JobsFiltersProps {
  filterOptions: JobFilterOptions;
  totalJobs: number;
}

const WORK_MODEL_OPTIONS = [
  { label: "Presencial", value: "in_office" },
  { label: "Híbrido", value: "hybrid" },
  { label: "Remoto", value: "remote" },
];

const CONTRACT_TYPE_OPTIONS = [
  { label: "CLT", value: "clt" },
  { label: "PJ", value: "pj" },
  { label: "Temporário", value: "temporary" },
];

const WORK_SCHEDULE_OPTIONS = [
  { label: "Tempo integral", value: "full_time" },
  { label: "Meio período", value: "part_time" },
];

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
        active
          ? "bg-primary text-white border-primary"
          : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
      }`}
    >
      {label}
    </button>
  );
}

function SelectFilter({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none pl-3 pr-8 py-2 text-sm border rounded-lg bg-white outline-none transition-colors cursor-pointer ${
          value
            ? "border-primary text-primary font-medium"
            : "border-gray-300 text-gray-600 hover:border-primary"
        }`}
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <svg
        className={`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 ${value ? "text-primary" : "text-gray-400"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

export default function JobsFilters({ filterOptions, totalJobs }: JobsFiltersProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentSearch = searchParams.get("search") ?? "";
  const currentWorkModel = searchParams.get("work_model") ?? "";
  const currentContractType = searchParams.get("contract_type") ?? "";
  const currentWorkSchedule = searchParams.get("work_schedule") ?? "";
  const currentArea = searchParams.get("area") ?? "";
  const currentCompany = searchParams.get("company") ?? "";
  const currentNivel = searchParams.get("nivel") ?? "";

  const [searchValue, setSearchValue] = useState(currentSearch);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useCallback(
    (overrides: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      // Reset page when any filter changes
      params.delete("page");
      for (const [key, value] of Object.entries(overrides)) {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      }
      router.push(`/vagas-iest?${params.toString()}`);
    },
    [router, searchParams],
  );

  // Sync search input if URL changes externally
  useEffect(() => {
    setSearchValue(currentSearch);
  }, [currentSearch]);

  // Debounce search → URL update
  useEffect(() => {
    if (searchValue === currentSearch) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      navigate({ search: searchValue });
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchValue, currentSearch, navigate]);

  const toggleChip = (key: string, value: string, current: string) => {
    navigate({ [key]: current === value ? "" : value });
  };

  const activeFiltersCount = [
    currentSearch,
    currentWorkModel,
    currentContractType,
    currentWorkSchedule,
    currentArea,
    currentCompany,
    currentNivel,
  ].filter(Boolean).length;

  const clearAll = () => {
    setSearchValue("");
    router.push("/vagas-iest");
  };

  return (
    <div className="w-full mb-8">
      {/* Search bar */}
      <div className="relative mb-4">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Buscar por nome da vaga, localidade, área ou empresa..."
          className="w-full pl-12 pr-10 py-3 text-sm border border-gray-300 rounded-xl bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
        />
        {searchValue && (
          <button
            onClick={() => {
              setSearchValue("");
              navigate({ search: "" });
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Quick filter chips */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <div className="flex items-center gap-1.5 flex-wrap">
          {WORK_MODEL_OPTIONS.map((opt) => (
            <FilterChip
              key={opt.value}
              label={opt.label}
              active={currentWorkModel === opt.value}
              onClick={() => toggleChip("work_model", opt.value, currentWorkModel)}
            />
          ))}
        </div>

        <div className="h-6 w-px bg-gray-200 hidden sm:block" />

        <div className="flex items-center gap-1.5 flex-wrap">
          {CONTRACT_TYPE_OPTIONS.map((opt) => (
            <FilterChip
              key={opt.value}
              label={opt.label}
              active={currentContractType === opt.value}
              onClick={() => toggleChip("contract_type", opt.value, currentContractType)}
            />
          ))}
        </div>

        <div className="h-6 w-px bg-gray-200 hidden sm:block" />

        <div className="flex items-center gap-1.5 flex-wrap">
          {WORK_SCHEDULE_OPTIONS.map((opt) => (
            <FilterChip
              key={opt.value}
              label={opt.label}
              active={currentWorkSchedule === opt.value}
              onClick={() => toggleChip("work_schedule", opt.value, currentWorkSchedule)}
            />
          ))}
        </div>
      </div>

      {/* Dynamic select filters + count + clear */}
      <div className="flex flex-wrap items-center gap-3">
        {filterOptions.areas.length > 0 && (
          <SelectFilter
            label="Área"
            value={currentArea}
            onChange={(v) => navigate({ area: v })}
            options={filterOptions.areas.map((a) => ({ label: a, value: a }))}
          />
        )}
        {filterOptions.companies.length > 0 && (
          <SelectFilter
            label="Empresa"
            value={currentCompany}
            onChange={(v) => navigate({ company: v })}
            options={filterOptions.companies.map((c) => ({ label: c, value: c }))}
          />
        )}
        {filterOptions.nivels.length > 0 && (
          <SelectFilter
            label="Nível"
            value={currentNivel}
            onChange={(v) => navigate({ nivel: v })}
            options={filterOptions.nivels.map((n) => ({ label: n, value: n }))}
          />
        )}

        {activeFiltersCount > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Limpar filtros
            <span className="inline-flex items-center justify-center w-5 h-5 text-xs bg-red-100 text-red-600 rounded-full font-semibold">
              {activeFiltersCount}
            </span>
          </button>
        )}

        <span className="ml-auto text-sm text-gray-500">
          {totalJobs} {totalJobs === 1 ? "vaga encontrada" : "vagas encontradas"}
        </span>
      </div>
    </div>
  );
}
