import { t } from "@/lib/i18n";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Código de ética",
};

function SectionComponent({
  title,
  children,
  last,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-6 font-light pb-6 leading-6 px-4 md:px-0 ${last ? "mb-0" : "border-b-2 border-[#DADADA] mb-6"}`}
    >
      <h2 className="font-bold text-md">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default function page() {
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="mb-6 px-4 md:px-0">
          <h1 className="text-3xl text-primary font-semibold">
            {t("ethics_h1")}
          </h1>
        </div>
        <SectionComponent title={t("ethics_s1_title")}>
          <>
            <p className="text-md">{t("ethics_s1_p1")}</p>
            <p className="text-md">{t("ethics_s1_p2")}</p>
          </>
        </SectionComponent>
        <SectionComponent title={t("ethics_s2_title")}>
          <ul className="list-disc ml-12">
            <li className="text-md">{t("ethics_s2_v1")}</li>
            <li className="text-md">{t("ethics_s2_v2")}</li>
            <li className="text-md">{t("ethics_s2_v3")}</li>
            <li className="text-md">{t("ethics_s2_v4")}</li>
            <li className="text-md">{t("ethics_s2_v5")}</li>
          </ul>
        </SectionComponent>
        <SectionComponent title={t("ethics_s3_title")}>
          <ul className="list-disc ml-12">
            <li className="text-md">{t("ethics_s3_v1")}</li>
            <li className="text-md">{t("ethics_s3_v2")}</li>
            <li className="text-md">{t("ethics_s3_v3")}</li>
            <li className="text-md">{t("ethics_s3_v4")}</li>
          </ul>
        </SectionComponent>
        <SectionComponent title={t("ethics_s4_title")}>
          <ul className="list-disc ml-12">
            <li className="text-md">{t("ethics_s4_v1")}</li>
            <li className="text-md">{t("ethics_s4_v2")}</li>
            <li className="text-md">{t("ethics_s4_v3")}</li>
            <li className="text-md">{t("ethics_s4_v4")}</li>
          </ul>
        </SectionComponent>
        <SectionComponent title={t("ethics_s5_title")}>
          <ul className="list-disc ml-12">
            <li className="text-md">{t("ethics_s5_v1")}</li>
            <li className="text-md">{t("ethics_s5_v2")}</li>
            <li className="text-md">{t("ethics_s5_v3")}</li>
            <li className="text-md">{t("ethics_s5_v4")}</li>
          </ul>
        </SectionComponent>
        <SectionComponent title={t("ethics_s6_title")}>
          <ul className="list-disc ml-12">
            <li className="text-md">{t("ethics_s6_v1")}</li>
            <li className="text-md">{t("ethics_s6_v2")}</li>
            <li className="text-md">{t("ethics_s6_v3")}</li>
            <li className="text-md">{t("ethics_s6_v4")}</li>
          </ul>
        </SectionComponent>
        <SectionComponent title={t("ethics_s7_title")}>
          <ul className="list-disc ml-12">
            <li className="text-md">{t("ethics_s7_v1")}</li>
            <li className="text-md">{t("ethics_s7_v2")}</li>
            <li className="text-md">{t("ethics_s7_v3")}</li>
          </ul>
        </SectionComponent>
        <SectionComponent title={t("ethics_s8_title")}>
          <>
            <p className="text-md">{t("ethics_s8_p1")}</p>
            <p className="text-md">{t("ethics_s8_p2")}</p>
          </>
        </SectionComponent>
        <SectionComponent title={t("ethics_s9_title")}>
          <>
            <p className="text-md">{t("ethics_s9_p1")}</p>
            <p className="text-md">{t("ethics_s9_p2")}</p>
            <p className="text-md">{t("ethics_s9_p3")}</p>
          </>
        </SectionComponent>
      </div>
    </main>
  );
}
