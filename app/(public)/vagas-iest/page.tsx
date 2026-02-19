import React from "react";
import BgVagas from "@/assets/vagas/banner-vagas.png";
import IconBriefcase from "@/assets/vagas/briefcase.svg";
import IconUserLocation from "@/assets/vagas/user-location.svg";
import Image from "next/image";
import Link from "next/link";
import { listJobs } from "@/lib/public/actions";
import { formatRelativeDate } from "@/lib/utils";

export default async function page() {
  const { jobs } = await listJobs();

  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgVagas.src})` }}
      >
        <div className="min-h-87.5 w-full"></div>
      </section>
      <main className="w-full py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 justify-between gap-6">
            {jobs.map((job) => (
              <Link
                key={job.id}
                href={`/vagas-iest/${job.slug}`}
                className="rounded-xl shadow-card-job p-4 border border-gray-200 flex flex-col justify-between w-full max-w-full min-h-60 gap-2 transition-transform duration-300 hover:scale-105 hover:shadow-card-job-hover"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xs">{job.locality}</p>
                  <p className="text-lg font-semibold text-primary">
                    {job.name}
                  </p>
                  <div className="flex gap-2">
                    <div className="flex gap-2">
                      <Image
                        className="w-5 h-5"
                        src={IconBriefcase}
                        alt="Icone de maleta"
                      />
                      <p className="text-sm">
                        {job.contract_type === "clt"
                          ? "CLT"
                          : job.contract_type === "pj"
                            ? "PJ"
                            : "Temporário"}
                      </p>
                    </div>
                    <div className="w-0.5 h-full bg-foreground"></div>
                    <div className="flex gap-1">
                      <Image
                        className="w-5 h-5"
                        src={IconUserLocation}
                        alt="Icone de localização"
                      />
                      <p className="text-sm">
                        {job.work_model === "hybrid"
                          ? "Híbrido"
                          : job.work_model === "remote"
                            ? "Remoto"
                            : "Presencial"}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm line-clamp-3">{job.about_company}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm">{formatRelativeDate(job.created_at)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <section className="max-w-7xl mx-auto py-6">
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
