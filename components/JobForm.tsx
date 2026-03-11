"use client";

import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import Button from "./Button";

const LANGUAGES = [
  "Sem inglês",
  "Inglês - Básico",
  "Inglês - Intermediário",
  "Inglês - Avançado",
  "Espanhol - Básico",
  "Espanhol - Intermediário",
  "Espanhol - Avançado",
  "Mandarim - Intermediário",
  "Mandarim - Avançado / Fluente",
  "Outros",
];

function ChevronDown() {
  return (
    <svg
      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function JobForm({
  jobName,
  cidades,
  estados,
  disabled,
}: {
  jobName: string;
  cidades: { [key in string]: string[] };
  estados: { sigla: string; nome: string }[];
  disabled: boolean;
}) {
  const [isPending, setIsPending] = useState(false);
  const [feedback, setFeedback] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedEstado, setSelectedEstado] = useState("");
  const [selectedCidade, setSelectedCidade] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const cidadesFiltradas = selectedEstado
    ? (cidades[selectedEstado] ?? [])
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setLanguagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleLanguage(value: string) {
    setSelectedLanguages((prev) =>
      prev.includes(value) ? prev.filter((l) => l !== value) : [...prev, value],
    );
  }

  const languagesLabel =
    selectedLanguages.length === 0
      ? "Idiomas"
      : selectedLanguages.length === 1
        ? selectedLanguages[0]
        : `${selectedLanguages.length} idiomas selecionados`;

  return (
    <section className="w-full bg-primary py-8">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-4">
        <h3 className="text-xl md:text-3xl text-white font-semibold text-center mb-6">
          Quero registrar meu currículo
        </h3>
        {disabled && (
          <div className="w-full max-w-full md:max-w-[50vw] mb-4 flex items-center gap-3 bg-white/10 border border-white/30 rounded px-4 py-3 text-white text-sm">
            <svg
              className="w-5 h-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              />
            </svg>
            <div>
              Esta vaga está finalizada e não está aceitando novas candidaturas.
              Mas, você pode se inscrever no nosso{" "}
              <Link className="underline" href="/carreira-iest">
                banco de talentos
              </Link>
              .
            </div>
          </div>
        )}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setFeedback(null);
            const formData = new FormData(e.currentTarget);
            const cidade = formData.get("cidade") as string;
            const estado = formData.get("estado") as string;
            formData.append("location", `${cidade}, ${estado}`);
            const curriculum = formData.get("curriculum");
            if (
              curriculum instanceof File &&
              curriculum.size > 8 * 1024 * 1024
            ) {
              setFeedback({
                success: false,
                message: "Arquivo muito grande. Tamanho máximo: 8MB.",
              });
              return;
            }
            setIsPending(true);
            formData.append("jobName", jobName);
            try {
              const res = await fetch("/api/job-applications", {
                method: "POST",
                body: formData,
              });
              let data: { error?: string } = {};
              try {
                data = await res.json();
              } catch {}
              if (!res.ok) {
                setFeedback({
                  success: false,
                  message: data.error ?? "Erro ao enviar. Tente novamente.",
                });
              } else {
                setFeedback({
                  success: true,
                  message: "Candidatura enviada com sucesso!",
                });
                (e.target as HTMLFormElement).reset();
                setSelectedLanguages([]);
                setSelectedEstado("");
                setSelectedCidade("");
              }
            } catch {
              setFeedback({
                success: false,
                message: "Erro ao conectar com o servidor. Tente novamente.",
              });
            } finally {
              setIsPending(false);
            }
          }}
          className={`w-full max-w-full md:max-w-[50vw] md:w-[50vw] flex flex-wrap flex-col md:flex-row gap-6 ${disabled ? "opacity-50 pointer-events-none select-none" : ""}`}
        >
          <input
            className="p-4 bg-white w-full"
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            disabled={disabled}
            required
          />
          <div className="w-full flex flex-col md:flex-row gap-6">
            <input
              className="p-4 bg-white w-full md:w-1/2"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              disabled={disabled}
              required
            />
            <input
              className="p-4 bg-white w-full md:w-1/2"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Telefone"
              disabled={disabled}
              required
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-1/2">
              <select
                className="p-4 bg-white w-full appearance-none invalid:text-gray-400 pr-10 select-none"
                id="gender"
                name="gender"
                defaultValue=""
                disabled={disabled}
                required
              >
                <option value="" disabled>
                  Como você se identifica?
                </option>
                <option value="Masculino" className="text-black">
                  Masculino
                </option>
                <option value="Feminino" className="text-black">
                  Feminino
                </option>
                <option value="Prefiro não informar" className="text-black">
                  Prefiro não informar
                </option>
              </select>
              <ChevronDown />
            </div>
            <div className="relative w-full md:w-1/2" ref={dropdownRef}>
              {selectedLanguages.map((value) => (
                <input
                  key={value}
                  type="hidden"
                  name="languages"
                  value={value}
                  disabled={disabled}
                />
              ))}
              <button
                type="button"
                onClick={() => setLanguagesOpen((prev) => !prev)}
                className="w-full p-4 bg-white text-left flex justify-between items-center"
              >
                <span
                  className={
                    selectedLanguages.length === 0
                      ? "text-gray-400"
                      : "text-black"
                  }
                >
                  {languagesLabel}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform ${languagesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {languagesOpen && (
                <ul className="absolute z-10 w-full bg-white shadow-lg max-h-60 overflow-y-auto">
                  {LANGUAGES.map((lang) => {
                    const checked = selectedLanguages.includes(lang);
                    return (
                      <li key={lang}>
                        <label className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded-none accent-primary"
                            checked={checked}
                            onChange={() => toggleLanguage(lang)}
                          />
                          <span className="text-sm text-black">{lang}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full md:w-1/2 gap-1">
              <input
                className="p-4 bg-white text-gray-400"
                type="text"
                placeholder="Perfil no Linkedin (opcional)"
                id="linkedin"
                name="linkedin"
                disabled={disabled}
              />
            </div>
            <input
              className="p-4 bg-white text-gray-400 w-full md:w-1/2"
              type="text"
              id="location"
              name="location"
              placeholder="Localidade"
              disabled={disabled}
            />
            <div className="relative w-full md:w-1/2">
              <select
                className="p-4 bg-white w-full appearance-none text-black invalid:text-gray-400 pr-10"
                id="estado"
                name="estado"
                required
                value={selectedEstado}
                onChange={(e) => {
                  setSelectedEstado(e.target.value);
                  setSelectedCidade("");
                }}
              >
                <option value="" disabled>
                  Estado
                </option>
                {estados.map((est) => (
                  <option
                    key={est.sigla}
                    value={est.sigla}
                    className="text-black"
                  >
                    {est.nome}
                  </option>
                ))}
              </select>
              <ChevronDown />
            </div>
          </div>

          <div className="relative w-full">
            <select
              className="p-4 bg-white w-full appearance-none pr-10 disabled:opacity-50 disabled:cursor-not-allowed disabled:text-gray-400"
              id="cidade"
              name="cidade"
              required
              disabled={!selectedEstado}
              value={selectedCidade}
              onChange={(e) => setSelectedCidade(e.target.value)}
            >
              <option value="" disabled>
                {selectedEstado ? "Cidade" : "Selecione um estado primeiro"}
              </option>
              {cidadesFiltradas.map((cidade) => (
                <option key={cidade} value={cidade} className="text-black">
                  {cidade}
                </option>
              ))}
            </select>
            <ChevronDown />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center gap-6">
            <p className="w-full md:w-1/3 text-white text-md font-extralight">
              Enviar curriculo
            </p>
            <div>
              <input
                className="w-full md:2/3 file:bg-white file:rounded-full file:px-4 file:py-2 file:text-primary file:mr-2 text-white"
                type="file"
                accept=".jpg, .jpeg, .png, .pdf, .docx"
                name="curriculum"
                disabled={disabled}
                required
              />
            </div>
          </div>
          <div className="w-full flex gap-2 text-white">
            <input
              className="rounded-none"
              type="checkbox"
              id="terms"
              name="terms"
              disabled={disabled}
              required
            />
            <label htmlFor="terms">
              Concorda com os{" "}
              <Link
                className="underline decoration-1"
                href="politica-de-privacidade "
              >
                termos de uso
              </Link>
            </label>
          </div>
          {feedback && (
            <p
              className={`w-full text-sm ${feedback.success ? "text-green-300" : "text-red-300"}`}
            >
              {feedback.message}
            </p>
          )}
          <div className="w-full ">
            <Button
              type="submit"
              variant="inverted"
              className="w-full"
              disabled={isPending || disabled}
            >
              {isPending ? "Enviando..." : "Enviar"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
