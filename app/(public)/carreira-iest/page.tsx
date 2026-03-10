import React from "react";
import BgCarreira from "@/assets/banner-carreira.png";
import Image from "next/image";
import { Metadata } from "next";
import JobForm from "@/components/JobForm";
import { t } from "@/lib/i18n";
import { cidades } from "@/assets/cidades";
import { estados } from "@/assets/estados";

export const metadata: Metadata = {
  title: "Carreira Iest",
  description:
    "No Grupo IEST, acreditamos que o sucesso de uma empresa é construído por pessoas talentosas e apaixonadas pelo que fazem. Fundado em São Paulo em 2012.",
};

export default function page() {
  return (
    <>
      <section className="hidden md:block w-full">
        <Image src={BgCarreira} alt="" className="w-full h-auto" />
      </section>
      <main className="py-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 px-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-primary font-semibold">
              {t("career_h1")}
            </h1>
            <p className="text-md font-extralight">{t("career_p1")}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-primary font-semibold">
              {t("career_h2_1")}
            </h2>
            <p className="text-md font-extralight">{t("career_p2")}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-primary font-semibold">
              {t("career_h2_2")}
            </h2>

            <div className="text-md font-extralight">
              <ul className="list-disc ml-6 md:ml-12">
                <li className="text-md">
                  <strong className="font-semibold">
                    {t("career_challenge_title")}
                  </strong>{" "}
                  {t("career_challenge_text")}
                </li>
                <li className="text-md">
                  <strong className="font-semibold">
                    {t("career_collab_title")}
                  </strong>{" "}
                  {t("career_collab_text")}
                </li>
                <li className="text-md">
                  <strong className="font-semibold">
                    {t("career_dev_title")}
                  </strong>{" "}
                  {t("career_dev_text")}
                </li>
                <li className="text-md">
                  <strong className="font-semibold">
                    {t("career_impact_title")}
                  </strong>{" "}
                  {t("career_impact_text")}
                </li>
                <li className="text-md">
                  <strong className="font-semibold">
                    {t("career_innovation_title")}
                  </strong>{" "}
                  {t("career_innovation_text")}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-primary font-semibold">
              {t("career_h2_3")}
            </h2>
            <p className="text-md font-extralight">{t("career_p3")}</p>
            <p className="text-md font-semibold">{t("career_p4")}</p>
            <p className="text-md font-extralight">
              <strong className="font-semibold">{t("career_p5_1")}</strong>{" "}
              {t("career_p5_2")}
            </p>
          </div>
        </div>
      </main>
      <JobForm
        jobName="Banco de Talentos"
        cidades={cidades}
        estados={estados}
      />
    </>
  );
}
