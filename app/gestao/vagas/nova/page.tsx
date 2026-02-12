"use client";

import { useForm, Controller } from "react-hook-form";
import { JSONContent } from "@tiptap/react";
import RadioGroup from "@/components/RadioGroup";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import RichText from "@/components/Tiptap";

const WORK_MODEL_OPTIONS = [
  { label: "Híbrido", value: "hybrid" },
  { label: "Presencial", value: "in_office" },
  { label: "Remoto", value: "remote" },
];

const CONTRACT_TYPE_OPTIONS = [
  { label: "CLT", value: "clt" },
  { label: "PJ", value: "pj" },
  { label: "Temporário", value: "temporary" },
];

const WORK_SCHEDULE_OPTIONS = [
  { label: "Integral", value: "full_time" },
  { label: "Parcial", value: "part_time" },
];

const JOB_TYPE_OPTIONS = [
  { label: "Interna", value: "internal" },
  { label: "Externa", value: "external" },
];

interface JobFormValues {
  name: string;
  company: string;
  nivel: string;
  locality: string;
  id_job: string;
  about_company: string;
  about_opportunity: JSONContent;
  main_responsabilities: JSONContent;
  mandatory_requirements: JSONContent;
  differences: JSONContent;
  benefits: JSONContent;
  work_model: string;
  contract_type: string;
  work_schedule: string;
  job_type: string;
}

function hasText(node: JSONContent): boolean {
  if (node.text?.trim()) return true;
  return node.content?.some(hasText) ?? false;
}

function isRichTextEmpty(content: JSONContent | undefined): boolean {
  if (!content || !content.content) return true;
  return !content.content.some(hasText);
}

const REQUIRED_MSG = "Campo obrigatório";

function getErrorMsg(error: unknown): string | undefined {
  if (error && typeof error === "object" && "message" in error) {
    return (error as { message?: string }).message;
  }
  return undefined;
}

