import Image from "next/image";
import React from "react";
import BannerAboutUs from "@/assets/sobre-nos/banner-sobre-nos.jpg";
import BannerQuemSomos from "@/assets/sobre-nos/banner-quem-somos.jpg";
import IconeMissao from "@/assets/sobre-nos/icone-missao.png";
import IconeVisao from "@/assets/sobre-nos/icone-visao.png";
import IconeValores from "@/assets/sobre-nos/icone-valores.png";
import LogoICarros from "@/assets/sobre-nos/logo-icarros.jpg";
import LogoCanaltech from "@/assets/sobre-nos/logo-canaltech.jpg";
import LogoGs from "@/assets/sobre-nos/logo-gs.jpg";
import LogoXinhua from "@/assets/sobre-nos/logo-xinhua.jpg";
import LogoEcbr from "@/assets/sobre-nos/logo-ecbr.jpg";
import PageHeroSection from "@/components/PageHeroSection";
import { Metadata } from "next";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Além dos diversos serviços informados acima, a empresa possui um ótimo relacionamento na comunidade chinesa, sendo uma das empresas mais reconhecidas da",
};

export default function page() {
  return (
    <>
      <PageHeroSection
        backgroundBannerImage={BannerQuemSomos}
        secondBannerImage={BannerAboutUs}
        secondBannerAlt={t("about_banner_alt")}
        service={false}
        shadowbg={false}
      >
        <h1 className="w-full text-primary text-3xl font-bold text-center md:text-left uppercase mb-5">
          {t("about_h1")}
        </h1>
        <h2 className="text-black text-xl md:text-3xl text-center md:text-left font-bold mb-10">
          {t("about_h2")}
        </h2>
        <div className="text-lg font-base md:columns-2 md:gap-12.5 [&>p]:mb-6">
          <p>{t("about_p1")}</p>
          <p>{t("about_p2")}</p>
          <p>{t("about_p3")}</p>
          <p>{t("about_p4")}</p>
          <p>{t("about_p5")}</p>
          <p>{t("about_p6")}</p>
          <p>{t("about_p7")}</p>
        </div>
      </PageHeroSection>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <Image
              className="w-32 md:w-auto"
              src={IconeMissao}
              alt={t("about_mission_alt")}
            />
          </div>
          <div className="w-full md:w-3/5 flex flex-col items-start gap-5 text-center md:text-left px-3 md:px-0">
            <h2 className="w-full text-primary text-3xl font-bold uppercase">
              {t("about_mission_title")}
            </h2>
            <p className="text-lg font-base">{t("about_mission_p1")}</p>
            <p className="text-lg font-base">{t("about_mission_p2")}</p>
            <p className="text-lg font-base">{t("about_mission_p3")}</p>
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <Image
              className="w-32 md:w-auto"
              src={IconeVisao}
              alt={t("about_vision_alt")}
            />
          </div>
          <div className="w-full md:w-3/5 flex flex-col items-start gap-5 text-center md:text-left px-3 md:px-0">
            <h2 className="w-full text-primary text-3xl font-bold uppercase">
              {t("about_vision_title")}
            </h2>
            <p className="text-lg text-white font-base">
              {t("about_vision_text")}
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <Image
              className="w-32 md:w-auto"
              src={IconeValores}
              alt={t("about_values_alt")}
            />
          </div>
          <div className="w-full md:w-3/5 flex flex-col items-start gap-5 text-center md:text-left px-3 md:px-0">
            <h2 className="w-full text-primary text-3xl font-bold uppercase">
              {t("about_values_title")}
            </h2>
            <p className="w-full text-lg font-base">
              {t("about_values_text")}
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto flex flex-col px-3 md:px-0">
          <h2 className="text-primary text-3xl font-bold uppercase text-center mb-10 ">
            {t("about_services_title")}
          </h2>
          <p className="text-lg font-base text-center md:text-left">
            {t("about_services_text")}
          </p>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto flex flex-col">
          <h2 className="text-primary text-3xl font-bold uppercase text-center mb-10">
            {t("about_clients_title")}
          </h2>
          <div className="w-full h-135"></div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="max-w-275 mx-auto flex flex-col">
          <h2 className="text-primary text-3xl font-bold uppercase text-center mb-10">
            {t("about_partners_title")}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="w-24 md:w-40">
              <Image
                className="w-full h-auto"
                src={LogoICarros}
                alt={t("about_icarros_alt")}
                sizes="(min-width: 768px) 160px, 96px"
              />
            </div>
            <div className="w-24 md:w-40">
              <Image
                className="w-full h-auto"
                src={LogoCanaltech}
                alt={t("about_canaltech_alt")}
                sizes="(min-width: 768px) 160px, 96px"
              />
            </div>
            <div className="w-24 md:w-40">
              <Image
                className="w-full h-auto"
                src={LogoGs}
                alt={t("about_gs_alt")}
                sizes="(min-width: 768px) 160px, 96px"
              />
            </div>
            <div className="w-24 md:w-40">
              <Image
                className="w-full h-auto"
                src={LogoXinhua}
                alt={t("about_xinhua_alt")}
                sizes="(min-width: 768px) 160px, 96px"
              />
            </div>
            <div className="w-24 md:w-40">
              <Image
                className="w-full h-auto"
                src={LogoEcbr}
                alt={t("about_ecbr_alt")}
                sizes="(min-width: 768px) 160px, 96px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
