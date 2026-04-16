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
import { getJobBySlug } from "@/lib/public/actions";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { cidades } from "@/assets/cidades";
import { estados } from "@/assets/estados";

import TiptapContentClient from "@/components/TiptapContentClient";
import {
  CONTRACT_TYPE_LABELS,
  WORK_MODEL_LABELS,
  WORK_SCHEDULE_LABELS,
} from "@/lib/admin/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) return {};

  return {
    title: `${job.name}`,
    description: `Está disponivel uma vaga para ${job.name}. Modelo: ${WORK_MODEL_LABELS[job.work_model]}. Candidate-se agora!`,
    openGraph: {
      title: `${job.name} - IEST Group`,
      url: `https://iestgroup.com/vagas-iest/${slug}`,
      siteName: "IEST Group",
      type: "website",
      images: [
        {
          url: "https://iestgroup.com.br/wp-content/uploads/2021/09/portrait-successful-handsome-executive-businessman-smart-casual-wear-looking-camera-smiling-arms-crossed-modern-office-workplace-young-asia-guy-standing-contemporary-meeting-room-1024x576.jpg",
          width: 1024,
          height: 576,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.name} - IEST Group`,
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let job;
  try {
    const result = await getJobBySlug(slug);

    if (!result) {
      return redirect("/vagas-iest");
    }

    job = result;
  } catch {
    return redirect("/vagas-iest");
  }
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Bg.src})` }}
      >
        <div className="min-h-65 max-w-7xl mx-auto flex items-center"></div>
      </section>
      <main className="py-8 px-4">
        <div className="max-w-262.5 mx-auto">
          <div className="flex flex-col gap-4 pb-8">
            <h1 className="text-3xl font-bold uppercase text-center">
              {job.name}
            </h1>
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
                value={job.contract_type
                  .map((job) => CONTRACT_TYPE_LABELS[job])
                  .join(" e ")}
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
            <TiptapContentClient
              content={job.about_opportunity}
              className="prose prose-sm max-w-none font-extralight"
            />
          </div>
          <div className="py-8 border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">
              Principais responsabilidades
            </h2>
            <TiptapContentClient
              content={job.main_responsabilities}
              className="prose prose-sm max-w-none font-extralight"
            />
          </div>
          <div className="py-8 border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">
              Requisitos obrigatórios
            </h2>
            <TiptapContentClient
              content={job.mandatory_requirements}
              className="prose prose-sm max-w-none font-extralight"
            />
          </div>
          <div className="py-8 border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">Diferenciais</h2>
            <TiptapContentClient
              content={job.differences}
              className="prose prose-sm max-w-none font-extralight"
            />
          </div>
          <div className="py-8 border-b border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">Benefícios</h2>
            <TiptapContentClient
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
        <JobForm
          jobName={job.name}
          cidades={cidades}
          estados={estados}
          disabled={job.status === "closed"}
        />
      </section>
    </>
  );
}
