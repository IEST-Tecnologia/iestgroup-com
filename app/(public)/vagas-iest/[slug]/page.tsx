import Bg from "@/assets/vagas/banner-vaga-individual.jpg";
import IconLocation from "@/assets/vagas/location.svg";
import IconBriefcase from "@/assets/vagas/briefcase.svg";
import IconCompany from "@/assets/vagas/company.svg";
import IconUserLocation from "@/assets/vagas/user-location.svg";
import IconTimer from "@/assets/vagas/timer.svg";
import IconTarget from "@/assets/vagas/target.svg";
import IconRank from "@/assets/vagas/rank.svg";
import IconMoney from "@/assets/vagas/money.svg";
import InfoItem from "@/components/InfoItem";
import JobForm from "@/components/JobForm";
import TiptapContent from "@/components/TiptapContent";
import {
  MOCK_JOB,
  WORK_MODEL_LABELS,
  CONTRACT_TYPE_LABELS,
  WORK_SCHEDULE_LABELS,
} from "@/lib/mocks/jobs";
import { getJobBySlug } from "@/lib/admin/actions";
import { redirect } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) redirect("/vagas-iest");

  // TODO: Substituir pelo fetch real do backend usando o slug (name)
  // const job = MOCK_JOB;

  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Bg.src})` }}
      >
        <div className="min-h-65 max-w-7xl mx-auto flex items-center">
          <h1 className="text-3xl font-bold text-white uppercase">
            {job.name}
          </h1>
        </div>
      </section>
      <main className="py-8">
        <div className="max-w-262.5 mx-auto">
          <div className="flex flex-col gap-4 pb-8">
            <h2 className="text-2xl font-semibold">Informações gerais</h2>
            <div className="ml-4 flex flex-col gap-2">
              <InfoItem
                icon={IconCompany}
                iconAlt="Icone de empresa"
                label="Empresa"
                value={job.company}
              />
              <InfoItem
                icon={IconLocation}
                iconAlt="Icone de localização"
                label="Localidade"
                value={job.locality}
              />
              <InfoItem
                icon={IconUserLocation}
                iconAlt="Icone de modelo de trabalho"
                label="Modelo de trabalho"
                value={WORK_MODEL_LABELS[job.work_model]}
              />
              <InfoItem
                icon={IconBriefcase}
                iconAlt="Icone de maleta"
                label="Tipo de contrato"
                value={CONTRACT_TYPE_LABELS[job.contract_type]}
              />
              <InfoItem
                icon={IconTimer}
                iconAlt="Icone de relógio"
                label="Jornada"
                value={WORK_SCHEDULE_LABELS[job.work_schedule]}
              />
              <InfoItem
                icon={IconTarget}
                iconAlt="Icone de alvo"
                label="Área de atuação"
                value={job.area}
              />
              {job.nivel && ( // teste
                <InfoItem
                  icon={IconRank}
                  iconAlt="Icone de nível"
                  label="Nível"
                  value={job.nivel}
                />
              )}
              <InfoItem
                icon={IconMoney}
                iconAlt="Icone de dinheiro"
                label="Salário"
                value="A combinar"
              />
            </div>
          </div>
          <div className="py-8 border-t border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">Sobre a empresa</h2>
            <p>{job.about_company}</p>
          </div>
          <div className="py-8 border-t border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">
              Sobre a oportunidade
            </h2>
            <TiptapContent
              content={job.about_opportunity}
              className="prose prose-sm max-w-none font-extralight"
            />
          </div>
          <div className="py-8 border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">
              Principais responsabilidades
            </h2>
            <TiptapContent
              content={job.main_responsabilities}
              className="prose prose-sm max-w-none font-extralight"
            />
          </div>
          <div className="py-8 border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">
              Requisitos obrigatórios
            </h2>
            <TiptapContent
              content={job.mandatory_requirements}
              className="prose prose-sm max-w-none font-extralight"
            />
          </div>
          <div className="py-8 border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">Diferenciais</h2>
            <TiptapContent
              content={job.differences}
              className="prose prose-sm max-w-none font-extralight"
            />
          </div>
          <div className="py-8 border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">Benefícios</h2>
            <TiptapContent
              content={job.benefits}
              className="prose prose-sm max-w-none font-extralight"
            />
          </div>
          <div className="py-8 border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">
              Etapas do processo seletivo
            </h2>
            <ol className="list-decimal ml-12 gap-1 flex flex-col font-extralight">
              <li>Triagem de currículos</li>
              <li>Entrevista com o IEST Group</li>
              <li>Entrevista com a empresa</li>
              <li>Proposta e admissão</li>
            </ol>
          </div>
        </div>
      </main>
      <section>
        <JobForm />
      </section>
    </>
  );
}