export default function Page() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<JobFormValues>();

  const onSubmit = (data: JobFormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append(
      "slug",
      data.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),
    );
    formData.append("company", data.company);
    formData.append("nivel", data.nivel);
    formData.append("locality", data.locality);
    formData.append("id_job", data.id_job);
    formData.append("work_model", data.work_model);
    formData.append("contract_type", data.contract_type);
    formData.append("work_schedule", data.work_schedule);
    formData.append("job_type", data.job_type);
    formData.append("about_company", data.about_company);
    formData.append(
      "about_opportunity",
      JSON.stringify(data.about_opportunity),
    );
    formData.append(
      "main_responsabilities",
      JSON.stringify(data.main_responsabilities),
    );
    formData.append(
      "mandatory_requirements",
      JSON.stringify(data.mandatory_requirements),
    );
    formData.append("differences", JSON.stringify(data.differences));
    formData.append("benefits", JSON.stringify(data.benefits));

    // TODO: enviar formData para a API
    console.log("formData", Object.fromEntries(formData.entries()));
  };

  return (
    <div className="w-full px-6 py-8">
      <h1 className="text-xl font-semibold mb-4">Adicionar Nova Vaga</h1>
      {/* todo: depois de finalizar o desenvolvimento inserir autoComplete="off" no formulário */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Nome da vaga"
          type="text"
          id="name"
          fullWidth
          {...register("name", { required: REQUIRED_MSG })}
          error={errors.name?.message}
        />
        <div className="w-full flex justify-between items-start gap-6 mt-4">
          <div className="w-4/5 bg-white border border-gray-300 rounded-sm p-4">
            <h2 className="text-lg font-semibold">Informações gerais</h2>
            <div className="mt-8">
              <div className="flex justify-between gap-4 mb-4">
                <TextField
                  label="Tipo de empresa"
                  placeholder="Multinacional no setor..."
                  type="text"
                  id="company"
                  fullWidth
                  {...register("company", { required: REQUIRED_MSG })}
                  error={errors.company?.message}
                />
                <TextField
                  label="Nivel de Experiência"
                  placeholder="Especialista, Analista, Sênior..."
                  type="text"
                  id="nivel"
                  fullWidth
                  {...register("nivel", { required: REQUIRED_MSG })}
                  error={errors.nivel?.message}
                />
              </div>
              <div className="flex justify-between gap-4">
                <TextField
                  label="Local"
                  placeholder="São Paulo, SP"
                  type="text"
                  id="locality"
                  fullWidth
                  {...register("locality", { required: REQUIRED_MSG })}
                  error={errors.locality?.message}
                />
                <TextField
                  label="ID da vaga"
                  placeholder="ABC-1234"
                  type="text"
                  id="id_job"
                  fullWidth
                  {...register("id_job", { required: REQUIRED_MSG })}
                  error={errors.id_job?.message}
                />
              </div>

              <div className="mt-10">
                <h2 className="text-md font-semibold mb-4">Sobre a empresa</h2>
                <textarea
                  id="about_company"
                  rows={5}
                  className="w-full border border-gray-300 rounded p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-y"
                  placeholder="Descreva a empresa..."
                  {...register("about_company", { required: REQUIRED_MSG })}
                />
                {errors.about_company?.message && (
                  <p className="mt-1 text-xs text-secondary">
                    {errors.about_company.message}
                  </p>
                )}
              </div>

              <div className="mt-10">
                <h2 className="text-md font-semibold mb-4">
                  Sobre a oportunidade
                </h2>
                <Controller
                  name="about_opportunity"
                  control={control}
                  rules={{
                    validate: (v) => !isRichTextEmpty(v) || REQUIRED_MSG,
                  }}
                  render={({ field }) => <RichText onChange={field.onChange} />}
                />
                {getErrorMsg(errors.about_opportunity) && (
                  <p className="mt-1 text-xs text-secondary">
                    {getErrorMsg(errors.about_opportunity)}
                  </p>
                )}
              </div>

              <div className="mt-10">
                <h2 className="text-md font-semibold mb-4">
                  Principais responsabilidades
                </h2>
                <Controller
                  name="main_responsabilities"
                  control={control}
                  rules={{
                    validate: (v) => !isRichTextEmpty(v) || REQUIRED_MSG,
                  }}
                  render={({ field }) => <RichText onChange={field.onChange} />}
                />
                {getErrorMsg(errors.main_responsabilities) && (
                  <p className="mt-1 text-xs text-secondary">
                    {getErrorMsg(errors.main_responsabilities)}
                  </p>
                )}
              </div>

              <div className="mt-10">
                <h2 className="text-md font-semibold mb-4">
                  Requisitos obrigatórios
                </h2>
                <Controller
                  name="mandatory_requirements"
                  control={control}
                  rules={{
                    validate: (v) => !isRichTextEmpty(v) || REQUIRED_MSG,
                  }}
                  render={({ field }) => <RichText onChange={field.onChange} />}
                />
                {getErrorMsg(errors.mandatory_requirements) && (
                  <p className="mt-1 text-xs text-secondary">
                    {getErrorMsg(errors.mandatory_requirements)}
                  </p>
                )}
              </div>

              <div className="mt-10">
                <h2 className="text-md font-semibold mb-4">Diferenciais</h2>
                <Controller
                  name="differences"
                  control={control}
                  rules={{
                    validate: (v) => !isRichTextEmpty(v) || REQUIRED_MSG,
                  }}
                  render={({ field }) => <RichText onChange={field.onChange} />}
                />
                {getErrorMsg(errors.differences) && (
                  <p className="mt-1 text-xs text-secondary">
                    {getErrorMsg(errors.differences)}
                  </p>
                )}
              </div>

              <div className="mt-10">
                <h2 className="text-md font-semibold mb-4">Benefícios</h2>
                <Controller
                  name="benefits"
                  control={control}
                  rules={{
                    validate: (v) => !isRichTextEmpty(v) || REQUIRED_MSG,
                  }}
                  render={({ field }) => <RichText onChange={field.onChange} />}
                />
                {getErrorMsg(errors.benefits) && (
                  <p className="mt-1 text-xs text-secondary">
                    {getErrorMsg(errors.benefits)}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="w-1/5 bg-white border border-gray-300 rounded-sm p-4">
            <h3 className="font-semibold">Informações selecionaveis</h3>
            <div className="flex flex-col gap-8 mt-4">
              <Controller
                name="work_model"
                control={control}
                rules={{ required: REQUIRED_MSG }}
                render={({ field }) => (
                  <RadioGroup
                    name="work_model"
                    legend="Modelo de trabalho"
                    direction="vertical"
                    options={WORK_MODEL_OPTIONS}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.work_model?.message}
                  />
                )}
              />
              <Controller
                name="contract_type"
                control={control}
                rules={{ required: REQUIRED_MSG }}
                render={({ field }) => (
                  <RadioGroup
                    name="contract_type"
                    legend="Tipo de contrato"
                    direction="vertical"
                    options={CONTRACT_TYPE_OPTIONS}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.contract_type?.message}
                  />
                )}
              />
              <Controller
                name="work_schedule"
                control={control}
                rules={{ required: REQUIRED_MSG }}
                render={({ field }) => (
                  <RadioGroup
                    name="work_schedule"
                    legend="Jornada"
                    direction="vertical"
                    options={WORK_SCHEDULE_OPTIONS}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.work_schedule?.message}
                  />
                )}
              />
              <Controller
                name="job_type"
                control={control}
                rules={{ required: REQUIRED_MSG }}
                render={({ field }) => (
                  <RadioGroup
                    name="job_type"
                    legend="Tipo da vaga"
                    direction="vertical"
                    options={JOB_TYPE_OPTIONS}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.job_type?.message}
                  />
                )}
              />
            </div>
            <Button
              className="mt-6"
              size="small"
              type="submit"
              disabled={isSubmitting}
            >
              Publicar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
